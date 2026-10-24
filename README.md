# Orquestra · Krew front end

Monorepo built on the official shadcn/ui Next.js monorepo template (shadcn 4.22, Next.js 16.4, Tailwind 4.3, Turborepo, pnpm).

## First run

Needs Node 20.9+ and pnpm 11 (`corepack enable` sets it up from `packageManager`).

```bash
pnpm install

# Add the stock shadcn components the design system uses
pnpm ui:add button input label card badge tabs drawer sonner separator skeleton progress textarea checkbox

pnpm test        # state machines and money/date helpers
pnpm typecheck
pnpm dev         # http://localhost:3000
```

Open `/design` for the design system and `/design/flows` to step through every state machine. Press D to switch light and dark.

## Layout

| Path | What it holds |
|---|---|
| `apps/web` | Next.js app. Workbench pages now; creator and client screens next |
| `packages/ui` | shadcn components plus Krew components and the theme tokens |
| `packages/schemas` | Zod records, money in paise, Indian formats, financial year |
| `packages/flows` | XState v5 machines with tests |
| `docs/diagrams` | Archify state diagrams; sources in `docs/diagrams/src` |
| `.claude/skills` | engineering-plan, decision-record, prd-review, archify |

## Redrawing a diagram

After changing a machine, update its JSON in `docs/diagrams/src`, then:

```bash
node .claude/skills/archify/bin/archify.mjs finalize lifecycle docs/diagrams/src/quote.json docs/diagrams/quote.html --quality showcase --json
```

Or ask Claude Code: "Use archify to redraw the quote diagram from packages/flows/src/machines/quote.ts".
