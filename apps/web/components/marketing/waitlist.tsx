import { cn } from "@krew/ui/lib/utils"

import { waitlist } from "@/app/(marketing)/copy"

import { Split } from "./split"
import { quiet, sectionY, wide } from "./styles"
import { WaitlistForm } from "./waitlist-form"

/**
 * The join form, on snow after the questions: "Join the pilot" big on the left, the form
 * card beside it. It used to open the dark footer; the photo screen and Vantra's footer
 * follow it now.
 */
export function Waitlist() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className={sectionY}>
      <div className={wide}>
        <p data-up="0" className="text-xs font-medium tracking-wide text-brand-navy/70 uppercase">
          {waitlist.eyebrow}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 id="waitlist-title" data-blur className="font-display text-[3.25rem] leading-[0.95] font-semibold tracking-tight lg:text-[6rem]">
              <Split text={waitlist.title} scatter />
            </h2>
            <p data-up="2" className={cn("mt-6 max-w-md text-base lg:text-lg", quiet)}>
              {waitlist.intro}
            </p>
          </div>
          <div
            data-up="2"
            className="self-end rounded-2xl bg-card p-5 text-foreground shadow-2xl ring-1 ring-brand-navy/10 [--primary-foreground:var(--brand-navy)] [--primary:var(--brand-green)] [--ring:var(--brand-navy)] lg:col-span-5 lg:p-7"
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}
