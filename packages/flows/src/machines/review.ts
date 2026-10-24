import { assign, setup } from "xstate";

/**
 * Review and approval (PF-21, UX-18, EC-19, RM-14).
 * - Comments carry a reviewer and either a video timestamp or an image area.
 * - Approving locks that exact version with the approver's name and time.
 * - Nothing can be commented on or changed after approval.
 */
export type ReviewComment = {
  version: number;
  reviewer: string;
  body: string;
  at?: number;
  area?: { x: number; y: number; w: number; h: number };
};

export type ReviewEvent =
  | ({ type: "COMMENT" } & Omit<ReviewComment, "version">)
  | { type: "REQUEST_CHANGES" }
  | { type: "NEW_VERSION" }
  | { type: "APPROVE"; approverName: string; at: string };

type ReviewContext = {
  version: number;
  comments: ReviewComment[];
  approval?: { version: number; approverName: string; approvedAt: string };
};

export const reviewMachine = setup({
  types: {
    context: {} as ReviewContext,
    events: {} as ReviewEvent,
  },
  guards: {
    hasCommentsOnThisVersion: ({ context }) =>
      context.comments.some((c) => c.version === context.version),
  },
}).createMachine({
  id: "review",
  context: { version: 1, comments: [] },
  initial: "open",
  states: {
    open: {
      description: "Client can comment and the approve button is always visible.",
      on: {
        COMMENT: {
          guard: ({ event }) => event.body.trim().length > 0 && event.reviewer.trim().length > 0,
          actions: assign({
            comments: ({ context, event }) => [
              ...context.comments,
              {
                version: context.version,
                reviewer: event.reviewer.trim(),
                body: event.body.trim(),
                at: event.at,
                area: event.area,
              },
            ],
          }),
        },
        REQUEST_CHANGES: { guard: "hasCommentsOnThisVersion", target: "changesRequested" },
        APPROVE: {
          guard: ({ event }) => event.approverName.trim().length >= 2,
          target: "approved",
          actions: assign({
            approval: ({ context, event }) => ({
              version: context.version,
              approverName: event.approverName.trim(),
              approvedAt: event.at,
            }),
          }),
        },
      },
    },
    changesRequested: {
      description: "Comments become tasks; creator uploads the next version.",
      on: {
        NEW_VERSION: {
          target: "open",
          actions: assign({ version: ({ context }) => context.version + 1 }),
        },
      },
    },
    approved: {
      tags: ["locked"],
      type: "final",
    },
  },
});
