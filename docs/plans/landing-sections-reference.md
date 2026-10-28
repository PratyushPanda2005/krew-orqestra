# Plan: landing sections mapped onto the reference

Status: **built** (29 Oct 2026); approved with the §13 defaults. See §15 for the effects and what differs from this draft. Follows `landing-hero-brand.md` (hero built, sections parked in §16). The hero stays as built.

## 1. Goal
Riya scrolls past the hero on her phone and, section by section, sees her own messy week, how one job runs in Krew, what her clients see, what Krew promises, and a way to join the pilot, in the look of the reference site and the Orry brand.

## 2. Scope
**In**
- Restore the parked sections (§16 order) and give each one a layout from the reference (novaform-astro-theme.vercel.app).
- Real photos for the first time: 29 free stock photos from Unsplash (§6), self-hosted and resized.
- Restyle with the `brand-*` tokens and Lexend Deca, matching the hero.
- The footer comes back in the reference's layout.

**Out**
- Copy changes. The existing `copy.ts` strings are reused; only short labels are added (eyebrows like "[ THE MESS ]", the marquee word, image alt text).
- Reference sections that would need content we don't have (§4, "dropped").
- The creator app and client pages.

Release: P0 (pilot landing). Plan: Both.

## 3. Surface
Public marketing page `/`, no login. Same light-on-4G budget as the hero plan §9.

## 4. Section map (reference → Krew)

The reference was studied at 1440 and 390 px (screenshots in the PR). It has nine sections; our flow order from §16 wins over the reference order, so each Krew section borrows the reference layout that fits its content best.

| # | Krew section (copy) | Reference layout borrowed | How it maps | Images |
|---|---|---|---|---|
| 1 | Hero (`hero`) | Hero | Built 28 Oct. No change | none |
| 2 | **The mess** (`mess`) | **About** ("[ WHO WE ARE ]") | Eyebrow "[ THE MESS ]"; `mess.title` + `mess.intro` as the large left-indented statement; the reference's 7 scattered square photos become 7 photo tiles, each carrying one mess caption (DMs, screenshots, email, chasing, shooter, editor, two replies). The 3 stats become 3 product facts: **4** apps for one job · **7** steps, one place · **0** logins for clients. `mess.closing` sits where "About Our Studio" was, as an outline pill to `#how`. Fragments fade in (the current `mess-play` logic) | 7 |
| 3 | **How a job runs** (`how`) | **Process** ("OUR PROCESS ✱" marquee, steps on an arc) | Marquee "HOW A JOB RUNS ✱". Sticky stage: "[ STEP 01 ]" chip in navy, a white card with the step title and body, and the step photo riding the dashed arc. 7 steps instead of 5. The existing phone mocks (`mocks.tsx`) appear inside the card at ≥ 1024 px | 7 |
| 3b | **Income** (`income`, `#income`) | **Blog** ("Latest Insights", 3 cards) | Title left; the 3 `income.points` as 3 cards with a "[ Ledger ]" style tag. Card art is our own product mocks (money in/out bars, client dues, export), not photos: real UI is more convincing than stock here | 0 (mocks) |
| 4 | **For your clients** (`clients`) | **Selected Work** (big centred heading, stacked full-width image cards) | `clients.title` centred; 3 stacked sticky cards: Quote link, Review link, Invoice link, each a full-bleed photo with the title and body top-left, like "Finova · UI/UX Design". `clients.footnote` under the stack | 3 |
| 5 | **What we promise** (`trust`) | **Services** (numbered rows, sticky image left, "Includes" list) | 4 rows numbered [04]→[01] like the reference; title in the middle column, body in the right column (no "Includes" list: our items are one sentence). Sticky photo on the left swaps per row | 4 |
| 6 | **Questions** (`faq`) | **Testimonials** (dark, light-streak background, heading left, card right) | Navy with the hero shader's light band reused as vertical streaks (CSS fallback). `faq.title` left; the right column is an accordion of cards (native `<details>`), so no fake quotes | 0 |
| 7 | **Join the pilot** (`waitlist`) | **CTA** ("Ready To Build…", dark, image trail on hover) | Navy, centred `waitlist.title` and intro; the one-field `WaitlistForm` replaces the "Contact Us" pill. On desktop a pointer image trail shows creator photos (reference behaviour); off on touch and reduced motion | 8 |
| — | Footer (`footer`) | Footer | Left: `footer.tagline` in the newsletter slot (no second sign-up form). Right: one column of section links. Bottom: `footer.copyright`. Social icons left out until accounts exist | 0 |

