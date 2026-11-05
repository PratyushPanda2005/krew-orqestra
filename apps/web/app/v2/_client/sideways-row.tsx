"use client"

import { useEffect, useRef, type ReactNode } from "react"

/** The main landing's sideways scroll, with the same measured values (landing-sections-reference §18). */
const ROW_RATE = 1.2
const CARD_RISE = 0.61
/** Smoothing time in seconds. v2 has no Lenis, so the row eases itself towards the scroll. */
const LAG = 0.1

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1)
const power3Out = (t: number) => 1 - (1 - t) ** 3

function play(track: HTMLElement) {
  const stage = track.querySelector<HTMLElement>("[data-job-stage]")!
  const row = track.querySelector<HTMLElement>("[data-job-row]")!
  const cards = [...track.querySelectorAll<HTMLElement>("[data-job-card]")]
  const lines = [...track.querySelectorAll<HTMLElement>("[data-job-line]")]
  const title = track.querySelector<HTMLElement>("[data-job-title]")
  const left = (el: HTMLElement) => (el.closest("[data-job-panel]") as HTMLElement).offsetLeft

  track.setAttribute("data-play", "")

  let rowDist = 0
  let cardLefts: number[] = []
  let lineLefts: number[] = []
  const measure = () => {
    rowDist = Math.max(row.offsetWidth - stage.clientWidth, 0)
    track.style.height = `${rowDist / ROW_RATE + window.innerHeight}px`
    cardLefts = cards.map(left)
    lineLefts = lines.map(left)
  }

  const target = () => Math.min(Math.max(-track.getBoundingClientRect().top * ROW_RATE, 0), rowDist)
  const apply = (x: number) => {
    const vw = stage.clientWidth
    const rise = CARD_RISE * window.innerHeight
    row.style.transform = `translate3d(${-x}px, 0, 0)`
    cards.forEach((c, i) => {
      const q = clamp01((0.95 * vw - (cardLefts[i]! - x)) / (0.7 * vw))
      c.style.transform = `translate3d(0, ${rise * (1 - power3Out(q))}px, 0)`
    })
    lines.forEach((l, i) => (l.style.transform = `scaleY(${clamp01((vw - (lineLefts[i]! - x)) / (0.3 * vw))})`))
  }

  let cur = 0
  let frame = 0
  let last = 0
  const loop = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
    last = now
    const goal = target()
    const next = cur + (goal - cur) * (1 - Math.exp(-dt / LAG))
    cur = Math.abs(goal - next) < 0.1 ? goal : next
    apply(cur)
    frame = cur === goal ? 0 : requestAnimationFrame(loop)
    if (!frame) last = 0
  }
  const wake = () => {
    if (!frame) frame = requestAnimationFrame(loop)
  }
  const onResize = () => {
    measure()
    cur = target()
    apply(cur)
  }

  onResize()
  window.addEventListener("scroll", wake, { passive: true })
  window.addEventListener("resize", onResize)

  // Title letters come out of the blur when it reaches 90% of the screen.
  const seen = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return
      title?.setAttribute("data-in", "")
      seen.disconnect()
    },
    { rootMargin: "0px 0px -10% 0px" }
  )
  if (title) seen.observe(title)

  return () => {
    cancelAnimationFrame(frame)
    seen.disconnect()
    window.removeEventListener("scroll", wake)
    window.removeEventListener("resize", onResize)
    track.removeAttribute("data-play")
    track.style.removeProperty("height")
    ;[row, ...cards, ...lines].forEach((el) => el.style.removeProperty("transform"))
  }
}

/**
 * Pins its panels and slides them left as the page scrolls, from 768 px with motion allowed.
 * Otherwise (phones, no JS, reduced motion) the panels stay a plain stacked list.
 */
export function SidewaysRow({ labelledBy, children }: { labelledBy: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const track = ref.current
    if (!track) return
    const wide = matchMedia("(min-width: 768px)")
    const calm = matchMedia("(prefers-reduced-motion: reduce)")
    let stop: (() => void) | undefined
    const sync = () => {
      stop?.()
      stop = wide.matches && !calm.matches ? play(track) : undefined
    }
    sync()
    wide.addEventListener("change", sync)
    calm.addEventListener("change", sync)
    return () => {
      stop?.()
      wide.removeEventListener("change", sync)
      calm.removeEventListener("change", sync)
    }
  }, [])

  return (
    <section ref={ref} aria-labelledby={labelledBy} className="job-track">
      <div data-job-stage className="job-stage">
        <div data-job-row>{children}</div>
      </div>
    </section>
  )
}
