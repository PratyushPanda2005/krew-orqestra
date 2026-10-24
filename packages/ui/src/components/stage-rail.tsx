import type { JobStage } from "@krew/schemas"
import type * as React from "react"

import { STAGE_FRAMES, frameStates } from "@krew/ui/lib/stage-frames"
import { cn } from "@krew/ui/lib/utils"

/**
 * The job's journey as a strip of frames, like a contact sheet.
 * Done frames are ink, the current frame is rani, a frame that needs
 * attention is haldi. Used on the job page and, small, in the jobs list.
 *
 * Each frame's look comes from `data-state` on its <li>, so `paintStageRail`
 * can move the rail from a small script without re-rendering it.
 */
type StageRailProps = Omit<React.ComponentProps<"div">, "children"> & {
  stage: JobStage
  size?: "sm" | "lg"
}

function StageRail({ stage, size = "lg", className, ...props }: StageRailProps) {
  const { states, label } = frameStates(stage)

  return (
    <div data-slot="stage-rail" className={cn("w-full", className)} {...props}>
      <ol aria-label={label} className={cn("flex w-full", size === "lg" ? "gap-1" : "gap-0.5")}>
        {STAGE_FRAMES.map((frame, i) => {
          const state = states[i]
          return (
            <li
              key={frame}
              data-state={state}
              aria-current={state === "current" || state === "attention" ? "step" : undefined}
              className="group/frame flex min-w-0 flex-1 flex-col gap-1.5"
            >
              <span
                aria-hidden
                data-frame
                className={cn(
                  "relative block w-full rounded-[3px] border",
                  size === "lg" ? "h-7" : "h-2",
                  // sprocket holes along the top and bottom edge (large size only)
                  size === "lg" &&
                    "before:absolute before:inset-x-1.5 before:top-1 before:h-[3px] before:bg-[radial-gradient(circle,var(--sprocket)_1px,transparent_1.5px)] before:bg-[length:6px_3px] after:absolute after:inset-x-1.5 after:bottom-1 after:h-[3px] after:bg-[radial-gradient(circle,var(--sprocket)_1px,transparent_1.5px)] after:bg-[length:6px_3px]",
                  "group-data-[state=done]/frame:border-foreground group-data-[state=done]/frame:bg-foreground group-data-[state=done]/frame:[--sprocket:var(--background)]",
                  "group-data-[state=current]/frame:border-primary group-data-[state=current]/frame:bg-primary group-data-[state=current]/frame:[--sprocket:var(--primary-foreground)]",
                  "group-data-[state=attention]/frame:border-warning group-data-[state=attention]/frame:bg-warning-soft group-data-[state=attention]/frame:[--sprocket:var(--warning)]",
                  "group-data-[state=todo]/frame:border-input group-data-[state=todo]/frame:bg-card group-data-[state=todo]/frame:[--sprocket:var(--input)]",
                  "group-data-[state=off]/frame:border-dashed group-data-[state=off]/frame:border-input group-data-[state=off]/frame:bg-transparent group-data-[state=off]/frame:[--sprocket:transparent]"
                )}
              />
              {size === "lg" && (
                <span
                  className={cn(
                    "truncate text-xs",
                    "group-data-[state=current]/frame:font-semibold group-data-[state=current]/frame:text-primary",
                    "group-data-[state=attention]/frame:font-semibold group-data-[state=attention]/frame:text-warning",
                    "group-data-[state=todo]/frame:text-muted-foreground group-data-[state=off]/frame:text-muted-foreground"
                  )}
                >
                  {frame}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export { StageRail, STAGE_FRAMES }
