import type { Metadata } from "next"

import { Hero } from "@/components/marketing/hero"
import { How } from "@/components/marketing/how"
import { Mess } from "@/components/marketing/mess"
import { Section } from "@/components/marketing/section"
import { Clients, Faq, Trust } from "@/components/marketing/sections"
import { WaitlistForm } from "@/components/marketing/waitlist-form"
import { site } from "@/lib/site"

import { waitlist } from "./copy"

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
 * Public landing page at "/". Order (plan §11, §16): trust comes after the flow so the
 * "my chats? my money?" doubts are answered while it's fresh. No plans section:
 * this is the Krew site, and Kreator isn't sold here (feedback, 24 Oct 2026).
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Mess />
      <How />
      <Clients />
      <Trust />
      <Faq />
      <Section id="waitlist" title={waitlist.title} intro={waitlist.intro} className="bg-secondary/40">
        <div className="mt-8 max-w-xl">
          <WaitlistForm />
        </div>
      </Section>
    </>
  )
}
