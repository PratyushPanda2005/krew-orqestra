import { formatINR } from "@krew/schemas"
import { Button } from "@krew/ui/components/button"
import { ListRow } from "@krew/ui/components/list-row"
import { Money } from "@krew/ui/components/money"
import { StageRail } from "@krew/ui/components/stage-rail"
import { StatusPill } from "@krew/ui/components/status-pill"

import { arjun, riya } from "@/lib/landing-samples"

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

function Avatar({ letter }: { letter: string }) {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
      {letter}
    </span>
  )
}

export const stageMocks = [MockEnquiry, MockQuote, MockAdvance, MockTasks, MockReview, MockInvoice, MockPaid]
