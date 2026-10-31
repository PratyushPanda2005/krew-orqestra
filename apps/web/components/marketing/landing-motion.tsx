"use client"

import { useEffect } from "react"

import { place, ribbon } from "./ribbon"

/**
 * Runs the references' effects on the landing sections: novaform's (read from its Webflow
 * interaction data, plan landing-sections-reference §15) and trionn's (§17). Only runs with
 * JS and motion allowed (html.motion-ok); otherwise every section is simply shown, as a list.
 *
 * Reveals, played once as each element enters (CSS does the motion, marketing.css):
 *   data-up="0|2|4|6"  rises 80 px and fades in, 0.6 s, delayed 0–0.6 s, when its top reaches 90%
 *   data-split         title letters rise 40 px, staggered over 0.6 s, when it enters
 *   data-blur          title letters come out of a blur in a scattered order, at 90% (trionn)
 *   data-rise          rises var(--rise, 0.5em) and fades in, 0.45 s after var(--d), as it enters (Vantra)
 * Tied to the scroll (smoothed over about 0.8 s, like GSAP's scrub: 0.8):
 *   data-scrub-chars   statement letters go from 50% to full as you read down
 *   data-stack         stacked cards shrink back (0.7, then 0.8)
 *   data-hz-track      a pinned row of panels slides sideways, then off like a curtain (trionn; 768 px up)
 * Running on its own while on screen:
 *   data-ribbon        the mess ribbon drifts, follows the scroll and a drag, and leans with the pointer (pixelismo)
 * Plus Lenis smooth scrolling from 768 px, and (with any motion setting) the floating nav.
 */

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1)
/** How far t is through [a, b], from 0 to 1. */
const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a))

/** ScrollTrigger "top bottom" to "bottom top": 0 as the element enters, 1 as it leaves. */
function through(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return clamp01((window.innerHeight - r.top) / (r.height + window.innerHeight))
}

/** `lag` is the smoothing time constant in seconds (0.2 by default, about GSAP's scrub: 0.8; 0 follows the scroll exactly). */
type Scrub = { el: HTMLElement; target: () => number; apply: (p: number) => void; cur: number; near: boolean; measure?: () => void; lag?: number }

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

/** GSAP's power3.out. */
const power3Out = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * trionn's selected work, as measured on trionn.com at 1440 px:
 *   - the row slides left at 1.2 px per px scrolled, from the moment the stage pins;
 *   - each card rises from 61% of the screen height to rest (power3.out) as its panel's left
 *     edge crosses from 95% to 25% of the screen width;
 *   - each divider runs the full height of the screen, moves with its panel, and draws down
 *     from the top (scaleY 0 to 1) as its panel crosses from 100% to 70%;
 *   - when the row has run out, the whole layer slides left a full screen width at 1.07 px
 *     per px, uncovering what waits underneath.
 * The track is sized here so both phases fit, plus one screen for the pin itself.
 */
function sideways(track: HTMLElement): Scrub {
  const layer = track.querySelector<HTMLElement>("[data-hz-layer]")!
  const row = track.querySelector<HTMLElement>("[data-hz-row]")!
  const cards = [...track.querySelectorAll<HTMLElement>("[data-hz-card]")]
  const lines = [...track.querySelectorAll<HTMLElement>("[data-hz-line]")]
  let rowDist = 0
  let rowRun = 0
  let curtainRun = 0
  let cardLefts: number[] = []
  let lineLefts: number[] = []
  const measure = () => {
    const vw = window.innerWidth
    rowDist = Math.max(row.scrollWidth - vw, 0)
    rowRun = rowDist / 1.2
    curtainRun = vw / 1.067
    track.style.height = `${rowRun + curtainRun + window.innerHeight}px`
    const left = (el: HTMLElement) => (el.closest("li") as HTMLElement).offsetLeft
    cardLefts = cards.map(left)
    lineLefts = lines.map(left)
  }
  measure()
  return {
    el: track,
    near: false,
    cur: -1,
    lag: 0,
    measure,
    target: () => pinned(track),
    apply: (p) => {
      const vw = window.innerWidth
      const rise = 0.61 * window.innerHeight
      const scrolled = p * (rowRun + curtainRun)
      const x = Math.min(scrolled, rowRun) * 1.2
      const curtain = Math.min(Math.max(scrolled - rowRun, 0) * 1.067, vw)
      row.style.transform = `translate3d(${-x}px, 0, 0)`
      layer.style.transform = `translate3d(${-curtain}px, 0, 0)`
      cards.forEach((c, i) => {
        const q = clamp01((0.95 * vw - (cardLefts[i]! - x)) / (0.7 * vw))
        c.style.transform = `translate3d(0, ${rise * (1 - power3Out(q))}px, 0)`
      })
      lines.forEach((l, i) => (l.style.transform = `scaleY(${clamp01((vw - (lineLefts[i]! - x)) / (0.3 * vw))})`))
    },
  }
}

/**
 * pixelismo's Works carousel, on the mess ribbon (ribbon.ts has the shape). The offset drifts
 * on its own (0.45 units a second; 0.22 on phones), moves 0.008 units per pixel scrolled and
 * with a mouse drag, and eases to its target by 0.16 a frame. The pointer leans the whole rig
 * (pixelismo: 1.05 units across, 0.34 up, 1.15 deep; 1.35° and 2.65° of tilt, eased by 0.052).
 * Both copies (outlines and window) get the same transforms. Runs only while on screen.
 */
