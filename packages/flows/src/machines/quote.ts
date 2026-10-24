import type { Paise } from "@krew/schemas";
import { assign, setup } from "xstate";

/**
 * Quote, acceptance and advance (PF-09, Rule 50, RM-13, RM-15).
 * - The client accepts the exact version they saw: typed name plus a ticked box.
 * - A revised quote invalidates acceptance of the old version.
 * - GST-registered creators issue a receipt voucher when the advance arrives.
 * - Must-hold rule: Orry never holds client money. Payment goes to the creator's
 *   own Razorpay link or UPI; this machine only records that it happened.
 */
export type QuoteInput = { gst: boolean; advance: Paise };

export type Acceptance = { version: number; typedName: string; acceptedAt: string };

export type QuoteEvent =
  | { type: "SEND" }
  | { type: "VIEW" }
  | { type: "REVISE" }
  | { type: "ACCEPT"; version: number; typedName: string; ticked: boolean; at: string }
  | { type: "DECLINE" }
  | { type: "EXPIRE" }
  | { type: "ADVANCE_PAID"; amount: Paise; method: "link" | "upi" | "cash" | "bank" };

type QuoteContext = QuoteInput & {
  version: number;
  viewed: boolean;
  acceptance?: Acceptance;
  advancePaid: Paise;
  receiptVoucherIssued: boolean;
};

export const quoteMachine = setup({
  types: {
    input: {} as QuoteInput,
    context: {} as QuoteContext,
    events: {} as QuoteEvent,
  },
  guards: {
    noAdvanceDue: ({ context }) => context.advance === 0,
  },
}).createMachine({
  id: "quote",
  context: ({ input }) => ({
    ...input,
    version: 1,
    viewed: false,
    advancePaid: 0,
    receiptVoucherIssued: false,
  }),
  initial: "draft",
  states: {
    draft: {
      on: { SEND: "sent" },
    },
    sent: {
      on: {
        VIEW: { actions: assign({ viewed: true }) },
        REVISE: {
          target: "draft",
          actions: assign({ version: ({ context }) => context.version + 1, viewed: false }),
        },
        ACCEPT: {
          guard: ({ context, event }) =>
            event.version === context.version && event.ticked && event.typedName.trim().length >= 2,
          target: "accepted",
          actions: assign({
            acceptance: ({ event }) => ({
              version: event.version,
              typedName: event.typedName.trim(),
              acceptedAt: event.at,
            }),
          }),
        },
        DECLINE: "declined",
        EXPIRE: "expired",
      },
    },
    accepted: {
      initial: "awaitingAdvance",
      states: {
        awaitingAdvance: {
          always: { guard: "noAdvanceDue", target: "advanceReceived" },
          on: {
            ADVANCE_PAID: {
              target: "advanceReceived",
              actions: assign({
                advancePaid: ({ event }) => event.amount,
                receiptVoucherIssued: ({ context }) => context.gst,
              }),
            },
          },
        },
        advanceReceived: { type: "final" },
      },
      onDone: "booked",
    },
    booked: { type: "final" },
    declined: { type: "final" },
    expired: { type: "final" },
  },
});
