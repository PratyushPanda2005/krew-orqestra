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
