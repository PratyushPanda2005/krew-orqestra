import { cn } from "@krew/ui/lib/utils"

/**
 * Backgrounds (marketing.css):
 *   pearl   the one section wash: snow into a light navy tint, after trionn's white-to-grey
 *           grounds. Used on alternate sections; the rest stay plain snow.
 *   dusk    navy into violet and coral, with film grain (after grainient.supply): the three
 *           Income cards only
 * Decorative, CSS only.
 */
export type GradientKind = "pearl" | "dusk"

export function Gradient({ kind = "pearl", className }: { kind?: GradientKind; className?: string }) {
  return (
    <div aria-hidden data-grain={kind === "pearl" ? undefined : ""} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div data-grad={kind} className={cn("absolute", kind === "pearl" ? "inset-0" : "-inset-[10%]")} />
    </div>
  )
}
