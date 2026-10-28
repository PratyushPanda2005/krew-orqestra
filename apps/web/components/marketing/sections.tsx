import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { clients, faq, trust } from "@/app/(marketing)/copy"

import { stageMocks } from "./mocks"
import { clientPhotos, faqPhotos, trustPhotos } from "./photos"
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
 */
export function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="relative bg-brand-navy/[0.04] py-20 lg:py-32">
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
                <div className="max-w-md bg-gradient-to-br from-brand-navy-deep/80 via-brand-navy-deep/50 to-transparent p-6 pr-16 pb-16 lg:p-12 lg:pr-24 lg:pb-24">
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

/**
 * "What we promise", in the layout and effects of the reference's Services: numbered rows
 * that stack as you scroll (sticky, CSS only), each with a photo that zooms on hover.
 */
export function Trust() {
  return (
    <section id="trust" aria-labelledby="trust-title" className="relative py-20 lg:py-32">
      <div className={wide}>
        <p data-up="0" className={eyebrow}>
          {trust.eyebrow}
        </p>
        <h2 id="trust-title" data-split className={cn(sectionTitle, "mt-4")}>
          <Split text={trust.title} />
        </h2>

        <ol className="mt-12 lg:mt-20">
          {trust.items.map((t, i) => {
            const photo = trustPhotos[i]
            return (
              <li
                key={t.title}
                className={cn(
                  "sticky top-[5%] grid gap-5 border-t border-brand-navy/15 bg-brand-snow pt-6 pb-10 lg:grid-cols-12 lg:gap-6 lg:pt-8",
                  rowStack[i]
                )}
              >
                <div className="group relative aspect-[5/3] max-h-60 overflow-clip rounded-lg bg-brand-navy/10 lg:col-span-4 lg:max-w-[25rem]">
                  {photo ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25rem, 90vw"
                      className="object-cover object-[50%_20%] transition-transform duration-600 group-hover:scale-110"
                    />
                  ) : (
                    <UpiTile className="absolute inset-0" />
                  )}
                </div>
                <p className="text-sm font-medium tabular lg:col-span-1 lg:pt-1.5">[{String(i + 1).padStart(2, "0")}]</p>
                <h3 className="font-display text-2xl leading-tight font-semibold tracking-tight lg:col-span-3">{t.title}</h3>
                <p className={cn("text-base lg:col-span-4 lg:text-lg", quiet)}>{t.body}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/**
 * Questions, in the layout and effects of the reference's dark testimonials: on screens from
 * 768 px with motion allowed, the section pins and each answer card slides away downwards as
 * the next slides in from above, with a column of photos and a dot following along
 * (LandingMotion sets data-play). Otherwise it's a plain list of open cards.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" data-faq className="relative isolate bg-brand-navy-deep text-brand-snow">
      <div data-streaks aria-hidden className="absolute inset-0 -z-10" />
      <div data-faq-stage className="py-20 lg:py-32">
        <div className={cn(wide, "flex flex-col gap-10 md:flex-row md:items-start md:justify-between")}>
          <div className="md:max-w-sm lg:max-w-md">
            <p data-up="0" className={eyebrow}>
              {faq.eyebrow}
            </p>
            <h2 id="faq-title" data-split className={cn(sectionTitle, "mt-4")}>
              <Split text={faq.title} />
            </h2>
          </div>

          <div className="flex items-start gap-4 lg:gap-6">
            <div data-faq-photos aria-hidden className="hidden max-h-[38.5rem] overflow-clip lg:block">
              <div data-faq-photos-inner className="flex w-44 flex-col gap-4">
                {faqPhotos.map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-clip rounded-lg">
                    <Image src={src} alt="" fill sizes="11rem" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div data-faq-dots aria-hidden className="hidden flex-col gap-3 pt-6">
              {faq.items.map((item, i) => (
                <span key={item.q} data-faq-i={i} className="size-3 rounded-full border border-brand-snow/70 transition-opacity duration-300" />
              ))}
            </div>
            <ol data-faq-cards className="flex w-full flex-col gap-3 md:w-[30rem]">
              {faq.items.map((item, i) => (
                <li
                  key={item.q}
                  data-faq-i={i}
                  className="rounded-xl border border-brand-snow/20 bg-brand-navy-deep/90 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm text-brand-snow/70 tabular">[ {String(i + 1).padStart(2, "0")} ]</p>
                  <h3 className="mt-3 text-lg font-semibold lg:text-xl">{item.q}</h3>
                  <p className="mt-3 text-brand-snow/80 lg:text-lg">{item.a}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
