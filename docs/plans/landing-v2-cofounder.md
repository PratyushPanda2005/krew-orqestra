# /v2: cofounder.co layout copy

Status: **rebranded** (1 Nov 2026): Krew copy and brand colours on the reference layout. Illustrations are still the reference's.

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
| Platform | `_sections/orchestration.tsx`, `_client/scroll-tilt.tsx` | Department wheel (SVG animations run on their own); the workspace screen leans back 30° (scale 0.9, 60 px low) and stands up flat as its top edge scrolls from the bottom of the viewport to 15% from the top, ease-out, pivot on the bottom edge; flat under reduced motion |
| Capabilities | `_sections/capabilities.tsx`, `_client/capability-sheet.tsx`, `_client/capability-data.ts` | "+" rows open a side sheet: in 460 ms, out 280 ms, Escape closes |
| How a job runs (guide + books) | `_sections/guide.tsx`, `_sections/books.tsx`, `_client/sideways-row.tsx`, `how-scroll.css` | The main landing's sideways scroll (landing-sections-reference §18) on the same heading and four books: from 768 px the section pins and half-screen panels slide left at 1.2 px per px, books rise from 61% of the screen height (power3.out, 95% to 25% across), dividers draw down, title letters blur in. Eased over 0.1 s because v2 has no Lenis. No curtain at the end: the page carries on to Tools. Phones, no JS and reduced motion keep the stacked layout |
| Tools band | `_sections/tools-view.tsx`, `_sections/tools-panels.tsx`, `_client/tools.tsx` | Tabs advance every 8 s with a progress line; panel fades up 20 px in 450 ms; clouds drift −190/−240 px |
| Industries | `_sections/industries.tsx` | Letter grid |
| Footer | `_sections/footer.tsx`, `_client/tilt.tsx` | Tilting sunflower card |

## Rebrand (1 Nov 2026)
- Copy from `app/(marketing)/copy.ts` and the PRD: hero, app strip (Instagram, WhatsApp, Gmail, UPI, no customer logos or counts), the job wheel, three stages (Win the job, Do the work, Get paid) with 12 sheets in `_client/capability-data.ts`, four parts of a job, client links band, creator word grid, footer.
- Mock names (Riya, Arjun, Neha, Kapoor Studio) are examples, as on the main landing.
- Colours: ink → navy #23133c everywhere (`cofounder.css`); `krew-brand.css` sets navy dark buttons, lime light buttons, green progress and status, violet word frames.
- Chapter books: the reference's lift-and-drag (`_client/chapter-card.tsx`): rise 72 px on hover, drag up to 250 px, 500 ms cubic-bezier(0.22, 1, 0.36, 1), fine pointer ≥ 768 px only. Measured equal to the reference.

## Screens in motion (5 Nov 2026)
Every product mock-up plays the job as a loop while it is on screen. `_client/live.tsx` steps through data attributes on the generated markup (`data-at`, `data-steps`, `data-w`, `data-type`) and `live.css` holds the looks. It pauses off screen. Without JS or with reduced motion the markup stays the finished frame.

| Screen | Story |
|---|---|
| Workspace | The wheel lights each stage in turn and the chat follows one job, Enquiry to Ledger. The dots loop (they played once at load before) |
| Job board | Enquiry to Advance paid: cards light up, connector lines run, column counts tick |
| Email + drafts | The email writes itself, then Drafts counts opens and approvals up to 60% |
| Money | The chart draws; each payment lands, turns Paid and moves the totals |
| Client links band | Each tab plays within its 8 s: the quote email writes, review rows arrive, the invoice flow builds |
| Word search | `_client/word-hunt.tsx` circles one word after another, three at a time |

The wheel's example job stays in line with the must-hold rules: the bot never agrees the price (the creator does), money goes straight to the creator, and reminders stop once the client pays. Payment split on the money screen (₹25,000, ₹40,000, ₹60,000) is example data adding up to the ₹1,25,000 shown.

## Known gaps
- Lexend Deca is wider than Neoris, so a few headings wrap one line earlier (page ~290 px taller at 1440).
- The integration icons under the invoice panel are still the reference set (GitHub, Gmail and others).
