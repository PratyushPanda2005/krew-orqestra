import { Money } from "@krew/ui/components/money"
import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { how } from "@/app/(marketing)/copy"
import { riya } from "@/lib/landing-samples"

import { Gradient } from "./gradient"
import { howPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet } from "./styles"
import { UpiTile } from "./upi-tile"

/** A step's photo; the Advance step has none, so it shows the UPI tile (compact on small tiles). */
function StepPhoto({ i, sizes, compact, className }: { i: number; sizes: string; compact?: boolean; className?: string }) {
  const photo = howPhotos[i]
  if (!photo)
    return (
      <UpiTile className={className}>
        {compact ? (
          <div className="rounded-lg bg-brand-snow px-3 py-2 text-center text-brand-navy shadow-xl">
            <Money paise={riya.advance} size="md" className="font-display font-semibold" />
            <p className="text-[0.625rem] font-medium">Paid by UPI</p>
          </div>
        ) : undefined}
      </UpiTile>
    )
  return (
    <div className={cn("relative overflow-clip bg-brand-navy/10", className)}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

const panel = "flex w-full shrink-0 flex-col items-center justify-center border-brand-navy/15 px-6 py-16 md:h-full md:w-[50vw] md:border-r md:px-10 md:py-0"

/**
 * "How a job runs", after trionn's "Selected work" and "Explorations".
 *
 * 1. From 768 px with motion allowed, the section pins and a row of half-screen panels slides
 *    sideways as you scroll down: the title (letters blur in, in a scattered order), the 7
 *    steps (each card rises 25 px as it slides in), then a closing panel.
 * 2. Then the 7 photos fly past on a curved 3D ribbon and settle into a grid: "Seven steps,
 *    one place."
 * LandingMotion ties both to the scroll and sets data-play. Otherwise (phones, no JS,
 * reduced motion) the panels stack as a list and the photos sit in a plain grid.
 * Behind both, grainy pearl gradients (trionn's white-to-grey, in the brand's tints).
 */
export function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="relative isolate">
      <div data-hz-track className="relative">
        <div data-hz-stage className="relative isolate overflow-clip md:h-svh">
          <Gradient kind="pearl" className="-z-10" />
          <ol data-hz-row className="flex flex-col md:h-full md:flex-row">
            <li className={panel}>
              <div className="flex max-w-md flex-col items-center gap-8 text-center">
                <p data-up="0" className={eyebrow}>
                  {how.eyebrow}
                </p>
                <h2 id="how-title" data-blur className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight lg:text-[3.5rem]">
                  <Split text={how.title} scatter />
                </h2>
                <p data-up="2" className={cn("text-base lg:text-lg", quiet)}>
                  {how.intro}
                </p>
              </div>
            </li>
            {how.steps.map((s, i) => (
              <li key={s.title} className={panel}>
                <article data-hz-card className="flex w-full max-w-[26rem] flex-col">
                  <div className="relative">
                    <StepPhoto i={i} sizes="(min-width: 768px) 26rem, 90vw" className="aspect-[16/11] w-full rounded-md" />
                    <span className="absolute top-3 left-3 rounded-md bg-brand-navy-deep/45 px-2 py-1 text-xs font-semibold tracking-wide text-brand-snow uppercase ring-1 ring-brand-snow/20 backdrop-blur-md tabular">
                      {how.step(i + 1)}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                    <span className={cn("text-xs tabular", quiet)}>{how.of(i + 1, how.steps.length)}</span>
                  </div>
                  <p className={cn("mt-2 text-sm text-pretty lg:text-base", quiet)}>{s.body}</p>
                  <span aria-hidden className="mt-4 h-px w-full origin-left bg-brand-navy/25" />
                </article>
              </li>
            ))}
            <li className={panel}>
              <div className="flex max-w-sm flex-col items-center gap-6 text-center">
                <p className="font-display text-2xl leading-snug font-semibold tracking-tight">{how.end}</p>
                <PillLink href="#waitlist">{how.cta}</PillLink>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div data-ribbon-track className="relative">
        <div data-ribbon-stage className="relative isolate overflow-clip py-16 md:h-svh md:py-0">
          <Gradient kind="silver" className="-z-10" />
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden flex-col justify-center px-10 font-display text-[clamp(3rem,8vw,8.5rem)] leading-none font-semibold tracking-tight uppercase md:flex">
            <span data-ribbon-word>{how.finale.left}</span>
            <span data-ribbon-word className="self-end">
              {how.finale.right}
            </span>
          </div>
          <p className="px-6 text-center font-display text-3xl font-semibold tracking-tight md:sr-only">
            {how.finale.left} {how.finale.right}
          </p>
          <p className={cn("mt-2 px-6 text-center text-xs font-medium tracking-wide uppercase md:absolute md:bottom-10 md:left-1/2 md:mt-0 md:-translate-x-1/2", quiet)} data-ribbon-word>
            {how.finale.caption}
          </p>
          <ul data-ribbon className="mt-8 grid grid-cols-2 gap-3 px-6 md:mt-0">
            {how.steps.map((s, i) => (
              <li key={s.title} data-tile className="relative">
                <StepPhoto i={i} compact sizes="(min-width: 768px) 15rem, 45vw" className="aspect-[4/3] w-full rounded-md shadow-lg" />
                <span className="absolute bottom-2 left-2 rounded bg-brand-navy-deep/45 px-1.5 py-0.5 text-[0.6875rem] font-medium text-brand-snow ring-1 ring-brand-snow/20 backdrop-blur-md">
                  {s.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
