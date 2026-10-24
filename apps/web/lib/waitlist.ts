import type { WaitlistSignup } from "@krew/schemas/waitlist"

import { mockWaitlist } from "./waitlist.mock"

/**
 * Thin adapter for pilot sign-ups. The landing page only ever calls
 * `submitWaitlist`; where sign-ups end up (our backend, a sheet, email)
 * is decided here, behind WAITLIST_ADAPTER. Only the mock exists for now.
 */
export type WaitlistResult = { ok: true; duplicate: boolean } | { ok: false; reason: "unavailable" }

export type WaitlistAdapter = {
  submit(signup: WaitlistSignup): Promise<WaitlistResult>
}

const adapters: Record<string, WaitlistAdapter> = {
  mock: mockWaitlist,
}

export function submitWaitlist(signup: WaitlistSignup): Promise<WaitlistResult> {
  const adapter = adapters[process.env.WAITLIST_ADAPTER ?? "mock"] ?? mockWaitlist
  return adapter.submit(signup)
}
