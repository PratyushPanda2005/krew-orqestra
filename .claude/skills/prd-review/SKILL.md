---
name: "prd-review"
description: "Use to review Krew & Kreator code, a branch or a PR against the PRD, spec IDs, phone-first and 4G rules before merging."
---

# PRD review

Review like a senior engineer who also owns the product. Find real problems; skip nitpicks a linter would catch.

## 1. Scope
- Read the diff (`git diff main...HEAD` or the PR).
- Read the plan in `docs/plans/` for this work, and the spec IDs it covers.

## 2. Check, in this order
1. **Correctness against spec**: does it do what the spec IDs and acceptance criteria say? Any missing state or edge case (EC-)?
2. **Must-hold rules**: personal chats never stored or cached; no reminder after the client acted; bot never commits to a price; Orry never holds client money; creators fully isolated (no cross-creator data in queries, caches, URLs or logs). Any breach is the top finding.
3. **Security and privacy**: client-page tokens unguessable and not logged; no secrets in client code; signed URLs not leaked; PAN/GSTIN handled carefully.
4. **Contracts**: data goes through Zod schemas and adapters; no direct vendor calls from screens; types match fixtures.
5. **Phone and 4G**: works at 360–390 px; tap targets at least 44 px; client pages within the JS budget; images sized; nothing blocks first paint. No GSAP on client pages.
6. **Accessibility**: labels, focus order, contrast, `prefers-reduced-motion`, screen-reader text for icons.
7. **Copy**: plain words, no technical terms, strings in the i18n file, Indian formats (₹1,25,000, DD MMM YYYY).
8. **Plan differences**: Krew-only features hidden on Kreator.
9. **Tests**: meaningful Vitest and Playwright coverage, including a slow-4G phone run for client pages. Run them.
10. **Maintainability**: duplication that belongs in `packages/ui`, dead code, unclear names.

## 3. Report
Rank findings most severe first. For each: file and line, what is wrong, a concrete failure scenario, and the fix. End with a verdict: Ready to merge / Merge after fixes / Needs rework. Do not change code unless asked.