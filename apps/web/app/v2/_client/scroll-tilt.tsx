"use client"

import { useEffect, useRef, type ReactNode } from "react"

const TILT_DEG = 30
const START_SCALE = 0.9
const START_RISE = 60

/**
 * Tips its child back in 3D and lays it flat as it scrolls in: fully tilted when the top edge
 * meets the bottom of the viewport, flat once the top edge is 15% from the top. Scroll-linked
 * (scrolling back up tilts it again). Flat from the start under reduced motion.
 */
export function ScrollTilt({ className, children }: { className?: string; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = outer.current
    const el = inner.current
    if (!box || !el || matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const top = box.getBoundingClientRect().top
      const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.85)))
      const e = 1 - (1 - p) ** 2 // ease-out quad
      const left = 1 - e
      el.style.transform = `perspective(1400px) translateY(${START_RISE * left}px) rotateX(${TILT_DEG * left}deg) scale(${START_SCALE + (1 - START_SCALE) * e})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div ref={outer} className={className}>
      <div ref={inner} style={{ transformOrigin: "50% 100%", willChange: "transform" }}>
        {children}
      </div>
    </div>
  )
}
