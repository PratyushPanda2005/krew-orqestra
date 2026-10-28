"use client"

import { useEffect } from "react"

/**
 * Runs the references' effects on the landing sections: novaform's (read from its Webflow
 * interaction data, plan landing-sections-reference §15) and trionn's (§17). Only runs with
 * JS and motion allowed (html.motion-ok); otherwise every section is simply shown, as a list.
 *
 * Reveals, played once as each element enters (CSS does the motion, marketing.css):
 *   data-up="0|2|4|6"  rises 80 px and fades in, 0.6 s, delayed 0–0.6 s, when its top reaches 90%
 *   data-split         title letters rise 40 px, staggered over 0.6 s, when it enters
 *   data-blur          title letters come out of a blur in a scattered order (trionn)
 *   data-flip          photo turns 180° on Y into place, 0.6 s, when it enters
 *   data-count         number counts up, 1.2 s
 * Tied to the scroll (smoothed over about 0.8 s, like GSAP's scrub: 0.8):
 *   data-scrub-chars   statement letters go from 50% to full as you read down
 *   data-stack         stacked cards shrink back (0.7, then 0.8)
 *   data-hz-track      a pinned row of panels slides sideways (trionn's selected work; 768 px up)
 *   data-ribbon-track  photos fly on a curved ribbon, then settle into a grid (trionn; 768 px up)
 * Plus Lenis smooth scrolling from 768 px, and (with any motion setting) the floating nav.
 */

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1)
/** How far t is through [a, b], from 0 to 1. */
const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a))
/** GSAP's power1.out. */
const power1Out = (t: number) => 1 - (1 - t) * (1 - t)

/** ScrollTrigger "top bottom" to "bottom top": 0 as the element enters, 1 as it leaves. */
function through(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return clamp01((window.innerHeight - r.top) / (r.height + window.innerHeight))
}

type Scrub = { el: HTMLElement; target: () => number; apply: (p: number) => void; cur: number; near: boolean; measure?: () => void }

function messChars(el: HTMLElement): Scrub {
  const chars = [...el.querySelectorAll<HTMLElement>("[data-char]")]
  const n = chars.length
  return {
    el,
    near: false,
    cur: -1,
    // "top bottom" to "bottom 50%"
    target: () => {
      const r = el.getBoundingClientRect()
      return clamp01((window.innerHeight - r.top) / (r.height + window.innerHeight / 2))
    },
    apply: (p) => chars.forEach((c, i) => (c.style.opacity = String(0.5 + 0.5 * clamp01(p * n - i)))),
  }
}

/** Case study: card 1 to 0.7, then cards 2 and 3 to 0.8, one after another. */
function stack(list: HTMLElement): Scrub {
  const cards = [...list.querySelectorAll<HTMLElement>("[data-shrink]")]
  return {
    el: list,
    near: false,
    cur: -1,
    target: () => through(list),
    apply: (p) => {
      const t = p * 0.3
      cards.forEach((c, i) => (c.style.transform = `scale(${1 - (i === 0 ? 0.3 : 0.2) * seg(t, 0.1 * i, 0.1 * i + 0.1)})`))
    },
  }
}

/** Pinned tracks: 0 when the track's top reaches the top of the screen, 1 when its end does. */
function pinned(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  const run = r.height - window.innerHeight
  return run > 0 ? clamp01(-r.top / run) : 0
}

/**
 * trionn's selected work: the row slides left across the whole scroll of its track (sized here
 * to the row's width), and each card rises from 25 px as it comes in from the right half.
 */
