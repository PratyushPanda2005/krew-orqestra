import { assign, setup } from "xstate";

/**
 * Task status (PF-18, UX-16, RM-03, EC-17).
 * One-tap status. An overdue task is escalated to the owner once.
 * Done tasks ignore due-date events.
 */
export type TaskEvent =
  | { type: "START" }
  | { type: "PAUSE" }
  | { type: "BLOCK"; reason: string }
  | { type: "UNBLOCK" }
  | { type: "DONE" }
  | { type: "REOPEN" }
  | { type: "DUE_PASSED" }
  | { type: "ESCALATE" };

type TaskContext = { overdue: boolean; escalated: boolean; blockedReason?: string };

export const taskMachine = setup({
  types: {
    context: {} as TaskContext,
    events: {} as TaskEvent,
  },
  guards: {
    canEscalate: ({ context }) => context.overdue && !context.escalated,
  },
  actions: {
    markOverdue: assign({ overdue: true }),
    markEscalated: assign({ escalated: true }),
  },
}).createMachine({
  id: "task",
  context: { overdue: false, escalated: false },
  initial: "open",
  states: {
    open: {
      initial: "todo",
      on: {
        DUE_PASSED: { actions: "markOverdue" },
        ESCALATE: { guard: "canEscalate", actions: "markEscalated" },
        DONE: "done",
      },
      states: {
        todo: {
          on: {
            START: "inProgress",
            BLOCK: {
              target: "blocked",
              actions: assign({ blockedReason: ({ event }) => event.reason }),
            },
          },
        },
        inProgress: {
          on: {
            PAUSE: "todo",
            BLOCK: {
              target: "blocked",
              actions: assign({ blockedReason: ({ event }) => event.reason }),
            },
          },
        },
        blocked: {
          on: {
            UNBLOCK: { target: "inProgress", actions: assign({ blockedReason: undefined }) },
          },
        },
      },
    },
    done: {
      on: { REOPEN: "open" },
    },
  },
});
