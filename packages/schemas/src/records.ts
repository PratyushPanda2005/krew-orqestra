import { z } from "zod";
import { Plan, Skill } from "./enums";
import { Paise } from "./money";

/** Contract between screens, mocks and the backend. Spec IDs in comments. */

export const Id = z.string().min(1);
export const IsoDateTime = z.iso.datetime({ offset: true });
export const IsoDate = z.iso.date();

export const Channel = z.enum(["instagram", "whatsapp", "email"]);

// F01 / PF-35
export const Creator = z.object({
  id: Id,
  name: z.string().min(1),
  plan: Plan,
  skill: Skill,
  city: z.string().min(1),
  gstin: z.string().length(15).optional(),
  pan: z.string().length(10).optional(),
  upiId: z.string().optional(),
});
export type Creator = z.infer<typeof Creator>;

// PF-02, EC-01, EC-03
export const Person = z.object({
  id: Id,
  creatorId: Id,
  name: z.string(),
  phone: z.string().optional(),
  instagram: z.string().optional(),
  email: z.email().optional(),
  kind: z.enum(["client", "lead"]),
});
export type Person = z.infer<typeof Person>;

// PF-01, UX-13
export const JobStage = z.enum([
  "enquiry",
  "briefing",
  "quoted",
  "booked",
  "atRisk",
  "inProgress",
  "inReview",
  "approved",
  "invoiced",
  "paid",
  "closed",
  "lost",
]);
export type JobStage = z.infer<typeof JobStage>;

export const Job = z.object({
  id: Id,
  creatorId: Id,
  clientId: Id,
  title: z.string().min(1),
  stage: JobStage,
  shootDate: IsoDate.optional(),
  deliveryDate: IsoDate.optional(),
  quotedTotal: Paise.optional(),
  advance: Paise.optional(),
  pending: Paise.default(0),
});
export type Job = z.infer<typeof Job>;

// PF-08, UX-17
export const Brief = z.object({
  id: Id,
  jobId: Id,
  jobType: z.string(),
  date: IsoDate.optional(),
  location: z.string().optional(),
  deliverables: z.array(z.string()).default([]),
  referenceFileIds: z.array(Id).default([]),
  whatsappConsent: z.boolean().default(false),
  revisionRounds: z.number().int().min(0).default(2),
});
export type Brief = z.infer<typeof Brief>;

// PF-09
export const QuoteLine = z.object({
  label: z.string().min(1),
  qty: z.number().int().positive(),
  unitPrice: Paise,
});
export const Quote = z.object({
  id: Id,
  jobId: Id,
  version: z.number().int().positive(),
  lines: z.array(QuoteLine).min(1),
  advance: Paise,
});
export type Quote = z.infer<typeof Quote>;

/** Cannot be changed once written (PF-09). */
export const AcceptanceLog = z.object({
  quoteId: Id,
  versionHash: z.string().min(16),
  typedName: z.string().min(2),
  contact: z.string().min(3),
  acceptedAt: IsoDateTime,
  ip: z.string(),
  device: z.string(),
});
export type AcceptanceLog = z.infer<typeof AcceptanceLog>;

// PF-17, PF-18
export const TaskStatus = z.enum(["todo", "inProgress", "blocked", "done"]);
export const Task = z.object({
  id: Id,
  jobId: Id,
  title: z.string().min(1),
  assigneeId: Id.optional(),
  due: IsoDate.optional(),
  status: TaskStatus,
});
export type Task = z.infer<typeof Task>;

// PF-21, EC-19
export const ReviewComment = z.object({
  id: Id,
  versionId: Id,
  reviewer: z.string().min(1),
  body: z.string().min(1),
  /** Seconds into the video, for timestamp comments. */
  at: z.number().nonnegative().optional(),
  /** Image area as fractions of width/height, for image comments. */
  area: z.object({ x: z.number(), y: z.number(), w: z.number(), h: z.number() }).optional(),
});
export type ReviewComment = z.infer<typeof ReviewComment>;

export const Approval = z.object({
  versionId: Id,
  approverName: z.string().min(2),
  approvedAt: IsoDateTime,
});
export type Approval = z.infer<typeof Approval>;

// PF-24, PF-26, EC-25..28
export const Payment = z.object({
  amount: Paise,
  /** Tax the client deducted at source; recorded as entered, never pre-filled. */
  tds: Paise.default(0),
  tdsSection: z.enum(["194C", "194J"]).optional(),
  method: z.enum(["link", "upi", "cash", "bank"]),
  receivedOn: IsoDate,
  note: z.string().optional(),
});
export type Payment = z.infer<typeof Payment>;

export const Invoice = z.object({
  id: Id,
  jobId: Id,
  number: z
    .string()
    .max(16)
    .regex(/^[A-Z0-9/-]+$/),
  gst: z.boolean(),
  total: Paise,
  advanceAdjusted: Paise.default(0),
  issuedOn: IsoDate,
  dueOn: IsoDate,
});
export type Invoice = z.infer<typeof Invoice>;
