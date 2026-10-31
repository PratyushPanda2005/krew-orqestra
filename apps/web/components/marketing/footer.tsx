import { cn } from "@krew/ui/lib/utils"

import { footer, hero, waitlist } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { IstClock } from "./ist-clock"
import { wide } from "./styles"

const ease = "transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)]"

/** Footer link with our hover: a green dot grows and the text slides along. */
function FooterLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex min-h-tap items-center rounded-md transition-colors duration-240 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow",
        className
      )}
    >
      <span aria-hidden className={cn("absolute left-0 size-[0.35em] scale-0 rounded-full bg-brand-green group-hover:scale-100", ease)} />
      <span className={cn("group-hover:translate-x-[0.7em]", ease)}>{children}</span>
    </a>
  )
}

// A privacy policy link goes in the small links once the page exists (needed before launch, plan §13).
/**
 * Vantra's footer, in our colours and type: a dark panel with rounded top corners that rides
 * 24 px up over the photo screen, above the bottom blur so its own text stays sharp. On the
 * left the wordmark and a short line about Krew; on the right the sections as big links over
 * thin rules, then small links in two columns. A rule, then the copyright and India time.
 * One column on phones.
 */
export function MarketingFooter() {
  const big = [{ href: "#main", label: footer.home }, ...hero.nav]

  return (
    <footer className="relative z-45 -mt-6 rounded-t-[1.25rem] bg-brand-navy-deep font-body text-brand-snow">
      <div className={cn(wide, "pt-16 pb-6 lg:pt-24")}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:gap-24">
            <a
              href="#main"
              className="inline-flex min-h-tap items-center self-start rounded-md font-display text-6xl leading-none font-medium tracking-tight lowercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow"
            >
              {hero.name}
            </a>
            <p className="max-w-[32rem] text-base leading-normal lg:max-w-[20rem]">{footer.about}</p>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7 lg:gap-28">
            <nav aria-label={footer.sections}>
              <ul className="leading-none tracking-[-0.03em]">
                {big.map((l) => (
                  <li key={l.href} className="border-b border-brand-snow/15">
                    <FooterLink href={l.href} className="w-full py-1 text-[2rem] font-medium hover:text-brand-snow/80 lg:text-[2.25rem]">
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul aria-label={footer.more} className="grid gap-x-6 sm:grid-cols-2 gap-y-1 text-lg tracking-[-0.01em] text-brand-snow/80">
              <li>
                <FooterLink href="#waitlist" className="hover:text-brand-snow">
                  {waitlist.title}
                </FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${site.contactEmail}`} className="break-words hover:text-brand-snow">
                  {site.contactEmail}
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-brand-snow/15 pt-6 text-sm text-brand-snow/65">
          <p>
            {footer.copyright} · {footer.tagline}
          </p>
          <IstClock label={footer.clock} />
        </div>
      </div>
    </footer>
  )
}
