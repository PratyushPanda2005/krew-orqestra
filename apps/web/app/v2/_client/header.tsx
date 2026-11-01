"use client"

import { useEffect, useState } from "react"

import { HeaderView, MobileMenu, type HeaderMode } from "../_sections/header-view"

/** Header goes solid once the section under the hero comes within this many px of the top. */
const SWITCH_OFFSET = 240

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const check = () => {
      const marker = document.getElementById("section-2-start")
      setSolid(marker ? marker.getBoundingClientRect().top <= SWITCH_OFFSET : false)
    }
    const t = setTimeout(check, 50)
    window.addEventListener("scroll", check, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener("scroll", check)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1000) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const mode: HeaderMode = open ? "open" : solid ? "solid" : "top"
  return (
    <>
      <HeaderView mode={mode} onToggle={() => setOpen((o) => !o)} />
      {open ? <MobileMenu /> : null}
    </>
  )
}
