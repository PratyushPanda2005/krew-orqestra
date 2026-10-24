import { z } from "zod";

/**
 * Money is always stored as an integer number of paise (1 rupee = 100 paise).
 * Never use floating-point rupees for amounts that are added, split or taxed.
 */
export const Paise = z.number().int().nonnegative();
export type Paise = z.infer<typeof Paise>;

export const rupeesToPaise = (rupees: number): Paise => Math.round(rupees * 100);
export const paiseToRupees = (paise: Paise): number => paise / 100;

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const inrWholeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** ₹1,25,000 (Indian digit grouping). Shows paise only when there are any. */
export function formatINR(paise: Paise, opts: { whole?: boolean } = {}): string {
  const rupees = paiseToRupees(paise);
  if (opts.whole || Number.isInteger(rupees)) return inrWholeFormatter.format(rupees);
  return inrFormatter.format(rupees);
}

/** Short form for tight spaces: ₹1.25L, ₹2.4Cr, ₹45K. */
export function formatINRShort(paise: Paise): string {
  const r = paiseToRupees(paise);
  const trim = (n: number) => (Math.round(n * 100) / 100).toString();
  if (r >= 1_00_00_000) return `₹${trim(r / 1_00_00_000)}Cr`;
  if (r >= 1_00_000) return `₹${trim(r / 1_00_000)}L`;
  if (r >= 1_000) return `₹${trim(r / 1_000)}K`;
  return inrWholeFormatter.format(r);
}

/** Percentage of an amount, rounded to the nearest paisa. rate is a percent, e.g. 18. */
export const percentOf = (paise: Paise, rate: number): Paise => Math.round((paise * rate) / 100);
