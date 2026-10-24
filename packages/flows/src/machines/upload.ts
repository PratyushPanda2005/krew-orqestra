import { assign, setup } from "xstate";

/**
 * Resumable upload (EC-20, PF-21).
 * Videos go to Stream by tus, images to R2 multipart, both with one-time URLs.
 * Losing the connection pauses the upload; it resumes from the bytes already
 * sent, never from zero. Retries ask for a fresh URL but keep progress.
 */
export const MAX_UPLOAD_ATTEMPTS = 3;

export type UploadKind = "video" | "image";

export type UploadEvent =
  | { type: "SELECT"; bytes: number; kind: UploadKind }
  | { type: "URL_READY" }
  | { type: "PROGRESS"; bytesSent: number }
  | { type: "OFFLINE" }
  | { type: "ONLINE" }
  | { type: "COMPLETE" }
  | { type: "PROCESSED" }
  | { type: "ERROR"; message: string }
  | { type: "RETRY" }
  | { type: "CANCEL" };

type UploadContext = {
  kind: UploadKind;
  bytesTotal: number;
  bytesSent: number;
  attempts: number;
  error?: string;
};

export const uploadMachine = setup({
  types: {
    context: {} as UploadContext,
    events: {} as UploadEvent,
  },
  guards: {
    isImage: ({ context }) => context.kind === "image",
    canRetry: ({ context }) => context.attempts < MAX_UPLOAD_ATTEMPTS,
  },
  actions: {
    recordError: assign({
      error: ({ event }) => (event.type === "ERROR" ? event.message : undefined),
    }),
  },
}).createMachine({
  id: "upload",
  context: { kind: "video", bytesTotal: 0, bytesSent: 0, attempts: 0 },
  initial: "idle",
  states: {
    idle: {
      on: {
        SELECT: {
          guard: ({ event }) => event.bytes > 0,
          target: "requestingUrl",
          actions: assign({
            kind: ({ event }) => event.kind,
            bytesTotal: ({ event }) => event.bytes,
            bytesSent: 0,
            attempts: 1,
          }),
        },
      },
    },
    requestingUrl: {
      on: {
        URL_READY: "uploading",
        ERROR: { target: "failed", actions: "recordError" },
        CANCEL: "cancelled",
      },
    },
    uploading: {
      on: {
        PROGRESS: {
          actions: assign({
            bytesSent: ({ context, event }) =>
              Math.min(context.bytesTotal, Math.max(context.bytesSent, event.bytesSent)),
          }),
        },
        OFFLINE: "paused",
        COMPLETE: { target: "processing", actions: assign({ bytesSent: ({ context }) => context.bytesTotal }) },
        ERROR: { target: "failed", actions: "recordError" },
        CANCEL: "cancelled",
      },
    },
    paused: {
      description: '"Waiting for connection" — progress is kept.',
      on: { ONLINE: "uploading", CANCEL: "cancelled" },
    },
    processing: {
      description: "Stream prepares the video; images skip this.",
      always: { guard: "isImage", target: "ready" },
      on: { PROCESSED: "ready", ERROR: { target: "failed", actions: "recordError" } },
    },
    failed: {
      on: {
        RETRY: {
          guard: "canRetry",
          target: "requestingUrl",
          actions: assign({ attempts: ({ context }) => context.attempts + 1, error: undefined }),
        },
        CANCEL: "cancelled",
      },
    },
    ready: { type: "final" },
    cancelled: { type: "final" },
  },
});
