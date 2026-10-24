import { formatINR, formatINRShort, type Paise } from "@krew/schemas"

import { cn } from "@krew/ui/lib/utils"

type MoneyProps = {
  paise: Paise
  /** "amount" is the big figure at the top of a job, invoice or money card. */
  size?: "sm" | "md" | "amount"
  /** Lakh/crore short form for tight spaces (₹1.25L). */
  short?: boolean
  tone?: "default" | "muted" | "success" | "warning" | "danger"
  className?: string
}

const toneClass: Record<NonNullable<MoneyProps["tone"]>, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  success: "text-success",
  warning: "text-warning",
  danger: "text-destructive",
}

/** Amounts in Indian format (₹1,25,000), tabular figures so columns line up. */
function Money({ paise, size = "md", short, tone = "default", className }: MoneyProps) {
  const text = short ? formatINRShort(paise) : formatINR(paise)
  return (
    <span
      data-amount
      data-slot="money"
      className={cn(
        "tabular whitespace-nowrap",
        size === "sm" && "text-sm",
        size === "md" && "text-base font-medium",
        size === "amount" && "condensed text-amount tracking-tight",
        toneClass[tone],
        className
      )}
    >
      {text}
    </span>
  )
}

export { Money }
