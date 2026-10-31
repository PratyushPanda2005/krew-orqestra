import { formatINR } from "@krew/schemas"
import { Button } from "@krew/ui/components/button"
import { ListRow } from "@krew/ui/components/list-row"
import { Money } from "@krew/ui/components/money"
import { StageRail } from "@krew/ui/components/stage-rail"
import { StatusPill } from "@krew/ui/components/status-pill"

import { arjun, growth, income, riya } from "@/lib/landing-samples"

import { ChatBubble } from "./chat-bubble"
import { MockHeader, PhoneFrame } from "./phone-frame"

/** Mock app screens for "How a job runs", one per stage, built from the real components. */

const row = "px-4 py-2.5"

function MockEnquiry() {
  return (
    <PhoneFrame>
      <MockHeader title={riya.client} meta="Instagram" />
      <div className="flex flex-col gap-2 px-4 py-3">
        <ChatBubble from="them">Hi! What do you charge for a pre-wedding shoot?</ChatBubble>
        <ChatBubble from="bot">
          Pre-wedding shoots start from ₹25,000. Here's my portfolio. Which date, and where?
        </ChatBubble>
        <ChatBubble from="them">14 Dec, Lonavala. Budget around ₹50k</ChatBubble>
      </div>
      <div className="flex items-center justify-between gap-2 border-t px-4 py-3">
        <StatusPill tone="primary">Handed to you</StatusPill>
        <Button size="sm" variant="outline" tabIndex={-1}>
          Take over
        </Button>
      </div>
    </PhoneFrame>
  )
}

function MockQuote() {
  const q = riya.quote
  return (
    <PhoneFrame>
      <MockHeader title={`Quote · ${riya.job}`} meta={`For ${riya.client}`} />
      <div className="divide-y">
        {q.lines.map((l) => (
          <ListRow key={l.label} className={row} title={l.label} trailing={<Money paise={l.paise} size="sm" />} />
        ))}
        <ListRow className={row} title="GST 18%" trailing={<Money paise={q.gst} size="sm" />} />
      </div>
      <div className="flex items-end justify-between border-t px-4 py-3">
        <span className="text-muted-foreground">Total</span>
        <Money paise={q.total} size="amount" />
      </div>
      <div className="flex flex-col gap-1 border-t px-4 py-3">
        <StatusPill tone="success" className="self-start">
          Accepted · {q.acceptedOn}
        </StatusPill>
        <span className="text-xs text-muted-foreground">
          Typed name: {riya.client} · {q.acceptedAt}
        </span>
      </div>
    </PhoneFrame>
  )
}

function MockAdvance() {
  return (
    <PhoneFrame>
      <MockHeader title="Advance" meta={`${riya.job} · ${riya.client}`} />
      <div className="flex items-end justify-between px-4 py-4">
        <Money paise={riya.advance} size="amount" />
        <StatusPill tone="success">Paid by UPI</StatusPill>
      </div>
      <div className="border-t">
        <ListRow
          className={row}
          title={arjun.job}
          meta="Shoot in 2 days · advance not paid"
          trailing={<StatusPill tone="warning">At risk</StatusPill>}
        />
      </div>
    </PhoneFrame>
  )
}

function MockTasks() {
  return (
    <PhoneFrame>
      <MockHeader title={`${arjun.job} · Tasks`} meta={`Arjun's crew · ${formatINR(arjun.total)} job`} />
      <div className="px-4 py-3">
        <StageRail stage="inProgress" size="sm" />
      </div>
      <div className="divide-y border-t">
        {arjun.tasks.map((t) => (
          <ListRow
            key={t.title}
            className={row}
            title={t.title}
            meta={`${t.who} · ${t.when}`}
            trailing={<StatusPill tone={t.tone}>{t.status}</StatusPill>}
          />
        ))}
      </div>
    </PhoneFrame>
  )
}

