import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * Knows our own tokens: `tap` spacing, so `h-tap` replaces `h-8` instead of sitting beside it,
 * and the `amount` font size, so `text-amount` isn't mistaken for a colour and dropped
 * when a tone like `text-foreground` follows it (Money).
 * Built on first use, so importing this module has no side effects and bundles that never
 * call `cn` (the landing page's client islands) can drop tailwind-merge.
 */
let twMerge: ((classes: string) => string) | undefined

export function cn(...inputs: ClassValue[]) {
  twMerge ??= extendTailwindMerge({ extend: { theme: { spacing: ["tap"], text: ["amount"] } } })
  return twMerge(clsx(inputs))
}
