"use client"

import { useEffect } from "react"

/**
 * Opens a question from elsewhere on the page: the "Ask" button on a promise
 * (data-faq-open="N") or a link to #faq-qN. The accordion is native <details name>,
 * so opening one closes the others with no JS; this only handles arriving from a link.
 */
export function FaqOpener() {
  useEffect(() => {
    const open = (i: number) => {
      const d = document.getElementById(`faq-q${i + 1}`)
      if (d instanceof HTMLDetailsElement) d.open = true
    }
    const fromHash = () => {
      const m = /^#faq-q(\d+)$/.exec(window.location.hash)
      if (m) open(Number(m[1]) - 1)
    }
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLElement>("[data-faq-open]")
      if (a) open(Number(a.dataset.faqOpen))
    }
    fromHash()
    window.addEventListener("hashchange", fromHash)
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("hashchange", fromHash)
      document.removeEventListener("click", onClick)
    }
  }, [])

  return null
}
