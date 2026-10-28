import { cn } from "@krew/ui/lib/utils"

import { footer, hero } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { PillLink } from "./pill-link"
import { quiet, wide } from "./styles"

/** Footer link with the reference's hover: a dot grows and the text slides from −8 px to 6 px. */
function FooterLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex min-h-tap items-center rounded-md text-base transition-colors duration-400 hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy",
        className
      )}
    >
      <span aria-hidden className="absolute left-0 size-[0.35rem] scale-0 rounded-full bg-brand-navy transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)] group-hover:scale-100" />
      <span className="transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)] group-hover:translate-x-[0.875rem]">{children}</span>
    </a>
  )
}

// A privacy policy link goes here once the page exists (needed before launch, plan §13).
/** Footer after the reference: the tagline where its newsletter sits, links rising in on the right. No social icons yet. */
export function MarketingFooter() {
  return (
    <footer className="bg-brand-snow py-14 font-body text-brand-navy lg:py-20">
      <div className={cn(wide, "grid gap-10 lg:grid-cols-12")}>
        <div data-up="0" className="lg:col-span-5">
          <p className="font-display text-[1.75rem] leading-none font-medium tracking-tight lowercase">{site.name}</p>
          <p className="mt-6 font-display text-2xl leading-snug font-semibold tracking-tight lg:text-[1.75rem]">{footer.tagline}</p>
          <PillLink href="#waitlist" className="mt-6">
            {hero.primary}
          </PillLink>
        </div>
        <nav data-up="2" aria-label={footer.sections} className="lg:col-span-3 lg:col-start-8">
          <p className="font-medium">{footer.sections}</p>
          <ul className={cn("mt-2", quiet)}>
            {hero.nav.map((l) => (
              <li key={l.href}>
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>
        <div data-up="4" className="lg:col-span-2">
          <p className="font-medium">{footer.contact}</p>
          <FooterLink href={`mailto:${site.contactEmail}`} className={cn("mt-2 break-all", quiet)}>
            {site.contactEmail}
          </FooterLink>
        </div>
      </div>
      <div data-up="6" className={cn(wide, "mt-14")}>
        <div className={cn("flex flex-col gap-1 border-t border-brand-navy/15 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between", quiet)}>
          <p>{footer.copyright}</p>
          <FooterLink href="https://unsplash.com/license" className="text-sm">
            {footer.photos}
          </FooterLink>
        </div>
      </div>
    </footer>
  )
}
