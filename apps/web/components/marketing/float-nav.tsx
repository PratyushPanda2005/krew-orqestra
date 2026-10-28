import { footer, hero } from "@/app/(marketing)/copy"

import { PillLink } from "./pill-link"

/**
 * Vantra's floating nav: a dark glass bar at the top once you're past the hero (LandingMotion
 * sets data-past-hero on <html>). The hero has its own nav, so without JS this stays out of sight.
 */
export function FloatNav() {
  return (
    <nav
      data-float-nav
      aria-label="Quick links"
      className="fixed top-3 left-1/2 z-50 flex h-14 w-[min(40rem,calc(100%-1.5rem))] items-center justify-between gap-3 rounded-2xl bg-brand-navy-deep/85 pr-1.5 pl-5 text-brand-snow ring-1 ring-brand-snow/15 backdrop-blur-md"
    >
      <a
        href="#main"
        className="inline-flex min-h-tap items-center rounded-md font-display text-2xl leading-none font-medium tracking-tight lowercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow"
      >
        {hero.name}
      </a>
      <p className="hidden text-xs font-medium tracking-wide text-brand-snow/80 uppercase sm:block">{footer.tagline}</p>
      <PillLink href="#waitlist" className="h-11 px-4 text-sm">
        {hero.primary}
      </PillLink>
    </nav>
  )
}