function MockReview() {
  return (
    <PhoneFrame>
      <MockHeader title="Draft 2 · Highlight film" meta={`Review by ${riya.client}`} />
      <div className="px-4 pt-3">
        {/* A video frame stays dark in both themes. */}
        <div className="relative flex aspect-video items-end rounded-lg bg-foreground p-2 dark:bg-secondary">
          <div className="relative h-1 w-full rounded-full bg-background/30 dark:bg-foreground/30">
            <span className="absolute inset-y-0 left-0 w-[23%] rounded-full bg-background dark:bg-foreground" />
            <span className="absolute top-1/2 left-[23%] size-3 -translate-1/2 rounded-full border-2 border-background bg-primary dark:border-foreground" />
          </div>
          <span className="absolute top-2 right-2 rounded bg-background/90 px-1.5 text-xs text-foreground tabular">
            0:42 / 3:00
          </span>
        </div>
      </div>
      <div className="divide-y">
        <ListRow
          className={row}
          leading={<Avatar letter="M" />}
          title="Warmer colour here"
          meta={`${riya.clientFirst} · at 0:42`}
        />
        <ListRow
          className={row}
          leading={<Avatar letter="M" />}
          title="Love this shot"
          meta={`${riya.clientFirst} · at 1:15`}
        />
      </div>
      <div className="flex gap-2 border-t px-4 py-3">
        <Button variant="outline" size="lg" className="flex-1" tabIndex={-1}>
          Ask for changes
        </Button>
        <Button size="lg" className="flex-1" tabIndex={-1}>
          Approve
        </Button>
      </div>
    </PhoneFrame>
  )
}

function MockInvoice() {
  const inv = riya.invoice
  return (
    <PhoneFrame>
      <MockHeader title={`Invoice ${inv.number}`} meta={`${inv.date} · SAC ${inv.sac}`} />
      <div className="divide-y">
        <ListRow className={row} title="Taxable value" trailing={<Money paise={riya.quote.taxable} size="sm" />} />
        <ListRow className={row} title="CGST 9%" trailing={<Money paise={inv.cgst} size="sm" />} />
        <ListRow className={row} title="SGST 9%" trailing={<Money paise={inv.sgst} size="sm" />} />
        <ListRow
          className={row}
          title="Less advance"
          trailing={
            <span className="text-sm text-muted-foreground">
              −<Money paise={riya.advance} size="sm" tone="muted" />
            </span>
          }
        />
      </div>
      <div className="flex items-end justify-between border-t px-4 py-3">
        <span className="text-muted-foreground">Due</span>
        <Money paise={inv.due} size="amount" />
      </div>
      <div className="border-t px-4 py-3">
        <Button size="lg" className="w-full" tabIndex={-1}>
          Pay by UPI or card
        </Button>
      </div>
    </PhoneFrame>
  )
}

function MockPaid() {
  return (
    <PhoneFrame>
      <MockHeader title={`Invoice ${riya.invoice.number}`} meta={riya.client} />
      <div className="px-4 py-3">
        <StatusPill tone="success">Paid</StatusPill>
      </div>
      <div className="divide-y border-t">
        <ListRow
          className={row}
          title="Bank transfer"
          meta="24 Nov 2026"
          trailing={<Money paise={riya.paid.received} size="sm" tone="success" />}
        />
        <ListRow
          className={row}
          title="TDS deducted by client"
          meta="Recorded"
          trailing={<Money paise={riya.paid.tds} size="sm" />}
        />
        <ListRow className={row} title="Advance" meta="By UPI" trailing={<Money paise={riya.advance} size="sm" />} />
      </div>
      <div className="flex items-end justify-between border-t px-4 py-3">
        <span className="text-muted-foreground">Settled</span>
        <Money paise={riya.quote.total} size="amount" tone="success" />
      </div>
    </PhoneFrame>
  )
}

