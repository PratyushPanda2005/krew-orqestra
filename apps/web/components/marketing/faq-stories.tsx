"use client"

import { cn } from "@krew/ui/lib/utils"
import { useEffect, useRef, useState } from "react"

import { faq } from "@/app/(marketing)/copy"

const arrow = (d: string) => (
  <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

/**
 * The questions as trionn's "Client stories": the questions listed on the left (tabs), one
 * answer at a time in big type that lights up word by word, and previous / next buttons.
 * Tabs follow the ARIA pattern (arrow keys move between them). Before JS (html.js unset) the
 * list is hidden and every answer shows; marketing.css does the hiding and the word light-up.
 */
export function FaqStories() {
  const [on, setOn] = useState(0)
  const [seen, setSeen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const n = faq.items.length

  // The first answer lights up when the section comes into view, not on page load.
  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setSeen(true), io.disconnect()), { rootMargin: "0px 0px -25% 0px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // "Ask" on a promise (data-faq-open), or a link straight to #faq-qN, opens that question.
  useEffect(() => {
    const open = (i: number) => (setOn(i), setSeen(true))
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

  const go = (i: number, focus = false) => {
    const next = (i + n) % n
    setOn(next)
    if (focus) tabs.current[next]?.focus()
  }

  return (
    <div ref={root} data-stories data-seen={seen || undefined} className="relative mt-12 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-6">
      {/* Link targets for #faq-q1…6, so those links scroll here. */}
      {faq.items.map((item, i) => (
        <span key={item.q} id={`faq-q${i + 1}`} aria-hidden className="absolute -top-24" />
      ))}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label={faq.title}
        data-js-only
        className="flex flex-col lg:col-span-4 lg:col-start-2"
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowRight") (e.preventDefault(), go(on + 1, true))
          if (e.key === "ArrowUp" || e.key === "ArrowLeft") (e.preventDefault(), go(on - 1, true))
          if (e.key === "Home") (e.preventDefault(), go(0, true))
          if (e.key === "End") (e.preventDefault(), go(n - 1, true))
        }}
      >
        {faq.items.map((item, i) => (
          <button
            key={item.q}
            ref={(el) => {
              tabs.current[i] = el
            }}
            id={`faq-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === on}
            aria-controls={`faq-panel-${i}`}
            tabIndex={i === on ? 0 : -1}
            onClick={() => go(i)}
            className={cn(
              "group flex min-h-tap items-center gap-2 border-b border-brand-navy/10 py-2 text-left text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy",
              i === on ? "font-medium text-brand-navy" : "text-brand-navy/60 hover:text-brand-navy"
            )}
          >
            <span className="w-6 shrink-0 text-xs tabular">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex-1">{item.q}</span>
            <span aria-hidden className={cn("transition-transform duration-300", i === on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0")}>
              →
            </span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-6 lg:col-start-6">
        {faq.items.map((item, i) => {
          let w = 0
          return (
            <div
              key={item.q}
              id={`faq-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`faq-tab-${i}`}
              data-story
              data-on={i === on || undefined}
              tabIndex={0}
              className="rounded-md outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
            >
              <h3 className={cn("text-xs font-medium tracking-wide uppercase tabular", "text-brand-navy/70")}>
                {String(i + 1).padStart(2, "0")} · {item.q}
              </h3>
              <p className="mt-5 font-display text-[1.625rem] leading-[1.2] font-medium tracking-tight text-pretty lg:text-[2.25rem]">
                {item.a.split(" ").map((word, k) => (
                  <span key={k}>
                    <span data-word style={{ "--w": w++ } as React.CSSProperties}>
                      {word}
                    </span>{" "}
                  </span>
                ))}
              </p>
            </div>
          )
        })}

        <div data-js-only className="mt-10 flex items-center gap-3">
          <button
            type="button"
            aria-label={faq.prev}
            onClick={() => go(on - 1)}
            className="flex size-12 items-center justify-center rounded-full border border-brand-navy/30 transition-colors hover:bg-brand-navy hover:text-brand-snow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            {arrow("M15 6l-6 6 6 6")}
          </button>
          <button
            type="button"
            aria-label={faq.next}
            onClick={() => go(on + 1)}
            className="flex size-12 items-center justify-center rounded-full border border-brand-navy/30 transition-colors hover:bg-brand-navy hover:text-brand-snow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            {arrow("M9 6l6 6-6 6")}
          </button>
          <span className="ml-2 text-sm text-brand-navy/70 tabular">
            {String(on + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}
