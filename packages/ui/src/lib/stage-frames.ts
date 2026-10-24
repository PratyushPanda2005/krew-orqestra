import type { JobStage } from "@krew/schemas"

/**
 * The stage rail's logic with no UI imports, so a tiny client script can move a
 * server-rendered rail (set `data-state` on each frame) without shipping React UI code.
 */
export const STAGE_FRAMES = ["Enquiry", "Quote", "Advance", "Work", "Review", "Invoice", "Paid"] as const

export type FrameState = "done" | "current" | "attention" | "todo" | "off"

const stageToFrame: Record<JobStage, number> = {
  enquiry: 0,
  briefing: 0,
  quoted: 1,
  booked: 2,
  atRisk: 2,
  inProgress: 3,
  inReview: 4,
  approved: 5,
  invoiced: 5,
  paid: 6,
  closed: 7,
  lost: -1,
}

export function frameStates(stage: JobStage): { states: FrameState[]; label: string } {
  const current = stageToFrame[stage]
  const attention = stage === "atRisk"
  const lost = stage === "lost"
  const label = lost
    ? "Job lost"
    : current >= STAGE_FRAMES.length
      ? "Job closed"
      : `Step ${current + 1} of ${STAGE_FRAMES.length}: ${STAGE_FRAMES[current]}${attention ? ", needs attention" : ""}`
  const states = STAGE_FRAMES.map((_, i): FrameState =>
    lost ? "off" : i < current ? "done" : i === current ? (attention ? "attention" : "current") : "todo"
  )
  return { states, label }
}

/** Repaint a server-rendered StageRail in place. */
export function paintStageRail(root: Element, stage: JobStage) {
  const { states, label } = frameStates(stage)
  root.querySelector("ol")?.setAttribute("aria-label", label)
  root.querySelectorAll("li").forEach((li, i) => {
    const state = states[i] ?? "todo"
    li.setAttribute("data-state", state)
    if (state === "current" || state === "attention") li.setAttribute("aria-current", "step")
    else li.removeAttribute("aria-current")
  })
}
