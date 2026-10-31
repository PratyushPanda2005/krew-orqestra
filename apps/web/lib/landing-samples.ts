import { rupeesToPaise, type Paise } from "@krew/schemas"

/**
 * Example data for the landing page mocks. Riya and Arjun are personas from the
 * design system, not customers. Numbers match the samples in @krew/flows.
 */
export const riya = {
  name: "Riya",
  client: "Meera Joshi",
  clientFirst: "Meera",
  job: "Pre-wedding shoot",
  quote: {
    lines: [
      { label: "Shoot, 6 hours", paise: rupeesToPaise(35000) },
      { label: "Edited photos, 150", paise: rupeesToPaise(15000) },
    ],
    taxable: rupeesToPaise(50000),
    gst: rupeesToPaise(9000),
    total: rupeesToPaise(59000),
    acceptedOn: "24 Oct 2026",
    acceptedAt: "11:00 am",
  },
  advance: rupeesToPaise(15000),
  invoice: {
    number: "RY/26-27/014",
    date: "24 Oct 2026",
    sac: "998383",
    cgst: rupeesToPaise(4500),
    sgst: rupeesToPaise(4500),
    due: rupeesToPaise(44000),
  },
  paid: { received: rupeesToPaise(40000), tds: rupeesToPaise(4000) },
}

export const arjun = {
  name: "Arjun",
  job: "Kapoor wedding",
  total: rupeesToPaise(125000) as Paise,
  tasks: [
    { title: "Shoot sangeet", who: "Kabir", when: "12 Dec", status: "Done", tone: "success" },
    { title: "Edit highlight film", who: "Sana", when: "due 20 Dec", status: "In progress", tone: "primary" },
    { title: "Colour grade", who: "Sana", when: "due 22 Dec", status: "To do", tone: "neutral" },
    { title: "Send draft to client", who: "Arjun", when: "due 23 Dec", status: "To do", tone: "neutral" },
  ] as const,
}

/**
 * Example whole-account view for the income block (PF-26): money in and out by month,
 * April to October of FY 2026-27, for Arjun's crew. Invented numbers, labelled as an example.
 */
const months = [
  { month: "Apr", in: 48000, out: 14000 },
  { month: "May", in: 55000, out: 17000 },
  { month: "Jun", in: 39000, out: 12000 },
  { month: "Jul", in: 62000, out: 21000 },
  { month: "Aug", in: 74000, out: 23000 },
  { month: "Sep", in: 88000, out: 26000 },
  { month: "Oct", in: 112000, out: 38000 },
] as const

export const income = {
  year: "FY 2026-27",
  months: months.map((m) => ({ month: m.month, in: rupeesToPaise(m.in), out: rupeesToPaise(m.out) })),
  received: rupeesToPaise(months.reduce((sum, m) => sum + m.in, 0)),
  pending: rupeesToPaise(86000),
  pendingInvoices: 3,
}

/**
 * "Your jobs right now" on the landing page, after Vantra's live list: the same example jobs
 * as the mocks, each at its step of the 7. Dev Sharma's job matches his row in MockPending.
 */
export const liveJobs = [
  { job: arjun.job, who: "Arjun's crew · 4 people", stage: "Work", step: 4, value: arjun.total, due: "Shoot 12 Dec" },
  { job: "Logo and brand kit", who: "Dev Sharma", stage: "Review", step: 5, value: rupeesToPaise(24000), due: "Draft 2 sent" },
  { job: riya.job, who: riya.client, stage: "Invoice", step: 6, value: riya.quote.total, due: "Due 8 Nov" },
]

/**
 * The growth monitor under the income block: what the creator earned, which kinds of work it
 * came from, what clients said, and a savings goal. Invented numbers, labelled as an example;
 * the work split adds up to income.received (₹4,78,000).
 */
const byType = [
  { type: "Weddings", rupees: 248000 },
  { type: "Events", rupees: 115000 },
  { type: "Brand shoots", rupees: 76000 },
  { type: "Portraits", rupees: 39000 },
] as const

const jobsDone = 22

export const growth = {
  jobsDone,
  average: rupeesToPaise(Math.round(months.reduce((sum, m) => sum + m.in, 0) / jobsDone)),
  // October against September, in whole percent.
  monthChange: Math.round((months[6].in / months[5].in - 1) * 100),
  reviews: { rating: 4.9, count: 18 },
  repeatClients: 6,
  byType: byType.map((t) => ({ type: t.type, paise: rupeesToPaise(t.rupees) })),
  // A goal only tracks money the creator sets aside in their own bank; Krew never holds it.
  goals: [
    { name: "New camera body", saved: rupeesToPaise(148000), target: rupeesToPaise(240000), monthly: rupeesToPaise(15000), by: "May 2027" },
    { name: "Drone", saved: rupeesToPaise(40000), target: rupeesToPaise(90000) },
  ],
}
