import { cn } from "@krew/ui/lib/utils"

import { footer, hero } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { IstClock } from "./ist-clock"
import { LineWordmark } from "./line-wordmark"
import { ShaderGradient } from "./shader-gradient"
import { wide } from "./styles"

const ease = "transition-transform duration-400 ease-[cubic-bezier(0.61,1,0.88,1)]"

/** Footer link with the reference's hover: a dot grows and the text slides along. */
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

const label = "text-xs font-medium tracking-wide text-brand-snow/60 uppercase"

// A privacy policy link goes here once the page exists (needed before launch, plan §13).
/**
 * The closing block, after trionn's footer: one dark screen over drifting smoke (the "smoke"
 * shader), which the photo screen above fades into. Kept short: copyright and India time,
 * contact and section links in one row, then a giant KREW drawn in lines that slide aside
 * under the pointer.
 */
export function MarketingFooter() {
  return (
    <footer className="relative isolate flex flex-col overflow-clip bg-brand-navy-deep font-body text-brand-snow">
      <ShaderGradient kind="smoke" className="-z-10" />
      {/* The smoke fades in from the photo screen's dark edge above, so there's no seam. */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-[5] h-24 bg-gradient-to-b from-brand-navy-deep to-transparent" />

      <div className={cn(wide, "pt-10 lg:pt-14")}>
        <div data-up="0" className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-4">
            <p className="text-brand-snow/60">{footer.copyright}</p>
            <IstClock label={footer.clock} />
            <p className={cn(label, "hidden lg:block")}>{footer.hint}</p>
          </div>
          <div className="lg:col-span-3 lg:col-start-7">
            <p className={label}>( {footer.contact} )</p>
            <FooterLink href={`mailto:${site.contactEmail}`} className="mt-1 break-all text-brand-snow/85">
              {site.contactEmail}
            </FooterLink>
          </div>
          <nav aria-label={footer.sections} className="lg:col-span-3">
            <p className={label}>( {footer.sections} )</p>
            <ul className="mt-1 grid grid-cols-2 gap-x-4 text-brand-snow/85">
              {hero.nav.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <LineWordmark text={hero.name.toUpperCase()} className="mt-10 px-3 pb-4 text-brand-snow/70 lg:mt-14 lg:px-6" />
    </footer>
  )
}
