import type { JobStage } from "@krew/schemas"

// Kept apart from landing-samples: client code imports this, and it must not pull in Zod.
/** The hero sequence: one stage per rail frame, with what happened at that step. */
export const heroSequence: { stage: JobStage; caption: string }[] = [
  { stage: "enquiry", caption: "Meera asks for your rates on Instagram" },
  { stage: "quoted", caption: "Meera accepts the ₹59,000 quote" },
  { stage: "booked", caption: "₹15,000 advance paid by UPI" },
  { stage: "inProgress", caption: "Shoot done, edits under way" },
  { stage: "inReview", caption: "Meera comments at 0:42, then approves" },
  { stage: "invoiced", caption: "Invoice RY/26-27/014 sent" },
  { stage: "paid", caption: "₹40,000 received · ₹4,000 TDS recorded" },
]
