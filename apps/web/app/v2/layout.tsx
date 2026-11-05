import type { Metadata } from "next"
import { IBM_Plex_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"

import "./cofounder.css"
import "./krew-brand.css"
import "./how-scroll.css"
import "./live.css"

/**
 * /v2: the cofounder.co homepage layout with Krew copy and brand colours.
 * Neoris (their licensed face) is replaced by our brand headline face, Lexend Deca; the free
 * faces they use (IBM Plex Mono, Departure Mono, Inter) are kept.
 */
const neoris = localFont({
  src: "../fonts/LexendDeca-Variable-latin.woff2",
  variable: "--font-neoris",
  weight: "100 900",
  display: "swap",
})
const departure = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  display: "swap",
})
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Krew: from the first DM to getting paid",
  description: "Run client work from the first DM to getting paid.",
  robots: { index: false, follow: false },
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="v2-root"
      className={`v2-root ${neoris.variable} ${departure.variable} ${plexMono.variable} ${inter.variable} flex min-h-full flex-col antialiased`}
      style={{ fontFamily: "var(--font-neoris), sans-serif", background: "#f5f5f2", color: "#23133c" }}
    >
      {children}
    </div>
  )
}
