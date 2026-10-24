import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createActor } from "xstate";
import {
  HOLD_WINDOW_MS,
  briefMachine,
  flowCatalog,
  inboxGateMachine,
  invoiceMachine,
  jobMachine,
  outstanding,
  quoteMachine,
  reviewMachine,
  taskMachine,
  uploadMachine,
} from "../src";

const at = "2026-10-24T11:00:00+05:30";

describe("inbox gate (personal chats are never stored)", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("stores known contacts straight away", () => {
    const a = createActor(inboxGateMachine, { input: { knownContact: true, onBlockList: false } }).start();
    expect(a.getSnapshot().value).toBe("stored");
    expect(a.getSnapshot().hasTag("storesContent")).toBe(true);
  });

  it("holds unknown chats, then discards them after 24 hours", () => {
    const a = createActor(inboxGateMachine, { input: { knownContact: false, onBlockList: false } }).start();
    expect(a.getSnapshot().value).toBe("held");
    expect(a.getSnapshot().hasTag("storesContent")).toBe(false);
    vi.advanceTimersByTime(HOLD_WINDOW_MS);
    expect(a.getSnapshot().value).toBe("discarded");
  });

  it("never stores a chat marked personal", () => {
    const a = createActor(inboxGateMachine, { input: { knownContact: false, onBlockList: false } }).start();
    a.send({ type: "MARK_PERSONAL" });
    expect(a.getSnapshot().value).toBe("blocked");
    expect(a.getSnapshot().hasTag("storesContent")).toBe(false);
  });

  it("drops chats from contacts on the block list", () => {
    const a = createActor(inboxGateMachine, { input: { knownContact: true, onBlockList: true } }).start();
    expect(a.getSnapshot().value).toBe("discarded");
  });
});

describe("brief", () => {
  it("can only be submitted when every question is answered", () => {
    const a = createActor(briefMachine, { input: { totalQuestions: 2 } }).start();
    a.send({ type: "SEND" });
    a.send({ type: "OPEN" });
    a.send({ type: "ANSWER" });
    expect(a.getSnapshot().can({ type: "SUBMIT" })).toBe(false);
    a.send({ type: "ANSWER" });
    a.send({ type: "SUBMIT" });
    expect(a.getSnapshot().value).toBe("submitted");
  });

  it("allows marking lost only after two reminders", () => {
    const a = createActor(briefMachine, { input: { totalQuestions: 2 } }).start();
    a.send({ type: "SEND" });
    expect(a.getSnapshot().can({ type: "MARK_LOST" })).toBe(false);
    a.send({ type: "REMIND" });
    a.send({ type: "REMIND" });
    expect(a.getSnapshot().can({ type: "REMIND" })).toBe(false);
    a.send({ type: "MARK_LOST" });
    expect(a.getSnapshot().value).toBe("lost");
  });
});

describe("quote", () => {
  const accept = (version: number, typedName = "Meera Joshi", ticked = true) =>
    ({ type: "ACCEPT", version, typedName, ticked, at }) as const;

  it("rejects acceptance of an old version", () => {
    const a = createActor(quoteMachine, { input: { gst: false, advance: 1500000 } }).start();
    a.send({ type: "SEND" });
    a.send({ type: "REVISE" });
    a.send({ type: "SEND" });
    a.send(accept(1));
    expect(a.getSnapshot().value).toBe("sent");
    a.send(accept(2));
    expect(a.getSnapshot().matches("accepted")).toBe(true);
    expect(a.getSnapshot().context.acceptance?.version).toBe(2);
  });

  it("needs a typed name and the box ticked", () => {
    const a = createActor(quoteMachine, { input: { gst: false, advance: 0 } }).start();
    a.send({ type: "SEND" });
    expect(a.getSnapshot().can(accept(1, " ", true))).toBe(false);
    expect(a.getSnapshot().can(accept(1, "Meera", false))).toBe(false);
  });

  it("issues a receipt voucher on the advance for GST creators", () => {
    const a = createActor(quoteMachine, { input: { gst: true, advance: 1500000 } }).start();
    a.send({ type: "SEND" });
    a.send(accept(1));
    a.send({ type: "ADVANCE_PAID", amount: 1500000, method: "upi" });
    expect(a.getSnapshot().value).toBe("booked");
    expect(a.getSnapshot().context.receiptVoucherIssued).toBe(true);
  });

  it("books straight away when no advance is asked", () => {
    const a = createActor(quoteMachine, { input: { gst: false, advance: 0 } }).start();
    a.send({ type: "SEND" });
    a.send(accept(1));
    expect(a.getSnapshot().value).toBe("booked");
  });
});

