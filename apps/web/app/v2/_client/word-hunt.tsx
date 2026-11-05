"use client"

import { useEffect, useRef } from "react"

/** A new word is found this often, and this many stay circled at a time. */
const EVERY_MS = 1500
const SHOWN = 3
const LETTER = "wordsearch-letter"

/**
 * Word search: circles the words one after another, in a scattered order, while the grid is on
 * screen. Each word's frame is drawn by its reveal pen and its letters darken, using the reference's
 * own classes; the oldest word fades out. Stays as the finished frame under reduced motion.
 */
export function WordHunt() {
  const marker = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const grid = marker.current?.parentElement
    if (!grid || matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const frames = [...grid.querySelectorAll<HTMLElement>(":scope > .absolute")]
    const spans = [...grid.querySelectorAll<HTMLElement>("span")].filter((s) => s.textContent?.length === 1)
    const order = frames.map((_, i) => (i * 7) % frames.length)
    let words: { frame: HTMLElement; pen: Element | null; letters: HTMLElement[] }[] = []

    const measure = () => {
      words = order.map((i) => {
        const frame = frames[i]!
        const box = frame.getBoundingClientRect()
        const letters = spans.filter((s) => {
          const r = s.getBoundingClientRect()
          const x = r.left + r.width / 2
          const y = r.top + r.height / 2
          return x > box.left && x < box.right && y > box.top && y < box.bottom
        })
        return { frame, pen: frame.querySelector(".wordsearch-reveal-pen"), letters }
      })
    }

    const off = (word: (typeof words)[number]) => {
      word.frame.style.opacity = "0"
      word.pen?.classList.remove("wordsearch-reveal--run")
      word.letters.forEach((l, i) => {
        l.classList.remove(`${LETTER}--run`)
        l.classList.add(LETTER, `${LETTER}--lvl${i < 2 ? 1 : 2}`, `${LETTER}--fading`)
      })
    }
    const on = (word: (typeof words)[number]) => {
      word.frame.style.opacity = "1"
      word.pen?.classList.add("wordsearch-reveal--run")
      word.letters.forEach((l, i) => {
        l.classList.remove(`${LETTER}--fading`)
        l.classList.add(LETTER, `${LETTER}--lvl${i < 2 ? 1 : 2}`, `${LETTER}--run`)
        l.style.setProperty("--wordsearch-letter-delay", "300ms")
      })
    }

    // Start from a clean grid; the captured frame had three words already circled.
    const clear = () => {
      frames.forEach((f) => {
        f.style.opacity = "0"
        f.style.transition = "opacity 350ms ease"
        f.querySelector(".wordsearch-reveal-pen")?.classList.remove("wordsearch-reveal--run")
      })
      spans.forEach((s) => s.classList.replace(`${LETTER}--run`, `${LETTER}--fading`))
    }

    let next = 0
    let timer = 0
    let started = false
    const tick = () => {
      if (words.length) {
        on(words[next % words.length]!)
        if (next >= SHOWN) off(words[(next - SHOWN) % words.length]!)
        next += 1
      }
      timer = window.setTimeout(tick, EVERY_MS)
    }
    const seen = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer)
        if (!entry?.isIntersecting) return
        if (!started) {
          started = true
          measure()
          clear()
        }
        tick()
      },
      { rootMargin: "-10% 0px" }
    )
    seen.observe(grid)
    return () => {
      clearTimeout(timer)
      seen.disconnect()
    }
  }, [])

  return <span ref={marker} hidden />
}
