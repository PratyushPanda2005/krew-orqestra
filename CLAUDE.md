@AGENTS.md

# Krew & Kreator

India-first, phone-first web app that runs a creative freelancer's client work from the first DM to getting paid. Krew is the team plan; Kreator is the solo plan of the same app.

## Sources of truth, in order
1. `docs/PRD-Krew-Kreator-MVP.md` (wins over everything else)
2. `docs/02-product-flow.md`
3. `docs/03-frontend-tech-stack.md`
4. `docs/04-spec-v3-all-tabs.md` (spec IDs: PF-, UX-, EC-, RM-, AN-, F0x)

## Must-hold rules
- Personal chats are never stored.
- No reminder is sent after the client has acted.
- The bot never commits to a price.
- Orry never holds client money.
- Creators are fully isolated from each other.

## Repository
- `apps/web`: Next.js App Router. `(creator)` screens and `(client)` link pages (`/b /q /r /i`) come next. `/design` and `/design/flows` are the workbench.
- `packages/ui`: shadcn/ui (style radix-nova) plus Krew components (`money`, `status-pill`, `stage-rail`, `list-row`, `empty-state`, `action-bar`, `step-form`). Theme tokens in `src/styles/globals.css`.
- `packages/schemas`: Zod records shared with the backend; money in integer paise; `formatINR`, `financialYear`.
- `packages/flows`: XState v5 machines for every flow, with tests. Screens read state from these machines; rules live here, not in components.
- `docs/diagrams`: Archify state diagrams generated from `docs/diagrams/src/*.json`.

## Working rules
- Front end first, against mocks. Every vendor (Chatwoot, Stream, R2, Razorpay) sits behind a thin adapter.
- Add stock components with `pnpm ui:add <name>`; they land in `packages/ui/src/components`. Don't edit generated shadcn files for Krew-specific behaviour; wrap them.
- Use theme tokens (`bg-primary`, `text-success`, `bg-warning-soft`, `h-tap`), never raw colours.
- Phone first at 390 px; tap targets at least 44 px (`h-tap`, `min-h-tap`). Client pages stay very light on 4G.
- Plain words on every screen. Indian formats: ₹1,25,000 and "24 Oct 2026".
- When a flow changes: change the machine, update its test, update its diagram source, and re-run Archify.
- Use spec IDs in commits and plans. Tag releases P0, P1, P2. Krew-only = team features.
- Use the engineering-plan skill before any screen, decision-record for real choices, prd-review before merging, archify for diagrams.
