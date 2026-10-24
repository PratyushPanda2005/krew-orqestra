"use client"

import { waitlistFields, type WaitlistField } from "@krew/schemas/waitlist"
import { ChoiceChips } from "@krew/ui/components/choice-chips"
import { statusPill } from "@krew/ui/lib/status-pill-variants"
import { useActionState, useEffect, useRef, useState } from "react"

import { joinWaitlist } from "@/app/(marketing)/actions"
import { waitlist as copy } from "@/app/(marketing)/copy"
import { initialWaitlistState, type WaitlistState } from "@/lib/waitlist-state"

const order: WaitlistField[] = ["name", "skill", "city", "plan", "instagram", "contact"]
type Errors = Partial<Record<WaitlistField, string | undefined>>

function check(field: WaitlistField, value: FormDataEntryValue | null): string | undefined {
  const r = waitlistFields[field].safeParse(value ?? undefined)
  return r.success ? undefined : r.error.issues[0]?.message
}

// Native label, input and button, styled like the shadcn ones with our tokens. The shadcn
// versions pull Radix and a class merger into this page's JS, which the 4G budget can't carry.
const inputClass =
  "h-tap w-full min-w-0 rounded-lg border border-input bg-card px-3 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
const submitClass =
  "inline-flex h-tap w-full items-center justify-center rounded-lg bg-primary px-5 text-base font-medium text-primary-foreground hover:bg-primary/80 aria-disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

/**
 * Pilot waitlist. Works as a plain HTML form without JS (the server action
 * validates and the page re-renders with errors or the confirmation). With JS,
 * fields are checked on blur with the same schema and the result is shown in place.
 */
export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initialWaitlistState)
  const [clientErrors, setClientErrors] = useState<Errors>({})
  const invalidFields = (s: WaitlistState) => (s.status === "invalid" ? order.filter((f) => s.fieldErrors[f]) : null)
  const [summary, setSummary] = useState<WaitlistField[] | null>(() => invalidFields(state))
  const [seen, setSeen] = useState<WaitlistState>(state)
  const summaryRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  // A new server answer replaces whatever the browser worked out.
  if (seen !== state) {
    setSeen(state)
    setClientErrors({})
    setSummary(invalidFields(state))
  }

  const errors: Errors = { ...state.fieldErrors, ...clientErrors }
  // Fields fixed since the summary appeared drop out of it.
  const summaryFields = (summary ?? []).filter((f) => errors[f])

  useEffect(() => {
    if (state.status === "done") doneRef.current?.focus()
  }, [state])

  useEffect(() => {
    if (summary?.length) summaryRef.current?.focus()
  }, [summary])

  const setError = (field: WaitlistField, message: string | undefined) =>
    setClientErrors((prev) => ({ ...prev, [field]: message }))

  const onBlur = (field: WaitlistField) => (e: React.FocusEvent<HTMLInputElement>) => {
    // Don't scold an empty optional-looking field the moment someone tabs past it.
    if (e.currentTarget.value.trim() === "" && !errors[field]) return
    setError(field, check(field, e.currentTarget.value))
  }

  const onChange = (field: WaitlistField) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors[field]) setError(field, check(field, e.currentTarget.value))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (pending) {
      e.preventDefault()
      return
    }
    const data = new FormData(e.currentTarget)
    const found: Errors = {}
    for (const f of order) found[f] = check(f, data.get(f))
    const bad = order.filter((f) => found[f])
    setClientErrors(found)
    if (bad.length) {
      e.preventDefault()
      setSummary(bad)
    } else {
      setSummary(null)
    }
  }

  if (state.status === "done") {
    const dup = state.duplicate
    return (
      <div ref={doneRef} role="status" tabIndex={-1} className="rounded-xl border bg-card p-6 outline-none">
        <span className={statusPill({ tone: "success" })}>
          <span aria-hidden className="size-1.5 rounded-full bg-current" />
          {dup ? copy.duplicate.pill : copy.done.pill}
        </span>
        <p className="condensed mt-3 text-2xl font-semibold">
          {dup ? copy.duplicate.title : copy.done.title(state.name ?? "")}
        </p>
        <p className="mt-1 text-muted-foreground">
          {dup || !state.contact ? copy.duplicate.body : copy.done.body(state.contact)}
        </p>
      </div>
    )
  }

  const v = state.values
  const describedBy = (field: WaitlistField, hint?: boolean) =>
    [hint && `${field}-hint`, errors[field] && `${field}-error`].filter(Boolean).join(" ") || undefined

  const text = (field: WaitlistField, props: React.ComponentProps<"input"> = {}, hint?: string, optional?: boolean) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={field} className="text-sm leading-none font-medium">
        {copy.fields[field as keyof typeof copy.fields]}
        {optional && <span className="font-normal text-muted-foreground"> {copy.optional}</span>}
      </label>
      {hint && (
        <p id={`${field}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <input
        id={field}
        name={field}
        defaultValue={v[field]}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={describedBy(field, !!hint)}
        onBlur={onBlur(field)}
        onChange={onChange(field)}
        className={inputClass}
        {...props}
      />
      {errors[field] && (
        <p id={`${field}-error`} className="text-sm text-destructive">
          {errors[field]}
        </p>
      )}
    </div>
  )

  return (
    <form action={action} onSubmit={onSubmit} noValidate className="relative flex flex-col gap-5 rounded-xl border bg-card p-5 lg:p-6">
      {summaryFields.length > 0 && (
        <div
          ref={summaryRef}
          role="alert"
          tabIndex={-1}
          className="rounded-lg border border-destructive bg-danger-soft p-4 outline-none focus-visible:outline-2 focus-visible:outline-ring"
        >
          <p className="font-semibold text-destructive">{copy.summary(summaryFields.length)}</p>
          <ul className="mt-1 flex flex-col">
            {summaryFields.map((f) => (
              <li key={f}>
                <a
                  href={`#${f === "skill" || f === "plan" ? `${f}-group` : f}`}
                  className="inline-flex min-h-tap items-center text-destructive underline underline-offset-4"
                >
                  {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {text("name", { autoComplete: "name", maxLength: 80 })}

      <div id="skill-group" tabIndex={-1} className="outline-none">
        <ChoiceChips
          name="skill"
          legend={copy.fields.skill}
          options={copy.skills}
          defaultValue={v.skill}
          error={errors.skill}
          onChange={() => setError("skill", undefined)}
        />
      </div>

      {text("city", { autoComplete: "address-level2", maxLength: 60 })}

      <div id="plan-group" tabIndex={-1} className="outline-none">
        <ChoiceChips
          name="plan"
          legend={copy.fields.plan}
          options={copy.plans}
          defaultValue={v.plan}
          error={errors.plan}
          onChange={() => setError("plan", undefined)}
        />
      </div>

      {text(
        "instagram",
        { autoComplete: "off", autoCapitalize: "none", spellCheck: false, placeholder: "@yourhandle", maxLength: 31 },
        undefined,
        true
      )}

      {text(
        "contact",
        { autoComplete: "email", inputMode: "email", autoCapitalize: "none", spellCheck: false, maxLength: 120 },
        copy.contactHint
      )}

      {/* Honeypot: hidden from people and screen readers; bots fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-lg bg-danger-soft p-3 text-sm font-medium text-destructive">
          {copy.failed}
        </p>
      )}

      <button
        type="submit"
        aria-disabled={pending || undefined}
        className={submitClass}
      >
        {pending ? copy.submitting : copy.submit}
      </button>
    </form>
  )
}
