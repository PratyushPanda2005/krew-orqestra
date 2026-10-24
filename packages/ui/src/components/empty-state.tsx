import type * as React from "react"

import { cn } from "@krew/ui/lib/utils"

type EmptyStateProps = {
  title: string
  /** One sentence on what to do next, not how it feels. */
  body?: string
  action?: React.ReactNode
  className?: string
}

/** An empty screen is an invitation to act: say what goes here and how to add it. */
function EmptyState({ title, body, action, className }: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn("flex flex-col items-start gap-3 rounded-xl border border-dashed px-5 py-8", className)}
    >
      <p className="condensed text-xl font-semibold">{title}</p>
      {body && <p className="max-w-prose text-muted-foreground">{body}</p>}
      {action}
    </div>
  )
}

export { EmptyState }
