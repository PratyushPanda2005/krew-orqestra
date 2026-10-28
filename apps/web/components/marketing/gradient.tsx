import { cn } from "@krew/ui/lib/utils"

/**
 * Grainy CSS gradients in the styles of grainient.supply, in the brand colours (marketing.css):
 *   mist, haze   soft pastel mesh on snow, slowly drifting (light sections)
 *   swift        a blurred pastel swirl
 *   dusk         navy into violet into coral
 *   dither       a fade broken into dots, like a dithered print
 *   ecliptic     a ring of light rising over navy
 *   pearl, silver  trionn's white-to-grey grounds, tinted with the brand
 * Pure CSS plus an SVG noise tile for the grain: no JS, no requests. Decorative.
 */
export type GradientKind = "mist" | "haze" | "swift" | "dusk" | "dither" | "ecliptic" | "pearl" | "silver"

export function Gradient({ kind, className }: { kind: GradientKind; className?: string }) {
  return (
    <div aria-hidden data-grain className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div data-grad={kind} className="absolute -inset-[10%]" />
    </div>
  )
}
