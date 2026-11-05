"use client"

import { useEffect, useRef } from "react"

/**
 * Plays a mock-up as a looping story, one step at a time, while it is on screen. Put <Live /> inside
 * the mock-up; it drives its parent element from data attributes on the markup (live.css has the looks):
 *   data-at="n"        off until step n, then on (data-fx picks the look); data-now marks the current step
 *   data-steps="a|b"   text for each step, the last value holding
 *   data-w="0|40"      width in px for each step
 *   data-type="n"      the text types itself out at step n, its space reserved
 * Without JS, or with reduced motion, the markup stays as the finished frame.
 */
export function Live({ steps, ms = 1300, hold = 2600 }: { steps: number; ms?: number; hold?: number }) {
  const marker = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = marker.current?.parentElement
    if (!root) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll("svg").forEach((svg) => svg.pauseAnimations())
      return
    }

    const all = (sel: string) => [...root.querySelectorAll<HTMLElement>(sel)]
    const pick = (list: string[], step: number) => list[Math.min(step, list.length - 1)]!
    const marks = all("[data-at]").map((el) => ({ el, at: Number(el.dataset.at) }))
    const texts = all("[data-steps]").map((el) => ({ el, list: el.dataset.steps!.split("|"), start: el.textContent }))
    const widths = all("[data-w]").map((el) => ({ el, list: el.dataset.w!.split("|") }))
    const typed = all("[data-type]").map((el) => {
      const text = el.textContent ?? ""
      const shown = document.createElement("span")
      const rest = document.createElement("span")
      rest.style.visibility = "hidden"
      el.replaceChildren(shown, rest)
      return { el, text, at: Number(el.dataset.type), shown, rest }
    })

    let typing = 0
    const type = (item: (typeof typed)[number]) => {
      const begin = performance.now()
      const run = (now: number) => {
        const n = Math.min(Math.ceil(((now - begin) / (ms * 0.8)) * item.text.length), item.text.length)
        item.shown.textContent = item.text.slice(0, n)
        item.rest.textContent = item.text.slice(n)
        if (n < item.text.length) typing = requestAnimationFrame(run)
      }
      typing = requestAnimationFrame(run)
    }

    const show = (step: number) => {
      marks.forEach(({ el, at }) => {
        el.toggleAttribute("data-on", at <= step)
        el.toggleAttribute("data-now", at === step)
      })
      texts.forEach(({ el, list }) => {
        const next = pick(list, step)
        if (el.textContent === next) return
        el.textContent = next
        el.animate({ opacity: [0, 1] }, { duration: 350, easing: "ease-out" })
      })
      widths.forEach(({ el, list }) => (el.style.width = `${pick(list, step)}px`))
      cancelAnimationFrame(typing)
      typed.forEach((item) => {
        const on = step >= item.at
        if (step === item.at) return type(item)
        item.shown.textContent = on ? item.text : ""
        item.rest.textContent = on ? "" : item.text
      })
    }

    root.classList.add("live-on")
    let step = 0
    let timer = 0
    const tick = () => {
      show(step)
      const last = step === steps - 1
      step = last ? 0 : step + 1
      timer = window.setTimeout(tick, last ? hold : ms)
    }
    show(0)
    const seen = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer)
        if (entry?.isIntersecting) tick()
      },
      { rootMargin: "-15% 0px" }
    )
    seen.observe(root)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(typing)
      seen.disconnect()
      root.classList.remove("live-on")
      marks.forEach(({ el }) => (el.removeAttribute("data-on"), el.removeAttribute("data-now")))
      texts.forEach(({ el, start }) => (el.textContent = start))
      typed.forEach(({ el, text }) => (el.textContent = text))
    }
  }, [steps, ms, hold])

  return <span ref={marker} hidden />
}
