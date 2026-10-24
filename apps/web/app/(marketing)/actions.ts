"use server"

import { WaitlistContact, WaitlistDetails, waitlistDetailFields, type WaitlistField } from "@krew/schemas/waitlist"

import { addWaitlistDetails, joinWaitlist as join } from "@/lib/waitlist"
import type { WaitlistState } from "@/lib/waitlist-state"

const detailFields = Object.keys(waitlistDetailFields) as WaitlistField[]

const read = (formData: FormData, field: string) => {
  const v = formData.get(field)
  return typeof v === "string" ? v : undefined
}

/**
 * One action for both steps, picked by the hidden "step" field. A single
 * useActionState keeps the no-JS round trip working: each post re-renders the
 * page with the state of whichever step was sent.
 */
export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  // Honeypot: people never see this field, bots fill it. Pretend it worked.
  if (formData.get("website")) return { step: "done", status: "idle", fieldErrors: {}, values: {} }

  if (read(formData, "step") === "details") return details(formData)

  const raw = read(formData, "contact")
  const parsed = WaitlistContact.safeParse(raw)
  if (!parsed.success) {
    return {
      step: "contact",
      status: "invalid",
      fieldErrors: { contact: parsed.error.issues[0]?.message },
      values: { contact: raw },
    }
  }

  const result = await join(parsed.data)
  if (!result.ok) return { step: "contact", status: "error", fieldErrors: {}, values: { contact: raw } }
  if (result.duplicate) return { step: "done", status: "idle", fieldErrors: {}, values: {}, duplicate: true }
  return { step: "details", status: "idle", fieldErrors: {}, values: {}, id: result.id, contact: parsed.data.value }
}

async function details(formData: FormData): Promise<WaitlistState> {
  const id = read(formData, "id") ?? ""
  const contact = read(formData, "contact")
  if (read(formData, "intent") === "skip") return { step: "done", status: "idle", fieldErrors: {}, values: {}, contact }

  const values: WaitlistState["values"] = {}
  for (const field of detailFields) values[field] = read(formData, field)

  const parsed = WaitlistDetails.safeParse(values)
  if (!parsed.success) {
    const fieldErrors: WaitlistState["fieldErrors"] = {}
    for (const issue of parsed.error.issues) fieldErrors[issue.path[0] as WaitlistField] ??= issue.message
    return { step: "details", status: "invalid", fieldErrors, values, id, contact }
  }

  const result = await addWaitlistDetails(id, parsed.data)
  if (!result.ok) return { step: "details", status: "error", fieldErrors: {}, values, id, contact }
  return { step: "done", status: "idle", fieldErrors: {}, values: {}, name: parsed.data.name, contact: result.contact }
}
