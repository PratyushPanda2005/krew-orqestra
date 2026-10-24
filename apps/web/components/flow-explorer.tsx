"use client"

import * as React from "react"
import { createActor, type AnyActorRef } from "xstate"

import { flowCatalog, type FlowEntry } from "@krew/flows"
import { Button } from "@krew/ui/components/button"
import { StatusPill } from "@krew/ui/components/status-pill"
import { cn } from "@krew/ui/lib/utils"

type Snap = ReturnType<AnyActorRef["getSnapshot"]>

function useFlowActor(flow: FlowEntry, runKey: number) {
  const actor = React.useMemo(
    () => createActor(flow.machine, { input: flow.input }),
    [flow, runKey]
  )
  const [snapshot, setSnapshot] = React.useState<Snap>(() => actor.getSnapshot())
  React.useEffect(() => {
    const sub = actor.subscribe((s) => setSnapshot(s))
    actor.start()
    setSnapshot(actor.getSnapshot())
    return () => {
      sub.unsubscribe()
      actor.stop()
    }
  }, [actor])
  return { actor, snapshot }
}

const stateLabel = (value: unknown): string =>
  typeof value === "string"
    ? value
    : Object.entries(value as Record<string, unknown>)
        .map(([k, v]) => `${k} › ${stateLabel(v)}`)
        .join(", ")

export function FlowExplorer() {
  const [flowId, setFlowId] = React.useState(flowCatalog[0]!.id)
  const [runKey, setRunKey] = React.useState(0)
  const flow = flowCatalog.find((f) => f.id === flowId) ?? flowCatalog[0]!
  const { actor, snapshot } = useFlowActor(flow, runKey)
  const [log, setLog] = React.useState<string[]>([])

  React.useEffect(() => setLog([]), [flowId, runKey])

  const tags = [...(snapshot.tags ?? [])] as string[]

  return (
    <div className="flex flex-col gap-5">
      <div role="tablist" aria-label="Flows" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {flowCatalog.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={f.id === flowId}
            onClick={() => setFlowId(f.id)}
            className={cn(
              "h-9 shrink-0 rounded-full border px-3 text-sm whitespace-nowrap",
              f.id === flowId ? "border-primary bg-accent font-medium text-accent-foreground" : "bg-card"
            )}
          >
            {f.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">{flow.specIds.join(", ")}</p>
            <p className="condensed mt-1 text-2xl font-semibold break-words" aria-live="polite">
              {stateLabel(snapshot.value)}
            </p>
          </div>
          {snapshot.status === "done" ? (
            <StatusPill tone="success">Finished</StatusPill>
          ) : (
            <StatusPill tone="primary">Running</StatusPill>
          )}
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <StatusPill key={t} tone="neutral">
                {t}
              </StatusPill>
            ))}
          </div>
        )}
        <details>
          <summary className="cursor-pointer text-sm text-muted-foreground">Context</summary>
          <pre className="mt-2 overflow-x-auto rounded-md bg-secondary p-3 text-xs">
            {JSON.stringify(snapshot.context, null, 2)}
          </pre>
        </details>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {flow.events.map(({ label, event }) => {
          const allowed = snapshot.status === "active" && snapshot.can(event)
          return (
            <Button
              key={label}
              variant={allowed ? "outline" : "ghost"}
              disabled={!allowed}
              className="h-auto min-h-tap whitespace-normal py-2 text-left"
              onClick={() => {
                actor.send(event)
                setLog((l) => [label, ...l].slice(0, 12))
              }}
            >
              {label}
            </Button>
          )
        })}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{log.length ? `Last: ${log[0]}` : "No events yet"}</p>
        <Button variant="ghost" onClick={() => setRunKey((k) => k + 1)}>
          Start again
        </Button>
      </div>
    </div>
  )
}
