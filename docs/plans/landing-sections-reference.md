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
| Dividers | hairlines from the top of the screen to the bottom, moving with their panel, scaleY 0→1 from the top as the panel goes from 100% to 70% (re-measured: 93% drawn at 73%) | same (fixed 29 Oct: they had been shifted half a screen up) |
| Title | each letter: opacity 0→1 and blur 12→0 px in about 0.5 s, from a random start within about 1 s, once it reaches 90% | same |
| Curtain | after the row, the layer slides left one screen width at 1.07 px per px, uncovering the next screen (their Services) | uncovers Income's opening: big centred uppercase title, "◆ Every job feeds one ledger.", "See your jobs ↓" |
| End of row | a hairline with a small plus | same |

Income's opening (`IncomeIntro`) renders inside How so it can wait under the curtain; the rest of Income follows as before. Phones, no JS and reduced motion: a stacked list, then Income's opening as a normal screen. The scroll engine applies this effect with no smoothing of its own (Lenis smooths the scroll on desktop, as on trionn).

**Checks:** 15 of 15 landing tests pass; LCP 1,256 ms, CLS 0.000 at 390 px on slow 4G.

## 19. "What we promise" re-matched to novaform's Services; footer credit removed (29 Oct 2026)

**Footer:** the "Photos from Unsplash" link is gone (the Unsplash License needs no credit). Credits stay in `images/CREDITS.md`.

**Images:** the user asked for the reference's exact images. Novaform's own Licenses page says: "All photography and illustration used in the demo is placeholder content … the demo media is not licensed for redistribution." So we don't ship them. Instead there are four free Unsplash look-alikes in the same style (abstract, iridescent, glass, gallery): `trust-1` to `trust-4`, credited in CREDITS.md. The old creator photos and the UPI tile in this section are removed.

**Layout and effects, re-measured at 1440 px:**

| Reference | Ours |
|---|---|
| Title rises letter by letter (0.4 s per letter, staggered over 0.4 s) | same (`data-split-fast`) |
| Sticky rows at 45/162/270/396 px (5/18/30/44%), with 288/192/96/0 px below; phones: all at 5% | same |
| Rows numbered downwards [06]…[03], hairline on top, page-coloured background | [04]…[01], same |
| Portrait image up to 25 rem wide, `object-position: 50% 20%`; then a .25fr / 1.2fr / 2fr grid: number, title, "Includes" + bulleted list with a rule under each item | same; "Includes" reads "What this means"; each promise's sentences are its list |
| Hover: image zooms to 1.1 over 0.6 s; a white "View" circle (4.5–6.25 rem) fades in over 0.4 s | same; the circle reads "Ask" and opens the matching question in the FAQ (`#faq-qN`). On touch screens (no hover) it always shows |

**Checks:** 15 of 15 landing tests pass; LCP 1,288 ms, CLS 0.000.

## 20. Questions in RoomMaster's FAQ layout (29 Oct 2026)

Studied roommaster.com/property-management at 1440 and 390 px (a demo pop-up had to be hidden first). Rebuilt in our style:

| RoomMaster | Ours |
|---|---|
| Left column about a third wide, sticky 96 px from the top: pill label with a dot, 56 px heading, then a "Have more questions?" card whose bottom edge steps up on the right with a curved notch | same: "Questions" pill with a green dot, the title blurring in, a mint card ("Still have a question? Write to us…", "Email us" to the contact address) with a tab and an inverted corner |
| Right: white cards, 16 px corners, 28 px apart, question beside a 48 px square outlined button (+ / ×), first one open, answers slide open over 0.5 s, `cubic-bezier(0.165, 0.84, 0.44, 1)` | same, built on native `<details name="faq">`: one open at a time with no JS. The slide uses `::details-content` with `interpolate-size` where the browser supports it, and the answer simply opens elsewhere |

"Ask" on a promise still opens its question (`faq-opener.tsx`). The tabbed stories version (`faq-stories.tsx`) is removed. 15 of 15 landing tests pass; LCP 1,412 ms, CLS 0.000.

## 21. Gradients pared back; nav buttons unified (29 Oct 2026)

On request ("remove the gradients … too much small gradients"), the light sections now use only one soft pearl wash (snow into a light navy tint, no grain), alternating with plain snow: How, Clients and Questions get the wash. Removed: the mist and haze blobs, the swift, dusk and dither card art (now flat light panels), the ecliptic ring on the UPI tile (plain navy), the lime-to-green pill, and the violet-to-green job bars (plain green). Kept: the hero's light band and the footer's dark smoke, which are full-section backgrounds rather than small gradients.

