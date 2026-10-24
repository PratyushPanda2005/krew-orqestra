"use client"

import { useEffect } from "react"

/**
 * Makes the fragments in "the mess" arrive one by one, like notifications piling
 * up, the first time the section is in view. CSS does the motion (marketing.css);
 * this only sets two attributes. It arms the section itself, so without JS, with
 * reduced motion, or if this never runs, everything is simply shown.
 */
export function MessPlay() {
  useEffect(() => {
    const section = document.getElementById("mess")
    if (!section || !document.documentElement.classList.contains("motion-ok")) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        section.setAttribute("data-play", "")
        io.disconnect()
      },
      { rootMargin: "0px 0px -25% 0px" }
    )
    // A fragment already on screen (a reload mid-page): leave them shown rather than hide and replay.
    const first = section.querySelector("[data-arrive]")?.getBoundingClientRect()
    if (!first || (first.top < window.innerHeight && section.getBoundingClientRect().bottom > 0)) return
    section.setAttribute("data-armed", "")
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return null
}
