"use client"

import * as React from "react"

import { ActionBar } from "@krew/ui/components/action-bar"
import { Button } from "@krew/ui/components/button"
import { cn } from "@krew/ui/lib/utils"

export type Step = {
  id: string
  /** The question, in plain words: "When is the shoot?" */
  title: string
  hint?: string
  content: React.ReactNode
  /** Return false to stop the client moving on (e.g. a required answer is empty). */
  canContinue?: boolean
}

type StepFormProps = {
  steps: Step[]
  submitLabel: string
  onSubmit: () => void
  /** Controlled step index; leave out to let the form manage it. */
  index?: number
  onIndexChange?: (index: number) => void
  className?: string
}

/**
 * One question per screen (UX-17). Used by sign-up, the client brief and the
 * tax profile. The heading takes focus on each step so screen readers announce it.
 */
function StepForm({ steps, submitLabel, onSubmit, index, onIndexChange, className }: StepFormProps) {
  const [internal, setInternal] = React.useState(0)
  const i = index ?? internal
  const setIndex = (n: number) => (onIndexChange ? onIndexChange(n) : setInternal(n))
  const step = steps[i]
  const last = i === steps.length - 1
  const headingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    headingRef.current?.focus()
  }, [i])

  if (!step) return null
  const canContinue = step.canContinue ?? true

  return (
    <form
      data-slot="step-form"
      className={cn("flex min-h-full flex-col", className)}
      onSubmit={(e) => {
        e.preventDefault()
        if (!canContinue) return
        if (last) onSubmit()
        else setIndex(i + 1)
      }}
    >
      <div className="px-4 pt-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {i + 1} of {steps.length}
        </p>
        <div
          className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={i + 1}
          aria-label="Progress"
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${((i + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <fieldset className="flex flex-1 flex-col gap-3 px-4 py-6">
        <h2 ref={headingRef} tabIndex={-1} className="condensed text-2xl leading-tight font-semibold outline-none">
          {step.title}
        </h2>
        {step.hint && <p className="text-muted-foreground">{step.hint}</p>}
        <div className="mt-2">{step.content}</div>
      </fieldset>

      <ActionBar>
        {i > 0 && (
          <Button type="button" variant="outline" size="lg" className="h-tap" onClick={() => setIndex(i - 1)}>
            Back
          </Button>
        )}
        <Button type="submit" size="lg" className="h-tap flex-1" disabled={!canContinue}>
          {last ? submitLabel : "Next"}
        </Button>
      </ActionBar>
    </form>
  )
}

export { StepForm }
