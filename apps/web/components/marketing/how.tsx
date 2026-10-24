import type { JobStage } from "@krew/schemas"
import { StageRail } from "@krew/ui/components/stage-rail"

import { how, income } from "@/app/(marketing)/copy"
import { heroSequence } from "@/lib/hero-sequence"

import { MockIncome, stageMocks } from "./mocks"
import { Section } from "./section"
import { StepRail } from "./step-rail"
import { linkButton } from "./styles"

const steps: { stage: JobStage; title: string; body: string }[] = how.steps.map((s, i) => ({
  ...s,
  stage: heroSequence[i]!.stage,
}))

export function How() {
  return (
    <Section id="how" title={how.title} intro={how.intro}>
      {/* Sticky rail that follows the step in view (StepRail moves it). Hidden without JS, and
          from screen readers, since each step's heading says the same thing. */}
      <div
        data-js-only
        data-step-rail
        aria-hidden
        className="sticky top-14 z-10 -mx-4 mt-6 border-b bg-background/95 px-4 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:mx-0 lg:px-0"
      >
        <div className="flex items-center gap-3">
          <StageRail stage={steps[0]!.stage} size="sm" className="flex-1" />
          <span data-step-label className="w-24 shrink-0 text-right text-sm font-medium tabular">
            1 · {steps[0]!.title}
          </span>
        </div>
      </div>
      <StepRail steps={steps.map(({ stage, title }) => ({ stage, title }))} />
      <ol className="mt-4">
        {steps.map((s, i) => {
          const Mock = stageMocks[i]!
          return (
            <li
              key={s.title}
              data-step={i}
              className="grid gap-6 border-b py-10 last:border-b-0 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-16"
            >
              <div className="lg:col-span-5">
                <p className="text-sm font-medium text-muted-foreground tabular">
                  Step {i + 1} of {steps.length}
                </p>
                <h3 className="condensed mt-1 text-2xl font-semibold lg:text-4xl">{s.title}</h3>
                <p className="mt-2 max-w-prose text-base lg:text-lg">{s.body}</p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <Mock />
              </div>
            </li>
          )
        })}
      </ol>
      {/* Beside the ledger step: the same ledger, across every job. Not a step, so no data-step. */}
      <div
        id="income"
        className="-mx-4 grid gap-6 bg-secondary/40 px-4 py-10 lg:mx-0 lg:grid-cols-12 lg:items-center lg:gap-8 lg:rounded-sheet lg:p-12"
      >
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-muted-foreground">{income.eyebrow}</p>
          <h3 className="condensed mt-1 text-2xl font-semibold lg:text-4xl">{income.title}</h3>
          <p className="mt-2 max-w-prose text-base lg:text-lg">{income.body}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {income.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-base">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <MockIncome />
        </div>
      </div>
      <a href="#waitlist" className={`${linkButton()} mt-8 w-full sm:w-auto`}>
        {how.cta}
      </a>
    </Section>
  )
}
