import { cn } from "@krew/ui/lib/utils"

/**
 * The one section background: a soft wash from snow into a light navy tint, after trionn's
 * white-to-grey grounds (marketing.css). Used on alternate sections; the rest stay plain snow.
 * Decorative, CSS only.
 */
export function Gradient({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div data-grad="pearl" className="absolute inset-0" />
    </div>
  )
}
