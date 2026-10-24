# Plan: public landing page and pilot waitlist

Status: **built 24 Oct 2026**; tasks 1–16 done, task 17 (`prd-review`) not run yet. See §15 · 24 Oct 2026 · No spec ID exists for marketing pages; this plan uses none rather than inventing one.

## 0. Decisions taken as defaults

Pre-work check (24 Oct 2026): the repo type-check failed because `packages/ui` used `radix-ui` and `lucide-react` without declaring them. Both were added. Type-check, lint, the 30 tests and the build now pass.

| Question | Default used | Why |
|---|---|---|
| Name on the page | **Krew** is the brand. "Kreator" appears only as the solo plan's name in the "Just you, or a crew" section | PRD header: "Kreator is the solo plan of the same app" |
| Where sign-ups go | **Undecided.** `lib/waitlist.ts` is an adapter with a mock. Its contract (`ok` / `duplicate` / `unavailable`) fits a backend, a sheet or email equally | No vendor wired in, as asked |
| Domain and contact email | Placeholders: `NEXT_PUBLIC_SITE_URL` (default `https://krew.example`) and `CONTACT_EMAIL` (default `hello@krew.example`). **UNVERIFIED** | Not given; not invented |
| English/Hindi toggle | **Later.** All copy lives in `app/(marketing)/copy.ts`, so Hindi slots in without a rework | PRD §9: the interface is in English |
| Client brief | **Follows the PRD: there is no brief.** Stage 1 is "Enquiry". Client links are quote, review and invoice | PRD §2.2, PF-08, decision S9. The PRD wins over the outline and over `02-product-flow.md` |

## 1. Goal
Riya, a solo photographer in Pune, taps the link in an Instagram bio on her phone over 4G. Within one screen she understands that Krew runs a client job from the first DM to getting paid, and within a minute she has joined the pilot waitlist.

## 2. Scope
**In:**
- `/` landing page with its own marketing layout.
- The workbench index moves to `/dev`.
- The waitlist form, a server action, and the adapter with its mock.
- SEO files: metadata, Open Graph image, sitemap and robots.
- A Playwright test at 390 px on slow 4G.
- One shared change: `StageRail` frame 1 is renamed from "Brief" to "Enquiry".

**Out:**
- A real waitlist vendor.
- Hindi.
- Analytics or any third-party script.
- A privacy policy page. It is needed before launch; see §13.
- Removing `briefMachine` and fixing `02-product-flow.md`. These are a follow-up to bring the repo in line with S9.

**Release and plan tag:** pre-pilot; the page covers both plans.

## 3. Surface
This is a public marketing page, not a creator page or a client page. It is treated as strictly as a client page: server components, almost no JS, and fully static (SSG).

## 4. User flow
1. Arrives from an Instagram bio link, a WhatsApp forward, or search. Lands on `/`.
2. Hero: reads the promise and sees the rail play from Enquiry to Paid. Taps **Join the pilot**, which jumps to `#waitlist`, or **See how a job runs**, which jumps to `#how`.
3. Scrolls through the mess, how a job runs, client links, trust, plans and FAQ. A second **Join the pilot** button sits after "How a job runs".
4. Fills the form. Inline errors appear on blur, and a summary of errors appears on submit.
5. On success, the form is replaced by a confirmation in the same place, with focus moved to it. The user can then leave or share the page.

## 5. States
| State | What shows |
|---|---|
| Static, no JS, or reduced motion | Finished hero: the rail rests on "Paid". All content is readable. The form posts as a plain HTML form through the server action and shows the server-rendered result |
| Slow 4G | Text and layout arrive first. The font uses `display: swap` with Anek's fallback metrics, so the swap causes no layout shift. GSAP loads only after `load` plus idle. If GSAP hasn't loaded within 3 s, the hero stays finished |
| Form: field invalid | Message under the field, `aria-invalid`, linked with `aria-describedby` |
| Form: submit invalid | An error summary with `role="alert"` lists each problem as a link to its field. Focus moves to the summary |
| Form: submitting | The button reads "Joining…" and is disabled (`aria-disabled`). Inputs stay readable |
| Form: success | "You're on the list, Riya." The confirmation is in a `role="status"` region and takes focus |
| Form: duplicate | "You're already on the list. We'll be in touch." This counts as success, not as an error |
| Form: adapter down | "We couldn't save this. Check your connection and try again." The form keeps what was typed |
| Bot or spam | A hidden honeypot field is checked. If it's filled, the server returns fake success and saves nothing |

