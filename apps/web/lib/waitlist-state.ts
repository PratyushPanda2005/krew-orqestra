import type { WaitlistField } from "@krew/schemas/waitlist"

/**
 * What the server action hands back to the form, with or without JS.
 * step "contact" → "details" (contact saved) → "done" (details saved or skipped).
 */
export type WaitlistState = {
  step: "contact" | "details" | "done"
  status: "idle" | "invalid" | "error"
  fieldErrors: Partial<Record<WaitlistField, string>>
  /** Echo of what was typed, so a no-JS round trip keeps the form filled. */
  values: Partial<Record<WaitlistField, string>>
  /** Opaque sign-up id from the adapter, carried into step 2 in a hidden field. */
  id?: string
  duplicate?: boolean
  name?: string
  contact?: string
}

export const initialWaitlistState: WaitlistState = { step: "contact", status: "idle", fieldErrors: {}, values: {} }
