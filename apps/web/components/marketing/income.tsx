import { formatINR } from "@krew/schemas"
import { cn } from "@krew/ui/lib/utils"

import { how, income } from "@/app/(marketing)/copy"
import { liveJobs } from "@/lib/landing-samples"

import { Gradient, type GradientKind } from "./gradient"
import { MockExport, MockIncome, MockPending } from "./mocks"
import { Split } from "./split"
import { eyebrow, quiet, sectionTitle, wide } from "./styles"

const art = [MockIncome, MockPending, MockExport]
const grads: GradientKind[] = ["swift", "dusk", "dither"]

/**
 * The income block (PF-26). After Vantra's live list: every job on the go, at its step of the
 * 7, with bars that fill as the list comes in. Then the reference's "Latest Insights" cards:
 * the title rises letter by letter and three cards rise in, each an app screen on a grainy
 * gradient (swift, dusk, dither).
 */
export function Income() {
  const steps = how.steps.length
  return (
    <section id="income" aria-labelledby="income-title" className="py-20 lg:py-32">
      <div className={cn(wide, "grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10")}>
        <div className="lg:col-span-6">
          <p data-up="0" className={eyebrow}>
            [ {income.eyebrow} ]
          </p>
          <h2 id="income-title" data-split className={cn(sectionTitle, "mt-4")}>
            <Split text={income.title} />
          </h2>
        </div>
        <p data-up="2" className={cn("text-base lg:col-span-5 lg:col-start-8 lg:text-lg", quiet)}>
          {income.body}
        </p>
      </div>

      <div className={cn(wide, "mt-14 lg:mt-20")}>
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
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand-violet),var(--brand-green))]"
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
              <div aria-hidden className="relative isolate aspect-[4/3] overflow-hidden rounded-lg px-6 pt-6">
                <Gradient kind={grads[i]!} className="-z-10" />
                <Art />
                <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-brand-navy-deep/30 to-transparent" />
              </div>
              <p className="mt-5 text-sm font-medium">{income.tags[i]}</p>
              <h3 className="mt-2 font-display text-xl leading-snug font-semibold tracking-tight lg:text-2xl">{point}</h3>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
