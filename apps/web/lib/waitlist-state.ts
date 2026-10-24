import type { WaitlistField } from "@krew/schemas/waitlist"

/** What the server action hands back to the form, with or without JS. */
export type WaitlistState = {
  status: "idle" | "invalid" | "error" | "done"
  fieldErrors: Partial<Record<WaitlistField, string>>
  /** Echo of what was typed, so a no-JS round trip keeps the form filled. */
  values: Partial<Record<WaitlistField, string>>
  duplicate?: boolean
  name?: string
  contact?: string
}

export const initialWaitlistState: WaitlistState = { status: "idle", fieldErrors: {}, values: {} }
