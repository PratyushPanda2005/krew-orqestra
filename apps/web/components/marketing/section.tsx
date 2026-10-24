import { cn } from "@krew/ui/lib/utils"

import { container } from "./styles"

type SectionProps = {
  id: string
  title: string
  intro?: string
  className?: string
  children: React.ReactNode
}

/** A page section with its h2, so the heading order stays right. */
export function Section({ id, title, intro, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("border-t py-14 lg:py-24", className)}>
      <div className={container}>
        <h2 id={`${id}-title`} className="condensed text-3xl font-semibold tracking-tight text-balance lg:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-prose text-base text-muted-foreground lg:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
