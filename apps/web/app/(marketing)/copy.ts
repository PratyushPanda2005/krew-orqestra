/**
 * Every string on the landing page, in one place for review and for Hindi later.
 * Each factual line names its PRD source. ⚠ marks copy waiting on a check (plan §13).
 */

export const hero = {
  eyebrow: "For videographers, photographers and designers",
  title: "From the first DM to getting paid.",
  // PRD §1
  sub: "Krew keeps each client job in one place: the chat, the quote, the advance, the drafts and the invoice. Run it alone or with your crew.",
  primary: "Join the pilot",
  secondary: "See how a job runs",
  railNote: "One job, seven steps. You always see where it stands.",
  railSummary: "The seven steps of a job in Krew: enquiry, quote, advance, work, review, invoice and paid.",
}

export const mess = {
  title: "Right now, one job lives in three apps.",
  captions: {
    dm: "Enquiries in Instagram DMs.",
    whatsapp: "Quotes as screenshots.",
    mail: "Invoices buried in email threads.",
    note: "Payments chased by hand.",
  },
  closing: "Krew puts the job back together.",
}

export const how = {
  title: "How a job runs in Krew",
  intro: "Follow Riya, a photographer in Pune, and Arjun's wedding video crew. Both are examples.",
  steps: [
    {
      // PF-14, PF-15
      title: "Enquiry",
      body: "On Instagram, Krew replies with your “starting from” rates and portfolio, asks the date, budget and type of work, then hands the chat to you. It never agrees a price.",
    },
    {
      // PF-09
      title: "Quote",
      body: "Send the quote as a link. Your client accepts by typing their name and ticking a box, and Krew keeps a record of exactly what they accepted.",
    },
    {
      // PF-09, EC-24
      title: "Advance",
      body: "Ask for the advance with a payment link or your UPI ID. If it isn't paid two days before the shoot, Krew marks the job at risk.",
    },
    {
      // PF-17, PF-18, PF-03
      title: "Work",
      body: "Turn the job into tasks from a template. With a crew, assign them; each person sees only their own jobs.",
    },
    {
      // PF-21, EC-19
      title: "Review",
      body: "Share drafts by link. Clients comment on the exact second of a video or a spot on a photo, then approve, and that version is locked.",
    },
    {
      // PF-24. ⚠ card payments need the Razorpay route (V2); the UPI fallback is UPI only
      title: "Invoice",
      body: "Raise a GST invoice, or a plain one if you aren't registered, with a payment link for UPI or card.",
    },
    {
      // PF-26
      title: "Paid",
      body: "Record the payment, and any TDS the client deducted, and the invoice settles. Every rupee in and out goes in your ledger.",
    },
  ],
  cta: "Join the pilot",
}

export const clients = {
  // PRD §3 (client role), PF-30
  title: "Your clients never make an account.",
  body: "Quotes, drafts and invoices open from a link on their phone. They accept, comment, approve and pay. No app, no password, no forms.",
  links: [
    { title: "Quote link", body: "They read it and accept by typing their name." },
    { title: "Review link", body: "They watch the draft, comment and approve." },
    { title: "Invoice link", body: "They see what's due and pay." },
  ],
  footnote: "Reminders reach them by email from your own address, and stop as soon as they act.",
}

export const trust = {
  title: "What we promise",
  items: [
    {
      // PF-02, PRD §6. ⚠ unknown chats sit in a 24 h encrypted buffer pending V4
      title: "Personal chats are never stored.",
      body: "When a new chat comes in, you mark it as a client or personal. Krew saves only client chats.",
    },
    {
      // PF-09, PF-24, PRD §6 and §8
      title: "Your money goes straight to you.",
      body: "Payment links come from your own Razorpay account, or your own UPI ID. Krew never holds your clients' money.",
    },
    {
      // PF-24. ⚠ accountant review pending (G4, V5)
      title: "Invoices built to GST rules.",
      body: "GST invoices carry every field Rule 46 asks for. Not registered? You get a plain invoice with no tax.",
    },
    {
      // PRD §4.3 and §7. ⚠ Meta App Review and Google verification pending
      title: "Official connections.",
      body: "Instagram and WhatsApp Business connect through Meta's official APIs, and email goes out from your own Gmail through Google's.",
    },
  ],
}

export const plans = {
  // PRD §3, decision S7: team members are the only difference in the MVP
  title: "Just you, or you and your crew",
  kreator: { name: "Kreator", tag: "For solo creators", body: "Everything Krew does, for one person." },
  krew: {
    name: "Krew",
    tag: "For crews",
    body: "Everything in Kreator, plus team members. Invite your shooters, editors and designers. Each sees only the jobs and tasks you give them, and you choose who can reply to clients.",
  },
  note: "Pricing will be announced at launch.",
}

export const faq = {
  title: "Questions creators ask",
  items: [
    {
      // PF-06
      q: "Can I connect my personal WhatsApp?",
      a: "No. Krew connects a WhatsApp Business number, and you keep using the WhatsApp Business app on the same number. Krew never sends WhatsApp messages on its own.",
    },
    {
      // PF-04
      q: "Which Instagram accounts work?",
      a: "Professional accounts, either creator or business. If yours is personal, switch to professional in Instagram settings first; Krew shows you how. Message access must be turned on.",
    },
    {
      // PRD §3
      q: "Do my clients need to download anything?",
      a: "No. Quotes, drafts and invoices open from a link in their browser, with no login.",
    },
    {
      // PF-24, PF-35
      q: "I'm not GST registered. Can I still use Krew?",
      a: "Yes. You get a plain invoice with no tax lines, because you can't charge GST unless you're registered. As your turnover nears ₹20 lakh (₹10 lakh in some States), Krew reminds you to look at registering.",
    },
    {
      // PF-09, PRD §10
      q: "Does Krew hold my payments?",
      a: "No. Clients pay into your own Razorpay account, or straight to your UPI ID. Razorpay charges you its usual fee; a UPI link to your own ID has no gateway fee.",
    },
    {
      // PF-05
      q: "Will Krew read all my email?",
      a: "No. Only the emails you choose reach Krew, through a Gmail filter you set up. Quotes and invoices go out from your own address.",
    },
  ],
}

export const waitlist = {
  title: "Join the pilot",
  intro: "We're opening Krew to a small group of creators first. Tell us about your work and we'll get in touch.",
  fields: {
    name: "Your name",
    skill: "What do you do?",
    city: "City",
    plan: "Just you or a crew?",
    instagram: "Instagram handle",
    contact: "Phone or email",
  },
  optional: "(optional)",
  contactHint: "We'll only use this to contact you about the pilot.",
  skills: [
    { value: "video", label: "Video" },
    { value: "photo", label: "Photo" },
    { value: "design", label: "Design" },
  ],
  plans: [
    { value: "kreator", label: "Just me" },
    { value: "krew", label: "I have a team" },
  ],
  submit: "Join the pilot",
  submitting: "Joining…",
  summary: (n: number) => (n === 1 ? "Fix 1 thing to continue." : `Fix ${n} things to continue.`),
  done: {
    pill: "You're on the list",
    title: (name: string) => `You're on the list, ${name}.`,
    body: (contact: string) => `We'll contact you on ${contact} about the pilot.`,
  },
  duplicate: { pill: "Already on the list", title: "You're already on the list.", body: "We'll be in touch." },
  failed: "We couldn't save this. Check your connection and try again.",
}

export const footer = {
  tagline: "From the first DM to getting paid.",
  contact: "Contact",
  // ⚠ confirm the legal entity name
  copyright: "© 2026 Orry",
}
