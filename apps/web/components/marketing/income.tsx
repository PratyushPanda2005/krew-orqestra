import { formatINR } from "@krew/schemas"
import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { income } from "@/app/(marketing)/copy"
import { growth, income as sample } from "@/lib/landing-samples"

import { growthArt } from "./photos"
import { sectionY, wide } from "./styles"

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

/** Which illustration each growth card shows. */
const card = ["earned", "work", "goal"] as const

/** The growth list, in order (example numbers from lib/landing-samples). */
const items = [
  { key: "earned", body: income.items.earned.body(formatINR(sample.received)) },
  { key: "average", body: income.items.average.body(formatINR(growth.average), growth.jobsDone) },
  { key: "reviews", body: income.items.reviews.body(growth.reviews.rating, growth.reviews.count, growth.repeatClients) },
] as const

/**
 * The growth list, after Truck'N Roll's numbered list (its "Use Cases"), three items in one
 * screen: three columns from 768 px, each a step (4 rem) lower than the one before. Each item: a
 * hairline across the top that draws in from the left as it comes in (0.8 s, power3 in-out, 60 ms
 * apart; marketing.css), "( 1 )" and the title, a line of text, and a picture (4.3:3, 4 px
 * corners with a 40 px bottom-right): a 3D illustration on navy. Phones get one column.
 */
function GrowthItems() {
  return items.map((item, i) => {
    const copy = income.items[item.key]
    return (
      <li
        key={item.key}
        data-rule
        style={{ "--i": i } as React.CSSProperties}
        className={cn(
          "relative flex flex-col items-start gap-4 pt-3 before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:bg-current",
          ["", "md:mt-16", "md:mt-32"][i]
        )}
      >
        <h3 className="flex w-full gap-x-5 pr-2.5 font-display text-[clamp(1.75rem,1.2rem+1.5vw,2.5rem)] leading-[0.95] font-bold tracking-[-0.03em] lg:gap-x-8">
          <span className="shrink-0 tabular">( {i + 1} )</span>
          <span>{copy.title}</span>
        </h3>
        <p className="max-w-[25rem] text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] leading-[1.25] font-medium">{item.body}</p>
        <div className="relative isolate mt-2 aspect-[4.3/3] w-full max-w-[21.875rem] overflow-hidden bg-brand-navy-deep [clip-path:inset(0_round_0.25rem_0.25rem_2.5rem_0.25rem)] md:h-[min(28svh,15.25rem)] md:w-auto">
          <span aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_45%,color-mix(in_srgb,var(--brand-violet)_45%,transparent),transparent_70%)]" />
          <Image src={growthArt[item.key]} alt="" fill sizes="(min-width: 768px) 350px, 90vw" className="object-contain p-6 drop-shadow-[0_24px_24px_rgb(0_0_0/0.45)]" />
        </div>
      </li>
    )
  })
}

/**
 * Income's opening screen. After trionn, it waits underneath "How a job runs" and is uncovered
 * as that section's layer slides away to the left (a curtain); so it renders inside How. In
 * Truck'N Roll's structure: the section's name for screen readers only, "( Across all your
 * jobs )" and a line top right, then the three-item growth list, all in one screen. Without the sideways
 * scroll (phones, no JS, reduced motion) it's simply the next screen.
 */
export function IncomeIntro() {
  return (
    <section id="income" aria-labelledby="income-title" data-hz-under className={cn(wide, "relative isolate flex flex-col gap-10 pt-12 md:min-h-svh md:pt-24 lg:pt-28")}>
      <h2 id="income-title" className="sr-only">
        {income.title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 md:gap-2.5">
        <div className="max-md:hidden" />
        <div className="grid grid-cols-2 gap-x-2.5 text-base leading-snug font-medium">
          <p>( {income.eyebrow} )</p>
          <p className="max-w-[17rem]">{income.lead}</p>
        </div>
      </div>
      <ol className="grid gap-y-10 md:grid-cols-3 md:gap-x-2.5">
        <GrowthItems />
      </ol>
    </section>
  )
}

/**
 * The rest of the income block (PF-26): a monitor of the creator's own growth (what they earn, their work and reviews, a savings goal) in Orionix's "Client voices"
 * cards: three tall navy cards in white frames, fanned, each with a 3D illustration where
 * Orionix has the portrait (over a blurred copy of it): a ₹ coin, a pie chart, a camera. Then
 * the point, a hairline, the tag and its headline numbers.
 */
export function Income() {
  return (
    <div id="jobs" className={sectionY}>
      {/* Orionix's "Client voices" fan: a band of thin lines behind three tilted cards. */}
      <div className="relative">
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
                      <Image src={growthArt[card[i]!]} alt="" sizes="440px" className="size-[27.5rem] object-contain" />
                    </div>
                    {/* Where Orionix has the round portrait (272 px box): the 3D illustration on its own. */}
                    <div aria-hidden className="flex size-68 shrink-0 items-center justify-center">
                      <Image src={growthArt[card[i]!]} alt="" sizes="248px" className="size-62 max-w-none object-contain drop-shadow-[0_24px_24px_rgb(0_0_0/0.45)]" />
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