**Dropped from the reference**
- **Team carousel** ("A Group of Creative Problem Solvers"): we'd have to show invented people. The crew idea already lives in the mess tiles and step 4.
- **Testimonials as quotes**: no pilot users yet; never invent quotes or star ratings. The layout is kept for the FAQ.
- **Blog**: no articles; the layout is kept for Income.
- **Preloader**: the hero already has its 2.2 s once-per-session intro.

## 5. Brand mapping
| Reference | Krew |
|---|---|
| White / #F0F0F0 / #F5F5F5 section grounds | `bg-background` (snow) and `bg-card` (white), alternating as the reference does |
| Black hero, testimonials, CTA | `brand-navy` |
| Black text, grey body | `text-foreground` (navy), `text-muted-foreground` |
| Black chips ("[ STEP 01 ]") and pills | navy chip; primary pills in `bg-primary` (neon green) with navy text, as in the hero |
| Inter-like tight headings | Lexend Deca 600, tight tracking, same scale steps as the hero |
| Bracket labels "[ WHO WE ARE ]" | Same bracket style as the hero nav "[1] How it works" |
| Rainbow light streaks | The hero's violet → green band with lime and coral edges |
| Photos: colourful abstract | Real creator photos, unedited colour, 8 px radius (reference radius), navy scrim only where text sits on a photo |

## 6. Images

All from **Unsplash, free under the Unsplash License** (commercial use, no attribution required; none are Unsplash+). We credit photographers in `public/landing/CREDITS.md` anyway. The reference's own images are **not** used: they belong to a paid theme and are abstract art that doesn't tell our story.

Picked from 37 candidates for Indian creators and crews; IDs are `unsplash.com/photos/<id>`.

| Section | Slot | Photo ID | What it shows |
|---|---|---|---|
| Mess | DMs | `8nrcutWPDQ4` | Woman in a pink sari on her phone |
| Mess | Screenshots | `jmTuwazuRB8` | Woman checking her phone outdoors |
| Mess | Email | `Wf766oWDbhU` | Woman working at a laptop |
| Mess | Chasing payments | `h2OuCuRXEOI` | Woman on a phone call |
| Mess | Shooter asks the date | `MKwCaWQH9YY` | Crew with a gimbal on a street shoot |
| Mess | Editor can't find the brief | `VW2oU66mwbc` | Editor in headphones in a dark room |
| Mess | Two replies | `Y4zNMW3pQAs` | Two people looking at one phone |
| How | Enquiry | `d9RsO9BHFVQ` | Bride and groom (the client) |
| How | Quote | `_dFg4fx3MmQ` | Photographer at a desk with a camera |
| How | Advance | `o0UMeNmaCV0` | Phone payment (⚠ card terminal, not UPI) |
| How | Work | `ILPEC4rj92A` | Video crew shooting in a field |
| How | Review | `udRj4qXyAPs` | Editor at multiple monitors |
| How | Invoice | `aSoQQLyPe1U` | Desk with monitors and camera kit |
| How | Paid | `xqkCgI1oSlg` | Smiling photographer with a camera |
| Clients | Quote link | `EnEVc2toiCg` | Couple at their wedding stage |
| Clients | Review link | `na8R4tWL73I` | Editing setup with camera and monitors |
| Clients | Invoice link | `p3HTBsUIQQk` | Paying by phone at a table (⚠ not UPI) |
| Trust | Personal chats | `b5oaW2R5iks` | Black-and-white portrait behind a camera |
| Trust | Your money | `xyxZWjuqeZA` | Phone payment at a counter (⚠ not UPI) |
| Trust | GST invoices | `58c1dnakdRQ` | Designer at a desk with a pen tablet |
| Trust | Official connections | `ROaGE2gDsbo` | Photographer, camera to face |
| Waitlist trail | 8 photos | `X0lTXXhZY0c` `wM7ehyjWFLw` `W1wkx5kcaBk` `Po-nggQqplE` `lWP4mSBDytE` `P7Ar3joERlU` `UGle_evFpow` `gRES-o2A0LE` | Photographers, crews, a wedding couple, a bride |

