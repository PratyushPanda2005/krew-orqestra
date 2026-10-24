import type { VariantProps } from "class-variance-authority"
import type * as React from "react"

import { statusPill } from "@krew/ui/lib/status-pill-variants"
import { cn } from "@krew/ui/lib/utils"

type StatusPillProps = React.ComponentProps<"span"> & VariantProps<typeof statusPill>

/** A short state label: "Paid", "At risk", "Waiting for client". Colour is never the only signal. */
function StatusPill({ tone, className, children, ...props }: StatusPillProps) {
  return (
    <span data-slot="status-pill" className={cn(statusPill({ tone }), className)} {...props}>
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

export { StatusPill, statusPill }
