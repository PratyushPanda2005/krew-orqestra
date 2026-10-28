/**
 * Every string on the landing page, in one place for review and for Hindi later.
 * Each factual line names its PRD source. ⚠ marks copy waiting on a check (plan §13).
 */

export const hero = {
  // Placeholder wordmark until the logo lands (28 Oct).
  name: "Krew",
  // PRD §1
  summary: "From the first DM to getting paid. Krew keeps every client job in one place, for you and your crew.",
  primary: "Join the pilot",
  navLabel: "Menu",
  nav: [
    { href: "#how", label: "How it works" },
    { href: "#clients", label: "For clients" },
    { href: "#trust", label: "Your data" },
    { href: "#faq", label: "Questions" },
  ],
  // The reference puts social links here; we have none yet, so these jump to sections.
  jumps: [
    { href: "#how", label: "See how a job runs", icon: "play" },
    { href: "#trust", label: "Is my data safe?", icon: "shield" },
    { href: "#faq", label: "Questions", icon: "question" },
  ],
} as const

export const mess = {
  // Instagram, WhatsApp, Gmail and Notes: four apps. Every fragment is an example.
  title: "Right now, one job lives in four apps.",
  intro: "Add a crew, and every question still comes back to you.",
  clientsTitle: "With your client",
  crewTitle: "With your crew",
  captions: {
    dm: "Enquiries in Instagram DMs.",
    whatsapp: "Quotes as screenshots.",
    mail: "Invoices buried in email threads.",
    note: "Payments chased by hand.",
    date: "Your shooter asks for the date. Again.",
    brief: "Your editor can't find the brief.",
    twoReplies: "Two of you reply to one client.",
  },
  closing: "Krew puts the job back together.",
  // Layout labels for the reference's "About" block (plan landing-sections-reference §10).
  eyebrow: "[ The mess ]",
  // Each stat restates a line above: four apps (title), seven steps (how), no client logins (PRD §3).
  stats: [
    { value: "4", label: "apps for one job" },
    { value: "7", label: "steps, in one place" },
    { value: "0", label: "logins for your clients" },
  ],
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
      // PF-17, PF-18, PF-03, PRD §3 (roles)
      title: "Work",
      body: "Turn the job into tasks from a template and assign them to your crew. Each person sees only the jobs and tasks you give them, and you choose who can reply to clients.",
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
  eyebrow: "[ How it works ]",
  marquee: "How a job runs",
  step: (n: number) => `[ Step ${String(n).padStart(2, "0")} ]`,
}

export const income = {
  // PF-26 views: whole account (money in, money out and net, by month) and pending (what each client still owes).
  // ⚠ "grow" is our wording: the PRD gives monthly totals, not growth analytics or forecasts.
  eyebrow: "Across all your jobs",
  title: "Watch your income grow, month by month.",
  body: "Every job feeds one ledger. See money in, money out and what you kept each month, and what each client still owes you. When it's time to file, export it all for your accountant.",
  points: ["Money in, money out and net, by month", "What each client still owes", "Exports for Tally and Zoho Books, or CSV"],
  tags: ["[ By month ]", "[ Who owes you ]", "[ For your accountant ]"],
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
  eyebrow: "[ Your clients ]",
}

export const trust = {
  eyebrow: "[ Our promises ]",
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

export const faq = {
  eyebrow: "[ Questions ]",
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
  eyebrow: "[ The pilot ]",
  title: "Join the pilot",
  intro: "We're opening Krew to a small group of creators first. Leave your email or number and we'll be in touch.",
  fields: {
    contact: "Email or phone",
    name: "Your name",
    skill: "What do you do?",
    city: "City",
    instagram: "Instagram handle",
  },
  optional: "(optional)",
  contactHint: "We'll only use this to contact you about the pilot.",
  skills: [
    { value: "video", label: "Video" },
    { value: "photo", label: "Photo" },
    { value: "design", label: "Design" },
  ],
  submit: "Join the pilot",
  submitting: "Joining…",
  details: {
    pill: "You're on the list",
    title: "Tell us about your work",
    body: "It helps us plan the pilot around you. Takes a minute.",
    save: "Save",
    saving: "Saving…",
    skip: "Skip for now",
  },
  summary: (n: number) => (n === 1 ? "Fix 1 thing to continue." : `Fix ${n} things to continue.`),
  done: {
    pill: "You're on the list",
    title: (name?: string) => (name ? `Thanks, ${name}.` : "You're on the list."),
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
  sections: "On this page",
  photos: "Photos from Unsplash",
}
