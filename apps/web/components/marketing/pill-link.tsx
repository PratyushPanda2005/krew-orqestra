import { cn } from "@krew/ui/lib/utils"

import { outlinePill, pill, snowPill } from "./styles"

const ease = "transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)]"

/**
 * A pill link with the reference's hover: a dot grows in front of the text as the text
 * slides 8 px right, with a soft inner glow (in the pill classes). CSS only.
 */
export function PillLink({
  href,
  variant = "green",
  className,
  children,
}: {
  href: string
  variant?: "green" | "outline" | "snow"
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className={cn({ green: pill, outline: outlinePill, snow: snowPill }[variant], "group gap-2", className)}>
      <span aria-hidden className={cn("size-2 shrink-0 scale-0 rounded-full bg-current group-hover:scale-100", ease)} />
      <span className={cn("-translate-x-2 group-hover:translate-x-0", ease)}>{children}</span>
    </a>
  )
}
