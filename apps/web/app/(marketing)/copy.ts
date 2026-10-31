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
  // Layout labels for pixelismo's Works section (plan landing-sections-reference, last section).
  eyebrow: "[ The mess ]",
  windowLabel: "The mess",
  // The window links on to the steps, as pixelismo's opens its Works; its cursor says so.
  windowLink: "See how Krew runs a job",
  cursor: "See how",
  // The four apps of the title, listed where pixelismo lists its services.
  appsLabel: "The four apps",
  apps: ["Instagram DMs", "WhatsApp", "Gmail", "Notes"],
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
  step: (n: number) => `[ Step ${String(n).padStart(2, "0")} ]`,
  of: (n: number, total: number) => `${String(n).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
  // The closing panel of the sideways scroll.
  end: "Every step lives in the same job, for you and your crew.",
}

export const income = {
  // PF-26 views: whole account (money in, money out and net, by month) and pending (what each client still owes).
  // ⚠ "grow" is our wording: the PRD gives monthly totals, not growth analytics or forecasts.
  eyebrow: "Across all your jobs",
  title: "Watch your income grow, month by month.",
  body: "Every job feeds one ledger. See money in, money out and what you kept each month, and what each client still owes you. When it's time to file, export it all for your accountant.",
  // The growth monitor. Earned: AN-12 (P0). Average per job: AN-15 (P1). Work by type: AN-16 (P1).
  // ⚠ Client reviews and savings goals are not in the PRD or spec yet (PE-18 leans to "advice, not a public rating").
  points: [
    "Money earned each month, and your average per job",
    "Which kinds of work bring the most, and what clients say",
    "Set a goal, like a new camera, and watch it fill",
  ],
  tags: ["[ What you earn ]", "[ Your work ]", "[ Your goals ]"],
  // The line under each tag (example numbers from lib/landing-samples).
  figures: {
    earned: (total: string, average: string) => `${total} this year · ${average} a job`,
    work: (rating: number, reviews: number, top: string, pct: number) => `★ ${rating} from ${reviews} reviews · ${top} ${pct}%`,
    goal: (saved: string, target: string, by: string) => `${saved} of ${target} · by ${by}`,
  },
  // The opening screen that trionn's curtain uncovers: the first sentence of the body, and a link down.
  lead: "Every job feeds one ledger.",
  more: "See your jobs",
  // After Vantra's "In the studio right now". Example jobs (lib/landing-samples liveJobs).
  live: {
    title: "Your jobs, right now",
    note: "( Example ) 3 jobs on the go",
    step: (n: number, of: number) => `Step ${n} of ${of}`,
  },
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
  // The reference's "Includes" column; each body's sentences become its list.
  includes: "What this means",
  // The reference's round "View" button on hover; ours opens the matching question.
  more: "Ask",
  moreLabel: (title: string) => `Questions about: ${title}`,
  items: [
    {
      // PF-02, PRD §6. ⚠ unknown chats sit in a 24 h encrypted buffer pending V4
      title: "Personal chats are never stored.",
      faq: 0,
      body: "When a new chat comes in, you mark it as a client or personal. Krew saves only client chats.",
    },
    {
      // PF-09, PF-24, PRD §6 and §8
      title: "Your money goes straight to you.",
      faq: 4,
      body: "Payment links come from your own Razorpay account, or your own UPI ID. Krew never holds your clients' money.",
    },
    {
      // PF-24. ⚠ accountant review pending (G4, V5)
      title: "Invoices built to GST rules.",
      faq: 3,
      body: "GST invoices carry every field Rule 46 asks for. Not registered? You get a plain invoice with no tax.",
    },
    {
      // PRD §4.3 and §7. ⚠ Meta App Review and Google verification pending
      title: "Official connections.",
      faq: 1,
      body: "Instagram and WhatsApp Business connect through Meta's official APIs, and email goes out from your own Gmail through Google's.",
    },
  ],
}

export const faq = {
  eyebrow: "[ Questions ]",
  title: "Questions creators ask",
  // Top right, after Truck'N Roll's "Trust our team of experts…".
  intro: "Straight answers to what creators ask us first.",
  // Bottom left, with the pill.
  help: "Still have a question? Write to us and we'll get back to you.",
  helpCta: "Email us",
  items: [
    {
      // PF-06
      q: "Can I connect my personal WhatsApp?",
      short: "No, a Business number.",
      a: "Krew connects a WhatsApp Business number, and you keep using the WhatsApp Business app on the same number. Krew never sends WhatsApp messages on its own.",
    },
    {
      // PF-04
      q: "Which Instagram accounts work?",
      short: "Professional ones.",
      a: "Professional accounts, either creator or business. If yours is personal, switch to professional in Instagram settings first; Krew shows you how. Message access must be turned on.",
    },
    {
      // PRD §3
      q: "Do my clients need to download anything?",
      short: "No, just a link.",
      a: "Quotes, drafts and invoices open from a link in their browser, with no login.",
    },
    {
      // PF-24, PF-35
      q: "I'm not GST registered. Can I still use Krew?",
      short: "Yes.",
      a: "You get a plain invoice with no tax lines, because you can't charge GST unless you're registered. As your turnover nears ₹20 lakh (₹10 lakh in some States), Krew reminds you to look at registering.",
    },
    {
      // PF-09, PRD §10
      q: "Does Krew hold my payments?",
      short: "No, they go straight to you.",
      a: "Clients pay into your own Razorpay account, or straight to your UPI ID. Razorpay charges you its usual fee; a UPI link to your own ID has no gateway fee.",
    },
    {
      // PF-05
      q: "Will Krew read all my email?",
      short: "Only what you choose.",
      a: "Only the emails you choose reach Krew, through a Gmail filter you set up. Quotes and invoices go out from your own address.",
    },
  ],
}

export const waitlist = {
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

/** The join screen's title, after Vantra's "Build what's next with us"; three short lines. */
export const next = {
  title: ["Run", "your next", "job on Krew"],
}

export const footer = {
  tagline: "From the first DM to getting paid.",
  contact: "Contact",
  // ⚠ confirm the legal entity name
  copyright: "© 2026 Orry",
  sections: "On this page",
  // The footer clock, as trionn shows its studio time; ours is India time.
  clock: "IST",
  hint: "Hover the lines.",
}
