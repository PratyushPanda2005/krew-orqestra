import { formatINR } from "@krew/schemas"

import { income as copy } from "@/app/(marketing)/copy"
import { growth, income } from "@/lib/landing-samples"

/*
 * The round "portrait" of each growth card (after Orionix's client photos): a dial drawn in SVG
 * on a softly lit navy disc, 232 px. Example data from lib/landing-samples.
 *   earned  12 month segments (April to March); the months so far fill in green, brighter as
 *           money in grows, October brightest; the total in the middle
 *   work    a donut of earnings by kind of work, weddings brightest; the rating in the middle
 *   goal    a progress ring to the savings goal; the share saved in the middle
 */

const R = 100
const C = 2 * Math.PI * R
const STROKE = 12
const track = "color-mix(in srgb, var(--brand-snow) 12%, transparent)"

/** One arc of the ring: from `from` to `to` (0 to 1 round the circle, from 12 o'clock), with a gap in px. */
function Arc({ from, to, color, gap = 0, opacity = 1, round }: { from: number; to: number; color: string; gap?: number; opacity?: number; round?: boolean }) {
  const len = Math.max((to - from) * C - gap, 0)
  return (
    <circle
      cx="116"
      cy="116"
      r={R}
      fill="none"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth={STROKE}
      strokeLinecap={round ? "round" : "butt"}
      strokeDasharray={`${len} ${C}`}
      strokeDashoffset={-(from * C + gap / 2)}
      transform="rotate(-90 116 116)"
    />
  )
}

function Middle({ big, small, accent }: { big: string; small: string; accent?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-10 text-center text-brand-snow">
      <p className="font-display text-[1.75rem] leading-none font-semibold tracking-tight tabular">{big}</p>
      <p className="text-xs leading-snug text-brand-snow/65">{small}</p>
      {accent && <p className="mt-1 text-xs font-semibold text-brand-green">{accent}</p>}
    </div>
  )
}

export function GrowthDial({ kind }: { kind: "earned" | "work" | "goal" }) {
  let rings: React.ReactNode
  let middle: React.ReactNode

  if (kind === "earned") {
    const max = Math.max(...income.months.map((m) => m.in))
    rings = Array.from({ length: 12 }, (_, i) => {
      const m = income.months[i]
      const now = i === income.months.length - 1
      return <Arc key={i} from={i / 12} to={(i + 1) / 12} gap={6} color={m ? "var(--brand-green)" : track} opacity={m ? (now ? 1 : 0.3 + 0.5 * (m.in / max)) : 1} />
    })
    middle = <Middle big={formatINR(income.received)} small={copy.dial.earned} accent={copy.dial.up(growth.monthChange)} />
  } else if (kind === "work") {
    const total = growth.byType.reduce((sum, t) => sum + t.paise, 0)
    const shades = [1, 0.6, 0.35, 0.2]
    let at = 0
    rings = growth.byType.map((t, i) => {
      const from = at
      at += t.paise / total
      return <Arc key={t.type} from={from} to={at} gap={6} color={i === 0 ? "var(--brand-green)" : "var(--brand-snow)"} opacity={i === 0 ? 1 : shades[i]} />
    })
    middle = <Middle big={`★ ${growth.reviews.rating}`} small={copy.dial.reviews(growth.reviews.count)} accent={copy.dial.top(growth.byType[0]!.type, Math.round((growth.byType[0]!.paise / total) * 100))} />
  } else {
    const g = growth.goals[0]!
    const share = g.saved / g.target
    rings = (
      <>
        <Arc from={0} to={1} color={track} />
        <Arc from={0} to={share} color="var(--brand-green)" round />
      </>
    )
    middle = <Middle big={`${Math.round(share * 100)}%`} small={g.name} accent={copy.dial.by(g.by!)} />
  }

  return (
    <div className="relative size-58 rounded-full bg-[radial-gradient(circle_at_50%_30%,color-mix(in_srgb,var(--brand-violet)_45%,var(--brand-navy)),var(--brand-navy-deep)_75%)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--brand-snow)_10%,transparent)]">
      <svg aria-hidden viewBox="0 0 232 232" className="absolute inset-0 size-full">
        {rings}
      </svg>
      {middle}
    </div>
  )
}