describe("job", () => {
  const toBooked = () => {
    const a = createActor(jobMachine).start();
    a.send({ type: "BRIEF_SENT" });
    a.send({ type: "QUOTE_SENT" });
    a.send({ type: "QUOTE_ACCEPTED" });
    return a;
  };

  it("goes at risk when the advance is overdue, with four ways out", () => {
    const a = toBooked();
    a.send({ type: "ADVANCE_OVERDUE" });
    expect(a.getSnapshot().value).toBe("atRisk");
    for (const type of ["REMIND_CLIENT", "MARK_PAID", "GO_AHEAD", "MOVE_DATE"] as const) {
      expect(a.getSnapshot().can({ type })).toBe(true);
    }
    a.send({ type: "GO_AHEAD" });
    expect(a.getSnapshot().value).toBe("inProgress");
    expect(a.getSnapshot().context.wentAheadUnpaid).toBe(true);
  });

  it("doesn't start work before the advance unless the creator chooses to", () => {
    const a = toBooked();
    expect(a.getSnapshot().can({ type: "WORK_STARTED" })).toBe(false);
    a.send({ type: "ADVANCE_PAID" });
    expect(a.getSnapshot().can({ type: "ADVANCE_OVERDUE" })).toBe(false);
    a.send({ type: "WORK_STARTED" });
    expect(a.getSnapshot().value).toBe("inProgress");
  });

  it("runs through review, invoice and payment to closed", () => {
    const a = toBooked();
    for (const type of [
      "ADVANCE_PAID",
      "WORK_STARTED",
      "DRAFT_SHARED",
      "CHANGES_REQUESTED",
      "DRAFT_SHARED",
      "APPROVED",
      "INVOICE_SENT",
      "SETTLED",
      "CLOSE",
    ] as const) {
      a.send({ type });
    }
    expect(a.getSnapshot().status).toBe("done");
    expect(a.getSnapshot().context.reviewRounds).toBe(2);
  });
});

describe("task", () => {
  it("escalates an overdue task once", () => {
    const a = createActor(taskMachine).start();
    expect(a.getSnapshot().can({ type: "ESCALATE" })).toBe(false);
    a.send({ type: "DUE_PASSED" });
    a.send({ type: "ESCALATE" });
    expect(a.getSnapshot().context.escalated).toBe(true);
    expect(a.getSnapshot().can({ type: "ESCALATE" })).toBe(false);
  });

  it("ignores due dates once done", () => {
    const a = createActor(taskMachine).start();
    a.send({ type: "DONE" });
    a.send({ type: "DUE_PASSED" });
    expect(a.getSnapshot().context.overdue).toBe(false);
  });

  it("keeps the reason while blocked", () => {
    const a = createActor(taskMachine).start();
    a.send({ type: "START" });
    a.send({ type: "BLOCK", reason: "Waiting for raw files" });
    expect(a.getSnapshot().matches({ open: "blocked" })).toBe(true);
    expect(a.getSnapshot().context.blockedReason).toBe("Waiting for raw files");
    a.send({ type: "UNBLOCK" });
    expect(a.getSnapshot().matches({ open: "inProgress" })).toBe(true);
  });
});

