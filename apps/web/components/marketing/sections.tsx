import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { clients, faq, trust } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { stageMocks } from "./mocks"
import { Gradient } from "./gradient"
import { FaqOpener } from "./faq-opener"
import { clientPhotos, trustPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet, sectionTitle, sectionY, wide } from "./styles"
import { UpiTile } from "./upi-tile"

const InvoiceMock = stageMocks[5]!

/** Reference values: sticky tops and gaps of the stacked cards (case study) and rows (services). */
const cardStack = ["lg:top-[2%] lg:mb-[18rem]", "lg:top-[17%] lg:mb-[9rem]", "lg:top-[30%]"]
const rowStack = ["lg:top-[5%] lg:mb-[18rem]", "lg:top-[18%] lg:mb-[12rem]", "lg:top-[30%] lg:mb-[6rem]", "lg:top-[44%]"]

/**
 * "Your clients never make an account", in the layout and effects of the reference's
 * Selected Work: the title rises letter by letter, then full-width photo cards stack (sticky)
 * and each one shrinks back as you scroll past it (LandingMotion). Photos zoom on hover.
 * Text sits on a glass panel, after Vantra's case cards; a soft pearl wash behind.
 */
export function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-title" className={cn("relative isolate", sectionY)}>
      <Gradient className="-z-10" />
      <div className={cn(wide, "flex flex-col items-center text-center")}>
        <p data-up="0" className={eyebrow}>
          {clients.eyebrow}
        </p>
        <h2 id="clients-title" data-split className={cn(sectionTitle, "mt-4 max-w-4xl")}>
          <Split text={clients.title} />
        </h2>
        <p data-up="2" className={cn("mt-5 max-w-xl text-base lg:text-lg", quiet)}>
          {clients.body}
        </p>
      </div>

      <ul data-stack className={cn(wide, "mt-12 flex flex-col gap-6 lg:mt-20 lg:gap-0 lg:px-[8.75%]")}>
        {clients.links.map((l, i) => {
          const photo = clientPhotos[i]
          return (
            <li key={l.title} className={cn("sticky top-[2%] [perspective:1000px]", cardStack[i])}>
              <div
                data-shrink={i}
                className="group relative isolate h-[70svh] min-h-[26rem] overflow-clip rounded-xl bg-brand-navy-deep text-brand-snow lg:h-[80svh] lg:max-h-[46rem]"
              >
                {photo ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 82vw, 92vw"
                    className="-z-10 object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                ) : (
                  <UpiTile className="absolute inset-0 -z-10 items-end lg:items-center lg:justify-end lg:pr-[12%]">
                    <div className="w-64 translate-y-16 lg:w-72 lg:translate-y-0">
                      <InvoiceMock />
                    </div>
                  </UpiTile>
                )}
                <div className="m-3 max-w-md rounded-xl bg-brand-navy-deep/45 p-5 ring-1 ring-brand-snow/15 backdrop-blur-md lg:m-6 lg:p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-[2rem]">{l.title}</h3>
                  <p className="mt-1.5 text-base text-brand-snow/90 lg:text-lg">{l.body}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <p data-up="0" className={cn(wide, "mt-10 max-w-2xl text-center text-base lg:mt-16 lg:text-lg", quiet)}>
        {clients.footnote}
      </p>
    </section>
  )
}

/** Split a body at its full stops for the reference's bullet list ("Not registered? You get…" stays one line). */
const sentences = (text: string) => text.match(/[^.]+\.+/g)?.map((t) => t.trim()) ?? [text]

/**
 * "What we promise", in the layout and effects of the reference's Services block (re-measured):
 * the title rises letter by letter; rows numbered downwards ([04]…[01]) stack as you scroll
 * (sticky at 5/18/30/44% with 18/12/6 rem below, CSS only); each row is a portrait image
 * (up to 25 rem wide), the number, the title, and a "What this means" list with a rule under
 * each line. On hover the image zooms to 1.1 over 0.6 s and a round button fades in (0.4 s),
 * which here opens the matching question.
 */
export function Trust() {
  const n = trust.items.length
  return (
    <section id="trust" aria-labelledby="trust-title" className={cn("relative isolate", sectionY)}>
      <div className={wide}>
        <p data-up="0" className={eyebrow}>
          {trust.eyebrow}
        </p>
        <h2 id="trust-title" data-split data-split-fast className={cn(sectionTitle, "mt-4 max-w-[36rem]")}>
          <Split text={trust.title} />
        </h2>

        <ol className="mt-12 lg:mt-20">
          {trust.items.map((t, i) => {
            const photo = trustPhotos[i]!
            return (
              <li
                key={t.title}
                className={cn(
                  "sticky top-[5%] flex flex-col gap-6 border-t border-brand-navy/15 bg-brand-snow pt-6 pb-8 last:pb-0 lg:flex-row lg:pt-8",
                  rowStack[i]
                )}
              >
                <div className="group relative aspect-[4/5] w-full max-w-[25rem] shrink-0 overflow-clip rounded-lg bg-brand-navy/10 max-lg:max-h-60">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25rem, 90vw"
                    className="object-cover object-[50%_20%] transition-transform duration-600 group-hover:scale-110"
                  />
                  {/* Touch screens have no hover, so there the button simply shows. */}
                  <a
                    href={`#faq-q${t.faq + 1}`}
                    data-faq-open={t.faq}
                    aria-label={trust.moreLabel(t.title)}
                    className="absolute top-1/2 left-1/2 flex size-18 -translate-1/2 items-center justify-center rounded-full bg-white text-base font-medium text-brand-navy opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.61,1,0.88,1)] group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy lg:size-25"
                  >
                    {trust.more}
                  </a>
                </div>
                <div className="grid w-full gap-4 lg:grid-cols-[0.25fr_1.2fr_2fr] lg:gap-6">
                  <p className="text-sm font-medium tabular">[{String(n - i).padStart(2, "0")}]</p>
                  <h3 className="font-display text-xl leading-tight font-semibold tracking-tight lg:text-2xl">{t.title}</h3>
                  <div>
                    <p className="font-medium">{trust.includes}</p>
                    <ul className={cn("mt-4 list-disc pl-5 text-base marker:text-brand-navy/50", quiet)}>
                      {sentences(t.body).map((line) => (
                        <li key={line} className="border-b border-brand-navy/15 py-2.5 pl-1">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/**
 * Questions, in the layout of RoomMaster's FAQ, in our style. Two columns: on the left (sticky
 * 96 px from the top on wide screens) a pill label, the title blurring in, and a card asking
 * people to write in, whose bottom edge steps up on the right with a curved notch. On the right,
 * white cards with a square + button that turns into ×; the first starts open, one at a time.
 * Native <details name>, so it works without JS; answers slide open where the browser can
 * animate to auto height (marketing.css), and simply open elsewhere.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={cn("relative isolate", sectionY)}>
      <Gradient className="-z-10" />
      <div className={cn(wide, "flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16")}>
        <div className="flex flex-col gap-7 lg:sticky lg:top-24 lg:w-1/3 lg:shrink-0">
          <p data-up="0" className="inline-flex items-center gap-2.5 self-start rounded-full bg-brand-navy/[0.06] px-4 py-3 text-sm font-medium">
            <span aria-hidden className="size-2 rounded-full bg-brand-green" />
            {faq.eyebrow.replace(/[[\]]/g, "").trim()}
          </p>
          <h2 id="faq-title" data-blur className={sectionTitle}>
            <Split text={faq.title} scatter />
          </h2>

          {/* The card: a body, then a tab under its left part joined by an inverted (concave) corner. */}
          <div data-up="2" className="mt-6 text-brand-navy">
            <div className="rounded-t-2xl rounded-br-2xl bg-[color-mix(in_srgb,var(--brand-green)_16%,var(--brand-snow))] px-8 pt-8 pb-6">
              <p className="max-w-xs text-lg leading-snug lg:text-xl">{faq.help}</p>
            </div>
            <div className="flex">
              <div className="rounded-b-2xl bg-[color-mix(in_srgb,var(--brand-green)_16%,var(--brand-snow))] px-8 pb-8">
                <PillLink href={`mailto:${site.contactEmail}`} variant="outline">
                  {faq.helpCta}
                </PillLink>
              </div>
              <span
                aria-hidden
                className="size-4 bg-[radial-gradient(circle_at_100%_100%,transparent_1rem,color-mix(in_srgb,var(--brand-green)_16%,var(--brand-snow))_1rem)]"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 lg:gap-7">
          {faq.items.map((item, i) => (
            <details key={item.q} id={`faq-q${i + 1}`} name="faq" open={i === 0} data-up={i < 3 ? String(i * 2) : undefined} className="group rounded-2xl bg-white ring-1 ring-brand-navy/5">
              <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-6 py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy lg:px-8 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium lg:text-lg">{item.q}</h3>
                <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-full border border-brand-navy/15">
                  <span className="relative flex size-4 items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-open:rotate-45">
                    <span className="absolute h-px w-4 bg-current" />
                    <span className="absolute h-4 w-px bg-current" />
                  </span>
                </span>
              </summary>
              <p className={cn("max-w-prose px-6 pb-7 text-base lg:px-8 lg:text-lg", quiet)}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <FaqOpener />
    </section>
  )
}
