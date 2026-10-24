import { ListRow } from "@krew/ui/components/list-row"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh max-w-md flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="condensed text-4xl font-semibold">Krew</h1>
        <p className="mt-1 text-muted-foreground">Front-end workbench. Screens come next.</p>
      </div>
      <nav className="divide-y overflow-hidden rounded-xl border bg-card">
        <ListRow href="/design" title="Design system" meta="Colour, type, components, job stages" />
        <ListRow href="/design/flows" title="Flows" meta="Every state machine, step by step" />
      </nav>
      <p className="text-sm text-muted-foreground">Press D to switch light and dark.</p>
    </main>
  )
}