/** What you earn (AN-12, AN-15): money earned this year, the average per job, and each month's money in. */
export function MockEarnings() {
  const max = Math.max(...income.months.map((m) => m.in))
  const now = income.months.at(-1)!
  return (
    <PhoneFrame>
      <MockHeader title="Your earnings" meta={`${income.year} · all jobs`} />
      <div className="grid grid-cols-2 divide-x border-b">
        <div className="px-4 py-3">
          <p className="text-xs text-muted-foreground">Earned</p>
          <Money paise={income.received} size="md" tone="success" className="condensed text-xl font-semibold" />
        </div>
        <div className="px-4 py-3">
          <p className="text-xs text-muted-foreground">Average · {growth.jobsDone} jobs</p>
          <Money paise={growth.average} size="md" className="condensed text-xl font-semibold" />
        </div>
      </div>
      <div className="px-4 pt-3">
        <p className="flex justify-between text-xs font-medium text-muted-foreground">
          <span>Money in, by month</span>
          <span className="text-success">Oct up {growth.monthChange}%</span>
        </p>
        <div className="mt-6 flex h-28 items-end gap-0.5 border-b">
          {income.months.map((m) => {
            const current = m === now
            return (
              <div key={m.month} className="relative flex h-full flex-1 items-end justify-center">
                {current && <span className="absolute -top-5 text-xs font-semibold tabular">{formatINR(m.in)}</span>}
                <span className={`w-3/5 rounded-t ${current ? "bg-primary" : "bg-primary/30"}`} style={{ height: `${(m.in / max) * 100}%` }} />
              </div>
            )
          })}
        </div>
        <div className="flex gap-0.5 pt-1 pb-3">
          {income.months.map((m) => (
            <span key={m.month} className="flex-1 text-center text-[0.6875rem] text-muted-foreground">
              {m.month}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

/** Your work (AN-16, AN-15): what clients said, repeat clients, and earnings by kind of work; bars fill as the card comes in. */
export function MockWork() {
  const total = growth.byType.reduce((sum, t) => sum + t.paise, 0)
  return (
    <PhoneFrame>
      <MockHeader title="Your work" meta={`${income.year} · where it comes from`} />
      <div className="grid grid-cols-2 divide-x border-b">
        <div className="px-4 py-3">
          <p className="text-xs text-muted-foreground">Client reviews</p>
          <p className="condensed text-xl font-semibold">
            <span aria-hidden className="text-warning">★</span> {growth.reviews.rating}{" "}
            <span className="text-sm font-normal text-muted-foreground">({growth.reviews.count})</span>
          </p>
        </div>
        <div className="px-4 py-3">
          <p className="text-xs text-muted-foreground">Repeat clients</p>
          <p className="condensed text-xl font-semibold tabular">{growth.repeatClients}</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3 px-4 py-3">
        {growth.byType.map((t, i) => {
          const share = Math.round((t.paise / total) * 100)
          return (
            <li key={t.type}>
              <div className="flex justify-between text-xs">
                <span className="font-medium text-foreground">{t.type}</span>
                <span className="tabular text-muted-foreground">
                  {formatINR(t.paise)} · {share}%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                <div data-bar className={`h-full rounded-full ${i === 0 ? "bg-primary" : "bg-primary/40"}`} style={{ "--k": share / 100 } as React.CSSProperties} />
              </div>
            </li>
          )
        })}
      </ul>
    </PhoneFrame>
  )
}

/**
 * Your goals (not in the spec yet): money set aside towards gear. Krew only tracks it; the money
 * stays in the creator's bank, and the header says so. Bars fill as the card comes in (data-bar).
 */
export function MockGoal() {
  const [main, next] = growth.goals
  const pct = (g: { saved: number; target: number }) => Math.round((g.saved / g.target) * 100)
  return (
    <PhoneFrame>
      <MockHeader title="Your goals" meta="Krew tracks it. Money stays in your bank." />
      <div className="border-b px-4 py-3">
        <div className="flex items-baseline justify-between">
          <p className="font-medium">{main!.name}</p>
          <p className="text-xs font-semibold text-success tabular">{pct(main!)}%</p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground tabular">
          <Money paise={main!.saved} size="sm" className="font-semibold text-foreground" /> of {formatINR(main!.target)}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
          <div data-bar className="h-full rounded-full bg-primary" style={{ "--k": pct(main!) / 100 } as React.CSSProperties} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {formatINR(main!.monthly!)} a month · there by {main!.by}
        </p>
      </div>
      <div className="border-b px-4 py-3">
        <div className="flex items-baseline justify-between text-xs">
          <span className="font-medium text-foreground">{next!.name}</span>
          <span className="tabular text-muted-foreground">
            {formatINR(next!.saved)} of {formatINR(next!.target)}
          </span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
          <div data-bar className="h-full rounded-full bg-primary/40" style={{ "--k": pct(next!) / 100 } as React.CSSProperties} />
        </div>
      </div>
    </PhoneFrame>
  )
}

function Avatar({ letter }: { letter: string }) {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
      {letter}
    </span>
  )
}

export const stageMocks = [MockEnquiry, MockQuote, MockAdvance, MockTasks, MockReview, MockInvoice, MockPaid]
