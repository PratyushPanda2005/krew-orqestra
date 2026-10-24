import type { WaitlistContact, WaitlistDetails } from "@krew/schemas/waitlist"

import type { WaitlistAdapter } from "./waitlist"

/** Outside production, this contact forces the "couldn't save" path. */
export const MOCK_FAIL_CONTACT = "fail@example.com"

type Entry = { contact: WaitlistContact; details?: WaitlistDetails }

const byId = new Map<string, Entry>()
const idByContact = new Map<string, string>()

const delay = () => new Promise((resolve) => setTimeout(resolve, 400))

/** In-memory store with a short delay. Same contact twice is a duplicate, not an error. */
export const mockWaitlist: WaitlistAdapter = {
  async join(contact) {
    await delay()
    if (process.env.NODE_ENV !== "production" && contact.value === MOCK_FAIL_CONTACT) {
      return { ok: false, reason: "unavailable" }
    }
    const known = idByContact.get(contact.value)
    if (known) return { ok: true, id: known, duplicate: true }
    const id = crypto.randomUUID()
    byId.set(id, { contact })
    idByContact.set(contact.value, id)
    return { ok: true, id, duplicate: false }
  },

  async addDetails(id, details) {
    await delay()
    const entry = byId.get(id)
    if (!entry) return { ok: false, reason: "unknown" }
    entry.details = details
    return { ok: true, contact: entry.contact.value }
  },
}
