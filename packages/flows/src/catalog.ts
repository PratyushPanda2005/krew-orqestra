import type { AnyStateMachine } from "xstate";

/** A sample event with its payload. */
export type SampleEvent = { type: string; [key: string]: unknown };
import { briefMachine } from "./machines/brief";
import { inboxGateMachine } from "./machines/inbox-gate";
import { invoiceMachine } from "./machines/invoice";
import { jobMachine } from "./machines/job";
import { quoteMachine } from "./machines/quote";
import { reviewMachine } from "./machines/review";
import { taskMachine } from "./machines/task";
import { uploadMachine } from "./machines/upload";

/**
 * Every flow with sample input and sample events, for the flow explorer page
 * and for diagrams. Sample payloads use Riya (solo photographer, Pune).
 */
export type FlowEntry = {
  id: string;
  title: string;
  specIds: string[];
  machine: AnyStateMachine;
  input?: unknown;
  events: { label: string; event: SampleEvent }[];
};

const now = "2026-10-24T11:00:00+05:30";

export const flowCatalog: FlowEntry[] = [
  {
    id: "inbox-gate",
    title: "Client or personal?",
    specIds: ["PF-02", "EC-03", "UX-10"],
    machine: inboxGateMachine,
    input: { knownContact: false, onBlockList: false },
    events: [
      { label: "Another message", event: { type: "MESSAGE" } },
      { label: "This is a client", event: { type: "MARK_CLIENT" } },
      { label: "Personal", event: { type: "MARK_PERSONAL" } },
    ],
  },
  {
    id: "brief",
    title: "Brief",
    specIds: ["PF-08", "UX-17", "RM-12"],
    machine: briefMachine,
    input: { totalQuestions: 3 },
    events: [
      { label: "Send link", event: { type: "SEND" } },
      { label: "Client opens", event: { type: "OPEN" } },
      { label: "Answer", event: { type: "ANSWER" } },
      { label: "Back", event: { type: "BACK" } },
      { label: "Submit", event: { type: "SUBMIT" } },
      { label: "Remind client", event: { type: "REMIND" } },
      { label: "Edit scope", event: { type: "EDIT_SCOPE" } },
      { label: "Confirm", event: { type: "CONFIRM" } },
      { label: "Mark lost", event: { type: "MARK_LOST" } },
    ],
  },
  {
    id: "quote",
    title: "Quote and advance",
    specIds: ["PF-09", "Rule 50"],
    machine: quoteMachine,
    input: { gst: true, advance: 1500000 },
    events: [
      { label: "Send", event: { type: "SEND" } },
      { label: "Client views", event: { type: "VIEW" } },
      { label: "Revise", event: { type: "REVISE" } },
      {
        label: "Accept v1 as Meera",
        event: { type: "ACCEPT", version: 1, typedName: "Meera Joshi", ticked: true, at: now },
      },
      {
        label: "Accept v2 as Meera",
        event: { type: "ACCEPT", version: 2, typedName: "Meera Joshi", ticked: true, at: now },
      },
      { label: "Decline", event: { type: "DECLINE" } },
      { label: "Advance paid ₹15,000", event: { type: "ADVANCE_PAID", amount: 1500000, method: "upi" } },
    ],
  },
  {
    id: "job",
    title: "Job stage",
    specIds: ["PF-01", "UX-13", "EC-24"],
    machine: jobMachine,
    events: [
      { label: "Brief sent", event: { type: "BRIEF_SENT" } },
      { label: "Quote sent", event: { type: "QUOTE_SENT" } },
      { label: "Quote accepted", event: { type: "QUOTE_ACCEPTED" } },
      { label: "Advance paid", event: { type: "ADVANCE_PAID" } },
      { label: "Advance overdue", event: { type: "ADVANCE_OVERDUE" } },
      { label: "Remind client", event: { type: "REMIND_CLIENT" } },
      { label: "Mark as paid", event: { type: "MARK_PAID" } },
      { label: "Go ahead anyway", event: { type: "GO_AHEAD" } },
      { label: "Move date", event: { type: "MOVE_DATE" } },
      { label: "Start work", event: { type: "WORK_STARTED" } },
      { label: "Share draft", event: { type: "DRAFT_SHARED" } },
      { label: "Changes requested", event: { type: "CHANGES_REQUESTED" } },
      { label: "Approved", event: { type: "APPROVED" } },
      { label: "Invoice sent", event: { type: "INVOICE_SENT" } },
      { label: "Paid in full", event: { type: "SETTLED" } },
      { label: "Close job", event: { type: "CLOSE" } },
    ],
  },
  {
    id: "task",
    title: "Task",
    specIds: ["PF-18", "UX-16", "EC-17"],
    machine: taskMachine,
    events: [
      { label: "Start", event: { type: "START" } },
      { label: "Pause", event: { type: "PAUSE" } },
      { label: "Blocked", event: { type: "BLOCK", reason: "Waiting for raw files" } },
      { label: "Unblock", event: { type: "UNBLOCK" } },
      { label: "Done", event: { type: "DONE" } },
      { label: "Reopen", event: { type: "REOPEN" } },
      { label: "Due date passed", event: { type: "DUE_PASSED" } },
      { label: "Tell the owner", event: { type: "ESCALATE" } },
    ],
  },
  {
    id: "upload",
    title: "Upload",
    specIds: ["EC-20", "PF-21"],
    machine: uploadMachine,
    events: [
      { label: "Pick 2 GB video", event: { type: "SELECT", bytes: 2_000_000_000, kind: "video" } },
      { label: "URL ready", event: { type: "URL_READY" } },
      { label: "40% sent", event: { type: "PROGRESS", bytesSent: 800_000_000 } },
      { label: "Connection lost", event: { type: "OFFLINE" } },
      { label: "Back online", event: { type: "ONLINE" } },
      { label: "Upload finished", event: { type: "COMPLETE" } },
      { label: "Video ready", event: { type: "PROCESSED" } },
      { label: "Error", event: { type: "ERROR", message: "Link expired" } },
      { label: "Try again", event: { type: "RETRY" } },
      { label: "Cancel", event: { type: "CANCEL" } },
    ],
  },
  {
    id: "review",
    title: "Review and approval",
    specIds: ["PF-21", "UX-18", "EC-19"],
    machine: reviewMachine,
    events: [
      {
        label: "Comment at 0:42",
        event: { type: "COMMENT", reviewer: "Meera", body: "Warmer colour here", at: 42 },
      },
      { label: "Ask for changes", event: { type: "REQUEST_CHANGES" } },
      { label: "Upload next version", event: { type: "NEW_VERSION" } },
      { label: "Approve as Meera", event: { type: "APPROVE", approverName: "Meera Joshi", at: now } },
    ],
  },
  {
    id: "invoice",
    title: "Invoice and payment",
    specIds: ["PF-24", "PF-26", "EC-25", "EC-27"],
    machine: invoiceMachine,
    input: { gst: true, total: 5900000, advanceAdjusted: 1500000 },
    events: [
      { label: "Edit total to ₹60,000", event: { type: "EDIT", total: 6000000 } },
      { label: "Issue RY/26-27/014", event: { type: "ISSUE", number: "RY/26-27/014" } },
      { label: "Send", event: { type: "SEND" } },
      {
        label: "Paid ₹40,000 + ₹4,000 TDS",
        event: { type: "RECORD_PAYMENT", amount: 4000000, tds: 400000, method: "bank" },
      },
      {
        label: "Paid ₹20,000 by link",
        event: { type: "RECORD_PAYMENT", amount: 2000000, tds: 0, method: "link" },
      },
      { label: "Overdue", event: { type: "OVERDUE" } },
      { label: "Credit note ₹5,000", event: { type: "CREDIT_NOTE", amount: 500000 } },
    ],
  },
];