The hero nav and the floating nav now use the same "Join the pilot" pill as everywhere else (48 px, 16 px text, hover dot), with a light focus ring on navy.

## 22. One button style everywhere (29 Oct 2026)

Audited every button and link-styled control on the page with a script (computed radius, height, font):
- **One pill:** fully round, 48 px tall, Lexend Deca 16 px medium, a dot and a soft inner glow on hover (`pill-link.tsx`; green or navy outline). It now covers the navs, Mess, How's end panel, "See your jobs ↓" (was an underlined link), "Email us" (was 12 px corners), and the form's "Join the pilot", "Save" and "Skip for now" (were 12 px corners and 44 px tall). The email field is round too, so it matches the button beside it.
- **Round icon buttons:** the hero's jump links, the phone menu button (was square), the FAQ's +/× (was 9 px corners), and "Ask" (now 16 px text).
- **Fonts:** the landing layout sets Lexend Deca on everything. The floating nav and the skip link had fallen back to the app's Anek Latin.
- Left as they are: the small buttons inside the phone mock-ups, which show the app's own interface.

## 23. Even spacing between sections (29 Oct 2026)

Measured content-to-content gaps between sections: 112–256 px on desktop and 68–176 px on phones, because neighbouring paddings stacked (128 + 128). Every section now uses one padding (`sectionY` in `styles.ts`: 48 / 64 / 80 px at phone / tablet / desktop), so the gap between one section's content and the next is the same everywhere: 96 / 128 / 160 px. Applied to Mess, the stacked How panels on phones, Income's opening (it keeps extra top room on tablet and desktop for the floating nav, since it fills the screen), the jobs list, Clients, Trust (its last row no longer adds its own bottom padding), Questions and the footer's join block.

**Follow-up (29 Oct 2026):** the Questions "write to us" card is now navy (brand navy, light text) with the standard green "Email us" pill, on request.

## 24. Client cards re-matched to novaform's case-study cards (29 Oct 2026)

**Images:** as with §19, the reference's images aren't licensed for redistribution (its Licenses page), so there are three free Unsplash look-alikes, light enough for dark text, as on the reference: white sculpted waves (`clients-1`), lilac and pink folds (`clients-2`), cream and peach layers (`clients-3`). All are by Pawel Czerwinski and credited in CREDITS.md. They're cropped to the reference card's 1096 × 710 ratio at 2,200 px wide (98–210 KB). The Invoice card's UPI mock-up is replaced by an image, as the reference has an image on every card.

**Structure, re-measured at 1440 px:**

| Reference | Ours |
|---|---|
| The whole card is one link, 20 px corners, the image filling it (1096 × 710) | same ratio, up to 55 rem tall; 25 rem tall on phones (as the reference) |
| Title 32 px medium and a 16 px light line, straight on the image, 56 px from the top-left; no panel | same, in navy (the glass panel is gone) |
| Hover: image zooms to 1.1 over 0.6 s; a 65 px white "View" circle fades in at the centre (0.2 s) | same; the circle reads "Ask" and the card opens "Do my clients need to download anything?"; on touch screens the circle simply shows |
| Sticky stack (2/17/30%) shrinking to 0.7 / 0.8 / 0.8 | unchanged |

**Follow-up (29 Oct 2026):** on request, the three Income cards get their grainy gradients back (swift, dusk, dither from §16). They're the only small gradients on the page; every other section keeps the plain snow or pearl wash from §21.

**Follow-up (29 Oct 2026):** inside the three Income cards only (`data-brand`, marketing.css), the app's colour roles take the brand colours, so the mock-ups show green chart bars, a dark brand-green "received" amount, navy text and brand-tinted borders instead of the app's rani pink and peacock teal. The rest of the page and the app itself are unchanged.

**Follow-up (29 Oct 2026):** all three Income cards now share the middle card's background, the grainy dusk (navy into violet and coral). The swift and dither styles are removed.

## 25. Bottom blur; "See your jobs" (29 Oct 2026)

