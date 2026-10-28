import type { Metadata } from "next"

import { Hero } from "@/components/marketing/hero"
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
 * Public landing page at "/". Hero only while it's being redesigned (28 Oct 2026).
 *
 * The sections are parked, not deleted: their components and copy are unchanged, and they
 * come back in this order, inside a `relative z-10 bg-background` wrapper so they slide up
 * over the sticky hero (plan: docs/plans/landing-hero-brand.md §16):
 *   <Mess /> <How /> <Clients /> <Trust /> <Faq />
 *   <Section id="waitlist" title={waitlist.title} intro={waitlist.intro} className="bg-secondary/40">
 *     <div className="mt-8 max-w-xl"><WaitlistForm /></div>
 *   </Section>
 */
export default function LandingPage() {
  return <Hero />
}
