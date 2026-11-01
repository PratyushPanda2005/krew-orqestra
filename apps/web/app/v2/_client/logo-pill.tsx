"use client"

import { useEffect } from "react"

/** The "Case Studies" pill follows the pointer over the logo tiles and pops in and out. */
export function LogoPill() {
  useEffect(() => {
    const strip = document.querySelector<HTMLElement>("[data-logo-strip]")
    const pill = strip?.querySelector<HTMLElement>("[data-logo-pill]")
    if (!strip || !pill) return
    const show = (on: boolean) => {
      pill.classList.toggle("opacity-0", !on)
      pill.classList.toggle("scale-[0.8]", !on)
      pill.classList.toggle("opacity-100", on)
      pill.classList.toggle("scale-100", on)
    }
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      const r = strip.getBoundingClientRect()
      pill.style.left = `${e.clientX - r.left}px`
      pill.style.top = `${e.clientY - r.top}px`
      show(!!(e.target as HTMLElement).closest(".logo-tile"))
    }
    const leave = () => show(false)
    strip.addEventListener("pointermove", move)
    strip.addEventListener("pointerleave", leave)
    return () => {
      strip.removeEventListener("pointermove", move)
      strip.removeEventListener("pointerleave", leave)
    }
  }, [])
  return null
}
