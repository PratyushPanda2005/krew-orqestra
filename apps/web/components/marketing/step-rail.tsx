"use client"

import type { JobStage } from "@krew/schemas"
import { paintStageRail } from "@krew/ui/lib/stage-frames"
import { useEffect } from "react"

/**
 * Moves the sticky rail in "How a job runs" to whichever step is in the middle of the
 * screen. A state change, not an animation, so it needs no GSAP. Renders nothing:
 * the rail itself is server-rendered (see How) and hidden without JS.
 */
export function StepRail({ steps }: { steps: { stage: JobStage; title: string }[] }) {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>("[data-step-rail]")
    const label = bar?.querySelector<HTMLElement>("[data-step-label]")
    if (!bar || !label) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const i = Number(e.target.getAttribute("data-step"))
          paintStageRail(bar, steps[i]!.stage)
          label.textContent = `${i + 1} · ${steps[i]!.title}`
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    document.querySelectorAll("[data-step]").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [steps])

  return null
}
