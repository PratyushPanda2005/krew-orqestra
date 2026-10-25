"use client"

import { useEffect } from "react"

/**
 * Makes the fragments in "the mess" arrive one by one, like notifications piling
 * up, as the section scrolls in. Only fragments still below the fold are held back
 * (data-wait), so nothing already painted disappears and a late fade-in can't
 * become the page's LCP. CSS does the motion (marketing.css). Without JS, with
 * reduced motion, or if this never runs, everything is simply shown.
 */
export function MessPlay() {
  useEffect(() => {
    const section = document.getElementById("mess")
    if (!section || !document.documentElement.classList.contains("motion-ok")) return
    const waiting = [...section.querySelectorAll<HTMLElement>("[data-arrive]")].filter(
      (el) => el.getBoundingClientRect().top >= window.innerHeight
    )
    if (!waiting.length) return
    waiting.forEach((el, n) => {
      el.style.setProperty("--n", String(n))
      el.setAttribute("data-wait", "")
    })
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        section.setAttribute("data-play", "")
        io.disconnect()
      },
      { rootMargin: "0px 0px -25% 0px" }
    )
    waiting.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