function driftRibbon(root: HTMLElement) {
  const rigs = [...root.querySelectorAll<HTMLElement>("[data-ribbon-rig]")]
  const panels = rigs.map((r) => [...r.querySelectorAll<HTMLElement>("[data-ribbon-panel]")])
  const phone = !matchMedia("(min-width: 768px)").matches
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches
  // One unit in pixels: the window is 5.2 units wide.
  const win = root.querySelector<HTMLElement>("[data-ribbon-window]")
  const unit = () => (win?.offsetWidth ?? 520) / 5.2
  let target = 0
  let offset = 0
  let lastY = window.scrollY
  let mouse = { x: 0, y: 0 }
  const lean = { x: 0, y: 0, z: 0 }
  let drag: number | null = null
  let on = false
  let frame = 0
  let last = 0

  const onScroll = () => {
    target += (window.scrollY - lastY) * (phone ? ribbon.scroll.phone : ribbon.scroll.wide)
    lastY = window.scrollY
  }
  const onMove = (e: PointerEvent) => {
    if (drag !== null) {
      target -= (e.clientX - drag) / unit()
      drag = e.clientX
    }
    mouse = { x: (e.clientX / innerWidth) * 2 - 1, y: (e.clientY / innerHeight) * 2 - 1 }
  }
  const onDown = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return
    drag = e.clientX
    root.setAttribute("data-dragging", "")
  }
  const onUp = () => {
    drag = null
    root.removeAttribute("data-dragging")
  }

  const tick = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
    last = now
    target += (phone ? ribbon.auto.phone : ribbon.auto.wide) * dt
    offset += (target - offset) * (1 - Math.pow(1 - ribbon.lerp, dt * 60))
    const moved = panels[0]!.map((_, i) => place(i, offset))
    panels.forEach((list) => list.forEach((el, i) => (el.style.transform = moved[i]!)))

    if (fine) {
      const want = drag === null ? mouse : { x: 0, y: 0 }
      const ease = 1 - Math.pow(1 - 0.052, dt * 60)
      const easeDeep = 1 - Math.pow(1 - 0.038, dt * 60)
      lean.x += (want.x - lean.x) * ease
      lean.y += (want.y - lean.y) * ease
      lean.z += (Math.hypot(want.x, want.y) - lean.z) * easeDeep
      const rig = `translate3d(calc(${(lean.x * 1.05).toFixed(3)} * var(--u)), calc(${(lean.y * 0.34).toFixed(3)} * var(--u)), calc(${(lean.z * 1.15).toFixed(3)} * var(--u))) rotateX(${(-lean.y * 1.35).toFixed(2)}deg) rotateY(${(lean.x * 2.65).toFixed(2)}deg) rotateZ(${ribbon.tiltDeg}deg)`
      rigs.forEach((r) => (r.style.transform = rig))
    }
    frame = on ? requestAnimationFrame(tick) : 0
    if (!on) last = 0
  }

  const seen = new IntersectionObserver(([e]) => {
    on = !!e?.isIntersecting
    if (on && !frame) {
      lastY = window.scrollY
      frame = requestAnimationFrame(tick)
    }
  })
  seen.observe(root)
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("pointermove", onMove, { passive: true })
  window.addEventListener("pointerup", onUp)
  root.addEventListener("pointerdown", onDown)
  root.setAttribute("data-play", "")
  return () => {
    seen.disconnect()
    cancelAnimationFrame(frame)
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("pointermove", onMove)
    window.removeEventListener("pointerup", onUp)
    root.removeEventListener("pointerdown", onDown)
    root.removeAttribute("data-play")
  }
}

export function LandingMotion() {
  useEffect(() => {
    const html = document.documentElement
    const cleanups: (() => void)[] = []

    // The floating nav shows past the hero only while you scroll up, like a usual header: scrolling
    // down hides it (any motion setting). 8 px of travel before it changes, so jitter doesn't flicker it.
    const first = document.getElementById("mess")
    let lastY = window.scrollY
    const pastHero = () => {
      const past = !!first && first.getBoundingClientRect().top < 80
      html.toggleAttribute("data-past-hero", past)
      const y = window.scrollY
      if (!past) html.removeAttribute("data-scroll-up")
      else if (Math.abs(y - lastY) > 8) html.toggleAttribute("data-scroll-up", y < lastY)
      else return
      lastY = y
    }
    pastHero()
    window.addEventListener("scroll", pastHero, { passive: true })
    cleanups.push(() => window.removeEventListener("scroll", pastHero))
    if (!html.classList.contains("motion-ok")) return () => cleanups.forEach((c) => c())

    const mess = document.querySelector<HTMLElement>("[data-ribbon]")
    if (mess) cleanups.push(driftRibbon(mess))

    // Reveals. Only what's still below the fold waits, so nothing on screen blinks out.
    const reveal = (el: Element) => el.setAttribute("data-in", "")
    const onEnter = (entries: IntersectionObserverEntry[], io: IntersectionObserver) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        reveal(e.target)
        io.unobserve(e.target)
      })
    const at90 = new IntersectionObserver(onEnter, { rootMargin: "0px 0px -10% 0px" })
    const atEdge = new IntersectionObserver(onEnter)
    document.querySelectorAll("[data-up], [data-split], [data-blur], [data-rise]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return reveal(el)
      el.setAttribute("data-wait", "")
      ;(el.matches("[data-split], [data-rise]") ? atEdge : at90).observe(el)
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
        const lag = s.lag ?? 0.2
        const next = s.cur < 0 || lag === 0 ? target : s.cur + (target - s.cur) * (1 - Math.exp(-dt / lag))
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
