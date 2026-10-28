import { cn } from "@krew/ui/lib/utils"

import { income } from "@/app/(marketing)/copy"

import { MockExport, MockIncome, MockPending } from "./mocks"
import { Split } from "./split"
import { eyebrow, quiet, sectionTitle, wide } from "./styles"

const art = [MockIncome, MockPending, MockExport]

/**
 * The income block (PF-26) in the layout of the reference's "Latest Insights": the title rises
 * letter by letter, then three cards rise in. The card art is our own app screens, cropped, not photos: real UI says more here.
 */
export function Income() {
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

      <ul className={cn(wide, "mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-20")}>
        {income.points.map((point, i) => {
          const Art = art[i]!
          return (
            <li key={point} data-up="4">
              <div aria-hidden className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-navy/[0.06] px-6 pt-6">
                <Art />
                <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-snow/90 to-transparent" />
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
