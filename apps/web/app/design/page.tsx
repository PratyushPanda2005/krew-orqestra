import type { JobStage } from "@krew/schemas"
import { Button } from "@krew/ui/components/button"
import { EmptyState } from "@krew/ui/components/empty-state"
import { Input } from "@krew/ui/components/input"
import { Label } from "@krew/ui/components/label"
import { ListRow } from "@krew/ui/components/list-row"
import { Money } from "@krew/ui/components/money"
import { StageRail } from "@krew/ui/components/stage-rail"
import { StatusPill } from "@krew/ui/components/status-pill"

import { BriefDemo } from "@/components/brief-demo"

const colours = [
  { name: "Ink", token: "foreground", note: "Text and finished steps" },
  { name: "Paper", token: "background", note: "Screen background" },
  { name: "Rani", token: "primary", note: "The one loud colour: main action, current step" },
  { name: "Peacock", token: "success", note: "Money in, done" },
  { name: "Haldi", token: "warning", note: "Needs attention" },
  { name: "Sindoor", token: "destructive", note: "Failed or can't be undone" },
] as const

const stages: { stage: JobStage; label: string }[] = [
  { stage: "briefing", label: "Waiting for brief" },
  { stage: "atRisk", label: "Advance not paid, shoot in 2 days" },
  { stage: "inReview", label: "Draft with client" },
  { stage: "closed", label: "Closed" },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="condensed text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  )
}

export default function DesignPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col gap-12 px-4 py-10">
      <header>
        <a href="/dev" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
          Krew
        </a>
        <h1 className="condensed mt-2 text-4xl font-semibold">Design system</h1>
        <p className="mt-2 text-muted-foreground">
          Built for a creator checking a job between shoots, on a budget Android phone over 4G.
        </p>
      </header>

      <Section title="Job stages">
        <p className="text-muted-foreground">
          Every job moves through seven frames. The current frame is rani; a frame that needs attention is haldi.
        </p>
        <div className="flex flex-col gap-6 rounded-xl border bg-card p-4">
          {stages.map((s) => (
            <div key={s.stage} className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <StageRail stage={s.stage} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Colour">
        <ul className="grid grid-cols-2 gap-3">
          {colours.map((c) => (
            <li key={c.token} className="flex flex-col gap-2">
              <span
                className="h-16 rounded-lg border"
                style={{ background: `var(--${c.token})` }}
                aria-hidden
              />
              <span className="font-medium">{c.name}</span>
              <span className="text-sm text-muted-foreground">{c.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Type">
        <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
          <p className="condensed text-4xl leading-none font-semibold">Wedding film, Sharma family</p>
          <p className="condensed text-2xl font-semibold">Quote sent on 24 Oct</p>
          <p>
            Meera opened the quote twice but hasn&apos;t accepted it yet. You can send a reminder or call her.
          </p>
          <p className="text-sm text-muted-foreground">Set in Anek Latin: condensed for headings and amounts, normal width for reading.</p>
        </div>
      </Section>

      <Section title="Money">
        <div className="flex flex-col gap-1 rounded-xl border bg-card p-4">
          <span className="text-sm text-muted-foreground">Pending from clients</span>
          <Money paise={18450000} size="amount" />
          <span className="text-sm text-muted-foreground">
            <Money paise={4400000} size="sm" tone="success" /> came in this week
          </span>
        </div>
      </Section>

      <Section title="Status">
        <div className="flex flex-wrap gap-2">
          <StatusPill tone="success">Paid</StatusPill>
          <StatusPill tone="warning">At risk</StatusPill>
          <StatusPill tone="primary">Waiting for you</StatusPill>
          <StatusPill tone="neutral">Waiting for client</StatusPill>
          <StatusPill tone="danger">Upload failed</StatusPill>
        </div>
      </Section>

      <Section title="Lists">
        <div className="divide-y overflow-hidden rounded-xl border bg-card">
          <ListRow
            href="#"
            title="Sharma wedding film"
            meta="Meera Joshi · Review"
            trailing={<Money paise={4400000} />}
            trailingMeta="Due 2 Nov"
          />
          <ListRow
            href="#"
            title="Café Lune menu shoot"
            meta="Arjun Rao · Advance"
            trailing={<StatusPill tone="warning">At risk</StatusPill>}
          />
          <ListRow
            href="#"
            title="Studio rebrand"
            meta="Kavya Iyer · Paid"
            trailing={<Money paise={6000000} tone="success" />}
          />
        </div>
      </Section>

      <Section title="Actions and fields">
        <div className="flex flex-col gap-4 rounded-xl border bg-card p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="amount">Amount received</Label>
            <Input id="amount" inputMode="numeric" placeholder="₹0" className="h-tap" />
          </div>
          <Button size="lg" className="h-tap">
            Mark as paid
          </Button>
          <Button size="lg" variant="outline" className="h-tap">
            Remind client
          </Button>
          <Button size="lg" variant="ghost" className="h-tap">
            Move date
          </Button>
        </div>
      </Section>

      <Section title="Empty screens">
        <EmptyState
          title="No jobs yet"
          body="When a client accepts a quote, the job shows up here with what's pending."
          action={<Button className="h-tap">Send a brief</Button>}
        />
      </Section>

      <Section title="One question per screen">
        <p className="text-muted-foreground">The client brief, sign-up and tax profile all use this pattern.</p>
        <div className="overflow-hidden rounded-xl border bg-background">
          <BriefDemo />
        </div>
      </Section>
    </main>
  )
}
