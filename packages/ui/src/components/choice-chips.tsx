import type * as React from "react"


type ChoiceChipsProps = {
  name: string
  legend: React.ReactNode
  options: readonly { value: string; label: string }[]
  defaultValue?: string
  /** Shown under the chips and linked to the group for screen readers. */
  error?: string
  onChange?: (value: string) => void
  className?: string
}

/**
 * Pick one of a few options, as 44 px chips. Native radios underneath, so it works
 * without JS, arrow keys move between options, and the form posts the value.
 * Used on the landing waitlist and, next, in sign-up (skill, solo or crew).
 * Classes are joined without tailwind-merge so client bundles that use it stay small;
 * `className` adds to the fieldset, it doesn't override.
 */
const join = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ")

function ChoiceChips({ name, legend, options, defaultValue, error, onChange, className }: ChoiceChipsProps) {
  const errorId = `${name}-error`
  return (
    <fieldset
      data-slot="choice-chips"
      aria-describedby={error ? errorId : undefined}
      className={join("flex flex-col gap-1.5", className)}
    >
      <legend className="mb-1.5 text-sm font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={join(
              "inline-flex min-h-tap cursor-pointer items-center rounded-full border border-input bg-card px-4 text-base select-none",
              "has-[:checked]:border-primary has-[:checked]:bg-accent has-[:checked]:font-semibold has-[:checked]:text-accent-foreground",
              "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
              error && "border-destructive"
            )}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              defaultChecked={defaultValue === o.value}
              aria-invalid={error ? true : undefined}
              onChange={onChange ? () => onChange(o.value) : undefined}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  )
}

export { ChoiceChips }
