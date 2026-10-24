import { cn } from "@krew/ui/lib/utils"
import { buttonVariants } from "@krew/ui/components/button"

/** Shared class strings for the landing page. Links styled as buttons ship no JS. */
export const container = "mx-auto w-full max-w-[70rem] px-4 lg:px-8"

export const focusRing =
  "rounded-md outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

export const linkButton = (variant: "default" | "outline" = "default") =>
  cn(buttonVariants({ variant }), "h-tap px-5 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring")
