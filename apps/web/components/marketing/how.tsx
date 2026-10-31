import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { how } from "@/app/(marketing)/copy"

import { Gradient } from "./gradient"
import { IncomeIntro } from "./income"
import { howPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet } from "./styles"

function StepPhoto({ i, sizes, className }: { i: number; sizes: string; className?: string }) {
  const photo = howPhotos[i]!
  return (
    <div className={cn("relative overflow-clip bg-brand-navy/10", className)}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

const panel = "relative flex w-full shrink-0 flex-col items-center justify-center px-6 py-12 md:h-full md:w-[50vw] md:px-10 md:py-0 lg:px-20"

/** trionn's divider: a full-height hairline on a panel's left edge that draws downwards as it comes in. */
function Divider() {
  return <span aria-hidden data-hz-line className="absolute top-0 left-0 hidden h-full w-px origin-top bg-brand-navy/15 md:block" />
}

/**
 * "How a job runs", after trionn's "Selected work", matched to its measured motion
 * (plan landing-sections-reference §18). From 768 px with motion allowed, the section pins and:
 *   1. a row of half-screen panels slides left at 1.2 px per px scrolled: the title (letters
 *      come out of a blur in a scattered order), the 7 steps, a closing panel. Each card rises
 *      from 61% of the screen height to rest (power3.out) between 95% and 25% across, and each
 *      divider (top to bottom of the screen, moving with its panel) draws down as its panel
 *      crosses from the right edge to 70%;
 *   2. then the whole layer slides away left like a curtain (1.07 px per px), uncovering
 *      Income's opening screen, which waits underneath (IncomeIntro).
 * LandingMotion ties it to the scroll and sets data-play. Otherwise (phones, no JS, reduced
 * motion) the panels stack as a list and Income's opening simply follows. The title panel is
 * navy with snow text; the steps sit on a soft pearl wash.
 */
export function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="relative isolate">
      <div data-hz-track className="relative">
        <div data-hz-stage className="relative isolate overflow-clip">
          <div data-hz-layer className="relative isolate z-10 overflow-clip md:h-svh">
            <Gradient className="-z-10" />
            <ol data-hz-row className="flex flex-col md:h-full md:flex-row">
              <li className={cn(panel, "bg-brand-navy-deep text-brand-snow")}>
                <div className="flex max-w-md flex-col items-center gap-8 text-center">
                  <p data-up="0" className={eyebrow}>
                    {how.eyebrow}
                  </p>
                  <h2 id="how-title" data-blur className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight lg:text-[3.5rem]">
                    <Split text={how.title} scatter />
                  </h2>
                  <p data-up="2" className="text-base text-brand-snow/75 lg:text-lg">
                    {how.intro}
                  </p>
                </div>
              </li>
              {how.steps.map((s, i) => (
                <li key={s.title} className={panel}>
                  <Divider />
                  <article data-hz-card className="flex w-full max-w-[35rem] flex-col">
                    <div className="relative">
                      <StepPhoto i={i} sizes="(min-width: 768px) 35rem, 90vw" className="aspect-[670/460] w-full rounded-lg" />
                      <span className="absolute top-3 left-3 rounded-md bg-brand-navy-deep/45 px-2 py-1 text-xs font-semibold tracking-wide text-brand-snow uppercase ring-1 ring-brand-snow/20 backdrop-blur-md tabular">
                        {how.step(i + 1)}
                      </span>
                    </div>
                    <div className="mt-6 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                      <span className={cn("text-xs tabular", quiet)}>{how.of(i + 1, how.steps.length)}</span>
                    </div>
                    <p className={cn("mt-2 max-w-80 text-sm text-pretty lg:text-base", quiet)}>{s.body}</p>
                  </article>
                </li>
              ))}
              <li className={panel}>
                <Divider />
                <div data-hz-card className="flex max-w-sm flex-col items-center gap-6 text-center">
                  <p className="font-display text-2xl leading-snug font-semibold tracking-tight">{how.end}</p>
                  <PillLink href="#waitlist">{how.cta}</PillLink>
                </div>
                {/* The row's right edge: a hairline with a small plus, as trionn ends its row. */}
                <span aria-hidden className="absolute top-0 right-0 hidden h-full w-px bg-brand-navy/15 md:block">
                  <svg viewBox="0 0 12 12" className="absolute top-1/2 left-0 size-3 -translate-1/2 overflow-visible text-brand-navy/60" stroke="currentColor">
                    <line x1="6" y1="0" x2="6" y2="12" />
                    <line x1="0" y1="6" x2="12" y2="6" />
                  </svg>
                </span>
              </li>
            </ol>
          </div>
          <IncomeIntro />
        </div>
      </div>
    </section>
  )
}
