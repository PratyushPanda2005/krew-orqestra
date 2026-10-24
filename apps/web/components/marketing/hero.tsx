import { StageRail } from "@krew/ui/components/stage-rail"

import { hero } from "@/app/(marketing)/copy"
import { heroSequence } from "@/lib/hero-sequence"

import { HeroRail } from "./hero-rail"
import { container, linkButton } from "./styles"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-14 lg:pt-20 lg:pb-24">
      <div className={container}>
        <p className="text-sm font-medium text-primary lg:text-base">{hero.eyebrow}</p>
        <h1
          id="hero-title"
          className="condensed mt-3 max-w-[14ch] text-[2.75rem] leading-[0.95] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {hero.title}
        </h1>
        <p className="mt-4 max-w-[38rem] text-base text-muted-foreground lg:text-xl">{hero.sub}</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <a href="#waitlist" className={linkButton()}>
            {hero.primary}
          </a>
          <a href="#how" className={linkButton("outline")}>
            {hero.secondary}
          </a>
        </div>
        <div className="mt-10 lg:mt-16">
          <p className="sr-only">{hero.railSummary}</p>
          <div data-hero className="flex flex-col gap-3">
            <StageRail stage="paid" />
            <p data-hero-caption className="min-h-6 text-base font-medium">
              {heroSequence.at(-1)!.caption}
            </p>
          </div>
          <HeroRail />
          <p className="mt-1 text-sm text-muted-foreground">{hero.railNote}</p>
        </div>
      </div>
    </section>
  )
}
