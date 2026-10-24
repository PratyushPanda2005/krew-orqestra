import { cva } from "class-variance-authority"

/** StatusPill classes on their own, for client code that must not pull in the class merger. */
export const statusPill = cva(
  "inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "bg-secondary text-secondary-foreground",
        primary: "bg-accent text-accent-foreground",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        danger: "bg-danger-soft text-destructive",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
)
