import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { waitlist } from "@/app/(marketing)/copy"

import { trailPhotos } from "./photos"
import { Split } from "./split"
import { eyebrow, sectionTitle, wide } from "./styles"
import { WaitlistForm } from "./waitlist-form"

/**
 * "Join the pilot", in the layout and effects of the reference's closing CTA: navy with
 * streaks, the title rising letter by letter, the form rising after it, and a row of creator
 * photos running endlessly along the bottom. The form sits on a light card.
 */
export function Join() {
  const row = trailPhotos.map((src, i) => (
    <div key={i} className="relative aspect-square w-40 shrink-0 overflow-clip rounded-md lg:w-64">
      <Image src={src} alt="" fill sizes="(min-width: 1024px) 16rem, 10rem" className="object-cover" />
    </div>
  ))

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="relative isolate overflow-clip border-t border-brand-snow/10 bg-brand-navy-deep pt-24 text-brand-snow lg:pt-36"
    >
      <div data-streaks aria-hidden className="absolute inset-0 -z-10" />
      <div className={cn(wide, "flex flex-col items-center text-center")}>
        <p data-up="0" className={eyebrow}>
          {waitlist.eyebrow}
        </p>
        <h2 id="waitlist-title" data-split data-split-fast className={cn(sectionTitle, "mt-4")}>
          <Split text={waitlist.title} />
        </h2>
        <div data-up="2" className="flex w-full flex-col items-center">
          <p className="mt-5 max-w-xl text-base text-brand-snow/80 lg:text-lg">{waitlist.intro}</p>
          {/* The form's button and focus ring take the brand green and navy here, not the app's pink. */}
          <div className="mt-10 w-full max-w-xl rounded-2xl bg-card p-5 text-left text-foreground shadow-2xl [--primary-foreground:var(--brand-navy)] [--primary:var(--brand-green)] [--ring:var(--brand-navy)] lg:p-8">
            <WaitlistForm />
          </div>
        </div>
      </div>

      <div data-up="4" aria-hidden className="mt-20 flex overflow-hidden lg:mt-28">
        <div data-marquee="photos" className="flex shrink-0 gap-4 pr-4 lg:gap-6 lg:pr-6">
          {row}
          {row}
        </div>
      </div>
    </section>
  )
}
