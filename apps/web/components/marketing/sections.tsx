import { clients, faq, trust } from "@/app/(marketing)/copy"

import { Section } from "./section"

export function Clients() {
  return (
    <Section id="clients" title={clients.title} intro={clients.body}>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-12 lg:gap-6">
        {clients.links.map((l) => (
          <li key={l.title} className="rounded-xl border bg-card p-5">
            <h3 className="condensed text-xl font-semibold">{l.title}</h3>
            <p className="mt-1 text-muted-foreground">{l.body}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-prose text-base">{clients.footnote}</p>
    </Section>
  )
}

export function Trust() {
  return (
    <Section id="trust" title={trust.title}>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:gap-x-16 lg:gap-y-12">
        {trust.items.map((t) => (
          <li key={t.title} className="border-l-2 border-primary pl-4">
            <h3 className="condensed text-xl font-semibold lg:text-2xl">{t.title}</h3>
            <p className="mt-1 max-w-prose text-muted-foreground lg:text-lg">{t.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

/** Native details/summary: opens and closes with no JS. */
export function Faq() {
  return (
    <Section id="faq" title={faq.title}>
      <div className="mt-8 divide-y border-y lg:mt-12">
        {faq.items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-4 py-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-semibold lg:text-lg">{item.q}</h3>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-muted-foreground group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="max-w-prose pb-5 text-muted-foreground lg:text-lg">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
