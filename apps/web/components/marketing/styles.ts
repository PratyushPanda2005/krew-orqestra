/** Shared class strings for the landing page. Links styled as pills ship no JS. */

/** Focus ring for links on the always-navy hero. */
export const snowFocus =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow"

/** Bracketed section label, like the hero nav's "[1] How it works". */
export const eyebrow = "text-sm font-medium tracking-wide uppercase"

/** Section heading on the brand pages: Lexend Deca, tight, after the reference. */
export const sectionTitle = "font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance lg:text-[4rem]"

/** Body text that's quieter than the headline, on snow (about 6:1). */
export const quiet = "text-brand-navy/75"

/** Green pill, as in the hero nav. */
export const pill =
  "inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-base font-medium text-brand-navy transition-shadow duration-400 hover:shadow-[inset_0_0_16px_0_var(--brand-snow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"

/** Outline pill on snow, as the reference's "About Our Studio". */
export const outlinePill =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-brand-navy px-6 text-base font-medium transition-shadow duration-400 hover:shadow-[inset_0_0_12px_0_var(--brand-navy)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"

/** Outline pill on a dark photo: snow line and text. */
export const snowPill =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-brand-snow px-6 text-base font-medium text-brand-snow transition-shadow duration-400 hover:shadow-[inset_0_0_12px_0_var(--brand-snow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-snow"

/**
 * Vertical padding for every landing section: 48 / 64 / 80 px (phone / tablet / desktop), so
 * the space between one section's content and the next is the same everywhere: 96 / 128 / 160 px.
 */
export const sectionY = "py-12 md:py-16 lg:py-20"

/** Edge-to-edge grid of the brand sections: 20 px gutters on phones, 40 px on desktop (reference). */
export const wide = "mx-auto w-full max-w-[90rem] px-5 lg:px-10"