function sideways(track: HTMLElement): Scrub {
  const row = track.querySelector<HTMLElement>("[data-hz-row]")!
  const cards = [...track.querySelectorAll<HTMLElement>("[data-hz-card]")]
  let dist = 0
  let lefts: number[] = []
  const measure = () => {
    dist = Math.max(row.scrollWidth - window.innerWidth, 0)
    track.style.height = `${dist + window.innerHeight}px`
    lefts = cards.map((c) => (c.parentElement as HTMLElement).offsetLeft)
  }
  measure()
  return {
    el: track,
    near: false,
    cur: -1,
    measure,
    target: () => pinned(track),
    apply: (p) => {
      const x = p * dist
      const vw = window.innerWidth
      row.style.transform = `translate3d(${-x}px, 0, 0)`
      cards.forEach((c, i) => (c.style.transform = `translate3d(0, ${25 * clamp01((lefts[i]! - x - vw * 0.5) / (vw * 0.5))}px, 0)`))
    },
  }
}

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

/**
 * trionn's explorations: the photos stream in from the right on a curved ribbon (a slice of a
 * cylinder, with a slow wave), then gather into a grid of 4 over 3 as the words fade back.
 */
function ribbon(track: HTMLElement): Scrub {
  const tiles = [...track.querySelectorAll<HTMLElement>("[data-tile]")]
  const words = [...track.querySelectorAll<HTMLElement>("[data-ribbon-word]")]
  const measure = () => (track.style.height = `${3 * window.innerHeight}px`)
  measure()
  return {
    el: track,
    near: false,
    cur: -1,
    measure,
    target: () => pinned(track),
    apply: (p) => {
      const sweep = seg(p, 0, 0.55)
      const gather = ease(seg(p, 0.5, 0.85))
      const vw = window.innerWidth
      const vh = window.innerHeight
      const radius = vw * 0.75
      const w = tiles[0]?.offsetWidth ?? 200
      const h = w * 0.75
      const gap = 24
      tiles.forEach((t, i) => {
        const a = (i - 3) * 0.3 + (1 - sweep) * 2.4
        const rx = radius * Math.sin(a)
        const rz = radius * (Math.cos(a) - 1)
        const ry = vh * 0.08 * Math.sin(a * 2 + 0.5)
        const top = i < 4
        const n = top ? 4 : 3
        const k = top ? i : i - 4
        const gx = (k - (n - 1) / 2) * (w + gap)
        const gy = (top ? -0.5 : 0.5) * (h + gap)
        const x = rx + (gx - rx) * gather
        const y = ry + (gy - ry) * gather
        const z = rz * (1 - gather)
        const turn = (a * 180) / Math.PI * (1 - gather)
        t.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${turn}deg)`
        t.style.opacity = String(Math.max(gather, Math.min(1, Math.max(0, (Math.cos(a) + 0.4) / 0.6))))
      })
      words.forEach((el) => (el.style.opacity = String(1 - 0.85 * gather)))
    },
  }
}

function countUp(el: HTMLElement) {
  const to = Number(el.textContent)
  if (!Number.isFinite(to) || to === 0) return
  const start = performance.now()
  const tick = (now: number) => {
    const k = clamp01((now - start) / 1200)
    el.textContent = String(Math.floor(power1Out(k) * to))
    if (k < 1) requestAnimationFrame(tick)
    else el.textContent = String(to)
  }
  requestAnimationFrame(tick)
}

export function LandingMotion() {
  useEffect(() => {
    const html = document.documentElement
    const cleanups: (() => void)[] = []

    // The floating nav shows once the first section has come up over the hero (any motion setting).
    const first = document.getElementById("mess")
    const pastHero = () => html.toggleAttribute("data-past-hero", !!first && first.getBoundingClientRect().top < 80)
    pastHero()
    window.addEventListener("scroll", pastHero, { passive: true })
    cleanups.push(() => window.removeEventListener("scroll", pastHero))
    if (!html.classList.contains("motion-ok")) return () => cleanups.forEach((c) => c())

    // Reveals. Only what's still below the fold waits, so nothing on screen blinks out.
    const reveal = (el: Element) => {
      el.setAttribute("data-in", "")
      if (el.hasAttribute("data-count")) countUp(el as HTMLElement)
    }
    const onEnter = (entries: IntersectionObserverEntry[], io: IntersectionObserver) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        reveal(e.target)
        io.unobserve(e.target)
      })
    const at90 = new IntersectionObserver(onEnter, { rootMargin: "0px 0px -10% 0px" })
    const atEdge = new IntersectionObserver(onEnter)
    document.querySelectorAll("[data-up], [data-count], [data-split], [data-blur], [data-flip]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return reveal(el)
      el.setAttribute("data-wait", "")
      ;(el.matches("[data-split], [data-blur], [data-flip]") ? atEdge : at90).observe(el)
    })
    // Things near the very end of the page can never reach the 90% line: show them at the bottom.
    const atEnd = () => {
      if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 4) return
      document.querySelectorAll("[data-wait]:not([data-in])").forEach(reveal)
    }
    window.addEventListener("scroll", atEnd, { passive: true })
    cleanups.push(() => (at90.disconnect(), atEdge.disconnect(), window.removeEventListener("scroll", atEnd)))

    // Scroll-tied effects, run in one frame loop while any of them is near the screen.
    const scrubs: Scrub[] = []
    const add = <T extends HTMLElement>(sel: string, make: (el: T) => Scrub) => {
      const el = document.querySelector<T>(sel)
      if (el) scrubs.push(make(el))
    }
    add("[data-scrub-chars]", messChars)
    add("[data-stack]", stack)
    const wide = matchMedia("(min-width: 768px)")
    if (wide.matches) {
      add("[data-hz-track]", (el) => (el.setAttribute("data-play", ""), sideways(el)))
      add("[data-ribbon-track]", (el) => (el.setAttribute("data-play", ""), ribbon(el)))
    }

    const near = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const s = scrubs.find((x) => x.el === e.target)
          if (s) s.near = e.isIntersecting
        })
        wake()
      },
      { rootMargin: "50% 0px" }
    )
    scrubs.forEach((s) => near.observe(s.el))

    let frame = 0
    let last = 0
    const loop = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
      last = now
      let busy = false
      for (const s of scrubs) {
        if (!s.near && s.cur >= 0) continue
        const target = s.target()
        // First frame jumps; after that, ease towards the scroll over about 0.8 s.
        const next = s.cur < 0 ? target : s.cur + (target - s.cur) * (1 - Math.exp(-dt / 0.2))
        const settled = Math.abs(target - next) < 1e-4
        const value = settled ? target : next
        if (value !== s.cur) s.apply(value)
        s.cur = value
        if (!settled) busy = true
      }
      frame = busy ? requestAnimationFrame(loop) : 0
      if (!busy) last = 0
    }
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(loop)
    }
    window.addEventListener("scroll", wake, { passive: true })
    const onResize = () => {
      scrubs.forEach((x) => (x.measure?.(), (x.cur = -1)))
      wake()
    }
    window.addEventListener("resize", onResize)
    wake()
    cleanups.push(() => {
      cancelAnimationFrame(frame)
      near.disconnect()
      window.removeEventListener("scroll", wake)
      window.removeEventListener("resize", onResize)
    })

    // Smooth scrolling on bigger screens, as in the reference (Lenis, 0.8 s, cubic ease-out).
    let lenis: { destroy: () => void } | undefined
    let gone = false
    if (wide.matches) {
      import("lenis").then(({ default: Lenis }) => {
        if (gone) return
        lenis = new Lenis({ duration: 0.8, smoothWheel: true, autoRaf: true, anchors: true, easing: (t) => 1 - Math.pow(1 - t, 3) })
      })
    }
    cleanups.push(() => {
      gone = true
      lenis?.destroy()
      document.querySelectorAll("[data-play]").forEach((el) => (el.removeAttribute("data-play"), (el as HTMLElement).style.removeProperty("height")))
    })

    return () => cleanups.forEach((c) => c())
  }, [])

  return null
}
