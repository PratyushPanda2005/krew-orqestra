import { MarketingFooter } from "@/components/marketing/footer"
import { MarketingHeader } from "@/components/marketing/header"

import "./marketing.css"

/** Runs before first paint: see marketing.css for what the two classes do. */
const boot = `(function(){var d=document.documentElement;d.classList.add("js");if(!matchMedia("(prefers-reduced-motion: no-preference)").matches)return;d.classList.add("motion-ok");setTimeout(function(){var h=document.querySelector("[data-hero]");if(!h||!h.hasAttribute("data-playing"))d.classList.remove("motion-ok")},6000)})()`

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: boot }} />
      <a
        href="#main"
        className="sr-only z-30 rounded-md bg-card px-4 py-3 font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:outline-2 focus:outline-ring"
      >
        Skip to content
      </a>
      <MarketingHeader />
      <main id="main">{children}</main>
      <MarketingFooter />
    </>
  )
}
