import { assign, setup } from "xstate";

/**
 * Job stage (PF-01, UX-13, EC-24, RM-05).
 * The spine every other flow reports into. State names match JobStage in
 * @krew/schemas so lists and badges can read them directly.
 *
 * At risk: if the advance isn't paid 2 days before the shoot, the job shows
 * "Remind client", "Mark as paid", "Go ahead anyway" and "Move date".
 */
export type JobEvent =
  | { type: "BRIEF_SENT" }
  | { type: "QUOTE_SENT" }
  | { type: "QUOTE_ACCEPTED" }
  | { type: "QUOTE_DECLINED" }
  | { type: "ADVANCE_PAID" }
  | { type: "ADVANCE_OVERDUE" }
  | { type: "REMIND_CLIENT" }
  | { type: "MARK_PAID" }
  | { type: "GO_AHEAD" }
  | { type: "MOVE_DATE" }
  | { type: "WORK_STARTED" }
  | { type: "DRAFT_SHARED" }
  | { type: "CHANGES_REQUESTED" }
  | { type: "APPROVED" }
  | { type: "INVOICE_SENT" }
  | { type: "SETTLED" }
  | { type: "CLOSE" }
  | { type: "MARK_LOST" };

type JobContext = {
  advancePaid: boolean;
  wentAheadUnpaid: boolean;
  clientReminders: number;
  reviewRounds: number;
};

export const jobMachine = setup({
  types: {
    context: {} as JobContext,
    events: {} as JobEvent,
  },
  guards: {
    advancePaid: ({ context }) => context.advancePaid,
    advanceUnpaid: ({ context }) => !context.advancePaid,
  },
  actions: {
    markAdvancePaid: assign({ advancePaid: true }),
  },
}).createMachine({
  id: "job",
  context: { advancePaid: false, wentAheadUnpaid: false, clientReminders: 0, reviewRounds: 0 },
  initial: "enquiry",
  states: {
    enquiry: {
      on: { BRIEF_SENT: "briefing", MARK_LOST: "lost" },
    },
    briefing: {
      on: { QUOTE_SENT: "quoted", MARK_LOST: "lost" },
    },
    quoted: {
      on: { QUOTE_ACCEPTED: "booked", QUOTE_DECLINED: "lost", MARK_LOST: "lost" },
    },
    booked: {
      on: {
        ADVANCE_PAID: { actions: "markAdvancePaid" },
        ADVANCE_OVERDUE: { guard: "advanceUnpaid", target: "atRisk" },
        WORK_STARTED: { guard: "advancePaid", target: "inProgress" },
      },
    },
    atRisk: {
      on: {
        REMIND_CLIENT: {
          actions: assign({ clientReminders: ({ context }) => context.clientReminders + 1 }),
        },
        MARK_PAID: { target: "inProgress", actions: "markAdvancePaid" },
        ADVANCE_PAID: { target: "inProgress", actions: "markAdvancePaid" },
        GO_AHEAD: { target: "inProgress", actions: assign({ wentAheadUnpaid: true }) },
        MOVE_DATE: "booked",
      },
    },
    inProgress: {
      on: {
        DRAFT_SHARED: {
          target: "inReview",
          actions: assign({ reviewRounds: ({ context }) => context.reviewRounds + 1 }),
        },
      },
    },
    inReview: {
      on: { CHANGES_REQUESTED: "inProgress", APPROVED: "approved" },
    },
    approved: {
      on: { INVOICE_SENT: "invoiced" },
    },
    invoiced: {
      on: { SETTLED: "paid" },
    },
    paid: {
      on: { CLOSE: "closed" },
    },
    closed: { type: "final" },
    lost: { type: "final" },
  },
});