**Bottom blur**, as novaform's `bottom-blur-block` (read from its CSS): a fixed strip 6 rem tall (8 rem from 1920 px) along the bottom of the screen, made of four layers that blur what's behind them by 16, 8, 4 and 2 px, each masked to a band, so the blur is strongest at the edge and fades out upwards. It ignores the pointer, and it's hidden up to 991 px, as on the reference (`bottom-blur.tsx`).

**"See your jobs"** is now the standard green pill, with no arrow.

## 26. How a job runs: new step images (29 Oct 2026)

Asked for trionn's own images. Its "Selected work" has only three, and each is a screenshot of a client's website carrying that client's brand (MyWorker AI, Pulse Studio, Loftloom). So they don't fit Krew's seven steps even with permission. Instead there are six free Unsplash photos in trionn's look (cinematic, muted, editorial), cropped to its 670 × 460 card, 58–236 KB each, credited in CREDITS.md: a couple under wedding lights (Enquiry), a laptop and notebook on black (Quote), a film crew in a warehouse studio (Work), an editor silhouetted at a screen (Review), a dark minimal desk (Invoice), a photographer in a dark studio (Paid). Advance keeps the UPI tile.

**Follow-up (29 Oct 2026):** on request ("landscape images, high quality"), the steps now use seven quiet landscapes instead of on-topic photos: layered blue ranges, dunes under cloud, white sands, plains below snow peaks, dusk hills, the moon over pale dunes, and jagged peaks behind black sand. They're `how-1` to `how-7`, free Unsplash, 33–269 KB each, credited. Advance gets a landscape too; the UPI tile is no longer used anywhere and is removed.

## 27. The landing stays light in dark mode (29 Oct 2026)

On a device set to dark mode, the app's theme (next-themes, following the system) turned its colour roles dark, so the app screens in the Income cards and the join form went dark after deployment. The landing page is designed light (with its always-navy hero), so its root now carries `.light`, which re-declares the light values (`:root, .light` in globals.css), plus `color-scheme: light`. The app keeps its dark mode. There's a new test with the device in dark mode.

## Floating nav on scroll (31 Oct 2026)

The floating nav no longer stays pinned past the hero. It hides as you scroll down and slides back in when you scroll up (8 px of travel before it changes), like a usual site header. Back on the hero it hides again.

## Vantra's closing screen and footer (31 Oct 2026)

