"use client"

import { useEffect, useRef, useState } from "react"

import { HeroView } from "../_sections/hero-view"

const NOTIFICATIONS = [
  { status: "Task Completed", label: "Marketing Campaign" },
  { status: "Task Completed", label: "New webpage" },
  { status: "Task running", label: "bug fix" },
  { status: "Task Completed", label: "SEO Optimization" },
]

const SETUP_PROMPT = "Paste your Krew setup prompt here."

type Item = { key: number; notif: number; exiting: boolean }

/** Glass task pills on the right of the hero: three pop in, then the oldest leaves and a new one joins. */
function HeroNotifications() {
  const [items, setItems] = useState<Item[]>([])
  const nextKey = useRef(0)
  const nextNotif = useRef(0)

  useEffect(() => {
    let stopped = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(() => !stopped && fn(), ms))
    const add = () => {
      const key = nextKey.current++
      const notif = nextNotif.current++ % NOTIFICATIONS.length
      setItems((list) => [...list, { key, notif, exiting: false }])
    }
    const cycle = () => {
      setItems((list) => (list.length === 0 ? list : [{ ...list[0]!, exiting: true }, ...list.slice(1)]))
      later(() => {
        setItems((list) => list.filter((i) => !i.exiting))
        add()
        later(cycle, 2200)
      }, 430)
    }
    for (let i = 0; i < 3; i++) later(add, 500 + 1100 * i)
    later(cycle, 5200)
    return () => {
      stopped = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <>
      {items.map((item) => {
        const n = NOTIFICATIONS[item.notif]!
        const running = n.status === "Task running"
        return (
          <div key={item.key} className="hero-notif-wrap" data-exiting={item.exiting || undefined}>
            <div className="hero-notif-pop">
              <div className="hero-notif-wheel-item hero-notif-wheel-item-idle">
                <div className="glass-pill text-shadow-xs">
                  <div className="px-3 py-2 lg:px-3 lg:py-3 [@media(max-height:600px)]:max-[991px]:py-2 [@media(max-height:600px)]:max-[991px]:px-2" style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "460", color: "rgba(255,255,255,var(--notif-status-text-alpha))", letterSpacing: "0.01em" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: running ? "#34D399" : "#A3E635", boxShadow: running ? "0 0 6px rgba(52,211,153,0.5)" : "0 0 6px rgba(163,230,53,0.4)", display: "inline-block", flexShrink: "0" }} />
                      {n.status}
                    </span>
                    <span style={{ fontWeight: "500", color: "rgba(255,255,255,var(--notif-label-text-alpha))", fontStyle: "italic" }}>{n.label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const blurRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle")
  const [orbit, setOrbit] = useState<"idle" | "active" | "exiting">("idle")
  const orbitTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Scroll dissolve: over the first 400 px the copy fades and rises 30 px while the blur comes in.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const p = Math.min(1, window.scrollY / 400)
        if (contentRef.current) {
          contentRef.current.style.opacity = String(Math.max(0, 1 - 2 * p))
          contentRef.current.style.transform = `translateY(${-30 * p}px)`
        }
        if (blurRef.current) blurRef.current.style.opacity = String(Math.min(1, 2.5 * p))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => () => clearTimeout(orbitTimer.current), [])

  const enter = () => {
    clearTimeout(orbitTimer.current)
    setOrbit("active")
  }
  const leave = (el: HTMLElement) => {
    if (el.matches(":hover") || el.querySelector(":focus-visible")) return
    const burst = el.querySelector<HTMLElement>("[class*='__burst']")
    if (!burst || orbit !== "active") return
    const cs = getComputedStyle(burst)
    el.style.setProperty("--exit-transform", cs.transform)
    el.style.setProperty("--exit-opacity", cs.opacity)
    setOrbit("exiting")
    orbitTimer.current = setTimeout(() => setOrbit("idle"), 320)
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SETUP_PROMPT)
      setCopied("copied")
    } catch {
      setCopied("failed")
    }
  }
  const settle = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    e.currentTarget.style.animation = "none"
    e.currentTarget.style.opacity = "1"
    e.currentTarget.style.transform = "none"
  }

  return (
    <HeroView
      contentRef={contentRef}
      blurRef={blurRef}
      HeroNotifications={HeroNotifications}
      copied={copied}
      orbit={orbit}
      copy={copy}
      enter={enter}
      leave={leave}
      settle={settle}
    />
  )
}
