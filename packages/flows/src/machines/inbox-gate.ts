import { assign, setup } from "xstate";

/**
 * Client-or-personal gate (PF-02, EC-03, UX-10).
 * Must-hold rule: personal chats are never stored.
 *
 * A new WhatsApp or Instagram thread is stored only if the contact is already a
 * client or lead, or the creator taps "This is a client". Until then it waits in
 * a short-lived buffer and is discarded after 24 hours (legal check: task V4).
 */
export const HOLD_WINDOW_MS = 24 * 60 * 60 * 1000;

export type InboxGateInput = {
  /** Phone, handle or email matches an existing client or lead (EC-01). */
  knownContact: boolean;
  /** Contact was marked personal before (hashed block list). */
  onBlockList: boolean;
};

export type InboxGateEvent =
  | { type: "MESSAGE" }
  | { type: "MARK_CLIENT" }
  | { type: "MARK_PERSONAL" };

export const inboxGateMachine = setup({
  types: {
    input: {} as InboxGateInput,
    context: {} as InboxGateInput & { heldMessages: number },
    events: {} as InboxGateEvent,
  },
  guards: {
    onBlockList: ({ context }) => context.onBlockList,
    knownContact: ({ context }) => context.knownContact,
  },
  delays: { holdWindow: HOLD_WINDOW_MS },
}).createMachine({
  id: "inboxGate",
  context: ({ input }) => ({ ...input, heldMessages: 1 }),
  initial: "checking",
  states: {
    checking: {
      always: [
        { guard: "onBlockList", target: "discarded" },
        { guard: "knownContact", target: "stored" },
        { target: "held" },
      ],
    },
    held: {
      description: 'Shows the "Client or personal?" notice with a 24-hour countdown.',
      on: {
        MESSAGE: { actions: assign({ heldMessages: ({ context }) => context.heldMessages + 1 }) },
        MARK_CLIENT: { target: "stored" },
        MARK_PERSONAL: { target: "blocked" },
      },
      after: { holdWindow: { target: "discarded" } },
    },
    stored: {
      tags: ["storesContent"],
      description: "Posted into the creator's inbox.",
      type: "final",
    },
    blocked: {
      description: "Contact added to the hashed block list; nothing kept.",
      type: "final",
    },
    discarded: {
      description: "Buffer dropped; nothing kept.",
      type: "final",
    },
  },
});