describe("upload (resumes after a dropped connection)", () => {
  const started = () => {
    const a = createActor(uploadMachine).start();
    a.send({ type: "SELECT", bytes: 5_000_000_000, kind: "video" });
    a.send({ type: "URL_READY" });
    a.send({ type: "PROGRESS", bytesSent: 2_000_000_000 });
    return a;
  };

  it("keeps progress when the connection drops", () => {
    const a = started();
    a.send({ type: "OFFLINE" });
    expect(a.getSnapshot().value).toBe("paused");
    a.send({ type: "ONLINE" });
    expect(a.getSnapshot().value).toBe("uploading");
    expect(a.getSnapshot().context.bytesSent).toBe(2_000_000_000);
  });

  it("keeps progress across retries, up to three attempts", () => {
    const a = started();
    a.send({ type: "ERROR", message: "Link expired" });
    a.send({ type: "RETRY" });
    expect(a.getSnapshot().context.bytesSent).toBe(2_000_000_000);
    a.send({ type: "ERROR", message: "Link expired" });
    a.send({ type: "RETRY" });
    a.send({ type: "ERROR", message: "Link expired" });
    expect(a.getSnapshot().can({ type: "RETRY" })).toBe(false);
  });

  it("skips processing for images", () => {
    const a = createActor(uploadMachine).start();
    a.send({ type: "SELECT", bytes: 4_000_000, kind: "image" });
    a.send({ type: "URL_READY" });
    a.send({ type: "COMPLETE" });
    expect(a.getSnapshot().value).toBe("ready");
  });
});

describe("review (approval locks the version)", () => {
  it("locks the approved version with name and time", () => {
    const a = createActor(reviewMachine).start();
    a.send({ type: "COMMENT", reviewer: "Meera", body: "Warmer colour", at: 42 });
    a.send({ type: "REQUEST_CHANGES" });
    a.send({ type: "NEW_VERSION" });
    a.send({ type: "APPROVE", approverName: "Meera Joshi", at });
    const s = a.getSnapshot();
    expect(s.hasTag("locked")).toBe(true);
    expect(s.context.approval).toEqual({ version: 2, approverName: "Meera Joshi", approvedAt: at });
    expect(s.can({ type: "COMMENT", reviewer: "Meera", body: "One more" })).toBe(false);
  });

  it("can't ask for changes without a comment on this version", () => {
    const a = createActor(reviewMachine).start();
    expect(a.getSnapshot().can({ type: "REQUEST_CHANGES" })).toBe(false);
  });
});

describe("invoice", () => {
  const sent = () => {
    const a = createActor(invoiceMachine, {
      input: { gst: true, total: 5900000, advanceAdjusted: 1500000 },
    }).start();
    a.send({ type: "ISSUE", number: "RY/26-27/014" });
    a.send({ type: "SEND" });
    return a;
  };

  it("settles when payment plus TDS covers what is due", () => {
    const a = sent();
    a.send({ type: "RECORD_PAYMENT", amount: 4000000, tds: 400000, method: "bank" });
    expect(a.getSnapshot().value).toBe("paid");
    expect(outstanding(a.getSnapshot().context)).toBe(0);
  });

  it("stays part-paid until fully settled", () => {
    const a = sent();
    a.send({ type: "RECORD_PAYMENT", amount: 2000000, tds: 0, method: "link" });
    expect(a.getSnapshot().value).toBe("partiallyPaid");
    expect(outstanding(a.getSnapshot().context)).toBe(2400000);
  });

  it("locks amounts once issued; corrections need a credit note", () => {
    const a = sent();
    expect(a.getSnapshot().can({ type: "EDIT", total: 1 })).toBe(false);
    a.send({ type: "CREDIT_NOTE", amount: 400000 });
    a.send({ type: "RECORD_PAYMENT", amount: 4000000, tds: 0, method: "upi" });
    expect(a.getSnapshot().value).toBe("paid");
  });

  it("rejects invoice numbers over 16 characters or with odd symbols", () => {
    const a = createActor(invoiceMachine, {
      input: { gst: false, total: 100000, advanceAdjusted: 0 },
    }).start();
    expect(a.getSnapshot().can({ type: "ISSUE", number: "RY/2026-27/000014" })).toBe(false);
    expect(a.getSnapshot().can({ type: "ISSUE", number: "ry#14" })).toBe(false);
    expect(a.getSnapshot().can({ type: "CREDIT_NOTE", amount: 100 })).toBe(false);
  });
});

describe("catalog", () => {
  it("starts every machine with its sample input", () => {
    for (const f of flowCatalog) {
      const a = createActor(f.machine, { input: f.input }).start();
      expect(a.getSnapshot().status).not.toBe("error");
      a.stop();
    }
  });
});
