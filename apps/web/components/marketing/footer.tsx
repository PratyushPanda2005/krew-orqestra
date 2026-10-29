import { cn } from "@krew/ui/lib/utils"

import { footer, hero, waitlist } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { IstClock } from "./ist-clock"
import { LineWordmark } from "./line-wordmark"
import { ShaderGradient } from "./shader-gradient"
import { Split } from "./split"
import { wide } from "./styles"
import { WaitlistForm } from "./waitlist-form"

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
 * The closing block, after trionn's footer: the join call and the footer as one dark screen
 * over drifting smoke (the "smoke" shader). "Join the pilot" big on the left with the form
 * beside it, India time top right, contact and section links, and a giant KREW drawn in
 * lines that slide aside under the pointer.
 */
export function MarketingFooter() {
  return (
    <footer className="relative isolate flex min-h-svh flex-col overflow-clip bg-brand-navy-deep font-body text-brand-snow">
      <ShaderGradient kind="smoke" className="-z-10" />

      <section id="waitlist" aria-labelledby="waitlist-title" className={cn(wide, "pt-12 pb-10 md:pt-16 lg:pt-20")}>
        <div className="flex items-start justify-between gap-6">
          <p data-up="0" className={label}>
            {waitlist.eyebrow}
          </p>
          <IstClock label={footer.clock} />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 id="waitlist-title" data-blur className="font-display text-[3.25rem] leading-[0.95] font-semibold tracking-tight lg:text-[6rem]">
              <Split text={waitlist.title} scatter />
            </h2>
            <p data-up="2" className="mt-6 max-w-md text-base text-brand-snow/80 lg:text-lg">
              {waitlist.intro}
            </p>
          </div>
          {/* The form's button and focus ring take the brand green and navy here, not the app's pink. */}
          <div
            data-up="2"
            className="self-end rounded-2xl bg-card p-5 text-foreground shadow-2xl [--primary-foreground:var(--brand-navy)] [--primary:var(--brand-green)] [--ring:var(--brand-navy)] lg:col-span-5 lg:p-7"
          >
            <WaitlistForm />
          </div>
        </div>

        <div data-up="4" className="mt-14 grid gap-8 text-sm sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-4">
            <p className="text-brand-snow/60">{footer.copyright}</p>
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
      </section>

      <LineWordmark text={hero.name.toUpperCase()} className="mt-auto px-3 pb-4 text-brand-snow/70 lg:px-6" />
    </footer>
  )
}
