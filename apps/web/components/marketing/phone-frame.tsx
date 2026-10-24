import { cn } from "@krew/ui/lib/utils"

/**
 * A phone-sized card for mock screens. Mocks are decorative copies of the app:
 * `inert` keeps them out of the tab order and away from screen readers, and the
 * step text next to each one carries the meaning.
 */
export function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div inert className={cn("mx-auto w-full max-w-[19rem] rounded-sheet border bg-background p-2 select-none", className)}>
      <div className="overflow-hidden rounded-xl border bg-card text-sm">
        <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-xs text-muted-foreground">
          <span className="tabular">11:00</span>
          <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">Example</span>
        </div>
        {children}
      </div>
    </div>
  )
}

export function MockHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="border-b px-4 pt-1 pb-3">
      <p className="condensed text-lg leading-tight font-semibold">{title}</p>
      {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
    </div>
  )
}
