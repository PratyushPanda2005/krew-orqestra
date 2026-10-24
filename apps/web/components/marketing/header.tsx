import { container, focusRing, linkButton } from "./styles"
import { hero } from "@/app/(marketing)/copy"

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className={`${container} flex h-14 items-center justify-between`}>
        <a href="/" className={`condensed inline-flex min-h-tap min-w-tap items-center text-2xl font-semibold ${focusRing}`}>
          Krew
        </a>
        <a href="#waitlist" className={linkButton()}>
          {hero.primary}
        </a>
      </div>
    </header>
  )
}