From [vantra-studio.webflow.io](https://vantra-studio.webflow.io/), read from its markup, stylesheet and Webflow interaction data.

- **Photo screen** (`next.tsx`, Vantra's "Build what's next with us"): full screen, rounded top corners (1.5 rem), Vantra's own long-exposure photo (`images/next.jpg`, used with permission) under a 30% navy veil, centred title with the first word on its own line ("Run / your next job on Krew"), a short line (30ch) and two pills (green "Join the pilot", snow outline "See how it works"). Reveals as Vantra's: title lines rise 0.25em from 0.15 s, 0.02 s apart (power2.inOut); the line rises 0.5em at 0.45 s (power2.out); the pills rise 0.5em from 0.45 s, 0.15 s apart; each plays once as it enters the screen (`data-rise`).
- **Footer** (`footer.tsx`): dark panel, 1.25 rem rounded top, riding 1.5 rem up over the photo; 12 columns: wordmark over a short line about Krew (cols 1–5, pushed apart), big section links 36 px over 1 px rules (cols 7–12), small links in two columns below; a rule, then copyright and India time. It sits above the bottom blur so its text stays sharp. Our green-dot hover stands in for Vantra's colour fade.
- **Join form** moved out of the footer into its own section on snow after Questions (`waitlist.tsx`), so `#waitlist` still lands on the form. The line-drawn KREW wordmark and the smoke backdrop left with the old footer.
- **Update (31 Oct):** the join form now sits in the photo screen where Vantra has its two buttons (the screen is `#waitlist`; both pills are gone), under "We're opening Krew to a small group of creators first…". The title is three fixed lines at every width in Vantra's shape, one word first: "Run / your next / job on Krew", a size below Vantra's (52 px phones, 72 px tablets, 88 px desktop). The photo screen rides 24 px up over Questions (no snow strip between them), its bottom third fades to navy so it runs into the footer, and it grows past one screen when the form asks for details.
- **Footer reverted** to the trionn closing block (smoke, India time, contact and section links, the line-drawn KREW) without its join title, intro or form card, since the form is now in the photo screen. It's no longer a full screen: one row of copyright and clock, contact and section links, then the wordmark (about 500 px on desktop). The smoke fades in from navy at its top edge, so the photo and the footer meet without a seam. Vantra's footer is not used.

## The mess, after pixelismo's Works (31 Oct 2026)

From [pixelismo.it](https://www.pixelismo.it/), its home's second section, rebuilt from its scene code (`scena-about.js`) and stylesheet (`webgl.css`), and checked side by side in a browser.

- **Scene** (`ribbon.ts`, `mess-ribbon.tsx`): a camera with a 40° field of view that never moves, only turns. As the section comes up (1 − its top / the screen height, eased by 0.095 a frame, smoothstep) its target slides from 25 units ahead to 22 below (19.5 on phones), so it turns from the wall to the floor. On the floor lie 10 rounded panels (our 7 photos, then the first 3 again), 4.8 × 3 units with 1-unit gaps (4.3 × 2.7 and 0.75 on phones), tilted 10°, each a 24-segment strip (16 on phones) bent vertex by vertex along one cosine over the whole loop: the middle rises 9 units towards the camera (4.5 on phones), the ends sink. Past 0.12 of the turn the loop drifts left at 0.45 units a second (0.22 on phones). A grid of 4-unit cells lies 65 units down and stands 70 ahead.
- **Drawing:** WebGL2 with two small shaders (no three.js): navy, the grids at 12% snow, and the photos (object-fit cover, rounded corners in the shader). It's clipped by CSS to pixelismo's portal: min(520px, 56vw) wide on desktop, min(68vw, 620px) on tablets, min(78vw, 460px) on phones, 1.55:1, 30 px corners, growing 1.2× under the pointer over 0.5 s. Outside it a 2D canvas draws each panel's outline in navy at 25%, from the same projection (pixelismo shows edge lines there). Photos load near the section through Next's image optimiser at 828 px.
- **Window:** links on to "How a job runs", with pixelismo's cursor disc ("See how", 50 px, grows in over 0.38 s). It names the fragment in the middle (client or crew tag, and its caption) and says "The mess" bottom left in difference blend, where pixelismo writes "Works".
- **Text:** "[ The mess ]" top left; the four apps top centre where pixelismo lists its services; the statement bottom left (lighting up letter by letter); the pill bottom right (under the statement on phones).
- **Fallbacks:** with reduced motion the camera is already turned and nothing drifts; without WebGL2 or JS the window shows the first photo. The moving panels are hidden from screen readers; the seven captions are listed for them.
- **Photos (31 Oct):** seven wide, premium landscapes (Unsplash License, `images/mess-1…7.jpg`, credits in `CREDITS.md`) in place of the people photos, ordered so the colours alternate (misty blue valley, golden dunes from above, Vestrahorn surf, turquoise cove, pink dunes, Stokksnes, an orange aerial). The window's tag and caption still name each fragment of the mess.
- As on pixelismo's home, scroll and drag don't move the loop and the pointer doesn't lean it (those belong to its Works page). The three counting stats and the flipping photo grid are gone.

## Growth cards, after Orionix's "Client voices" (31 Oct 2026)

From [orionix.framer.website](https://orionix.framer.website/), the cards under "Where ambitious brands build their digital future", measured in a browser.

- **Card:** 360 × 557, a 4 px white frame with 24 px corners and Orionix's layered shadow (1 px ring at 4%, then 1/2, 4/6 and 40/40 −24 px drops), round a navy-deep panel with 20 px corners and 40 px padding.
- **Fan (1024 px up):** the left card turns −9° about (94%, 45%) and moves 32 px right and down; the right card turns 5° about (7%, 45%) and moves 32 px left and down; the middle stays upright and on top. A band of thin green lines (1 px every 9 px, where Orionix's are red) runs behind them. Phones and tablets stack the cards straight.
- **Inside:** where Orionix has a 232 px round portrait in a 272 px box, each card has a 3D illustration from 3dicons (CC0, premium black-and-gold style), standing on its own with a soft drop shadow: a ₹ coin (what you earn), a pie chart (your work), a camera (your goals). A copy, enlarged and blurred 10 px at 40%, glows behind, as Orionix blurs the portrait. Then the point (24/28, centred), a 1 px snow/10 hairline, the tag (16 px medium) and its headline numbers (14 px at 65%), in Lexend rather than Orionix's Fraunces.
- The phone screens are gone from these cards (a circle crop of a screen didn't read), and so are the number dials that briefly replaced them.
