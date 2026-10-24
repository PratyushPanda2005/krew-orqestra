---
name: "decision-record"
description: "Use when choosing between technical options (library, architecture, auth, hosting, Chatwoot inbox A vs B): writes a short decision record with trade-offs."
---

# Decision record

When there is a real choice to make, write it down so it can be traced and revisited.

## Steps
1. Check `docs/decisions/` for an existing record on the same topic. If one exists, update or supersede it instead of starting over.
2. Read what the PRD and tech-stack doc already say. If the PRD has decided, follow it and record that.
3. Verify current facts (library versions, framework support, vendor limits, pricing) from official docs before relying on them. Mark anything unverified.
4. Write `docs/decisions/NNNN-<slug>.md` (next number, zero-padded):

```
# NNNN: <decision title>
Status: Proposed | Accepted | Superseded by NNNN
Date: YYYY-MM-DD
Spec IDs: <PF-.., EC-..>

## Context
What problem, which users, which constraints (phone first, 4G, India, solo dev, timeline).

## Options
### A. <name>
How it works. Pros. Cons. Effort in days. Effect on the timeline.
### B. <name>
...

## Decision
The chosen option and the single most important reason.

## Consequences
What gets easier, what gets harder, what we must watch, how to reverse it if needed.
```

5. Keep it under one page. Compare options on the same criteria: user experience on a budget phone, effort, risk, lock-in, cost, fit with the must-hold rules.
6. Present the recommendation and wait for the developer to accept it before changing status to Accepted.