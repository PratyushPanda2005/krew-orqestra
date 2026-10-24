import type * as React from "react"

import { cn } from "@krew/ui/lib/utils"

/**
 * Sticky bottom bar for the main action on a phone screen
 * (Approve, Pay, Send quote). Clears the iPhone home indicator.
 */
function ActionBar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="action-bar"
      className={cn(
        "sticky bottom-0 z-10 flex gap-2 border-t bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
      {...props}
    />
  )
}

export { ActionBar }
