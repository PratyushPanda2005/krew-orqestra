"use client"

import { useEffect } from "react"

/**
 * Runs the reference's (novaform) effects on the landing sections. Values come from its
 * Webflow interaction data (plan landing-sections-reference §15). Only runs with JS and
 * motion allowed (html.motion-ok); otherwise every section is simply shown, as a list.
 *
 * Reveals, played once as each element enters (CSS does the motion, marketing.css):
 *   data-up="0|2|4|6"  rises 80 px and fades in, 0.6 s, delayed 0–0.6 s, when its top reaches 90%
 *   data-split         title letters rise 40 px, staggered over 0.6 s, when it enters
 *   data-flip          photo turns 180° on Y into place, 0.6 s, when it enters
 *   data-count         number counts up, 1.2 s
 * Tied to the scroll (smoothed over about 0.8 s, like GSAP's scrub: 0.8):
 *   data-scrub-chars   statement letters go from 50% to full as you read down
 *   data-how-track     steps swing through a pinned stage
 *   data-stack         stacked cards shrink back (0.7, then 0.8)
 *   data-faq           answer cards slide through a pinned stage (768 px and up)
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

type Scrub = { el: HTMLElement; target: () => number; apply: (p: number) => void; cur: number; near: boolean }

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

/** Process: 0.13 apart, 0.1 long, a short hold between steps, as in the reference timeline. */
function howSteps(track: HTMLElement): Scrub {
  const cards = [...track.querySelectorAll<HTMLElement>("[data-how-card]")]
  const texts = [...track.querySelectorAll<HTMLElement>("[data-how-text]")]
  const n = cards.length
  const total = 0.13 * n + 0.1
  return {
    el: track,
    near: false,
    cur: -1,
    target: () => through(track),
    apply: (p) => {
      const t = p * total
      for (let i = 0; i < n; i++) {
        const enter = i === 0 ? 1 : seg(t, 0.13 * i, 0.13 * i + 0.1)
        const exit = i === n - 1 ? 0 : seg(t, 0.13 * (i + 1), 0.13 * (i + 1) + 0.1)
        const exitText = i === n - 1 ? 0 : seg(t, 0.13 * (i + 1), 0.13 * (i + 1) + 0.05)
        const card = cards[i]!
        const k = exit > 0 ? exit : -(1 - enter)
        card.style.transform = `translate3d(${30 * k}vw, ${18 * Math.abs(k)}vh, 0) rotate(${15 * k}deg)`
        card.style.opacity = String(exit > 0 ? 1 - exit : enter)
        const text = texts[i]!
        text.style.transform = `translate3d(0, ${200 * (exit > 0 ? exitText : 1 - enter)}px, 0)`
        text.style.opacity = String(exit > 0 ? 1 - exitText : enter)
        text.style.visibility = card.style.visibility = enter === 0 || exit === 1 ? "hidden" : ""
      }
    },
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

/** Testimonials: 0.14 apart, 0.1 long; the outgoing card drops out of the frame as the next drops in. */
function faqCards(section: HTMLElement): Scrub {
  const cards = [...section.querySelectorAll<HTMLElement>("[data-faq-cards] > [data-faq-i]")]
  const dots = [...section.querySelectorAll<HTMLElement>("[data-faq-dots] > [data-faq-i]")]
  const photos = section.querySelector<HTMLElement>("[data-faq-photos-inner]")
  const n = cards.length
  const total = 0.14 * n + 0.1
  return {
    el: section,
    near: false,
    cur: -1,
    target: () => through(section),
    apply: (p) => {
      const t = p * total
      let step = 0
      for (let i = 0; i < n; i++) {
        const enter = i === 0 ? 1 : seg(t, 0.14 * i, 0.14 * i + 0.1)
        const exit = i === n - 1 ? 0 : seg(t, 0.14 * (i + 1), 0.14 * (i + 1) + 0.1)
        if (i > 0) step += enter
        cards[i]!.style.transform = `translate3d(0, ${exit > 0 ? 101 * exit : -101 * (1 - enter)}%, 0)`
      }
      dots.forEach((d, i) => (d.style.opacity = i === Math.round(step) ? "1" : "0.3"))
      if (photos) photos.style.transform = `translate3d(0, ${(-Math.min(step, n - 3) * 100) / n}%, 0)`
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
    document.querySelectorAll("[data-up], [data-count], [data-split], [data-flip]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return reveal(el)
      el.setAttribute("data-wait", "")
      ;(el.matches("[data-split], [data-flip]") ? atEdge : at90).observe(el)
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
    add("[data-how-track]", (el) => (el.setAttribute("data-play", ""), howSteps(el)))
    add("[data-stack]", stack)
    const wide = matchMedia("(min-width: 768px)")
    const faq = document.querySelector<HTMLElement>("[data-faq]")
    let faqScrub: Scrub | undefined
    if (faq && wide.matches) {
      faq.setAttribute("data-play", "")
      scrubs.push((faqScrub = faqCards(faq)))
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
    window.addEventListener("resize", wake)
    wake()
    cleanups.push(() => {
      cancelAnimationFrame(frame)
      near.disconnect()
      window.removeEventListener("scroll", wake)
      window.removeEventListener("resize", wake)
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
      faq?.removeAttribute("data-play")
      if (faqScrub) faqScrub.el.removeAttribute("data-play")
    })

    return () => cleanups.forEach((c) => c())
  }, [])

  return null
}