⚠ Unsplash has no free UPI photo. The three payment slots show card terminals, which is off-message (Krew's default is UPI). Recommended: swap them for a simple UPI-QR product mock, or a founder-shot photo of a UPI scan, before launch.

**Delivery**
- Downloaded once, resized to 2 widths (640 and 1280), saved as AVIF + WebP in `apps/web/public/landing/`, served with `next/image` (`sizes` set per slot, `loading="lazy"`, no priority: nothing below the hero affects LCP).
- Budget at 390 px: ≤ 35 KB per tile, ≤ 70 KB per full-width card. The whole page's images ≤ 900 KB, and only what's on screen loads.
- Every image has plain alt text; tiles that only decorate a caption get `alt=""`.

## 7. Components
- Reused: `mess.tsx`, `mess-play.tsx`, `how.tsx`, `mocks.tsx`, `sections.tsx` (Clients, Trust, Faq), `section.tsx`, `waitlist-form.tsx`, `footer.tsx`, `hero-shader.tsx` (streaks in FAQ and CTA), `hero-backdrop.tsx` (fallback).
- Rewritten layouts: each component above keeps its copy and props; markup and classes change.
- New: `marquee.tsx` (CSS-only loop), `image-trail.tsx` (≈1 KB, pointer only, lazy), `photo.tsx` (thin `next/image` wrapper with the 8 px radius and scrim).
- `step-rail.tsx` retires (the arc replaces it); the plan notes it in §16.
- No new shadcn components. No GSAP: motion is CSS scroll-driven animations (`animation-timeline: view()`) with a static fallback where unsupported.

## 8. Must-hold rules
Copy is unchanged, so the rules hold as before: the Enquiry step still says Krew never agrees a price; Trust still says personal chats are never stored and Krew never holds client money. New labels make no product claims. The "0 logins for clients" stat restates PRD §3 and the existing `clients.body`.

## 9. Performance and accessibility
- Route JS stays ≤ 20 KB gz; the trail and marquee add ≈ 2 KB. LCP stays the hero (< 2.5 s on slow 4G at 390 px), CLS < 0.1 (every image has fixed aspect boxes).
- Reduced motion: marquee stops, the arc becomes a plain list of 7 steps with photos, no trail, sticky cards just stack.
- No JS: every section is complete and the form posts.
- Contrast AA on snow and navy; text on photos only over a navy scrim at ≥ 4.5:1. Tap targets ≥ 44 px.

## 10. Copy (added labels only, in `copy.ts`)
- Eyebrows: "[ THE MESS ]", "[ HOW IT WORKS ]", "[ YOUR CLIENTS ]", "[ OUR PROMISES ]", "[ QUESTIONS ]"
- Marquee: "HOW A JOB RUNS"
- Stats: "4 · apps for one job", "7 · steps, one place", "0 · logins for your clients"
- Step chip: "[ STEP 0n ]"
- Alt text for every photo (§6)

## 11. Acceptance criteria
- At 390 and 1440 px each section follows its reference layout in §4; side-by-side screenshots in the PR.
- All copy comes from `copy.ts`; no invented people, quotes, ratings or numbers.
- No raw hex outside `globals.css`; only `brand-*` and theme tokens.
- LCP < 2.5 s, CLS < 0.1 on slow 4G at 390 px; images total ≤ 900 KB.
- Reduced motion and no-JS work as in §9.
- Hero anchors (`#how`, `#clients`, `#trust`, `#faq`, `#waitlist`) all land.

## 12. Tests
- Un-skip the 4 parked Playwright tests (form and mess).
- Add: anchor targets exist; every `<img>` has alt; reduced-motion shows all 7 steps; the 4G budget run.
- Screenshot snapshots at 390 and 1440 px.

## 13. Open questions
1. **UPI photos**: replace the 3 card-terminal photos with a UPI-QR mock now (recommended), or ship stock and swap later?
2. **Stats row**: OK to show "4 / 7 / 0" product facts in place of the reference's business stats? Or drop the row?
3. **Photo colour**: natural colour (recommended), or a navy duotone on every photo to tie them to the brand?
4. **Order**: keep our flow order (mess → how → income → clients → trust → FAQ → join) rather than the reference's order (recommended).

## 14. Tasks

| # | Task | Days |
|---|---|---|
| 1 | Download, resize and encode the 29 photos; `CREDITS.md`; `photo.tsx` | 0.25 |
| 2 | Restore sections and footer in `page.tsx`/`layout.tsx`; anchors | 0.1 |
| 3 | Mess as the About layout (statement, stats, 7 tiles) | 0.4 |
| 4 | How as the Process layout (marquee, arc, 7 steps, fallback) | 0.6 |
| 5 | Income as the Blog cards with mocks | 0.25 |
| 6 | Clients as stacked sticky cards | 0.25 |
| 7 | Trust as numbered rows with sticky photo | 0.25 |
| 8 | FAQ on navy streaks | 0.25 |
| 9 | Waitlist as the CTA with image trail; footer | 0.35 |
| 10 | Playwright, screenshots, 4G budget | 0.3 |
| | **Total** | **3.0** |

The landing plan gave the other sections about 1.5 days; this is more because every section gets a new layout and photos.

## 15. Build notes (29 Oct 2026)

**§13 answered with the recommended defaults:** a UPI tile (`upi-tile.tsx`) stands in for the 3 card-terminal photos, so 26 photos ship, not 29; the 4 / 7 / 0 facts stay; photos keep natural colour; our flow order stays.

**Effects match the reference exactly.** They were read from its Webflow interaction data (IX3 timelines in `webflow.js`) and checked in a browser, not guessed. Eases: `sine.out` for reveals and hovers, `power1.out` for the photo flip.

| Krew section | Reference effect, as built |
|---|---|
| All titles (`data-split`) | Letters rise 40 px and fade in, 0.6 s each, staggered across 0.6 s, when the title enters. The join title uses 0.4 s |
| Labels, intros, cards, footer columns (`data-up`) | Rise 80 px and fade in, 0.6 s, delays 0, 0.2, 0.4 and 0.6 s, when the top reaches 90% of the screen |
| Mess | The statement lights up letter by letter, 50%→100%, tied to the scroll. Facts count up over 1.2 s. Photos turn 180° on Y with 100 px perspective in 0.6 s. The reference ends mirrored; ours ends the right way round |
| How | Title band runs from 12% to −40% over 50 s; stars turn every 14 s. The stage pins for 120vh a step (reference: 600vh for 5). Cards swing out to (+30vw, +18vh, 15°) as the next swings in from (−30vw, +18vh, −15°); text cards drop 200 px. Steps are 0.13 apart, 0.1 long. Dashed 80vw circle |
| Income | Title letters; cards rise in at 0.4 s |
| Clients | Sticky stacked cards (tops 2/17/30%, gaps 18 and 9 rem) shrink to 0.7, 0.8 and 0.8 as you scroll. Photos zoom to 1.1 on hover over 0.6 s |
| Trust | Sticky stacking rows (tops 5/18/30/44%, gaps 18/12/6 rem). Thumbnails zoom 1.1 on hover |
| FAQ | From 768 px: 500vh, pinned. Each card drops out (+101%) as the next drops in (−101%), 0.14 apart. A photo column scrolls and a dot marks the current card. Below 768 px it's a list, as in the reference |
| Join | Title letters; the form rises; a photo row runs endlessly at about 36 px/s |
| Buttons, footer links | On hover, a dot grows and the text slides 8 px; pills get a soft inner glow |
| Whole page | Lenis smooth scroll from 768 px (0.8 s, cubic ease-out), loaded lazily |

**Differences from the draft**
- No GSAP. One small client module (`landing-motion.tsx`) ties the effects to the scroll, smoothing each over about 0.8 s like `scrub: 0.8`. CSS does the reveals and hovers.
- The join section has a photo row, not a pointer trail: the reference has no trail.
- FAQ answers are always-open cards, not `<details>`, so every answer shows on a pinned card.
- The How steps show no phone mocks; the mocks live in Income and the client invoice card.
- Trust rows count up `[01]`–`[04]` (plain), where the reference counts down.
- Retired: `step-rail.tsx`, `section.tsx`, `mess-play.tsx`, `lib/hero-sequence.ts`.
- The form card takes the brand green and navy through local CSS variables. The app's tokens are unchanged.

**Checks:** type check and lint are clean. Landing Playwright: 13 of 13 pass. At 390 px on slow 4G: LCP 1,052 ms, CLS 0.000. Without JS and with reduced motion, every section shows as a static list.

## 16. Second pass: Vantra patterns and grainy gradients (29 Oct 2026)

Asked for: patterns from vantra-studio.webflow.io, kept to the current sections, and gradients wherever they fit, after grainient.supply.

**Gradients** (all in the brand colours, all with film grain)
- `gradient.tsx` (CSS, 0 JS, ~0.4 KB noise tile): `mist` (Mess, Clients) and `haze` (How, Trust title) drift slowly; `swift`, `dusk` and `dither` sit behind the three Income cards; `ecliptic` (a ring of light) is the UPI tile everywhere.
- `shader-gradient.tsx` (WebGL, like the hero's): `streaks` behind the questions, `aurora` in the join panel, `mesh` as the footer's strip of light. Each starts only near the screen, after load and idle; draws at 1×; pauses off screen; follows the pointer a little; never runs under reduced motion. The CSS still version shows underneath.

**From Vantra**
- A floating glass nav (wordmark, tagline, "Join the pilot") slides in once you're past the hero. It works with any motion setting; without JS it stays hidden, and the hero nav covers it.
- Glass labels on the Mess photos; glass text panels on the client cards.
- "Your jobs, right now": a live list with step-of-7 bars that fill as it comes in. Example data in `landing-samples.ts` (`liveJobs`), the same people as the mocks.
- Join sits in an inset, rounded dark panel; the footer is dark with big stacked links and "( Label )" captions.

**Fixed:** blocks at the very end of the page never reached the 90% line, so they now reveal at the bottom.

**Checks:** type check and lint are clean; 13 of 13 landing tests pass; LCP 1,208 ms, CLS 0.000 at 390 px on slow 4G.

## 17. Third pass: trionn's work, questions and closing block (29 Oct 2026)

Asked for: trionn.com's "Selected work" and "Explorations" effects in How a job runs, and new questions, CTA and footer. Studied in a browser at 1440 px: both effects are GSAP pins (13.5 and 7.5 screens).

| Krew | trionn effect, as built |
|---|---|
| How a job runs, part 1 | From 768 px, the section pins on a grainy pearl gradient and a row of half-screen panels, split by hairlines, slides left across the scroll. The track is sized to the row. The title's letters come out of a 12 px blur in a scattered order. Each step card (photo with a glass "[ STEP 0n ]" label, title, "0n / 07", body) rises from 25 px as it comes in from the right half. A closing panel holds the join link. Phones: a list |
| How a job runs, part 2 | Pinned for 3 screens on a silver gradient: the 7 photos stream in from the right on a curved 3D ribbon (a slice of a cylinder with a slow wave), then gather into a grid of 4 over 3 while "Seven steps, / one place." fades back. Phones: a plain 2-column grid |
| Questions | trionn's "Client stories": the questions as a list on the left (ARIA tabs, arrow keys), one answer at a time in big type that lights up word by word, previous / next buttons and a counter. Without JS every answer shows |
| Join + footer | One dark screen, as trionn's footer: the new `smoke` shader, "Join the pilot" big on the left with the form beside it, a live IST clock top right, contact and section links, and a giant KREW drawn in horizontal lines that slide aside under the pointer (a 2D canvas, redrawn only while moving). The CSS fallback is the striped word |

**Removed:** novaform's Process swing and the running title band, the pinned question cards, the join panel and its photo row, and the 8 `trail-*` photos (now 18 photos).

**Checks:** type check and lint are clean. Landing Playwright: 15 of 15 pass, with new tests for the question tabs and for the sideways row and ribbon at 1280 px. LCP 1,124 ms, CLS 0.000 at 390 px on slow 4G.

## 18. How a job runs, matched to trionn exactly (29 Oct 2026)

"Seven steps, one place" (the ribbon) was removed on request. The sideways scroll was then re-measured on trionn.com (1440 × 900, sampled every 150 px of scroll) and rebuilt to those numbers:

| Part | trionn, measured | Ours |
|---|---|---|
| Row | moves 1.2 px per px scrolled from the moment it pins, no easing (2,166 px over 1,800) | same rate, sized to our 9 panels |
| Cards | rise from 550 px (61% of 900) to rest, `power3.out`, as the panel's left edge goes from 95% to 25% of the width | same |
| Dividers | full-height hairlines, scaleY 0→1 from the top as the panel goes from 100% to 60% | same |
| Title | each letter: opacity 0→1 and blur 12→0 px in about 0.5 s, from a random start within about 1 s, once it reaches 90% | same |
| Curtain | after the row, the layer slides left one screen width at 1.07 px per px, uncovering the next screen (their Services) | uncovers Income's opening: big centred uppercase title, "◆ Every job feeds one ledger.", "See your jobs ↓" |
| End of row | a hairline with a small plus | same |

Income's opening (`IncomeIntro`) renders inside How so it can wait under the curtain; the rest of Income follows as before. Phones, no JS and reduced motion: a stacked list, then Income's opening as a normal screen. The scroll engine applies this effect with no smoothing of its own (Lenis smooths the scroll on desktop, as on trionn).

**Checks:** 15 of 15 landing tests pass; LCP 1,256 ms, CLS 0.000 at 390 px on slow 4G.
