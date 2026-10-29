"use client"

import { waitlistFields, type WaitlistField } from "@krew/schemas/waitlist"
import { ChoiceChips } from "@krew/ui/components/choice-chips"
import { statusPill } from "@krew/ui/lib/status-pill-variants"
import { useActionState, useEffect, useRef, useState } from "react"

import { joinWaitlist } from "@/app/(marketing)/actions"
import { waitlist as copy } from "@/app/(marketing)/copy"
import { initialWaitlistState, type WaitlistState } from "@/lib/waitlist-state"

const detailOrder: WaitlistField[] = ["name", "skill", "city", "instagram"]
type Errors = Partial<Record<WaitlistField, string | undefined>>
type StepProps = { state: WaitlistState; action: (formData: FormData) => void; pending: boolean }

function check(field: WaitlistField, value: FormDataEntryValue | null): string | undefined {
  const r = waitlistFields[field].safeParse(value ?? undefined)
  return r.success ? undefined : r.error.issues[0]?.message
}

/** "+919876543210" reads better as "+91 98765 43210". Emails pass through. */
const showContact = (c: string) => c.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2")

// Native label, input and button, styled like the shadcn ones with our tokens. The shadcn
// versions pull Radix and a class merger into this page's JS, which the 4G budget can't carry.
const inputClass =
  "h-12 w-full min-w-0 rounded-full border border-input bg-card px-5 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
const buttonClass =
  "inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-base font-medium transition-shadow duration-400 aria-disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
// Same pill as the rest of the landing (pill-link.tsx): fully round, 48 px, 16 px medium, soft inner glow on hover.
const primaryClass = `${buttonClass} bg-primary text-primary-foreground hover:shadow-[inset_0_0_16px_0_var(--brand-snow)]`
const outlineClass = `${buttonClass} border border-foreground bg-card hover:shadow-[inset_0_0_12px_0_var(--brand-navy)]`

/**
 * Pilot waitlist in two steps: a contact is the whole sign-up, then we ask about
 * the creator's work, which they can skip. Works as plain HTML forms without JS
 * (the server action validates and the page re-renders with the next step).
 * With JS, fields are checked on blur with the same schema and focus follows the step.
 */
export function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initialWaitlistState)
  if (state.step === "done") return <Done state={state} />
  // A new step starts with fresh browser-side errors.
  if (state.step === "details") return <DetailsStep key="details" state={state} action={action} pending={pending} />
  return <ContactStep key="contact" state={state} action={action} pending={pending} />
}

/** Keeps browser-side errors until the next server answer replaces them. */
function useErrors(state: WaitlistState) {
  const [clientErrors, setClientErrors] = useState<Errors>({})
  const [seen, setSeen] = useState(state)
  if (seen !== state) {
    setSeen(state)
    setClientErrors({})
  }
  const errors: Errors = { ...state.fieldErrors, ...clientErrors }
  const setError = (field: WaitlistField, message: string | undefined) =>
    setClientErrors((prev) => ({ ...prev, [field]: message }))
  return { errors, setError, setClientErrors }
}

function Honeypot() {
  // Hidden from people and screen readers; bots fill it.
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}

function SaveFailed() {
  return (
    <p role="alert" className="rounded-lg bg-danger-soft p-3 text-sm font-medium text-destructive">
      {copy.failed}
    </p>
  )
}

function ContactStep({ state, action, pending }: StepProps) {
  const { errors, setError } = useErrors(state)
  const inputRef = useRef<HTMLInputElement>(null)
  const error = errors.contact

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (pending) return e.preventDefault()
    const message = check("contact", new FormData(e.currentTarget).get("contact"))
    setError("contact", message)
    if (message) {
      e.preventDefault()
      inputRef.current?.focus()
    }
  }

  return (
    <form action={action} onSubmit={onSubmit} noValidate className="relative flex flex-col gap-2">
      <input type="hidden" name="step" value="contact" />
      <label htmlFor="contact" className="text-sm leading-none font-medium">
        {copy.fields.contact}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          ref={inputRef}
          id="contact"
          name="contact"
          defaultValue={state.values.contact}
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={120}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "contact-error contact-hint" : "contact-hint"}
          onBlur={(e) => {
            if (e.currentTarget.value.trim() !== "" || error) setError("contact", check("contact", e.currentTarget.value))
          }}
          onChange={(e) => {
            if (error) setError("contact", check("contact", e.currentTarget.value))
          }}
          className={inputClass}
        />
        <button type="submit" aria-disabled={pending || undefined} className={primaryClass}>
          {pending ? copy.submitting : copy.submit}
        </button>
      </div>
      {error && (
        <p id="contact-error" role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <p id="contact-hint" className="text-sm text-muted-foreground">
        {copy.contactHint}
      </p>
      <Honeypot />
      {state.status === "error" && <SaveFailed />}
    </form>
  )
}

