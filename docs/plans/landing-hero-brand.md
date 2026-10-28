# Plan: brand tokens and the new landing hero

Status: **hero built** (28 Oct 2026). See §15 for what changed after approval. Follows `landing-pilot-waitlist.md`; only the hero and the tokens change here.

## 1. Goal
Riya opens the Krew link from an Instagram bio on her phone and, in the first screen, sees a bold, confident brand ("KREW") with one plain promise and one button to join the pilot.

## 2. Scope
**In**
- Brand tokens from the Orry brand book (pages 3 and 4 only: colour and type). No logo, supergraphics, illustrations or photos: the logo is the text placeholder "krew".
- Lexend Deca as the heading font, self-hosted from `docs/fonts/Lexend_Deca`.
- A new hero in the layout of the reference (novaform-astro-theme.vercel.app), plus a new marketing header styled to match.

**Out**
- All other landing sections. They pick up the new tokens automatically, but their redesign comes later.
- The creator app and client pages: they share `globals.css`, so they change colour but get no layout work.

Release: P0 (pilot landing). Plan: Krew site.

## 3. Surface
Public marketing page `/`, no login. Same light-on-4G budget as the landing plan §9.

## 4. What the reference does (studied with Playwright, 1440 and 390 px)
- Full-viewport hero (`100svh`), black, with a looping background **video** of a rainbow light band. The hero is `position: fixed`, and the rest of the page scrolls up over it.
- Nav: "[-] Navigation" label, then a list "[1] Home [2] About…" top-left; logo centred; white pill CTA top-right (16 px, 12 × 24 px padding, fully round). At 390 px this collapses to logo plus a square menu button.
- Bottom-left: a 20 px summary (about 3 lines), then the brand name in 192 px bold uppercase, line-height 1. On phones it is about 56 px.
- Right edge: three 48 px round outline icon buttons (social links) stacked vertically.
- Bottom-right: a 192 × 152 px image card with 8 px radius. On phones it sits above the summary.
- Intro: a black preloader with coloured lines sweeping across, about 5 s before anything shows.

## 5. How we adapt it

| Reference | Krew version | Why |
|---|---|---|
| Background video | CSS-only: two or three blurred radial gradients in green, violet and lime on navy, slowly drifting | A video would be 1–3 MB on 4G. CSS costs about 0 KB and no requests |
| 5 s preloader | One 600 ms line sweep in brand colours over the gradient; the text is **never hidden**, so LCP is not delayed. Skipped under reduced motion | The reference preloader would push LCP past 5 s |
| Name as the h1 | Giant "KREW" is shown visually; the h1 holds "Krew" plus the promise for screen readers and SEO | One plain promise must reach every visitor |
| Image card | A small product card: the existing `StageRail` resting on "Paid" with "₹1,25,000 received". The current GSAP rail sequence moves into it | We have no brand photos, and the rail is our one memorable element (design-system.md) |
| Social icons | Three round outline buttons linking to page sections: "How it works", "Is my data safe?", "FAQ" | We have no social accounts yet; the buttons must not lead nowhere |
| Numbered nav | "[1] How it works [2] For clients [3] Trust [4] FAQ" at ≥ 1024 px; centred "krew" text logo; pill **Join the pilot** | Same look, with real anchors |
| Fixed hero | `position: sticky` hero; the next section has a solid background and slides over it | Same effect with no JS |

## 6. Brand tokens (light theme = paper, dark = navy)

The brand colours are mostly too light for text on a light background (green on snow is 1.7:1). So brand colours are used as **fills** with navy text, and darker shades are used for text.

| Token | Light | Dark | Contrast (text tokens) |
|---|---|---|---|
| `background` | #F8FCF8 snow | #23133C navy | |
| `foreground` | #23133C navy | #F8FCF8 | 16.5:1 |
| `card` | #FFFFFF | #2E1D4D *(derived)* | |
| `primary` (buttons, fills) | #45DC97 neon green | #45DC97 | |
| `primary-foreground` | #23133C | #23133C | 9.7:1 on green |
| `ring` | #0E6E47 | #45DC97 | |
| `brand-violet`, `brand-coral`, `brand-lime` | #C6A0F7, #FA7267, #D0FF71 | same | fills and decoration only |
| `success` (paid, text) | #0E6E47 *(derived)* | #45DC97 | 6.1:1 / 9.7:1 |
| `destructive` | #A8382A *(derived from coral)* | #FA7267 | 6.2:1 / 6.2:1 |
| `warning` | #9A6200 (kept: the brand has no amber) | #D0FF71 → keep #F2B84B | unchanged |
| `muted-foreground` | to be picked at ≥ 4.5:1 on snow | to be picked at ≥ 4.5:1 on navy | |

