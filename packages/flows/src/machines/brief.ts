import { assign, setup } from "xstate";

/**
 * Brief (PF-08, UX-17, RM-12).
 * The client fills it on a phone, one question per screen, with no login.
 * After two reminders with no reply, the creator may mark the job lost.
 */
export const MAX_BRIEF_REMINDERS = 2;

export type BriefInput = { totalQuestions: number };

export type BriefEvent =
  | { type: "SEND" }
  | { type: "OPEN" }
  | { type: "ANSWER" }
  | { type: "BACK" }
  | { type: "SUBMIT" }
  | { type: "REMIND" }
  | { type: "EDIT_SCOPE" }
  | { type: "CONFIRM" }
  | { type: "MARK_LOST" };

type BriefContext = BriefInput & { answered: number; reminders: number; scopeEdits: number };

export const briefMachine = setup({
  types: {
    input: {} as BriefInput,
    context: {} as BriefContext,
    events: {} as BriefEvent,
  },
  guards: {
    canRemind: ({ context }) => context.reminders < MAX_BRIEF_REMINDERS,
    remindersUsed: ({ context }) => context.reminders >= MAX_BRIEF_REMINDERS,
    allAnswered: ({ context }) => context.answered >= context.totalQuestions,
    hasMore: ({ context }) => context.answered < context.totalQuestions,
    canGoBack: ({ context }) => context.answered > 0,
  },
  actions: {
    countReminder: assign({ reminders: ({ context }) => context.reminders + 1 }),
  },
}).createMachine({
  id: "brief",
  context: ({ input }) => ({ ...input, answered: 0, reminders: 0, scopeEdits: 0 }),
  initial: "draft",
  states: {
    draft: {
      on: { SEND: "sent" },
    },
    sent: {
      on: {
        OPEN: "filling",
        REMIND: { guard: "canRemind", actions: "countReminder" },
        MARK_LOST: { guard: "remindersUsed", target: "lost" },
      },
    },
    filling: {
      on: {
        ANSWER: {
          guard: "hasMore",
          actions: assign({ answered: ({ context }) => context.answered + 1 }),
        },
        BACK: {
          guard: "canGoBack",
          actions: assign({ answered: ({ context }) => context.answered - 1 }),
        },
        SUBMIT: { guard: "allAnswered", target: "submitted" },
        REMIND: { guard: "canRemind", actions: "countReminder" },
        MARK_LOST: { guard: "remindersUsed", target: "lost" },
      },
    },
    submitted: {
      description: "Scope, deliverables, dates and rounds generated; creator reviews.",
      on: {
        EDIT_SCOPE: { actions: assign({ scopeEdits: ({ context }) => context.scopeEdits + 1 }) },
        CONFIRM: "confirmed",
      },
    },
    confirmed: { type: "final" },
    lost: { type: "final" },
  },
});
