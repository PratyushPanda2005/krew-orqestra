import type { Paise } from "@krew/schemas";
import { assign, setup } from "xstate";

/**
 * Invoice and payment (PF-24, PF-26, EC-25, EC-26, EC-27, EC-28, RM-16).
 * - GST or non-GST format is fixed at creation from the tax profile.
 * - Once issued, the invoice number and amounts are locked; corrections go
 *   through a credit note (Rule 53).
 * - TDS is recorded only as the client actually deducted it, and counts towards
 *   settling the invoice.
 * - Payments by link update automatically; cash or bank transfer is marked by hand.
 */
export type InvoiceInput = { gst: boolean; total: Paise; advanceAdjusted: Paise };

export type InvoicePayment = {
  amount: Paise;
  tds: Paise;
  method: "link" | "upi" | "cash" | "bank";
};

export type InvoiceEvent =
  | { type: "EDIT"; total: Paise }
  | { type: "ISSUE"; number: string }
  | { type: "SEND" }
  | ({ type: "RECORD_PAYMENT" } & InvoicePayment)
  | { type: "OVERDUE" }
  | { type: "CREDIT_NOTE"; amount: Paise };

type InvoiceContext = InvoiceInput & {
  number?: string;
  payments: InvoicePayment[];
  creditNotes: Paise[];
  overdue: boolean;
};

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

/** What the client still owes after advance, credit notes, payments and TDS. */
export function outstanding(c: InvoiceContext): Paise {
  const due = c.total - c.advanceAdjusted - sum(c.creditNotes);
  const settled = sum(c.payments.map((p) => p.amount + p.tds));
  return Math.max(0, due - settled);
}

const INVOICE_NUMBER = /^[A-Z0-9/-]{1,16}$/;

export const invoiceMachine = setup({
  types: {
    input: {} as InvoiceInput,
    context: {} as InvoiceContext,
    events: {} as InvoiceEvent,
  },
  guards: {
    isSettled: ({ context }) => outstanding(context) === 0,
    validCreditNote: ({ context, event }) =>
      event.type === "CREDIT_NOTE" &&
      context.number !== undefined &&
      event.amount > 0 &&
      event.amount <= context.total - context.advanceAdjusted - sum(context.creditNotes),
  },
  actions: {
    addCreditNote: assign({
      creditNotes: ({ context, event }) =>
        event.type === "CREDIT_NOTE" ? [...context.creditNotes, event.amount] : context.creditNotes,
    }),
    recordPayment: assign({
      payments: ({ context, event }) =>
        event.type === "RECORD_PAYMENT"
          ? [...context.payments, { amount: event.amount, tds: event.tds, method: event.method }]
          : context.payments,
      overdue: false,
    }),
    markOverdue: assign({ overdue: true }),
  },
}).createMachine({
  id: "invoice",
  context: ({ input }) => ({ ...input, payments: [], creditNotes: [], overdue: false }),
  initial: "draft",
  on: {
    CREDIT_NOTE: {
      guard: "validCreditNote",
      actions: "addCreditNote",
    },
  },
  states: {
    draft: {
      on: {
        EDIT: {
          guard: ({ event }) => event.total > 0,
          actions: assign({ total: ({ event }) => event.total }),
        },
        ISSUE: {
          guard: ({ context, event }) =>
            INVOICE_NUMBER.test(event.number) && context.total > context.advanceAdjusted,
          target: "issued",
          actions: assign({ number: ({ event }) => event.number }),
        },
      },
    },
    issued: {
      on: { SEND: "sent" },
    },
    sent: {
      on: {
        RECORD_PAYMENT: {
          guard: ({ event }) => event.amount + event.tds > 0,
          target: "settling",
          actions: "recordPayment",
        },
        OVERDUE: { actions: "markOverdue" },
      },
    },
    partiallyPaid: {
      on: {
        // A credit note can clear the remaining balance.
        CREDIT_NOTE: { guard: "validCreditNote", target: "settling", actions: "addCreditNote" },
        RECORD_PAYMENT: {
          guard: ({ event }) => event.amount + event.tds > 0,
          target: "settling",
          actions: "recordPayment",
        },
        OVERDUE: { actions: "markOverdue" },
      },
    },
    settling: {
      always: [{ guard: "isSettled", target: "paid" }, { target: "partiallyPaid" }],
    },
    paid: {
      tags: ["locked"],
      description: "Locked. Changes only through a credit note.",
    },
  },
});
