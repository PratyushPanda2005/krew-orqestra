"use client"

import { useRef, type ReactNode } from "react"

/**
 * Card that tilts towards the pointer with a soft holographic glare, standing in for the reference's
 * `hover-tilt` element (tilt factor 0.42, glare hue 240, hard-light). Still on touch and reduced motion.
 */
export function Tilt({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const glare = useRef<HTMLDivElement>(null)

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * 0.42 * 20}deg) rotateY(${x * 0.42 * 20}deg)`
    if (glare.current) {
      glare.current.style.opacity = "1"
      glare.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, hsla(240, 100%, 85%, 0.35), transparent 60%)`
    }
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ""
    if (glare.current) glare.current.style.opacity = "0"
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={move}
      onPointerLeave={reset}
      style={{ display: "block", position: "relative", transition: "transform 200ms ease-out", transformStyle: "preserve-3d", boxShadow: "0 18px 40px -20px rgba(0,0,0,0.35)" }}
    >
      {children}
      <div
        ref={glare}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0, mixBlendMode: "hard-light", transition: "opacity 200ms ease-out", maskImage: "url(/v2/footer/Holo-bg-card.png)", maskMode: "luminance", maskSize: "cover", borderRadius: "inherit" }}
      />
    </div>
  )
}
