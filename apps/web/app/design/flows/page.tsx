import { FlowExplorer } from "@/components/flow-explorer"

export default function FlowsPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col gap-6 px-4 py-10">
      <header>
        <a href="/dev" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
          Krew
        </a>
        <h1 className="condensed mt-2 text-4xl font-semibold">Flows</h1>
        <p className="mt-2 text-muted-foreground">
          Each flow is a state machine in packages/flows. Tap an event to move it on; events the rules don&apos;t
          allow right now are greyed out.
        </p>
      </header>
      <FlowExplorer />
    </main>
  )
}
