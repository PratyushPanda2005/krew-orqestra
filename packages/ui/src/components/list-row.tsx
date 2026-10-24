import type * as React from "react"

import { cn } from "@krew/ui/lib/utils"

type ListRowProps = {
  /** Avatar, channel icon or date block. */
  leading?: React.ReactNode
  title: React.ReactNode
  meta?: React.ReactNode
  /** Usually an amount or a status pill. */
  trailing?: React.ReactNode
  /** Second line under the trailing slot, e.g. a due date. */
  trailingMeta?: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

/** One tappable row in an inbox, jobs list or ledger. Always at least 44 px tall. */
function ListRow({ leading, title, meta, trailing, trailingMeta, href, onClick, className }: ListRowProps) {
  const body = (
    <>
      {leading && <span className="shrink-0">{leading}</span>}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium">{title}</span>
        {meta && <span className="truncate text-sm text-muted-foreground">{meta}</span>}
      </span>
      {(trailing || trailingMeta) && (
        <span className="flex shrink-0 flex-col items-end gap-0.5">
          {trailing}
          {trailingMeta && <span className="text-xs text-muted-foreground">{trailingMeta}</span>}
        </span>
      )}
    </>
  )
  const classes = cn(
    "flex min-h-tap w-full items-center gap-3 px-4 py-3 text-left",
    (href || onClick) &&
      "transition-colors hover:bg-secondary/60 focus-visible:bg-secondary/60 focus-visible:outline-none active:bg-secondary",
    className
  )
  if (href) {
    return (
      <a data-slot="list-row" href={href} className={classes}>
        {body}
      </a>
    )
  }
  if (onClick) {
    return (
      <button data-slot="list-row" type="button" onClick={onClick} className={classes}>
        {body}
      </button>
    )
  }
  return (
    <div data-slot="list-row" className={classes}>
      {body}
    </div>
  )
}

export { ListRow }
