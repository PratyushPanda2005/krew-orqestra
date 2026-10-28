import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { how } from "@/app/(marketing)/copy"

import { howPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet, wide } from "./styles"
import { UpiTile } from "./upi-tile"

function StepPhoto({ i }: { i: number }) {
  const photo = howPhotos[i]
  const box = "aspect-[4/5] w-44 overflow-hidden rounded-xl lg:w-56"
  if (!photo) return <UpiTile className={box} />
  return (
    <div className={cn(box, "relative bg-brand-navy/10")}>
      <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 14rem, 11rem" className="object-cover" />
    </div>
  )
}

function Star() {
  return (
    <svg data-star viewBox="0 0 24 24" className="size-[0.75em] shrink-0" fill="currentColor">
      <path d="M10.6 1h2.8v7.6l5.4-5.4 2 2-5.4 5.4H23v2.8h-7.6l5.4 5.4-2 2-5.4-5.4V23h-2.8v-7.6l-5.4 5.4-2-2 5.4-5.4H1v-2.8h7.6L3.2 5.2l2-2 5.4 5.4z" />
    </svg>
  )
}

/**
 * "How a job runs" in the layout and effects of the reference's Process block. A running
 * title with a turning star, then the section pins (sticky) while you scroll: each step's
 * card (label and photo) swings out to the right as the next swings in from the left, and
 * the text card drops away as the next rises. LandingMotion ties it to the scroll and sets
 * data-play; without it (no JS, reduced motion) the steps are a plain list.
 */
export function How() {
  const words = (
    <span className="flex shrink-0 items-center gap-[0.3em] pr-[0.3em]">
      <span className="text-brand-navy/35">{how.marquee}</span>
      <Star />
      <span>{how.marquee}</span>
      <Star />
    </span>
  )

  return (
    <section id="how" aria-labelledby="how-title" className="relative overflow-clip bg-brand-navy/[0.04] pt-20 lg:pt-32">
      <div className={cn(wide, "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between")}>
        <div>
          <p data-up="0" className={eyebrow}>
            {how.eyebrow}
          </p>
          <h2 id="how-title" data-split className="mt-3 font-display text-[1.75rem] leading-tight font-semibold tracking-tight lg:text-[2.75rem]">
            <Split text={how.title} />
          </h2>
        </div>
        <p data-up="2" className={cn("max-w-md text-base lg:text-lg", quiet)}>
          {how.intro}
        </p>
      </div>

      <div data-how-track className="relative mt-10 lg:mt-14">
        <div data-how-stage className="flex flex-col items-center overflow-clip pb-16">
          <div
            aria-hidden
            className="flex w-full overflow-hidden font-display text-[clamp(4rem,11vw,10rem)] leading-none font-bold tracking-tight whitespace-nowrap uppercase"
          >
            <div data-marquee className="flex shrink-0">
              {words}
              {words}
              {words}
              {words}
            </div>
          </div>

          {/* The dashed circle the cards swing along (decoration, as in the reference). */}
          <span
            data-how-circle
            aria-hidden
            className="pointer-events-none absolute -bottom-[70%] left-1/2 hidden size-[80vw] -translate-x-1/2 rounded-full border border-dashed border-brand-navy/40"
          />

          {/* Each li's two parts become grid items of the ol (display: contents), so in play mode
              every step's card shares one cell and every text card shares the next. */}
          <ol data-how-steps className="mt-10 flex w-full flex-col items-center gap-16 px-5 lg:mt-14">
            {how.steps.map((s, i) => (
              <li key={s.title} data-how-i={i} className="flex w-full flex-col items-center gap-6">
                <div data-how-card className="flex flex-col items-center gap-4">
                  <p className="rounded bg-brand-navy px-2 py-1 text-xs font-semibold tracking-wide text-brand-snow uppercase tabular">
                    {how.step(i + 1)}
                  </p>
                  <StepPhoto i={i} />
                </div>
                <div data-how-text className="w-full max-w-[34rem] rounded-xl bg-card px-5 py-5 text-center shadow-sm lg:px-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-[2rem]">{s.title}</h3>
                  <p className={cn("mt-2 text-base text-pretty", quiet)}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={cn(wide, "relative flex justify-center pb-16 lg:pb-24")}>
        <PillLink href="#waitlist">{how.cta}</PillLink>
      </div>
    </section>
  )
}
