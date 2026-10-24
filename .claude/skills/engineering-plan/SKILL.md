---
name: "engineering-plan"
description: "Use before building any Krew & Kreator screen, feature or spec ID (PF-, UX-, EC-, RM-): writes an engineer-style plan and waits for approval before code."
---

# Engineering plan

Think before typing code. Every screen or feature gets a short written plan that the developer approves first.

## 1. Gather context (read, don't guess)
- Read the PRD (`PRD-Krew-Kreator-MVP.md`) first; it wins over every other doc.
- Then read, if present in `docs/`: product flow, front-end tech stack, spec v3.
- Find every spec ID that touches this work (PF-, UX-, EC-, RM-, AN-, F0x). Quote the relevant lines.
- Look at existing code: `packages/ui`, `packages/schemas`, mocks, similar screens. Reuse before creating.
- If a fact is missing (price, legal rule, vendor capability), mark it UNVERIFIED and point to the PRD verification tasks (V1–V10). Never invent it.

## 2. Write the plan to `docs/plans/<spec-id>-<slug>.md`
Use these sections, briefly:

1. **Goal**: one sentence, from the user's point of view (Riya, solo photographer; Arjun, wedding video crew; or their client).
2. **Scope**: in / out. Tag the release (P0, P1, P2) and the plan (Both, Krew only).
3. **Surface**: creator app (logged in) or client page (no login, token link, minimal JS).
4. **User flow**: numbered steps, including where the user arrives from and goes next.
5. **States**: loading, empty, error, offline/slow 4G, success, permission denied, plus every edge case (EC-) that applies.
6. **Data contract**: the Zod schemas used or added in `packages/schemas`; the adapter functions called (never call Chatwoot, Stream, Razorpay etc. directly from a screen); MSW fixtures needed.
7. **Components**: new vs reused; which belong in `packages/ui`.
8. **Must-hold rules check**: personal chats never stored; no reminder after the client acted; bot never commits to a price; Orry never holds client money; creators fully isolated. Say which apply and how the UI respects them.
9. **Performance and accessibility**: JS budget (strict for client pages), images, `prefers-reduced-motion`, tap targets, labels. No GSAP on client pages.
10. **Copy**: plain words, no technical terms; list the key strings for i18n.
11. **Acceptance criteria**: testable bullet points.
12. **Tests**: unit (Vitest) and Playwright, including a throttled-4G phone run.
13. **Risks and open questions**: what could force rework; questions for the founders or backend.
14. **Tasks**: ordered, each small enough for under half a day, with an estimate in days. Compare the total against the screen plan estimate and say if it differs.

## 3. Stop and ask
Show the plan summary and the open questions. Do not write code until the developer approves. If a decision has real trade-offs, use the decision-record skill.

## 4. After approval
Work task by task. After each task: run type-check, lint and tests, then tick it off in the plan file. If reality diverges from the plan, update the plan and say why.