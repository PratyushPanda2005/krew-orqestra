import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { clients, faq, trust } from "@/app/(marketing)/copy"

import { stageMocks } from "./mocks"
import { Gradient } from "./gradient"
import { FaqStories } from "./faq-stories"
import { clientPhotos, trustPhotos } from "./photos"
import { Split } from "./split"
import { eyebrow, quiet, sectionTitle, wide } from "./styles"
import { UpiTile } from "./upi-tile"

const InvoiceMock = stageMocks[5]!

/** Reference values: sticky tops and gaps of the stacked cards (case study) and rows (services). */
const cardStack = ["lg:top-[2%] lg:mb-[18rem]", "lg:top-[17%] lg:mb-[9rem]", "lg:top-[30%]"]
const rowStack = ["lg:top-[5%] lg:mb-[18rem]", "lg:top-[18%] lg:mb-[12rem]", "lg:top-[30%] lg:mb-[6rem]", "lg:top-[44%]"]

/**
 * "Your clients never make an account", in the layout and effects of the reference's
 * Selected Work: the title rises letter by letter, then full-width photo cards stack (sticky)
 * and each one shrinks back as you scroll past it (LandingMotion). Photos zoom on hover.
 * Text sits on a glass panel, after Vantra's case cards; a grainy mist behind.
 */
export function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="relative isolate py-20 lg:py-32">
      <Gradient kind="mist" className="-z-10" />
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
 * which here opens the matching question. A grainy haze behind the title.
 */
export function Trust() {
  const n = trust.items.length
  return (
    <section id="trust" aria-labelledby="trust-title" className="relative isolate py-20 lg:py-32">
      <Gradient kind="haze" className="-z-10 h-[44rem]" />
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
                  "sticky top-[5%] flex flex-col gap-6 border-t border-brand-navy/15 bg-brand-snow pt-6 pb-8 lg:flex-row lg:pt-8",
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
                    className="absolute top-1/2 left-1/2 flex size-18 -translate-1/2 items-center justify-center rounded-full bg-white text-sm font-medium text-brand-navy opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.61,1,0.88,1)] group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy lg:size-25"
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
 * Questions, after trionn's "Client stories": a grainy pearl gradient, the title blurring in
 * letter by letter, then the questions as a list beside one big answer (FaqStories).
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative isolate py-20 lg:py-36">
      <Gradient kind="pearl" className="-z-10" />
      <div className={wide}>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <p data-up="0" className={eyebrow}>
              {faq.eyebrow}
            </p>
            <h2 id="faq-title" data-blur className={cn(sectionTitle, "mt-4")}>
              <Split text={faq.title} scatter />
            </h2>
          </div>
          <p data-up="2" className={cn("max-w-xs text-sm lg:col-span-3 lg:col-start-9 lg:self-end", quiet)}>
            {faq.intro}
          </p>
        </div>
        <FaqStories />
      </div>
    </section>
  )
}
