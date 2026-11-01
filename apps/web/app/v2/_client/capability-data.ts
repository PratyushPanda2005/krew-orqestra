/**
 * The twelve items behind the "+" rows, grouped by stage of a job. Each line follows the PRD and the
 * spec IDs noted; names in the examples (Riya, Arjun) are examples, as on the main landing page.
 */
export type Capability = {
  number: string
  title: string
  summary: string
  detail: string
  delivers: string[]
  example: string
  resource?: { href: string; label: string }
}

export type Stage = {
  eyebrow: string
  title: string
  accent: string
  body: string
  capabilities: Capability[]
}

export const STAGES: Stage[] = [
  {
    eyebrow: "1.0 — Win the job",
    title: "Krew turns a DM into a booked job",
    accent: "with you",
    body: "Krew answers new enquiries with your rates and portfolio, sends the quote as a link and asks for the advance. Every price is yours to agree.",
    capabilities: [
      {
        // PF-14, PF-15
        number: "1.1",
        title: "Enquiry replies",
        summary: "Reply to every new Instagram enquiry in minutes, even mid-shoot.",
        detail:
          "Krew replies with your “starting from” rates and portfolio, asks for the date, budget and type of work, then hands the chat to you. It never agrees a price.",
        delivers: ["Instant first reply", "Date, budget and type of work", "Chat handed to you"],
        example: "“Wedding on 14 Dec in Pune, two days, budget around ₹1.5 lakh.”",
      },
      {
        // PF-09
        number: "1.2",
        title: "Quote links",
        summary: "Send the quote as a link your client can accept from their phone.",
        detail:
          "Your client reads the quote and accepts by typing their name and ticking a box. Krew keeps a record of exactly what they accepted.",
        delivers: ["Quote as a link", "Accepted by name", "A record of what they agreed"],
        example: "“Two days of photos and a highlight film, ₹1,40,000.”",
      },
      {
        // PF-09
        number: "1.3",
        title: "Advance payments",
        summary: "Ask for the advance with a payment link or your UPI ID.",
        detail:
          "The money goes straight to your own Razorpay account or UPI ID. Krew never holds your clients’ money.",
        delivers: ["Payment link or UPI", "Paid straight to you", "Marked paid on the job"],
        example: "“Advance of ₹40,000 to book the date.”",
      },
      {
        // EC-24
        number: "1.4",
        title: "Shoot-day check",
        summary: "Know which jobs are at risk before the shoot, not on the day.",
        detail:
          "If the advance isn’t paid two days before the shoot, Krew marks the job at risk so you can follow up in time.",
        delivers: ["At-risk flag", "Two days’ notice", "One list of what needs you"],
        example: "“Mehta wedding: advance not paid, shoot in 2 days.”",
      },
    ],
  },
  {
    eyebrow: "2.0 — Do the work",
    title: "Krew keeps your crew on the same job",
    accent: "and your client in the loop",
    body: "Turn the job into tasks, give each person only what they need, and share drafts by link. Clients comment on the exact moment, then approve.",
    capabilities: [
      {
        // PF-17, PF-18
        number: "2.1",
        title: "Crew tasks",
        summary: "Turn a job into tasks from a template and hand them out.",
        detail:
          "Start from a template for the kind of work, then assign each task to someone in your crew. Everyone sees the date, the brief and what’s due.",
        delivers: ["Task templates", "Assigned tasks", "Dates and briefs in one place"],
        example: "“Wedding template: shoot, cull, edit, album, delivery.”",
      },
      {
        // PF-03, PRD §3 (roles)
        number: "2.2",
        title: "Roles and access",
        summary: "Each person sees only the jobs and tasks you give them.",
        detail:
          "Your shooter sees the shoot, your editor sees the edit. You choose who can reply to clients, so two people never answer the same message.",
        delivers: ["Per-job access", "Who replies to clients", "Krew plan: your whole crew"],
        example: "“Arjun edits the film; only I reply to the client.”",
      },
      {
        // PF-21, EC-19
        number: "2.3",
        title: "Draft reviews",
        summary: "Share drafts by link and get comments on the exact moment.",
        detail:
          "Clients comment on the exact second of a video or a spot on a photo, then approve. The approved version is locked.",
        delivers: ["Review link", "Comments on the frame", "Locked approved version"],
        example: "“At 1:42, can we use the slower song?”",
      },
      {
        // PRD §6: no reminder after the client has acted
        number: "2.4",
        title: "Client reminders",
        summary: "Gentle reminders, from your own email address.",
        detail:
          "If a client hasn’t accepted a quote, reviewed a draft or paid an invoice, Krew reminds them by email from your address. It stops as soon as they act.",
        delivers: ["Sent from your Gmail", "Stops when they act", "No chasing by hand"],
        example: "“Your draft is ready to review. Open the link to watch it.”",
      },
    ],
  },
  {
    eyebrow: "3.0 — Get paid",
    title: "Krew gets you paid",
    accent: "and keeps the books",
    body: "Raise an invoice with a payment link, record payments and TDS, and see every rupee in and out. Clients pay you directly; Krew never holds the money.",
    capabilities: [
      {
        // PF-24
        number: "3.1",
        title: "GST invoices",
        summary: "Invoices built to GST rules, or plain ones if you aren’t registered.",
        detail:
          "GST invoices carry every field Rule 46 asks for. Not registered? You get a plain invoice with no tax lines.",
        delivers: ["GST or plain invoice", "Your details filled in", "Sent as a link"],
        example: "“Invoice the Mehta wedding balance, ₹1,00,000.”",
      },
      {
        // PF-24, PF-09
        number: "3.2",
        title: "Payment links",
        summary: "Every invoice carries a link to pay by UPI.",
        detail:
          "Clients pay into your own Razorpay account or straight to your UPI ID. A UPI link to your own ID has no gateway fee.",
        delivers: ["UPI payment link", "Paid straight to you", "Invoice settles itself"],
        example: "“Pay ₹1,00,000 to riyarao@upi.”",
      },
      {
        // PF-26
        number: "3.3",
        title: "Ledger and TDS",
        summary: "Record a payment, and any TDS the client deducted, and the invoice settles.",
        detail:
          "Every rupee in and out goes in your ledger. See money in, money out and what you kept each month, and what each client still owes you.",
        delivers: ["One ledger", "TDS recorded", "What each client owes"],
        example: "“Kapoor Studio paid ₹45,000 after 10% TDS.”",
      },
      {
        // PF-26 export
        number: "3.4",
        title: "Accountant export",
        summary: "When it’s time to file, export it all for your accountant.",
        detail:
          "Download your invoices, payments and TDS for the financial year in one go, ready to hand over.",
        delivers: ["Financial-year export", "Invoices and payments", "TDS summary"],
        example: "“Export everything for FY 2026-27.”",
      },
    ],
  },
]
