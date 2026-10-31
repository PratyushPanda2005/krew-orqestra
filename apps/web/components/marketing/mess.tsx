import { cn } from "@krew/ui/lib/utils"
import Image from "next/image"

import { mess } from "@/app/(marketing)/copy"

import { messPhotos } from "./photos"
import { PillLink } from "./pill-link"
import { place, ribbon } from "./ribbon"
import { letters, Split } from "./split"
import { quiet, wide } from "./styles"

type Key = keyof typeof messPhotos

/** The seven fragments in ribbon order, then the first three again to make the reference's ten panels. */
const order: { key: Key; who: "client" | "crew" }[] = [
  { key: "dm", who: "client" },
  { key: "date", who: "crew" },
  { key: "whatsapp", who: "client" },
  { key: "brief", who: "crew" },
  { key: "mail", who: "client" },
  { key: "twoReplies", who: "crew" },
  { key: "note", who: "client" },
]
const panels = Array.from({ length: ribbon.count }, (_, i) => order[i % order.length]!)

const panelBox = {
  width: `calc(${ribbon.panelW} * var(--u))`,
  height: `calc(${ribbon.panelH} * var(--u))`,
  left: `calc(${-ribbon.panelW / 2} * var(--u))`,
  top: `calc(${-ribbon.panelH / 2} * var(--u))`,
}

/** The ribbon's 3D stage, centred on the window: perspective, then the tilted rig LandingMotion moves. */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-1/2 left-1/2 size-0" style={{ perspective: `calc(${ribbon.perspective} * var(--u))` }}>
      <div data-ribbon-rig className="absolute size-0 [transform-style:preserve-3d]" style={{ transform: `rotateZ(${ribbon.tiltDeg}deg)` }}>
        {children}
      </div>
    </div>
  )
}

/**
 * "The mess today", after pixelismo's Works section: a dark rounded window in the middle of a
 * light screen, and a ribbon of the mess photos drifting behind it on a curve (ribbon.ts). In
 * the window the panels show in full; outside it only their outlines. The ribbon drifts on its
 * own, follows the scroll and a drag, and leans with the pointer (LandingMotion). The four apps
 * sit top centre where pixelismo lists its services, the statement bottom left (it lights up
 * letter by letter as you scroll), and the pill bottom right. The panels repeat and move, so
 * they're hidden from screen readers; the captions are listed for them instead.
 */
export function Mess() {
  const total = letters(mess.title) + letters(mess.intro)
  return (
    <section id="mess" aria-labelledby="mess-title" className="relative isolate flex flex-col gap-10 overflow-hidden py-12 md:py-16 lg:h-svh lg:min-h-[46rem] lg:gap-0 lg:py-10">
      <div className={cn(wide, "grid gap-4 lg:grid-cols-3")}>
        <p data-up="0" className="text-sm font-medium tracking-wide uppercase">
          {mess.eyebrow}
        </p>
        <ul data-up="2" aria-label={mess.appsLabel} className="text-sm leading-tight font-medium uppercase lg:justify-self-center">
          {mess.apps.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div data-ribbon className="relative flex flex-1 items-center justify-center [--u:calc(86vw/5.2)] md:[--u:calc(60vw/5.2)] lg:[--u:calc(min(36vw,40rem)/5.2)]">
        {/* Outlines: the whole ribbon, drawn in thin navy lines on the light ground. */}
        <div aria-hidden>
          <Stage>
            {panels.map((p, i) => (
              <div
                key={i}
                data-ribbon-panel
                className="absolute rounded-[calc(0.2*var(--u))] border-[1.5px] border-brand-navy/25 [backface-visibility:hidden]"
                style={{ ...panelBox, transform: place(i, 0) }}
              />
            ))}
          </Stage>
        </div>

        {/* The window: navy with a faint grid; the same ribbon in full, clipped to it. */}
        <div
          aria-hidden
          data-ribbon-window
          className="relative h-[calc(3.35*var(--u))] w-[calc(5.2*var(--u))] overflow-hidden rounded-3xl bg-brand-navy-deep bg-[linear-gradient(to_right,color-mix(in_srgb,var(--brand-snow)_9%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--brand-snow)_9%,transparent)_1px,transparent_1px)] bg-[size:calc(0.74*var(--u))_calc(0.74*var(--u))] bg-center"
        >
          <Stage>
            {panels.map((p, i) => {
              const photo = messPhotos[p.key]
              return (
                <div
                  key={i}
                  data-ribbon-panel
                  className="absolute overflow-hidden rounded-[calc(0.2*var(--u))] bg-brand-navy [backface-visibility:hidden]"
                  style={{ ...panelBox, transform: place(i, 0) }}
                >
                  <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 34vw, (min-width: 768px) 56vw, 80vw" className="object-cover" />
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy-deep/80 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 rounded-md bg-brand-navy-deep/40 px-2 py-1 text-[0.6875rem] font-medium text-brand-snow ring-1 ring-brand-snow/20 backdrop-blur-md">
                    {p.who === "client" ? mess.clientsTitle : mess.crewTitle}
                  </span>
                  <span className="absolute right-3 bottom-2.5 max-w-[60%] text-right text-xs leading-snug font-medium text-brand-snow lg:text-sm">
                    {mess.captions[p.key]}
                  </span>
                </div>
              )
            })}
          </Stage>
          <p className="absolute bottom-3 left-4 font-display text-xl font-bold tracking-tight text-brand-snow uppercase lg:bottom-4 lg:left-5 lg:text-2xl">
            {mess.windowLabel}
          </p>
        </div>
      </div>

      <ul className="sr-only">
        {order.map((o) => (
          <li key={o.key}>{mess.captions[o.key]}</li>
        ))}
      </ul>

      <div className={cn(wide, "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between")}>
        <h2
          id="mess-title"
          data-scrub-chars
          className="max-w-[30rem] font-display text-[1.375rem] leading-[1.2] font-semibold tracking-tight text-balance lg:text-[1.625rem]"
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
