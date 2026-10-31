import { getImageProps } from "next/image"

import { mess } from "@/app/(marketing)/copy"

import { MessRibbon, type RibbonPanel } from "./mess-ribbon"
import { messPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { ribbon } from "./ribbon"
import { letters, Split } from "./split"
import { quiet } from "./styles"

type Key = keyof typeof messPhotos

/** The seven fragments in ribbon order; the loop repeats the first three to make pixelismo's ten panels. */
const order: { key: Key; who: "client" | "crew" }[] = [
  { key: "dm", who: "client" },
  { key: "date", who: "crew" },
  { key: "whatsapp", who: "client" },
  { key: "brief", who: "crew" },
  { key: "mail", who: "client" },
  { key: "twoReplies", who: "crew" },
  { key: "note", who: "client" },
]

/** Each photo through Next's image optimiser at 828 px (WebP or AVIF), as WebGL textures. */
const panels: RibbonPanel[] = Array.from({ length: ribbon.count }, (_, i) => {
  const o = order[i % order.length]!
  const { props } = getImageProps({ src: messPhotos[o.key].src, alt: "", width: 828, quality: 70 })
  return { src: props.src, tag: o.who === "client" ? mess.clientsTitle : mess.crewTitle, caption: mess.captions[o.key] }
})

/**
 * "The mess today", after pixelismo's home Works section: a light screen with a navy rounded
 * window in the middle; behind it a camera turns down onto a ribbon of the mess photos lying on
 * a curved, tilted loop that drifts left (MessRibbon, ribbon.ts). Inside the window the photos
 * show in full; outside, only their outlines. The window names the fragment in the middle, grows
 * 1.2× under the pointer, and links on to how Krew runs a job. The four apps sit top centre where
 * pixelismo lists its services, the statement bottom left (it lights up letter by letter as you
 * scroll), the pill bottom right. The moving panels are hidden from screen readers; the captions
 * are listed for them.
 */
export function Mess() {
  const total = letters(mess.title) + letters(mess.intro)
  return (
    <section id="mess" aria-labelledby="mess-title" className="relative isolate h-svh min-h-[40rem] overflow-hidden">
      <MessRibbon panels={panels} label={mess.windowLink} windowLabel={mess.windowLabel} cursorLabel={mess.cursor} fallback={messPhotos.dm.src} />

      <p data-up="0" className="absolute top-6 left-5 text-sm font-medium tracking-wide uppercase lg:top-[calc(2rem+12px)] lg:left-10">
        {mess.eyebrow}
      </p>
      <ul
        data-up="2"
        aria-label={mess.appsLabel}
        className="absolute top-14 left-5 text-sm leading-[1.08] font-medium uppercase lg:top-[calc(2rem+12px)] lg:left-1/2 lg:-translate-x-1/2 lg:text-base lg:leading-[1.1]"
      >
        {mess.apps.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <ul className="sr-only">
        {order.map((o) => (
          <li key={o.key}>{mess.captions[o.key]}</li>
        ))}
      </ul>

      <div className="absolute inset-x-5 top-[calc(50%+var(--wh)/2+2rem)] flex flex-col gap-5 lg:inset-x-10 lg:top-auto lg:bottom-8 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="mess-title"
          data-scrub-chars
          className="max-w-[30rem] font-display text-xl leading-[1.2] font-semibold tracking-tight text-balance lg:max-w-[30vw] lg:text-[1.625rem]"
        >
          <Split text={mess.title} total={total} /> <Split text={mess.intro} start={letters(mess.title)} total={total} className={quiet} />
        </h2>
        <div data-rise style={{ "--d": "0.45s" } as React.CSSProperties}>
          <PillLink href="#how" variant="outline" className="whitespace-nowrap">
            {mess.closing}
          </PillLink>
        </div>
      </div>
    </section>
  )
}
