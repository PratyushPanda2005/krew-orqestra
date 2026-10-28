import { cn } from "@krew/ui/lib/utils"

import { footer, hero } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { PillLink } from "./pill-link"
import { ShaderGradient } from "./shader-gradient"
import { wide } from "./styles"

const ease = "transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)]"

/** Footer link with the reference's hover: a dot grows and the text slides from −8 px to 6 px. */
function FooterLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex min-h-tap items-center rounded-md transition-colors duration-400 hover:text-brand-snow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow",
        className
      )}
    >
      <span aria-hidden className={cn("absolute left-0 size-[0.35em] scale-0 rounded-full bg-brand-green group-hover:scale-100", ease)} />
      <span className={cn("group-hover:translate-x-[0.7em]", ease)}>{children}</span>
    </a>
  )
}

// A privacy policy link goes here once the page exists (needed before launch, plan §13).
/**
 * Footer after Vantra: a strip of drifting light (the "mesh" shader) over a dark footer, the
 * wordmark and tagline on the left, the sections as big stacked links on the right, and the
 * reference's link hover. No social icons yet.
 */
export function MarketingFooter() {
  return (
    <footer className="bg-brand-navy-deep font-body text-brand-snow">
      <div className="relative isolate h-36 overflow-clip lg:h-56">
        <ShaderGradient kind="mesh" className="-z-10" />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy-deep to-transparent" />
      </div>

      <div className={cn(wide, "grid gap-12 pt-6 pb-10 lg:grid-cols-12 lg:pb-14")}>
        <div data-up="0" className="flex flex-col justify-between gap-8 lg:col-span-5">
          <p className="font-display text-[4.5rem] leading-none font-semibold tracking-tight lowercase lg:text-[7rem]">{site.name}</p>
          <div>
            <p className="max-w-sm text-base text-brand-snow/75">{footer.tagline}</p>
            <PillLink href="#waitlist" className="mt-5">
              {hero.primary}
            </PillLink>
          </div>
        </div>

        <nav data-up="2" aria-label={footer.sections} className="lg:col-span-6 lg:col-start-7">
          <p className="text-xs font-medium tracking-wide text-brand-snow/60 uppercase">( {footer.sections} )</p>
          <ul className="mt-3">
            {hero.nav.map((l) => (
              <li key={l.href} className="border-b border-brand-snow/15">
                <FooterLink href={l.href} className="py-1.5 font-display text-[1.75rem] font-medium tracking-tight text-brand-snow/90 lg:text-[2.25rem]">
                  {l.label}
                </FooterLink>
              </li>
            ))}
          </ul>
          <div data-up="4" className="mt-8 grid gap-1 text-sm text-brand-snow/70 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-wide text-brand-snow/60 uppercase">( {footer.contact} )</p>
              <FooterLink href={`mailto:${site.contactEmail}`} className="break-all">
                {site.contactEmail}
              </FooterLink>
            </div>
          </div>
        </nav>
      </div>

      <div data-up="6" className={wide}>
        <div className="flex flex-col gap-1 border-t border-brand-snow/15 py-4 text-sm text-brand-snow/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <FooterLink href="https://unsplash.com/license">{footer.photos}</FooterLink>
        </div>
      </div>
    </footer>
  )
}
