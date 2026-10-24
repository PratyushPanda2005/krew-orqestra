import type { Metadata } from "next"

import { Hero } from "@/components/marketing/hero"
import { How } from "@/components/marketing/how"
import { Mess } from "@/components/marketing/mess"
import { Section } from "@/components/marketing/section"
import { Clients, Faq, Plans, Trust } from "@/components/marketing/sections"
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
 * Public landing page at "/". Order (plan §11): trust comes before plans so the
 * "my chats? my money?" doubts are answered while the flow is fresh, and plans
 * sit next to the form that asks "just me or a team?".
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Mess />
      <How />
      <Clients />
      <Trust />
      <Plans />
      <Faq />
      <Section id="waitlist" title={waitlist.title} className="bg-secondary/40">
        <div className="mt-3 grid gap-8 lg:grid-cols-12">
          <p className="max-w-prose text-base text-muted-foreground lg:col-span-5 lg:text-xl">{waitlist.intro}</p>
          <div className="lg:col-span-6 lg:col-start-7">
            <WaitlistForm />
          </div>
        </div>
      </Section>
    </>
  )
}
