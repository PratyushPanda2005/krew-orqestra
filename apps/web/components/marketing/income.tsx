import { formatINR } from "@krew/schemas"
import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { income } from "@/app/(marketing)/copy"
import { growth, income as sample } from "@/lib/landing-samples"

import { growthArt, growthPhotos } from "./photos"
import { eyebrow, quiet, sectionY, wide } from "./styles"


/**
 * Orionix's fan, from 1024 px: the left card turns −9° about a point near its right edge and
 * the right card 5° about one near its left, each moved 32 px in and down; the middle stays
 * upright. Phones and tablets stack them straight.
 */
const fan = [
  "lg:origin-[94%_45%] lg:translate-x-8 lg:translate-y-8 lg:-rotate-9",
  "lg:relative lg:z-10",
  "lg:origin-[7%_45%] lg:-translate-x-8 lg:translate-y-8 lg:rotate-5",
]

/** Each card's headline numbers, where Orionix puts the client's role (example data, lib/landing-samples). */
const top = growth.byType[0]!
const lines = [
  income.figures.earned(formatINR(sample.received), formatINR(growth.average)),
  income.figures.work(growth.reviews.rating, growth.reviews.count, top.type.toLowerCase(), Math.round((top.paise / sample.received) * 100)),
  income.figures.goal(formatINR(growth.goals[0]!.saved), formatINR(growth.goals[0]!.target), growth.goals[0]!.by!),
]

/**
 * Income's opening screen. After trionn, it waits underneath "How a job runs" and is uncovered
 * as that section's layer slides away to the left (a curtain); so it renders inside How. After
 * Truck'N Roll's numbered list, in our layout, all in one screen: the section's name for screen
 * readers only, a small label and a line at the top, then the three examples in columns, each
 * a step (4 rem) lower than the one before: a wide landscape photo (square corners) on top, then
 * a hairline, the number and the title, the point and its example numbers. One column on phones.
 * Without the sideways scroll (phones, no JS, reduced motion) it's simply the next screen.
 */
export function IncomeIntro() {
  return (
    <section id="income" aria-labelledby="income-title" data-hz-under className={cn(wide, "relative isolate flex flex-col gap-10 py-12 md:min-h-svh md:justify-center md:py-16")}>
      <h2 id="income-title" className="sr-only">
        {income.title}
      </h2>
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <p className={eyebrow}>{income.eyebrow}</p>
        <p className={cn("max-w-[22rem] text-base font-medium", quiet)}>{income.lead}</p>
      </div>
      <ol className="grid gap-y-10 md:grid-cols-3 md:gap-x-4 lg:gap-x-6">
        {income.points.map((point, i) => {
          const photo = growthPhotos[i]!
          return (
            <li key={point} data-up={String(i * 2)} className={cn("flex flex-col gap-4", ["", "md:mt-16", "md:mt-32"][i])}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-navy/10 md:aspect-auto md:h-[min(34svh,18rem)]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 border-t border-current pt-4">
                <h3 className="flex items-baseline gap-x-4 font-display text-[clamp(1.5rem,1.1rem+1.2vw,2.25rem)] leading-none font-bold tracking-[-0.03em]">
                  <span className="text-sm font-medium tracking-normal tabular">{String(i + 1).padStart(2, "0")}</span>
                  <span>{income.tags[i]!.replace(/[[\]]/g, "").trim()}</span>
                </h3>
                <p className="max-w-[25rem] text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] leading-[1.3] font-medium">{point}.</p>
                <p className={cn("text-sm tabular", quiet)}>{lines[i]}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/**
 * The rest of the income block (PF-26): a line on the ledger, then a monitor of the creator's own
 * growth (what they earn, their work and reviews, a savings goal) in Orionix's "Client voices"
 * cards: three tall navy cards in white frames, fanned, each with a 3D illustration where
 * Orionix has the portrait (over a blurred copy of it): a ₹ coin, a pie chart, a camera. Then
 * the point, a hairline, the tag and its headline numbers.
 */
export function Income() {
  return (
    <div id="jobs" className={sectionY}>
      <p data-up="0" className={cn(wide, "max-w-3xl text-center text-lg text-balance lg:text-xl", quiet)}>
        {income.body}
      </p>

      {/* Orionix's "Client voices" fan: a band of thin lines behind three tilted cards. */}
      <div className="relative mt-16 lg:mt-24">
        <span
          aria-hidden
          className="absolute inset-x-0 top-[45%] hidden h-60 bg-[repeating-linear-gradient(to_bottom,color-mix(in_srgb,var(--brand-green)_45%,transparent)_0_1px,transparent_1px_9px)] opacity-60 lg:block"
        />
        <ul className="relative mx-auto flex max-w-[23rem] flex-col items-center gap-8 px-5 lg:max-w-none lg:flex-row lg:justify-center lg:gap-0 lg:px-0">
          {income.points.map((point, i) => {
            return (
              <li key={point} data-up="4" className={cn("w-full max-w-[22.5rem] lg:w-[22.5rem] lg:shrink-0", fan[i])}>
                {/* The card: a 4 px white frame (24 px corners) round a navy panel (20 px). */}
                <article className="rounded-3xl bg-white p-1 shadow-[0_0_0_1px_rgb(0_0_0/0.04),0_1px_2px_rgb(0_0_0/0.06),0_4px_6px_rgb(0_0_0/0.04),0_40px_40px_-24px_rgb(0_0_0/0.06)]">
                  <div className="relative isolate flex h-[34.3rem] flex-col items-center overflow-hidden rounded-[20px] bg-brand-navy-deep p-10 text-brand-snow">
                    {/* The illustration again, enlarged and blurred 10 px at 40% behind everything, as Orionix blurs the portrait. */}
                    <div aria-hidden className="absolute -inset-8 -z-10 flex items-center justify-center opacity-40 blur-[10px]">
                      <Image src={growthArt[i]!} alt="" sizes="440px" className="size-[27.5rem] object-contain" />
                    </div>
                    {/* Where Orionix has the round portrait (272 px box): the 3D illustration on its own. */}
                    <div aria-hidden className="flex size-68 shrink-0 items-center justify-center">
                      <Image src={growthArt[i]!} alt="" sizes="248px" className="size-62 max-w-none object-contain drop-shadow-[0_24px_24px_rgb(0_0_0/0.45)]" />
                    </div>
                    <div className="flex w-full flex-col items-center gap-5 text-center">
                      <h3 className="font-display text-2xl leading-7 font-medium tracking-[-0.04em] text-balance">{point}</h3>
                      <span aria-hidden className="h-px w-full bg-brand-snow/10" />
                      <div className="flex flex-col gap-1">
                        <p className="text-base leading-6 font-medium tracking-[-0.02em]">{income.tags[i]!.replace(/[[\]]/g, "").trim()}</p>
                        <p className="text-sm leading-5 tracking-[-0.02em] text-brand-snow/65">{lines[i]}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
