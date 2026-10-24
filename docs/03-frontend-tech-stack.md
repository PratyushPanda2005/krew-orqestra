# Krew & Kreator: front-end tech stack

Status: proposed on 21 Oct 2026, based on the MVP PRD. Decisions 1–4 below are still open.

## What the PRD requires of the front end

| PRD requirement | What it means for the front end |
|---|---|
| No native apps; an installable, mobile-first web app with push (PF-37) | A PWA: service worker, web push, and an iPhone "Add to Home Screen" guide |
| Client pages with no login (brief, quote, review, invoice) | Server-rendered, very light pages that open from unguessable, revocable link tokens |
| The inbox is Chatwoot, one account per creator | We either embed Chatwoot's screen or build our own on its API (decision 1) |
| Review uses Cloudflare Stream and R2, Uppy and Annotorious | We build the player, the comment timeline and the approve-and-lock step |
| Payments use Razorpay Payment Links, or a UPI link and QR | No checkout to build: link out, plus a QR fallback |
| GST invoices, ledger and exports | Forms and tables. PDFs are made on the server; the front end shows a preview |
| 500 users, India, 4G, plain language | Tune for budget Android phones; format money as ₹1,25,000 |
| Core runs on Node in AWS Mumbai | Types and Zod schemas are shared with the backend |

## The stack

**Foundation**

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Repository | Turborepo with pnpm, as a monorepo |
| Styling | Tailwind CSS v4 and shadcn/ui |
| Bottom sheets and toasts | Vaul and Sonner |
| Server data | TanStack Query |
| Local and URL state | Zustand (kept minimal) and nuqs |
| Forms and validation | React Hook Form with Zod. The same schemas are shared with the backend |
| API contract | Zod → OpenAPI → a generated client (Orval). MSW serves mock data |

**PRD-specific pieces**

| Need | Choice |
|---|---|
| Installable app and push | Serwist service worker and the Push API (VAPID). The backend sends with `web-push` |
| Video review | Stream's signed HLS feed, played with Vidstack or hls.js, plus our own timeline of timestamp comments. Fallback: Stream's own player |
| Image comments | `@annotorious/react` |
| Uploads | Uppy: `@uppy/tus` to Stream and `@uppy/aws-s3` multipart to R2, using one-time URLs and a custom compact upload screen |
| Payments | Link out to the Razorpay Payment Link; UPI QR with `qrcode.react`; a "Mark as paid" sheet with TDS fields |
| Invoice PDF | Made on the server (React-PDF or Playwright); HTML preview in the app |
| Money and dates | `Intl.NumberFormat('en-IN')` for amounts; date-fns in Asia/Kolkata; financial-year (April–March) helpers |
| Motion | Motion for the interface; GSAP only for one-off moments |
| Language | next-intl, English first, with all text kept in one place |

**Quality and running it**

| Area | Choice |
|---|---|
| Tests | Vitest; Playwright with phone emulation and a slowed network; MSW |
| Components | Storybook, with every component shown at 390 px wide |
| Errors and speed | Sentry, and Lighthouse CI with a JavaScript size budget on client pages |
| Hosting | See decision 3 |

## Open decisions

1. **Inbox.** Option A embeds Chatwoot's dashboard by single sign-on (quick, but desktop-like and off-brand). Option B builds our own inbox screen on Chatwoot's API and its live-update socket (about 2–3 extra weeks; fits Krew's rules such as gate notices, the 24-hour window and "Reply in WhatsApp Business"). **Recommended: B, with A as the fallback.**
2. **Creator sign-in** isn't defined in the PRD. **Recommended: Google sign-in plus a phone-OTP fallback.**
3. **Hosting.** Vercel with functions in the Mumbai region (fastest to set up), or AWS Mumbai through SST/OpenNext (one cloud). **Recommended: start on Vercel.**
4. **Data access.** **Recommended:** a thin layer of Next.js server routes for Chatwoot, Stream tokens and upload URLs, so no secrets ever reach the phone.

## Repository layout

```
krew/
├─ apps/web/
│  ├─ app/(creator)/   inbox, jobs, today, money, settings
│  ├─ app/(client)/    /b/[token] /q/[token] /r/[token] /i/[token]
│  ├─ app/api/         server routes (Chatwoot, Stream tokens, upload URLs)
│  └─ sw.ts            service worker and push
├─ packages/ui/        shadcn components, theme, Storybook
├─ packages/schemas/   Zod schemas, money and financial-year helpers
└─ packages/api-client/ generated client and MSW mocks
```

## Front-end order, matched to the PRD phases

1. **Platform:** monorepo, UI kit, sign-in, app shell, PWA and push setup, mock API.
2. **Enquiries:** connect guides, the inbox, and the "Client or personal?" notice.
3. **Win and work:** rate card, tax profile, the client brief form, quote and acceptance, the job page, tasks, the Today view.
4. **Review:** uploader, review page (player, timeline comments, image comments, approve and lock), storage meter.
5. **Money:** invoice builder and preview, pay page with the UPI QR, "Mark as paid" with TDS, ledger, exports.
6. **Reminders and push:** reminder settings, quiet hours, notifications, the iPhone guide, connection-health banners.

## AI tools for faster coding

These are approximate prices for October 2026, in US dollars per month, before tax. Confirm them before buying.

| Tool | Who uses it | Price |
|---|---|---|
| Claude Max (Claude Code) | Lead | $100 |
| Claude Pro | Second developer | $20 |
| Cursor Pro | Second developer | $20 |
| v0 | Lead | about $20 |
| Figma Dev Mode | Both | Covered by the Figma plan |

That comes to about $160 a month for two developers, or about $120 for one.

**Rules for using AI tools:**
- AI writes drafts; a person reviews every change.
- No client data or keys go into prompts.
- A `CLAUDE.md` file in the repository holds the project rules.
