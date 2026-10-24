"use server"

import { WaitlistSignup, waitlistFields, type WaitlistField } from "@krew/schemas/waitlist"

import { submitWaitlist } from "@/lib/waitlist"
import type { WaitlistState } from "@/lib/waitlist-state"

const fields = Object.keys(waitlistFields) as WaitlistField[]

export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  const values: WaitlistState["values"] = {}
  for (const field of fields) {
    const v = formData.get(field)
    if (typeof v === "string") values[field] = v
  }

  // Honeypot: people never see this field, bots fill it. Pretend it worked.
  if (formData.get("website")) return { status: "done", fieldErrors: {}, values: {}, name: values.name }

  const parsed = WaitlistSignup.safeParse(values)
  if (!parsed.success) {
    const fieldErrors: WaitlistState["fieldErrors"] = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as WaitlistField
      fieldErrors[field] ??= issue.message
    }
    return { status: "invalid", fieldErrors, values }
  }

  const result = await submitWaitlist(parsed.data)
  if (!result.ok) return { status: "error", fieldErrors: {}, values }
  return {
    status: "done",
    fieldErrors: {},
    values: {},
    duplicate: result.duplicate,
    name: parsed.data.name,
    contact: values.contact?.trim(),
  }
}
