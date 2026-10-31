import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { clients, faq, trust } from "@/app/(marketing)/copy"
import { site } from "@/lib/site"

import { Gradient } from "./gradient"
import { FaqOpener } from "./faq-opener"
import { clientPhotos, trustPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet, sectionTitle, sectionY, wide } from "./styles"

/** Reference values: sticky tops and gaps of the stacked cards (case study) and rows (services). */
const cardStack = ["lg:top-[2%] lg:mb-[18rem]", "lg:top-[17%] lg:mb-[9rem]", "lg:top-[30%]"]
const rowStack = ["lg:top-[5%] lg:mb-[18rem]", "lg:top-[18%] lg:mb-[12rem]", "lg:top-[30%] lg:mb-[6rem]", "lg:top-[44%]"]

/**
 * "Your clients never make an account", in the layout and effects of the reference's
 * Selected Work: the title rises letter by letter, then full-width photo cards stack (sticky)
 * and each one shrinks back as you scroll past it (LandingMotion). Each card is the
 * reference's case-study card (re-measured): light art filling it, the title and one line
 * of text on the image, a zoom and a round button on hover. A soft pearl wash behind.
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
          const photo = clientPhotos[i]!
          return (
            <li key={l.title} className={cn("sticky top-[2%] [perspective:1000px]", cardStack[i])}>
              {/* The reference's card: one link, 20 px corners, the image filling it, the title and a
                  light line of text straight on the image top-left, and a round button in the centre
                  on hover. Ours opens "Do my clients need to download anything?". */}
              <a
                data-shrink={i}
                href="#faq-q3"
                data-faq-open={2}
                className="group relative isolate block h-[25rem] overflow-clip rounded-[20px] bg-brand-navy/10 text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy md:h-auto md:aspect-[1096/710] md:max-h-[55rem]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 80vw, 92vw"
                  className="-z-10 object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 max-w-[35rem] p-6 md:p-10 lg:p-14">
                  <h3 className="font-display text-[1.75rem] leading-[1.3] font-medium tracking-tight lg:text-[2rem]">{l.title}</h3>
                  <p className="mt-1 text-base font-light">{l.body}</p>
                </div>
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 flex size-16 -translate-1/2 items-center justify-center rounded-full bg-white text-base font-medium opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.61,1,0.88,1)] group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
                >
                  {trust.more}
                </span>
              </a>
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
 * Questions, after Truck'N Roll's "Use Cases" accordion, on our light ground: a section split in
 * two. Left: the title, and at the bottom the line asking people to write in, with the pill
 * (last on phones).
 * Right: "( Questions )" and a short intro at the top, the accordion at the bottom. Each row sits
 * under a full-width hairline: the question, then a short answer at half strength on the same
 * line, and a + that turns into − (fading and scaling, as theirs). Rows fade to 70% under the
 * pointer. Native <details name>, so one is open at a time and it works without JS; the first
 * starts open. Answers slide open over 0.4 s with their ease (marketing.css) where the browser can
 * animate to auto height, and simply open elsewhere.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={cn("relative isolate", sectionY)}>
      <div className={cn(wide, "grid gap-12 lg:grid-cols-2 lg:gap-2.5")}>
        <div className="flex flex-col justify-between gap-10 max-lg:contents lg:pr-10">
          <h2 id="faq-title" data-blur className="font-display text-[2.75rem] leading-[0.95] font-semibold tracking-tight text-balance lg:text-[5rem]">
            <Split text={faq.title} scatter />
          </h2>
          <div data-up="2" className="flex flex-col items-start gap-5 max-lg:order-last">
            <p className="max-w-[17rem] text-base leading-snug font-medium">{faq.help}</p>
            <PillLink href={`mailto:${site.contactEmail}`}>
              {faq.helpCta}
            </PillLink>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:gap-24">
          <div data-up="0" className="grid grid-cols-2 gap-x-2.5 text-base leading-snug font-medium">
            <p>( {faq.eyebrow.replace(/[[\]]/g, "").trim()} )</p>
            <p className="max-w-[17rem]">{faq.intro}</p>
          </div>

          <div>
            {faq.items.map((item, i) => (
              <details key={item.q} id={`faq-q${i + 1}`} name="faq" open={i === 0} className="group">
                <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-2.5 border-t border-current py-4 transition-opacity duration-250 ease-[cubic-bezier(0.3,0.4,0,1)] outline-none select-none hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy [&::-webkit-details-marker]:hidden">
                  <h3 className="flex flex-wrap gap-x-[0.2em] text-lg leading-6 font-medium lg:text-xl">
                    <span>{item.q}</span>
                    <span className="opacity-50">{item.short}</span>
                  </h3>
                  <span aria-hidden className="relative size-4 shrink-0">
                    <svg viewBox="0 0 16 16" className="absolute inset-0 size-4 transition-[opacity,scale] duration-300 group-open:scale-90 group-open:opacity-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                    <svg viewBox="0 0 16 16" className="absolute inset-0 size-4 scale-90 opacity-0 transition-[opacity,scale] delay-50 duration-300 group-open:scale-100 group-open:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 8h12" />
                    </svg>
                  </span>
                </summary>
                <p className="max-w-[37.5rem] pb-4 text-lg leading-6 font-medium lg:text-xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <FaqOpener />
    </section>
  )
}