The hero is always navy (it's forced dark) whatever the theme. The rest of the page follows the theme.

**Fonts**
- Headings: **Lexend Deca** (variable woff2, latin subset), self-hosted with `next/font/local`.
- Body: the brand book says **Proxima Nova**. It is a paid font that is **not** in `docs/fonts`, so it is UNVERIFIED whether we hold a web licence. Until that is confirmed, body text uses Lexend Deca at 400 (one font file, best for 4G). A free near-match (for example Figtree) is the alternative.
- Anek Latin and the `.condensed` class retire. Big amounts (`text-amount`) switch to Lexend Deca with tabular figures; ₹1,84,500 must still fit at 390 px.

## 7. Components
- `packages/ui/src/styles/globals.css`: new tokens, `--font-heading`, and the brand fills. `docs/design-system.md` is rewritten to match.
- `apps/web/app/layout.tsx`: Lexend Deca through `next/font/local`; the woff2 copied into `apps/web/app/fonts/`.
- `components/marketing/header.tsx`: rewritten (numbered nav, centred wordmark, pill CTA). On phones: wordmark plus the CTA only, with no menu button; the section anchors live in the hero buttons.
- `components/marketing/hero.tsx`: rewritten. Reuses `StageRail` and `HeroRail` inside the card.
- `marketing.css`: the gradient drift and line sweep keyframes, transform and opacity only.
- No new shadcn components.

## 8. Must-hold rules
None are affected: the change is purely visual. The copy still says Krew never agrees a price (in the How section, unchanged).

## 9. Performance and accessibility
- No video, no images, no new JS. Route JS stays at or under 20 KB gz, and GSAP stays lazy.
- Font: one variable woff2. Check the size after subsetting (expected ~30–40 KB); preload it.
- Targets at 390 px on slow 4G: LCP under 2.5 s, CLS under 0.1 (the current build is 1.2 s).
- The animated gradient uses `transform` on blurred layers with `will-change`, and pauses under `prefers-reduced-motion`. Check that the blur doesn't drop frames on a 4×-throttled CPU; if it does, use a static gradient on phones.
- The giant word is `aria-hidden`; the h1 is real text. All tap targets are at least 44 px, focus rings are visible on navy, and contrast is AA.

## 10. Copy (in `copy.ts`)
- Summary: "From the first DM to getting paid. Krew keeps each client job in one place for you and your crew."
- Wordmark: "KREW"
- CTA: "Join the pilot"
- Round buttons (aria labels): "How a job runs", "Is my data safe?", "Questions"
- Card: "Paid" · "₹1,25,000 received"

## 11. Acceptance criteria
- At 390 and 1440 px the hero matches the reference layout (§4) using brand colours and Lexend Deca; side-by-side screenshots are attached to the PR.
- No raw hex values outside `globals.css`.
- Text contrast is AA in both themes, checked by a script.
- LCP < 2.5 s and CLS < 0.1 at 390 px on slow 4G.
- With reduced motion: nothing moves, and the rail rests on "Paid".
- With JS off: the hero is complete and every link works.

## 12. Tests
- Update the existing landing Playwright spec: the h1 text, the heading order, the CTA jumping to `#waitlist`, the 4G budget, and reduced motion.
- New: screenshot snapshots at 390 and 1440 px.

## 13. Open questions
1. **Proxima Nova licence**: do we have a web licence? If not, should body text use Lexend Deca or Figtree?
2. **Token scope**: should the Orry tokens replace rani pink app-wide now (the creator app turns green and navy), or only on the landing page for now? *Recommended: app-wide, because one brand is simpler, and the app screens aren't built yet.*
3. **Product name**: the brand book is "Orry", but the site and wordmark say "Krew". Confirm that "KREW" is the hero word for now.
4. **Hero theme**: always navy (like the reference's always-black hero), or follow the light/dark theme? *Recommended: always navy.*

## 14. Tasks

| # | Task | Days |
|---|---|---|
| 1 | Tokens in `globals.css`, contrast script, `design-system.md` update | 0.5 |
| 2 | Lexend Deca via `next/font/local`; retire Anek and `.condensed`; check money fits at 390 px | 0.25 |
| 3 | Header rewrite | 0.25 |
| 4 | Hero rewrite: layout, giant word, card with the rail, round buttons | 0.5 |
| 5 | Gradient drift and line sweep in CSS, reduced-motion handling, 4× CPU check | 0.25 |
| 6 | Playwright updates, screenshots, 4G budget run | 0.25 |
| | **Total** | **2.0** |

The landing plan gave the hero 0.5 days. This is more because it adds the brand tokens and the font.

## 15. Decisions and build notes (28 Oct 2026)

**Answers to §13**
1. Proxima Nova: the founders hold a licence, but the files aren't in the repo yet. Body text uses Lexend Deca until the woff2 files are added (`--font-body` in `globals.css`).
2. Token scope: the hero only for now, matching the reference. The brand colours are **added** as `brand-*` tokens. The app tokens (rani and so on) are unchanged.
3. The hero word is "KREW", with a "krew" text placeholder for the logo.
4. The hero is always navy.
5. The image card is left out.

**Where the build differs from §5**
- **Background:** a WebGL fragment shader (`hero-shader.tsx`), as requested ("three.js shader gradient with hover").
  - It's written in plain WebGL rather than three.js: about 3 KB instead of about 150 KB gz, for the same GLSL.
  - The band follows the reference's arch, with violet into green and thin lime and coral edges. Tone is kept subtle and rich, per feedback.
  - Mouse hover bends the band towards the cursor and brightens it.
  - It starts after load plus idle, pauses off screen and in hidden tabs, and draws at 1× on phones.
  - The CSS/SVG backdrop (`hero-backdrop.tsx`) stays underneath as the fallback for no JS, reduced motion or no WebGL.
- **Intro:** about 2.2 s, plays once per session (`html.intro`). The name opens between two bars, collapses to a line, the dark lifts in strips with brand-colour lines, then the wordmark rises letter by letter.
- **Header:** the old sticky header is gone. The nav lives inside the hero, as in the reference. The "How it works" sticky step rail now sits at `top-0`.
- **Removed:** the GSAP hero rail (`hero-rail.tsx`). GSAP is no longer imported anywhere, so the `gsap` dependency can be dropped.

**Checks**
- Type check and lint are clean. Landing Playwright: 11 of 11 pass.
- At 390 px on slow 4G: LCP 980–1,620 ms and CLS 0.000.

## 16. Sections parked (28 Oct 2026)

The page renders **only the hero** while the landing is redesigned section by section. Nothing below the hero is deleted. The components, the copy and the waitlist server action stay in the repo, unchanged, and come back in this order.

| # | Section | Component | Copy (`app/(marketing)/copy.ts`) | Purpose in the flow |
|---|---|---|---|---|
| 1 | Hero | `hero.tsx` | `hero` | The promise, plus "Join the pilot" |
| 2 | The mess | `mess.tsx` (+ `mess-play.tsx`) | `mess` | One job lives in four apps; a crew makes it worse |
| 3 | How a job runs | `how.tsx` (+ `step-rail.tsx`, `mocks.tsx`) | `how` | Riya and Arjun through 7 steps (PF-14/15, PF-09, EC-24, PF-17/18/03), then the income block `#income` |
| 4 | For your clients | `sections.tsx` › `Clients` | `clients` | Clients fill no forms and need no login |
| 5 | Trust | `sections.tsx` › `Trust` | `trust` | Answers "my chats? my money?" right after the flow |
| 6 | FAQ | `sections.tsx` › `Faq` | `faq` | Native `<details>` |
| 7 | Waitlist | `section.tsx` + `waitlist-form.tsx` (`actions.ts`) | `waitlist` | One-field join, then optional details |
| — | Footer | `footer.tsx` | `footer` | Removed from `layout.tsx` for now |

**To restore:** put the JSX from the comment in `page.tsx` back, inside `<div className="relative z-10 bg-background">`, so the sections slide up over the sticky hero. Add `<MarketingFooter />` back in `layout.tsx`, then un-skip the four parked tests in `e2e/landing.spec.ts`.

**Known gap while parked:** the hero links (`#how`, `#clients`, `#trust`, `#faq`, `#waitlist`) have no targets, so "Join the pilot" goes nowhere until the waitlist returns.

**Tests:** 8 pass and 4 are skipped (the form and mess tests). LCP 960 ms, CLS 0.000.
