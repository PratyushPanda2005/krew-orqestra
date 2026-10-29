import localFont from "next/font/local"

import { BottomBlur } from "@/components/marketing/bottom-blur"
import { MarketingFooter } from "@/components/marketing/footer"

import "./marketing.css"

/** Lexend Deca, the brand headline face: one variable woff2, Latin subset plus ₹ (38 KB). */
const lexend = localFont({
  src: "../fonts/LexendDeca-Variable-latin.woff2",
  variable: "--font-lexend",
  weight: "100 900",
  display: "swap",
})

/**
 * Runs before first paint: see marketing.css for what the classes do. The hero intro plays
 * once per session; if sessionStorage is blocked it doesn't play at all.
 */
const boot = `(function(){var d=document.documentElement;d.classList.add("js");if(!matchMedia("(prefers-reduced-motion: no-preference)").matches)return;d.classList.add("motion-ok");try{if(!sessionStorage.getItem("krew-intro")){sessionStorage.setItem("krew-intro","1");d.classList.add("intro")}}catch(e){}})()`

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`light ${lexend.variable} font-body [color-scheme:light]`}>
      <script dangerouslySetInnerHTML={{ __html: boot }} />
      <a
        href="#main"
        className="sr-only z-60 rounded-full bg-card px-6 py-3 font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:outline-2 focus:outline-ring"
      >
        Skip to content
      </a>
      <main id="main">{children}</main>
      <MarketingFooter />
      <BottomBlur />
    </div>
  )
}
