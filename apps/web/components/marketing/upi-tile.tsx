import { Money } from "@krew/ui/components/money"
import { cn } from "@krew/ui/lib/utils"

import { riya } from "@/lib/landing-samples"


/**
 * Stands in for a photo wherever the story is "paid by UPI": stock libraries only have card
 * terminals, which is off-message (plan landing-sections-reference §13). Plain navy and a
 * receipt. Decorative: the text beside it carries the meaning.
 */
export function UpiTile({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className={cn("relative isolate flex items-center justify-center overflow-hidden bg-brand-navy-deep text-brand-snow", className)}
    >
      {children ?? (
        <div className="flex w-[78%] max-w-64 flex-col gap-3 rounded-xl bg-brand-snow p-4 text-brand-navy shadow-2xl">
          <div className="flex items-center justify-between text-xs font-medium">
            <span>Advance · {riya.job}</span>
            <span className="rounded-full bg-brand-green px-2 py-0.5">Paid</span>
          </div>
          <Money paise={riya.advance} size="amount" className="font-display" />
          <div className="flex items-center gap-2 text-xs text-brand-navy/75">
            <span className="flex size-6 items-center justify-center rounded-md bg-brand-navy text-[0.625rem] font-bold text-brand-snow">
              UPI
            </span>
            From {riya.client} · to your UPI ID
          </div>
        </div>
      )}
    </div>
  )
}
