import { formatINR } from "@krew/schemas"
import { cn } from "@krew/ui/lib/utils"

import { how, income } from "@/app/(marketing)/copy"
import { liveJobs } from "@/lib/landing-samples"

import { MockExport, MockIncome, MockPending } from "./mocks"
import { PillLink } from "./pill-link"
import { Split } from "./split"
import { eyebrow, quiet, wide } from "./styles"

const art = [MockIncome, MockPending, MockExport]

/**
 * Income's opening screen. After trionn, it waits underneath "How a job runs" and is uncovered
 * as that section's layer slides away to the left (a curtain); so it renders inside How. Big,
 * centred, uppercase title, with a line below and a link down to the jobs. Without the sideways
 * scroll (phones, no JS, reduced motion) it's simply the next screen.
 */
export function IncomeIntro() {
  return (
    <section id="income" aria-labelledby="income-title" data-hz-under className="relative isolate flex flex-col items-center justify-center gap-12 px-5 py-24 text-center md:min-h-svh md:justify-between md:gap-0 lg:px-10 lg:pt-28 lg:pb-12">
      <p className={eyebrow}>[ {income.eyebrow} ]</p>
      <h2 id="income-title" data-blur className="max-w-[16ch] font-display text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.92] font-bold tracking-tight uppercase">
        <Split text={income.title} scatter />
      </h2>
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <span className="hidden w-40 lg:block" />
        <p className="text-xs font-medium tracking-wide uppercase">◆ {income.lead}</p>
        <PillLink href="#jobs" variant="outline" className="whitespace-nowrap">
          {income.more} ↓
        </PillLink>
      </div>
    </section>
  )
}

/**
 * The rest of the income block (PF-26). After Vantra's live list: every job on the go, at its
 * step of the 7, with bars that fill as the list comes in. Then the reference's "Latest
 * Insights" cards rising in, each an app screen on a light panel.
 */
export function Income() {
  const steps = how.steps.length
  return (
    <div id="jobs" className="py-20 lg:py-32">
      <p data-up="0" className={cn(wide, "max-w-3xl text-lg lg:text-xl", quiet)}>
        {income.body}
      </p>

      <div className={cn(wide, "mt-12 lg:mt-16")}>
        <div data-up="0" className="flex items-end justify-between gap-4 border-b border-brand-navy/15 pb-4">
          <h3 className="font-display text-xl font-semibold tracking-tight lg:text-2xl">{income.live.title}</h3>
          <p className={cn("text-right text-xs font-medium tracking-wide uppercase", quiet)}>{income.live.note}</p>
        </div>
        <ul>
          {liveJobs.map((j, i) => (
            <li
              key={j.job}
              data-up={String(i * 2)}
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b border-brand-navy/15 py-4 md:grid-cols-[1.4fr_0.7fr_1.2fr_0.8fr] lg:py-5"
            >
              <div>
                <p className="font-medium">{j.job}</p>
                <p className={cn("text-sm", quiet)}>{j.who}</p>
              </div>
              <p className="text-right text-xs font-medium tracking-wide uppercase md:text-left">{j.stage}</p>
              <div className="col-span-2 md:col-span-1">
                <div className="flex justify-between text-xs tabular">
                  <span>{income.live.step(j.step, steps)}</span>
                  <span className={quiet}>{j.due}</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-brand-navy/10">
                  <div
                    data-bar
                    style={{ "--k": j.step / steps } as React.CSSProperties}
                    className="h-full rounded-full bg-brand-green"
                  />
                </div>
              </div>
              <p className="hidden text-right font-medium tabular md:block">{formatINR(j.value)}</p>
            </li>
          ))}
        </ul>
      </div>

      <ul className={cn(wide, "mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-24")}>
        {income.points.map((point, i) => {
          const Art = art[i]!
          return (
            <li key={point} data-up="4">
              <div aria-hidden className="aspect-[4/3] overflow-hidden rounded-lg bg-brand-navy/[0.06] px-6 pt-6">
                <Art />
              </div>
              <p className="mt-5 text-sm font-medium">{income.tags[i]}</p>
              <h3 className="mt-2 font-display text-xl leading-snug font-semibold tracking-tight lg:text-2xl">{point}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