function DetailsStep({ state, action, pending }: StepProps) {
  const { errors, setError, setClientErrors } = useErrors(state)
  const invalidFields = (s: WaitlistState) => (s.status === "invalid" ? detailOrder.filter((f) => s.fieldErrors[f]) : null)
  const [summary, setSummary] = useState<WaitlistField[] | null>(() => invalidFields(state))
  const [seen, setSeen] = useState(state)
  const [intent, setIntent] = useState<"save" | "skip">("save")
  const headRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  if (seen !== state) {
    setSeen(state)
    setSummary(invalidFields(state))
  }
  // Fields fixed since the summary appeared drop out of it.
  const summaryFields = (summary ?? []).filter((f) => errors[f])

  // Arriving from step 1: announce "you're on the list" and start from here.
  useEffect(() => {
    if (state.status === "idle") headRef.current?.focus()
  }, [state.status])

  useEffect(() => {
    if (summary?.length) summaryRef.current?.focus()
  }, [summary])

  const onBlur = (field: WaitlistField) => (e: React.FocusEvent<HTMLInputElement>) => {
    // Don't scold an empty field the moment someone tabs past it.
    if (e.currentTarget.value.trim() === "" && !errors[field]) return
    setError(field, check(field, e.currentTarget.value))
  }

  const onChange = (field: WaitlistField) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors[field]) setError(field, check(field, e.currentTarget.value))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (pending) return e.preventDefault()
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const skipping = submitter?.value === "skip"
    setIntent(skipping ? "skip" : "save")
    if (skipping) return
    const data = new FormData(e.currentTarget)
    const found: Errors = {}
    for (const f of detailOrder) found[f] = check(f, data.get(f))
    const bad = detailOrder.filter((f) => found[f])
    setClientErrors(found)
    if (bad.length) {
      e.preventDefault()
      setSummary(bad)
    } else {
      setSummary(null)
    }
  }

  const v = state.values
  const describedBy = (field: WaitlistField) => (errors[field] ? `${field}-error` : undefined)

  const text = (field: WaitlistField, props: React.ComponentProps<"input"> = {}, optional?: boolean) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={field} className="text-sm leading-none font-medium">
        {copy.fields[field]}
        {optional && <span className="font-normal text-muted-foreground"> {copy.optional}</span>}
      </label>
      <input
        id={field}
        name={field}
        defaultValue={v[field]}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={describedBy(field)}
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
      <input type="hidden" name="step" value="details" />
      <input type="hidden" name="id" value={state.id ?? ""} />
      <input type="hidden" name="contact" value={state.contact ?? ""} />

      <div ref={headRef} role="status" tabIndex={-1} className="outline-none">
        <span className={statusPill({ tone: "success" })}>
          <span aria-hidden className="size-1.5 rounded-full bg-current" />
          {copy.details.pill}
        </span>
        <h3 className="condensed mt-3 text-2xl font-semibold">{copy.details.title}</h3>
        <p className="mt-1 text-muted-foreground">{copy.details.body}</p>
      </div>

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
                  href={`#${f === "skill" ? "skill-group" : f}`}
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

      {text(
        "instagram",
        { autoComplete: "off", autoCapitalize: "none", spellCheck: false, placeholder: "@yourhandle", maxLength: 31 },
        true
      )}

      <Honeypot />
      {state.status === "error" && <SaveFailed />}

      <div className="flex flex-col gap-3 sm:flex-row-reverse sm:justify-start">
        <button type="submit" name="intent" value="save" aria-disabled={pending || undefined} className={`${primaryClass} sm:min-w-32`}>
          {pending && intent === "save" ? copy.details.saving : copy.details.save}
        </button>
        <button type="submit" name="intent" value="skip" formNoValidate aria-disabled={pending || undefined} className={outlineClass}>
          {copy.details.skip}
        </button>
      </div>
    </form>
  )
}

function Done({ state }: { state: WaitlistState }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => ref.current?.focus(), [])
  const dup = state.duplicate
  return (
    <div ref={ref} role="status" tabIndex={-1} className="rounded-xl border bg-card p-6 outline-none">
      <span className={statusPill({ tone: "success" })}>
        <span aria-hidden className="size-1.5 rounded-full bg-current" />
        {dup ? copy.duplicate.pill : copy.done.pill}
      </span>
      <p className="condensed mt-3 text-2xl font-semibold">{dup ? copy.duplicate.title : copy.done.title(state.name)}</p>
      <p className="mt-1 text-muted-foreground">
        {dup || !state.contact ? copy.duplicate.body : copy.done.body(showContact(state.contact))}
      </p>
    </div>
  )
}
