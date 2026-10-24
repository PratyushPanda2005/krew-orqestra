"use client"

import { paintStageRail } from "@krew/ui/lib/stage-frames"
import { useEffect } from "react"

import { heroSequence } from "@/lib/hero-sequence"

/** Run once the page has loaded and the main thread is quiet, so GSAP never competes with first paint. */
function afterLoadAndIdle(run: () => void) {
  // Safari has no requestIdleCallback.
  const idle = () =>
    typeof window.requestIdleCallback === "function"
      ? window.requestIdleCallback(run, { timeout: 1500 })
      : window.setTimeout(run, 200)
  if (document.readyState === "complete") idle()
  else window.addEventListener("load", idle, { once: true })
}

/**
 * The hero's one bold moment: the server-rendered rail plays once from Enquiry to Paid.
 * Renders nothing; it repaints the rail and caption inside `[data-hero]` in place.
 * With JS and motion allowed, the boot script paints the rail as "not started"
 * (marketing.css) until GSAP arrives. Reduced motion, no JS, or GSAP failing to load
 * all leave the finished rail the server sent.
 */
export function HeroRail() {
  useEffect(() => {
    const html = document.documentElement
    const hero = document.querySelector<HTMLElement>("[data-hero]")
    const caption = hero?.querySelector<HTMLElement>("[data-hero-caption]")
    if (!hero || !caption || !html.classList.contains("motion-ok")) return
    let cancelled = false
    let timeline: gsap.core.Timeline | undefined

    afterLoadAndIdle(async () => {
      let gsap: typeof import("gsap").gsap
      try {
        gsap = (await import("gsap")).gsap
      } catch {
        html.classList.remove("motion-ok")
        return
      }
      // The boot script gives up after 6 s; don't start if it already has.
      if (cancelled || !html.classList.contains("motion-ok")) return

      const show = (i: number) => {
        const step = heroSequence[i]!
        paintStageRail(hero, step.stage)
        caption.textContent = step.caption
        const frame = hero.querySelectorAll("[data-frame]")[i]
        if (frame) gsap.fromTo(frame, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 0.32, ease: "power2.out" })
        gsap.fromTo(caption, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })
      }

      caption.setAttribute("aria-hidden", "true")
      show(0)
      hero.setAttribute("data-playing", "")
      timeline = gsap.timeline({ delay: 0.4, onComplete: () => caption.removeAttribute("aria-hidden") })
      for (let i = 1; i < heroSequence.length; i++) timeline.call(show, [i], i * 0.55)
    })

    return () => {
      cancelled = true
      timeline?.kill()
    }
  }, [])

  return null
}
