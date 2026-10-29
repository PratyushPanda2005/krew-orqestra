import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { mess } from "@/app/(marketing)/copy"

import { messPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { letters, Split } from "./split"
import { eyebrow, quiet, wide } from "./styles"

type Key = keyof typeof messPhotos

/**
 * Where each photo sits on the desktop grid (4 columns × 3 rows), scattered like the
 * reference's "About" block; the pill takes the first cell. Phones get two staggered columns.
 */
const tiles: { key: Key; who: "client" | "crew"; at: string }[] = [
  { key: "dm", who: "client", at: "lg:col-start-2 lg:row-start-1" },
  { key: "date", who: "crew", at: "lg:col-start-3 lg:row-start-1" },
  { key: "whatsapp", who: "client", at: "lg:col-start-4 lg:row-start-1" },
  { key: "brief", who: "crew", at: "lg:col-start-3 lg:row-start-2" },
  { key: "mail", who: "client", at: "lg:col-start-1 lg:row-start-3" },
  { key: "note", who: "client", at: "lg:col-start-2 lg:row-start-3" },
  { key: "twoReplies", who: "crew", at: "lg:col-start-4 lg:row-start-3" },
]

/**
 * "The mess today", in the layout and effects of the reference's About block (LandingMotion
 * runs them): the statement lights up letter by letter as you scroll, the facts count up,
 * and each photo flips into place as it enters. Glass labels on the photos, after Vantra.
 */
export function Mess() {
  const total = letters(mess.title) + letters(mess.intro)
  return (
    <section id="mess" aria-labelledby="mess-title" className="relative isolate py-20 lg:py-36">
      <div className={cn(wide, "grid gap-6 lg:grid-cols-12 lg:gap-10")}>
        <p data-up="0" className={cn(eyebrow, "lg:col-span-3 lg:pt-3")}>
          {mess.eyebrow}
        </p>
        <h2
          id="mess-title"
          data-scrub-chars
          className="font-display text-[1.75rem] leading-[1.15] font-semibold tracking-tight text-balance lg:col-span-9 lg:text-[2.75rem]"
        >
          <Split text={mess.title} total={total} /> <Split text={mess.intro} start={letters(mess.title)} total={total} className={quiet} />
        </h2>
      </div>

      <div className={cn(wide, "mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10")}>
        <dl className="grid grid-cols-3 gap-4 lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:gap-8">
          {mess.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-l border-brand-navy/20 pl-4 lg:pl-6">
              <dt className={cn("text-sm", quiet)}>{s.label}</dt>
              <dd data-count className="font-display text-[2.5rem] leading-none font-semibold tracking-tight tabular lg:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:col-span-9 lg:grid-cols-4 lg:gap-6">
          {tiles.map((t, i) => {
            const photo = messPhotos[t.key]
            return (
              <figure key={t.key} className={cn(t.at, i % 2 === 1 && "max-lg:mt-12")}>
                <div className="overflow-hidden rounded-lg [perspective:100px]">
                  <div data-flip className="relative aspect-square overflow-hidden rounded-lg bg-brand-navy/10">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 16vw, 45vw" className="object-cover" />
                    <span className="absolute top-2 left-2 rounded-md bg-brand-navy-deep/40 px-2 py-1 text-[0.6875rem] font-medium text-brand-snow ring-1 ring-brand-snow/20 backdrop-blur-md">
                      {t.who === "client" ? mess.clientsTitle : mess.crewTitle}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2.5 text-sm leading-snug font-medium lg:text-base">{mess.captions[t.key]}</figcaption>
              </figure>
            )
          })}
          <div className="col-span-2 flex items-start lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:items-center">
            <PillLink href="#how" variant="outline" className="py-2 text-center leading-tight">
              {mess.closing}
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  )
}
