import { hero } from "@/app/(marketing)/copy"

import { PillLink } from "./pill-link"
import { snowFocus } from "./styles"

const navLink = `inline-flex min-h-tap items-center lg:min-h-10 rounded-md text-base text-brand-snow/90 hover:text-brand-snow ${snowFocus}`

/**
 * The hero's own nav, laid over it like the reference: numbered links top-left, wordmark
 * centred, pill on the right. Below 1024 px it folds into a <details> menu, so it works without JS.
 */
export function HeroNav() {
  const links = hero.nav.map((l, i) => (
    <li key={l.href}>
      <a href={l.href} className={navLink}>
        [{i + 1}] {l.label}
      </a>
    </li>
  ))

  return (
    <header className="relative z-20 flex items-start justify-between px-5 pt-5 lg:px-10 lg:pt-6">
      <nav aria-label="Sections" className="hidden gap-7 lg:flex">
        <p aria-hidden className="pt-2 font-medium text-brand-snow/90">
          [-] {hero.navLabel}
        </p>
        <ul>{links}</ul>
      </nav>

      <a
        href="/"
        className={`font-display text-[1.75rem] leading-none font-medium tracking-tight lowercase lg:absolute lg:top-7 lg:left-1/2 lg:-translate-x-1/2 inline-flex min-h-tap items-center rounded-md lg:min-h-0 ${snowFocus}`}
      >
        {hero.name}
      </a>

      <PillLink href="#waitlist" className="hidden focus-visible:outline-brand-snow lg:inline-flex">
        {hero.primary}
      </PillLink>

      <details className="group lg:hidden">
        <summary
          aria-label={hero.navLabel}
          className="flex size-12 cursor-pointer list-none items-center justify-center bg-brand-snow text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow [&::-webkit-details-marker]:hidden"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-6 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg aria-hidden viewBox="0 0 24 24" className="hidden size-6 group-open:block" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </summary>
        <div className="absolute inset-x-0 top-full mx-5 mt-2 flex flex-col gap-4 bg-brand-navy p-5 ring-1 ring-brand-snow/15">
          <ul>{links}</ul>
          <PillLink href="#waitlist" className="focus-visible:outline-brand-snow">
            {hero.primary}
          </PillLink>
        </div>
      </details>
    </header>
  )
}
