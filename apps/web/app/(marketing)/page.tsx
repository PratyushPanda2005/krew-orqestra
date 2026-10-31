import type { Metadata } from "next"

import { FloatNav } from "@/components/marketing/float-nav"
import { Hero } from "@/components/marketing/hero"
import { How } from "@/components/marketing/how"
import { Income } from "@/components/marketing/income"
import { LandingMotion } from "@/components/marketing/landing-motion"
import { Mess } from "@/components/marketing/mess"
import { Next } from "@/components/marketing/next"
import { Clients, Faq, Trust } from "@/components/marketing/sections"
import { Waitlist } from "@/components/marketing/waitlist"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
}

/**
 * Public landing page at "/". The hero stays put (sticky) while the sections slide up over it,
 * each in a layout borrowed from the reference (plan: docs/plans/landing-sections-reference.md §4).
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-brand-snow font-body text-brand-navy">
        <Mess />
        <How />
        <Income />
        <Clients />
        <Trust />
        <Faq />
        <Waitlist />
        <Next />
      </div>
      <FloatNav />
      <LandingMotion />
    </>
  )
}