## 6. Data contract
**`packages/schemas/src/waitlist.ts` (new)**, reusing `Skill` and `Plan`:
```ts
WaitlistSignup = z.object({
  name: z.string().trim().min(1).max(80),
  skill: Skill,                         // video | photo | design
  city: z.string().trim().min(1).max(60),
  plan: Plan,                           // kreator = "Just me", krew = "I have a team"
  instagram: z.string().trim().regex(/^@?[A-Za-z0-9._]{1,30}$/).transform(stripAt).optional(),
  contact: Contact,                     // one field: Indian mobile (10 digits, optional +91/0) or email
})
Contact = discriminated result { kind: "phone", e164: "+91XXXXXXXXXX" } | { kind: "email", email }
```
Error messages live in the schema so the client and the server show the same words.

**`apps/web/lib/waitlist.ts` (new)**: `submitWaitlist(signup): Promise<{ ok: true; duplicate: boolean } | { ok: false; reason: "unavailable" }>`. The implementation is chosen by env: `WAITLIST_ADAPTER=mock`, the default. `lib/waitlist.mock.ts` keeps entries in memory, flags a duplicate on the same contact, and adds a 400 ms delay. Outside production, the contact `fail@example.com` forces `unavailable` for testing. (A server action can't read the page's query string, so a `?fail=1` switch wouldn't work.)

**`app/(marketing)/actions.ts`**: the server action `joinWaitlist(prev, formData)`. It parses with the schema, runs the honeypot check, calls the adapter, and returns `{ status, fieldErrors, values }`.

**MSW:** not needed. The adapter mock covers it, and nothing on the page fetches data.

## 7. Components
**Reused, unchanged:**
- `Money`, for every amount.
- `StatusPill`.
- `ListRow`, for tasks, mail rows and invoice lines.
- `ActionBar`, inside mock phones with `className="static"`.
- `Card`, `Button`, `Input`, `Label`, `Badge` and `Separator`.

**Reused, changed:**
- `StageRail`: `FRAMES[0]` changes from "Brief" to "Enquiry". The `stageToFrame` mapping is unchanged.
- It also gains an optional `data-hero-rail` passthrough (`...props`), so the hero island can target the frames.

**New in `packages/ui`**, because sign-up (F01) will reuse it:
- `ChoiceChips`: native radio inputs styled as 44 px chips, with a `fieldset` and `legend`. No JS.

**No `pnpm ui:add` needed:**
- The FAQ uses native `<details>`/`<summary>`, which works without JS.
- The radios are native.
- If you'd rather have shadcn `accordion` and `radio-group`, they add about 6 KB gz of client JS.

**New in `apps/web/components/marketing/`** (server unless marked):

| Component | Notes |
|---|---|
| `MarketingHeader` | Wordmark plus "Join the pilot" (an anchor styled as a button). Sticky on phones, 56 px tall |
| `MarketingFooter` | Contact email, Privacy (placeholder, flagged), "Krew is made by Orry" (**UNVERIFIED** wording) |
| `Section` | `id`, `h2`, optional intro; fixes the heading order |
| `HeroRail` *(client)* | Wraps `StageRail` and runs the GSAP sequence; see §9 |
| `PhoneFrame` | A card with a rounded 20 px border, a fake status line and a fixed aspect ratio. CSS only, no images |
| `MessFragments` | `ChatBubble` and `MailRow` built from tokens. No platform logos or imitation of Meta or Google UI |
| `StageStep` | Number, stage name, one line on what Krew does, and a mock |
| `StepRail` *(client, about 1 KB)* | Sticky small rail in "How a job runs", driven by IntersectionObserver (see §9) |
| `MockEnquiry`, `MockQuote`, `MockAdvance`, `MockTasks`, `MockReview`, `MockInvoice`, `MockPaid` | Built from `ListRow`, `StatusPill`, `Money`, `Button` and `ActionBar` |
| `ClientLinks`, `PlanCards`, `TrustList`, `Faq` | Static |
| `WaitlistForm` *(client)* | `useActionState` plus on-blur validation with the shared schema |

**Sample data** lives in `apps/web/lib/landing-samples.ts`, typed with `@krew/schemas`. Its numbers match `flowCatalog`:
- **Riya**, solo photographer, Pune (first name only, as in the design system); client Meera Joshi.
- Quote ₹59,000 (₹50,000 plus 18% GST); advance ₹15,000.
- Invoice `RY/26-27/014`: ₹40,000 received and ₹4,000 TDS recorded.
- **Arjun**, wedding video crew: a ₹1,25,000 job with tasks for Kabir (shooter), Sana (editor) and Arjun.

Every mock carries a small "Example" badge, so nobody reads these people as customers or testimonials.

## 8. Must-hold rules check
| Rule | Applies? | How the page respects it |
|---|---|---|
| Personal chats never stored | Copy | Trust and FAQ say it in PRD terms. No claim goes beyond the gate (see §13 on the 24 h buffer) |
| No reminder after the client acted | Copy | The "Clients never log in" section says reminders stop when the client acts (PF-30, EC-30) |
| Bot never commits to a price | Copy | Stage 1 says "It never agrees a price" and "starting from" rates only |
| Orry never holds client money | Copy | "Straight to your own Razorpay account or UPI ID" |
| Creators isolated | No | — |
| The waitlist's own data | Yes | Minimum fields. A purpose line under the contact field. No third-party scripts. The privacy link is needed before launch (DPDP) |

## 9. Performance, motion and accessibility

### Performance budget (390 px, slow 4G: 150 ms RTT, 1.6 Mbps down, CPU 4× slower)
| Metric | Budget |
|---|---|
| LCP (the h1 text) | < 2.5 s |
| CLS | < 0.1 (target 0) |
| Route JS beyond the framework and the existing `ThemeProvider` | ≤ 20 KB gz (`WaitlistForm` with schema, `HeroRail` shell, `StepRail`) |
| GSAP core | about 27 KB gz, loaded by dynamic `import()` after `load` plus `requestIdleCallback`. **Not in the first load**; the test asserts this |
| HTML (static) | ≤ 45 KB gz |
| CSS | ≤ 25 KB gz |
| Fonts | The existing Anek Latin variable woff2 (latin subset), preloaded by `next/font` |
| Images | No raster images. All mocks are HTML and CSS. `next/image` isn't needed; it will be used if a photo is ever added |
| Rendering | Fully static (`export const dynamic = "force-static"`). No data fetches. Server components by default |

### Motion spec
- **Hero rail (GSAP, the one bold moment):**
  - The server renders the **finished** rail, resting on "Paid".
  - A 150-byte inline script in the marketing layout adds `html.motion-ok` when JS is on and `prefers-reduced-motion: no-preference` is set. Under `.motion-ok`, CSS pre-paints frames 2–7 as "todo", so there's no flash of the end state.
  - After `load` plus idle, `HeroRail` runs `import("gsap")` and plays the timeline once:
    - 0.4 s delay.
    - Then, for each frame, the fill sweeps left to right (`scaleX` 0 → 1 on an overlay, 0.32 s, `power2.out`), the label turns rani, and the previous frame settles to ink. The step takes 0.5 s.
    - A caption under the rail cross-fades per stage: "Meera asks for your rates on Instagram" → … → "₹40,000 received · ₹4,000 TDS recorded".
    - Total about 4 s. No loop and no replay.
  - Only `transform`, `opacity` and colour change, so the CLS cost is 0.
  - If GSAP fails, or 3 s pass, the script removes `.motion-ok` and the finished rail shows.
  - The caption is `aria-hidden` while playing. Screen readers get the static rail label "Step 7 of 7: Paid" and a visually hidden sentence listing all seven steps.
- **One scroll moment (recommended without GSAP):**
  - In "How a job runs", a small sticky `StageRail` (size `sm`, plus the stage name) sits under the header. It moves to the stage whose card is in the middle of the viewport.
  - It's driven by IntersectionObserver (about 1 KB) instead of ScrollTrigger (about 17 KB gz). It's a state change, not a scrubbed animation.
  - Reduced motion: it still updates, with no transition.
  - No JS: the sticky rail isn't rendered, and each card shows its own "Step 3 of 7".
- **Everything else is static.**

### Accessibility
- One `h1` in the hero. Each section has an `h2`, and each stage card has an `h3`. Order is checked in the test.
- Tap targets ≥ 44 px (`h-tap`/`min-h-tap`), including FAQ summaries, chips and footer links.
- A visible focus ring (`ring` token) on every interactive element, and a skip link to `#main`.
- Mock screens are decorative copies: `inert` (which also hides them from screen readers). Each card's `h3` and body text carry the meaning.
- Form:
  - real `<label>`s;
  - `autocomplete` (name, address-level2, email/tel);
  - `inputmode` on contact;
  - errors announced through the summary alert;
  - confirmation through `role="status"`.
- Colour is never the only signal. Pills always carry text, and every token pair is AA in both themes.

## 10. Copy (draft; sentence case; lives in `app/(marketing)/copy.ts`)

Items marked ⚠ are lines I'm unsure of; the reasons are in §13.

**Header:** Krew · [Join the pilot]

**1. Hero**
- Eyebrow: For videographers, photographers and designers
- **h1: From the first DM to getting paid.**
- Sub: Krew keeps each client job in one place: the chat, the quote, the advance, the drafts and the invoice. Run it alone or with your crew.
- Buttons: [Join the pilot] [See how a job runs]
- Under the rail: One job, seven steps. You always see where it stands.

**2. The mess today**
- h2: Right now, one job lives in three apps.
- Fragments (example messages, no brand UI):
  - Instagram DM: "hi! rate for pre-wedding shoot in Pune?" · caption: Enquiries in Instagram DMs.
  - WhatsApp: "sending the quote screenshot again" · caption: Quotes as screenshots.
  - Gmail row: "Re: Re: Fwd: Invoice – Oct shoot" · caption: Invoices buried in email threads.
  - Note: "Ask Meera for the advance (3rd time)" · caption: Payments chased by hand.
- Closing line: Krew puts the job back together.

**3. How a job runs** (`#how`)
- h2: How a job runs in Krew
- Intro: Follow Riya, a photographer in Pune, and Arjun's wedding video crew.

| # | h3 | One line | Mock |
|---|---|---|---|
| 1 | Enquiry | On Instagram, Krew replies with your "starting from" rates and portfolio, asks the date, budget and type of work, then hands the chat to you. It never agrees a price. | DM thread: "Automated" label, the client's answers, a [Take over] button |
| 2 | Quote | Send the quote as a link. Your client accepts by typing their name and ticking a box, and Krew keeps a record of exactly what they accepted. | Quote for Meera, ₹59,000, pill "Accepted · 24 Oct 2026" |
| 3 | Advance | Ask for the advance with a payment link or your UPI ID. If it isn't paid two days before the shoot, Krew marks the job at risk. | ₹15,000 advance, pill "Paid"; second row with pill "At risk" |
| 4 | Work | Turn the job into tasks from a template. With a crew, assign them; each person sees only their own jobs. | Arjun's task list: Kabir "Shoot sangeet" (Done), Sana "Edit highlight film" (In progress) |
| 5 | Review | Share drafts by link. Clients comment on the exact second of a video or a spot on a photo, then approve, and that version is locked. | Comment "0:42 · Warmer colour here – Meera", [Approve] |
| 6 | Invoice | Raise a GST invoice, or a plain one if you aren't registered, with a payment link for UPI or card. ⚠ | Invoice RY/26-27/014, GST lines, ₹44,000 due after the advance |
| 7 | Paid | Record the payment, and any TDS the client deducted, and the invoice settles. Every rupee in and out goes in your ledger. | "₹40,000 received · ₹4,000 TDS recorded", pill "Paid" |

- Closing button: [Join the pilot]

**4. Your clients never log in**
- h2: Your clients never make an account.
- Body: Quotes, drafts and invoices open from a link on their phone. They accept, comment, approve and pay. No app, no password, no forms.
- Three tiles: Quote link · Review link · Invoice link
- Footnote: Reminders reach them by email from your own address, and stop as soon as they act.

**5. Trust** (moved up; see §11)
- h2: What we promise
  - **Personal chats are never stored.** When a new chat comes in, you mark it as a client or personal. Krew saves only client chats. ⚠
  - **Your money goes straight to you.** Payment links come from your own Razorpay account, or your own UPI ID. Krew never holds your clients' money.
  - **Invoices built to GST rules.** GST invoices carry every field Rule 46 asks for. Not registered? You get a plain invoice with no tax. ⚠
  - **Official connections.** Instagram and WhatsApp Business connect through Meta's official APIs, and email goes out from your own Gmail through Google's. ⚠

**6. Solo or crew**
- h2: Just you, or you and your crew
- **Kreator · for solo creators:** Everything Krew does, for one person.
- **Krew · for crews:** Everything in Kreator, plus team members. Invite your shooters, editors and designers. Each sees only the jobs and tasks you give them, and you choose who can reply to clients.
- Note: Pricing will be announced at launch.

**7. FAQ**
- h2: Questions creators ask
- **Can I connect my personal WhatsApp?**
  No. Krew connects a WhatsApp Business number, and you keep using the WhatsApp Business app on the same number. Krew never sends WhatsApp messages on its own.
- **Which Instagram accounts work?**
  Professional accounts, either creator or business. If yours is personal, switch to professional in Instagram settings first; Krew shows you how. Message access must be turned on.
- **Do my clients need to download anything?**
  No. Quotes, drafts and invoices open from a link in their browser, with no login.
- **I'm not GST registered. Can I still use Krew?**
  Yes. You get a plain invoice with no tax lines, because you can't charge GST unless you're registered. As your turnover nears ₹20 lakh (₹10 lakh in some States), Krew reminds you to look at registering.
- **Does Krew hold my payments?**
  No. Clients pay into your own Razorpay account, or straight to your UPI ID. Razorpay charges you its usual fee; a UPI link to your own ID has no gateway fee.
- **Will Krew read all my email?**
  No. Only the emails you choose reach Krew, through a Gmail filter you set up. Quotes and invoices go out from your own address.

**8. Waitlist** (`#waitlist`)
- h2: Join the pilot
- Intro: We're opening Krew to a small group of creators first. Tell us about your work and we'll get in touch.
- Fields:
  - Your name
  - What do you do? (Video · Photo · Design) ⚠
  - City
  - Just you or a crew? (Just me · I have a team)
  - Instagram handle (optional, "@" prefix shown) ⚠
  - Phone or email (hint: "We'll only use this to contact you about the pilot.")
- Button: [Join the pilot] · busy state: Joining…
- Errors:
  - Enter your name.
  - Pick what you do.
  - Enter your city.
  - Pick one.
  - That doesn't look like an Instagram handle.
  - Enter a 10-digit mobile number or an email address.
- Summary heading: Fix 1 thing to continue. / Fix {n} things to continue. (Pluralised. The design system says errors don't apologise, so no "please" or "sorry".)
- Success: You're on the list, {name}. We'll contact you on {contact} about the pilot.
- Duplicate: You're already on the list. We'll be in touch.
- Failure: We couldn't save this. Check your connection and try again.

**Footer:** Krew · Contact: {CONTACT_EMAIL} · Privacy ⚠ · © 2026 Orry ⚠

## 11. Wireframes

**Section order** (one change from the outline): Hero → Mess → How → Clients → **Trust → Solo or crew** → FAQ → Waitlist.

Why: right after seeing the flow, the doubts are "will it read my chats?" and "who holds my money?", so trust answers them while they're fresh. Plans then sit next to the form, which asks "Just me or a team?".

### 390 px
```
┌──────────────────────────────┐
│ Krew        [Join the pilot] │ sticky 56px
├──────────────────────────────┤
│ For videographers, photo…    │
│ From the first DM            │ h1, condensed 36px
│ to getting paid.             │
│ Krew keeps each client job…  │
│ [ Join the pilot          ]  │ full width, h-tap
│   See how a job runs ↓       │
│ ▣▣▣▣▣▣▣  rail lg, full width  │ animates once
│ Enquiry … Paid  (labels xs)  │
│ caption line                 │
├──────────────────────────────┤ MESS
│ h2 Right now, one job…       │
│ ┌DM bubble────┐  caption     │ stacked fragments,
│   ┌WA bubble────┐ caption    │ slight offsets
│ ┌Mail row──────────┐ caption │
│ ┌Note────┐ caption           │
│ Krew puts the job back…      │
├──────────────────────────────┤ HOW
│ ▣▣▣▢▢▢▢ Advance  sticky sm   │ under header
│ h2 How a job runs in Krew    │
│ 3 · h3 Advance               │ ×7 cards stacked:
│ one line                     │ text, then phone mock
│ ┌PhoneFrame 280px wide─┐     │ centred
│ │ ₹15,000  [Paid]      │     │
│ └──────────────────────┘     │
│ [ Join the pilot ]           │
├──────────────────────────────┤ CLIENTS
│ h2 · body · 3 tiles stacked  │
├──────────────────────────────┤ TRUST
│ 4 items stacked, bold lead   │
├──────────────────────────────┤ PLANS
│ ┌Kreator┐ then ┌Krew┐ stacked │
│ Pricing at launch.           │
├──────────────────────────────┤ FAQ
│ ▸ question (44px+) ×6        │
├──────────────────────────────┤ WAITLIST
│ h2 · intro                   │
│ Name [__________]            │
│ What do you do? (Video)(Photo)(Design) chips
│ City [__________]            │
│ (Just me)(I have a team)     │
│ Instagram [@_______]         │
│ Phone or email [_______]     │
│ [ Join the pilot          ]  │
├──────────────────────────────┤
│ footer                       │
└──────────────────────────────┘
```

### 1280 px (content max-width 1120 px, 12-column grid)
```
┌────────────────────────────────────────────────────────────┐
│ Krew                                       [Join the pilot] │
├────────────────────────────────────────────────────────────┤
│ For videographers…                                         │
│ From the first DM to getting paid.        (h1 on 1–2 lines) │
│ sub (max 60ch)          [Join the pilot] [See how a job…]  │
│ ▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣ rail lg, full 1120 width        │
│ Enquiry  Quote  Advance  Work  Review  Invoice  Paid        │
├────────────────────────────────────────────────────────────┤
│ h2 (cols 1–4)        │ 4 fragments in a loose 2×2 collage  │
│ closing line         │ (cols 6–12)                          │
├────────────────────────────────────────────────────────────┤
│ ┌ sticky (cols 1–5) ──────┐ │ 7 phone mocks scroll (cols 7–11)
│ │ h2 How a job runs       │ │ ┌Phone┐  step 1
│ │ rail sm + current stage │ │ ┌Phone┐  step 2 …
│ │ h3 + line of the stage  │ │
│ └─────────────────────────┘ │ (text swaps with the visible mock;
│                             │  no JS: text sits beside each mock)
├────────────────────────────────────────────────────────────┤
│ h2 Clients…  │ [Quote link] [Review link] [Invoice link]    │
├────────────────────────────────────────────────────────────┤
│ Trust: 4 items in a 2×2 grid                               │
├────────────────────────────────────────────────────────────┤
│ Plans: [Kreator] [Krew] side by side · pricing note         │
├────────────────────────────────────────────────────────────┤
│ FAQ: h2 (cols 1–4) │ details list (cols 5–12)               │
├────────────────────────────────────────────────────────────┤
│ Waitlist: h2 + intro (cols 1–5) │ form card (cols 7–12)     │
├────────────────────────────────────────────────────────────┤
│ footer                                                     │
└────────────────────────────────────────────────────────────┘
```
No-JS rule for the 1280 "How" layout: each step renders its own `h3` and line beside its mock. With JS, the sticky column shows the active one, and the per-step text becomes visually hidden but stays readable by screen readers.

## 12. Acceptance criteria and tests

### Acceptance criteria
- `/` renders the landing page. `/dev` shows the old workbench index. `/design` and `/design/flows` are unchanged and linked from `/dev`. `/dev` and `/design*` are `noindex` and disallowed in robots.
- No colour outside the tokens and no font other than Anek, checked by grep for hex and `rgb(` in the new files.
- No prices for Krew, no user counts, no testimonials, no logos. Every factual line maps to a PRD section; the mapping is in a table in `copy.ts` comments.
- Lighthouse-style numbers at 390 px on slow 4G: LCP < 2.5 s and CLS < 0.1.
- GSAP isn't requested before `load`.
- Reduced motion: the hero is finished with no GSAP request.
- No JS: all content shows, the FAQ opens, and the form submits and shows success or errors.
- One `h1`; headings never skip a level.
- Every interactive element is at least 44 × 44 px with a visible focus.
- Metadata: title and description; `og:locale=en_IN`; an OG image of 1200 × 630; canonical URL; `sitemap.xml` and `robots.txt`.

### Tests
- **Vitest (`packages/schemas/test/waitlist.test.ts`):**
  - valid signup;
  - each field's error;
  - phone forms (`98xxxxxxxx`, `+91 98…`, `098…`);
  - email;
  - handle with or without `@`;
  - trimming.
- **Vitest (`apps/web`):** the mock adapter's duplicate and unavailable results. This adds `vitest` to `apps/web` dev deps, or puts the test in `packages/schemas` if you'd rather not.
- **Playwright** (`apps/web/e2e/landing.spec.ts`; the config runs `next build && next start`; viewport 390 × 844; CDP throttle as in §9):
  1. LCP and CLS through a `PerformanceObserver`, within budget.
  2. No `gsap` chunk among requests before `load`.
  3. Reduced-motion context: the rail's current frame is "Paid" and no GSAP request is made.
  4. `javaScriptEnabled: false`: submit empty → errors shown; submit valid → success text.
  5. With JS, an invalid submit → an element with `role=alert` gets focus and lists the errors.
  6. Heading outline: exactly one `h1`, no skipped levels.
  7. Every `a, button, input, summary` box is at least 44 px; the hidden honeypot is excluded.
  8. Also at 1280 px: no horizontal scroll and a visual snapshot.

## 13. Risks and open questions

### Copy marked ⚠
| ⚠ | Line | Issue |
|---|---|---|
| 1 | "Krew saves only client chats" | Unknown chats are held in an encrypted buffer for up to 24 h before they're discarded (PF-02). Legal review is V4; if it fails, there's no buffer. "Saves only client chats" is true either way. Should the page mention the buffer? |
| 2 | "Built to GST rules / every field Rule 46 asks for" | The accountant's review (G4, V5) hasn't happened. Alternative: "GST invoices with the fields the rules require, checked by an accountant before launch" |
| 3 | "Official connections" | Meta App Review and Google `gmail.send` verification are pending (phase 0). I avoid "approved" or "verified" |
| 4 | "Payment link for UPI or card" | True on the Razorpay route. The UPI fallback is UPI only, and Razorpay partner support is unconfirmed (V2) |
| 5 | Skill as a single choice | Matches `Skill` in sign-up. Many creators do photo and video; should it be multi-select? |
| 6 | Instagram handle optional | You listed it as a field without saying whether it's required. I made it optional to keep the form short |
| 7 | Footer "Orry" | The PRD names Orry as the company behind Krew. Confirm the legal entity name for the © line |

### Blockers before launch (not before build)
- A privacy policy page (DPDP notice for waitlist data).
- The real domain and email.
- The adapter destination.

### Rework risks
- Renaming "Brief" to "Enquiry" in `StageRail` touches `/design`.
- `briefMachine` and `02-product-flow.md` still describe a brief. That should be a separate clean-up so the repo matches S9.

## 14. Tasks (each under half a day)
| # | Task | Est. (days) |
|---|---|---|
| 1 | Move `app/page.tsx` to `app/dev/page.tsx`; `noindex` on `/dev` and `/design` | 0.1 |
| 2 | `StageRail`: "Brief" → "Enquiry", props passthrough; check `/design` | 0.1 |
| 3 | `WaitlistSignup` schema plus Vitest | 0.25 |
| 4 | `lib/waitlist.ts` adapter, mock, server action `joinWaitlist` | 0.25 |
| 5 | `(marketing)/layout.tsx`: header, footer, skip link, `motion-ok` script | 0.25 |
| 6 | `ChoiceChips` in `packages/ui`; show it on `/design` | 0.25 |
| 7 | Hero (static) plus `HeroRail` with lazy GSAP and fallbacks | 0.5 |
| 8 | Mess section fragments | 0.4 |
| 9 | `PhoneFrame`, sample data, mocks 1–4 | 0.5 |
| 10 | Mocks 5–7, `StageStep` layout, `StepRail` (IntersectionObserver), 1280 sticky layout | 0.5 |
| 11 | Clients, trust and plans sections | 0.4 |
| 12 | FAQ (`details`) | 0.15 |
| 13 | `WaitlistForm`: inline validation, summary, focus, no-JS path | 0.5 |
| 14 | SEO: metadata, `opengraph-image.tsx` (rail drawn in ImageResponse with Anek; ImageResponse can't read woff2, so an Anek Latin TTF is committed under `app/(marketing)/_og/`), `sitemap.ts`, `robots.ts` | 0.25 |
| 15 | Playwright config plus the 8 checks | 0.5 |
| 16 | 1280 and dark-mode pass, copy check against the PRD | 0.4 |
| 17 | `prd-review` skill and fixes | 0.25 |
| | **Total** | **≈ 5.5 days** |

There's no screen-plan estimate for a landing page to compare against. This total is the first estimate.

## 15. Progress and where the build differs from the plan (24 Oct 2026)

Tasks 1–16 are done. Task 17 (`prd-review`) hasn't been run.

**Verified:**
- Type-check, lint and unit tests pass: 26 flows tests and 10 schemas tests, 6 of them new.
- All 9 Playwright checks pass.
- At 390 px on slow 4G with the CPU 4× slower: **LCP 852 ms, CLS 0.005**.
- No console errors on `/`, `/dev` or `/design`.

**Budgets (gzipped):**

| Item | Measured | Budget |
|---|---|---|
| HTML | 20.5 KB | 45 KB |
| CSS | 11.6 KB | 25 KB |
| Landing-only JS | **21.1 KB** | 20 KB, **about 1 KB over** |
| Total first-load JS (mostly the framework) | 198 KB | — |
| GSAP | Loaded only after `load` plus idle, as asserted by a test | — |

What's left in the 21.1 KB is mostly the `zod/mini` core plus the form. Dropping it would mean not sharing the schema with the browser.

**Where the build differs, and why:**
- **The islands are DOM controllers.** `HeroRail` and `StepRail` render nothing and repaint a server-rendered `StageRail` through `paintStageRail`, a new helper in `packages/ui/src/lib/stage-frames.ts`. This keeps `tailwind-merge` and React UI code out of the page's JS.
- **`StageRail` styling** now comes from `data-state` on each `<li>`. It looks the same as before.
- **The schema and the form were slimmed for the browser:**
  - The waitlist schema uses `zod/mini`.
  - Plain option lists live in `packages/schemas/src/options.ts`.
  - `statusPill` variants moved to `packages/ui/src/lib/status-pill-variants.ts`.
  - The form uses a native label, input and button styled with our tokens.
- **Robots:** I didn't add a `Disallow` for `/dev` and `/design`. They carry `noindex`, and a disallowed page is never fetched, so its noindex would never be seen.
- **The 1280 "How" layout** shows each step's text beside its mock, with the sticky rail across the top. It doesn't use a sticky left column with swapping text. This is simpler and needs nothing extra for no-JS.
- **The footer has no Privacy link** until the page exists.

**Bugs found and fixed along the way:**
1. `packages/ui` used `radix-ui` and `lucide-react` without declaring them, so the repo type-check failed. Both are now declared.
2. `cn()` (tailwind-merge) didn't know our tokens:
   - It dropped `text-amount` whenever a tone class followed it. Every `Money size="amount"` rendered at body size, on this page and in the app.
   - It kept both `h-8` and `h-tap`.
   - `cn` now knows both tokens. The generated shadcn files still import the `cn` package and keep the `h-tap` issue; for now `h-tap` wins only because of CSS order.
3. The header wordmark link was 41 px wide; it's now 44 px.
4. In dark mode, the review mock's video frame turned white.

**Follow-ups outside this plan:**
- `/design` still says "Send a brief" and shows the client brief pattern.
- `briefMachine` and `02-product-flow.md` still describe a client brief, which conflicts with decision S9.

## 16. Changes from website feedback (24 Oct 2026)

Source: `Krew_Website_Feedback.pdf`, four changes.

| # | Feedback | What changed |
|---|---|---|
| 1 | Onboarding is too long; drop "Just you or a crew?"; classy and minimal | Joining is one field ("Email or phone") and one button. Step 2 asks for name, what you do, city and Instagram (optional), and can be skipped. One server action handles both steps through a hidden `step` field, so it still works without JS. The adapter is now `joinWaitlist(contact)`, which returns an opaque id, and `addWaitlistDetails(id, details)`. The schema splits into `WaitlistContact` and `WaitlistDetails`; `plan` is gone from the waitlist. |
| 2 | Kreator is a separate application; remove the plans section | The plans section and "Pricing will be announced at launch" are removed. The hero eyebrow and sub now speak to crews. The team detail from the Krew card ("each sees only the jobs and tasks you give them, and you choose who can reply to clients") moved into the Work step. |
| 3 | Keep "one job, three apps"; simulate a crew's chaos; the headline says three but shows four | The headline is now "four apps". A "With your crew" group adds the shooter asking for the date, the editor who can't find the brief, and two people quoting one client. With JS and motion allowed, the fragments arrive one by one when the section scrolls in (CSS transitions armed by a tiny `MessPlay` island, opacity and transform only). No GSAP. Without JS or with reduced motion, everything is shown. |
| 4 | Add "track your growth and income" beside the ledger | An income block sits after the Paid step and before the CTA. It shows money in by month, received vs pending, and October's in, out and net, all as example figures. It's grounded in PF-26's whole-account and pending views and the accountant exports. |

**Conflicts to settle:**
- **Kreator as a separate app:** the PRD (header, §3, decision S7) says Kreator is the solo plan of the same app. The site now follows the feedback. The PRD needs updating, or the feedback needs confirming.
- **"Watch your income grow":** this wording is ours (⚠ in `copy.ts`). The PRD has monthly totals but no growth analytics.
- **The brief:** the crew chaos mentions "the brief" as part of today's mess. It doesn't claim Krew has a brief (decision S9).

**Verified:**
- Type-check, lint and unit tests (26 flows, 10 schemas) pass.
- 11 of 11 Playwright checks pass. Two are new: skip and duplicate on step 2, and the mess arrival with reduced motion.
- Slow 4G at 390 px: LCP 1,232 ms, CLS 0.006.
- Landing-only JS is **21.8 KB** gzipped, about 1.8 KB over the 20 KB budget (it was 21.1 KB). HTML is 22.2 KB.
