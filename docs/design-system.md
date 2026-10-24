# Krew design system

**Who it's for:** Riya, a solo photographer in Pune, checking a job between shoots on a budget Android phone over 4G. And her client, opening a brief or invoice link once.

**Job of the interface:** show what's pending and the one thing to do next, in plain words.

## Direction

Indigo ink on cool paper, with rani pink as the only loud colour. Rani is the colour of Indian wedding textiles and print, the work many Krew creators shoot. Status colours borrow from the same world: peacock for money in, haldi for attention, sindoor for failure.

The one memorable element is the **stage rail**: a job's journey drawn as a strip of film frames with sprocket holes. Everything around it stays quiet.

## Colour

| Name | Token | Light | Dark | Use |
|---|---|---|---|---|
| Ink | `foreground` | #1A1D3A | #EEF0FA | Text, finished steps |
| Paper | `background` | #F7F7FA | #12142A | Screen |
| Card | `card` | #FFFFFF | #1B1E3A | Raised surfaces |
| Rani | `primary` | #C8195E | #F0609A | Main action, current step |
| Peacock | `success` | #0B7A75 | #3CC2B6 | Paid, done |
| Haldi | `warning` | #9A6200 | #F2B84B | At risk, needs attention |
| Sindoor | `destructive` | #C0341D | #F26B55 | Failed, can't be undone |
| Muted | `muted-foreground` | #5B607A | #A3A8C3 | Secondary text |

Soft fills for pills: `success-soft`, `warning-soft`, `danger-soft`, `accent`. Every text colour meets WCAG AA (4.5:1) on both paper and card, in both themes.

## Type

Anek Latin by Ek Type (an Indian foundry), one variable family:
- **Condensed** (`.condensed`, wdth 80) for headings and big amounts, so ₹1,84,500 fits on a phone.
- **Normal width** for reading.
- Tabular figures for every amount (`data-amount` / `.tabular`), so ledgers line up.
- Anek Devanagari is the sibling for Hindi later.

Scale (minor third): 12 · 14 · 16 · 20 · 24 · 36 px. `text-amount` is the 36 px figure on money cards.

## Shape and spacing

- Radius follows hierarchy: pills fully round, cards 12 px (`rounded-xl`), inputs 10 px, sheets 20 px (`rounded-sheet`).
- Tap targets at least 44 px: `h-tap`, `min-h-tap`.
- Main actions sit in the sticky `ActionBar` at the bottom, clear of the iPhone home indicator.
- Motion only when the user acts (a sheet opening, a step advancing). `prefers-reduced-motion` turns it off.

## Components

| Component | Where it's used |
|---|---|
| `StageRail` | Job page (large), jobs list (small) |
| `Money` | Every amount. `size="amount"` for the hero figure; `short` for ₹1.25L |
| `StatusPill` | Short state labels, always with text, never colour alone |
| `ListRow` | Inbox, jobs list, ledger |
| `StepForm` | One question per screen: sign-up, client brief, tax profile |
| `ActionBar` | Approve, Pay, Send quote |
| `EmptyState` | Says what goes here and how to add it |

Stock shadcn components (button, input, drawer, sonner…) are added with `pnpm ui:add` and themed by the tokens.

## Words

- Name actions by what happens: "Send quote", "Mark as paid", "Remind client".
- An action keeps its name through the flow: "Send brief" → "Brief sent".
- Errors say what happened and what to do; they don't apologise.
