import type { WaitlistContact, WaitlistDetails } from "@krew/schemas/waitlist"

import { mockWaitlist } from "./waitlist.mock"

/**
 * Thin adapter for pilot sign-ups. The landing page only ever calls these two
 * functions; where sign-ups end up (our backend, a sheet, email) is decided
 * here, behind WAITLIST_ADAPTER. Only the mock exists for now.
 *
 * Joining takes just a contact. Details come after, keyed by the opaque id
 * that `join` hands back, so the contact never has to be sent twice.
 */
export type JoinResult = { ok: true; id: string; duplicate: boolean } | { ok: false; reason: "unavailable" }
export type DetailsResult = { ok: true; contact: string } | { ok: false; reason: "unavailable" | "unknown" }

export type WaitlistAdapter = {
  join(contact: WaitlistContact): Promise<JoinResult>
  addDetails(id: string, details: WaitlistDetails): Promise<DetailsResult>
}

const adapters: Record<string, WaitlistAdapter> = {
  mock: mockWaitlist,
}

const adapter = () => adapters[process.env.WAITLIST_ADAPTER ?? "mock"] ?? mockWaitlist

export function joinWaitlist(contact: WaitlistContact): Promise<JoinResult> {
  return adapter().join(contact)
}

export function addWaitlistDetails(id: string, details: WaitlistDetails): Promise<DetailsResult> {
  return adapter().addDetails(id, details)
}
