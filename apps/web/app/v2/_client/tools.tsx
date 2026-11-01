"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

import { ToolsPanel0, ToolsPanel1, ToolsPanel2 } from "../_sections/tools-panels"
import { TOOLS_TABS, ToolsView } from "../_sections/tools-view"

const PANELS = [<ToolsPanel0 key="0" />, <ToolsPanel1 key="1" />, <ToolsPanel2 key="2" />]

/** Each tab stays this long before the next one takes over. */
const TAB_MS = 8000

export function Tools() {
  const [tab, setTab] = useState(0)
  const [cycle, setCycle] = useState(0)
  const barRef = useRef<HTMLSpanElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const leftCloud = useRef<HTMLDivElement>(null)
  const rightCloud = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  const select = useCallback((i: number) => {
    setTab(i)
    setCycle((c) => c + 1)
  }, [])

  // Progress line fills over 8 s, then the next tab starts.
  useLayoutEffect(() => {
    const bar = barRef.current
    if (bar) bar.style.height = "0%"
    const start = performance.now()
    let frame = requestAnimationFrame(function step(now) {
      const p = (now - start) / TAB_MS
      if (p >= 1) {
        if (barRef.current) barRef.current.style.height = "100%"
        setTab((t) => (t + 1) % TOOLS_TABS.length)
        setCycle((c) => c + 1)
        return
      }
      if (barRef.current) barRef.current.style.height = `${100 * p}%`
      frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [cycle])

  // New panel rises 20 px and fades in.
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const anim = panelRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0px)" },
      ],
      { duration: 450, easing: "ease-out", fill: "forwards" }
    )
    return () => anim?.cancel()
  }, [tab])

  // Clouds drift outwards and up as the band scrolls through the screen.
  useEffect(() => {
    let frame = 0
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      if (r.bottom < -200 || r.top > h + 200) return
      const s = Math.max(0, Math.min(1, 1 - r.top / h))
      if (leftCloud.current) leftCloud.current.style.transform = `translate3d(${-0.2 * leftCloud.current.offsetWidth}px, ${-190 * Math.pow(s, 1.1)}px, 0)`
      if (rightCloud.current) rightCloud.current.style.transform = `translate3d(${0.2 * rightCloud.current.offsetWidth}px, ${-240 * Math.pow(s, 1.3)}px, 0)`
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <ToolsView
      TABS={TOOLS_TABS}
      PANELS={PANELS}
      tab={tab}
      select={select}
      barRef={barRef}
      panelRef={panelRef}
      sectionRef={sectionRef}
      leftCloud={leftCloud}
      rightCloud={rightCloud}
    />
  )
}
