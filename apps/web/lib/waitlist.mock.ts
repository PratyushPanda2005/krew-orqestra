import type { WaitlistSignup } from "@krew/schemas/waitlist"

import type { WaitlistAdapter } from "./waitlist"

/** Outside production, this contact forces the "couldn't save" path. */
export const MOCK_FAIL_CONTACT = "fail@example.com"

const saved = new Map<string, WaitlistSignup>()

/** In-memory store with a short delay. Same contact twice is a duplicate, not an error. */
export const mockWaitlist: WaitlistAdapter = {
  async submit(signup) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    if (process.env.NODE_ENV !== "production" && signup.contact.value === MOCK_FAIL_CONTACT) {
      return { ok: false, reason: "unavailable" }
    }
    const key = signup.contact.value
    if (saved.has(key)) return { ok: true, duplicate: true }
    saved.set(key, signup)
    return { ok: true, duplicate: false }
  },
}
