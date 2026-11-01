# /v2: cofounder.co layout copy

Status: **built** (1 Nov 2026). Next step: rebrand with Krew copy, colours and art.

## What it is
`apps/web/app/v2` is a 1:1 copy of the cofounder.co homepage: layout, sizes, breakpoints, colours,
images and interaction timings, so we can rebrand it section by section. Source assets and rights
are in `apps/web/public/v2/CREDITS.md`. The route is `noindex`.

## How it was built
- The rendered DOM was captured with Playwright at 1440 and 390 px, plus each interactive state
  (header over the hero / over the page / phone menu open, the three tool tabs, the twelve
  capability sheets), and converted to JSX. Their compiled Tailwind CSS is `app/v2/cofounder.css`
  (font faces removed, asset URLs pointed at `/public/v2`).
- Fonts: Neoris → Lexend Deca (brand). Departure Mono, IBM Plex Mono, Inter kept (free).
- Effect values were read from their page script (not run).

## Files
| Section | File | Behaviour |
|---|---|---|
| Header | `_sections/header-view.tsx`, `_client/header.tsx` | Solid once `#section-2-start` is ≤ 240 px from the top; phone menu below 1000 px |
| Hero | `_sections/hero-view.tsx`, `_client/hero.tsx` | Staggered intro; scroll dissolve over 400 px (copy fades 2×, rises 30 px, blur 2.5×); task pills: 3 pop in 1.1 s apart, then one swaps every 2.6 s; copy-prompt orbit |
| Logos | `_sections/social-proof.tsx`, `_client/logo-pill.tsx` | Pill follows the pointer over tiles |
| Platform | `_sections/orchestration.tsx` | Department wheel (SVG animations run on their own) |
| Capabilities | `_sections/capabilities.tsx`, `_client/capability-sheet.tsx`, `_client/capability-data.ts` | "+" rows open a side sheet: in 460 ms, out 280 ms, Escape closes |
| Guide + books | `_sections/guide.tsx`, `_sections/books.tsx` | Sticky "Download full guide" |
| Tools band | `_sections/tools-view.tsx`, `_sections/tools-panels.tsx`, `_client/tools.tsx` | Tabs advance every 8 s with a progress line; panel fades up 20 px in 450 ms; clouds drift −190/−240 px |
| Industries | `_sections/industries.tsx` | Letter grid |
| Footer | `_sections/footer.tsx`, `_client/tilt.tsx` | Tilting sunflower card |

## Known gaps
- The product mocks inside the capabilities (launch board, email stats, analytics) and the chat
  panel are still frames, not the reference's looping sequences.
- Lexend Deca is wider than Neoris, so a few headings wrap one line earlier (page ~290 px taller at 1440).
- The "Copy Setup Prompt" button copies a placeholder until Krew has its own prompt.
