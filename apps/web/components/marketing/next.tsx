import Image from "next/image"

import { next } from "@/app/(marketing)/copy"

import { nextPhoto } from "./photos"
import { PillLink } from "./pill-link"
import { wide } from "./styles"

/**
 * Vantra's "Build what's next with us", in our style: a full-screen photo with rounded top
 * corners, the title centred over it with its first word on its own line, a short line and
 * two pills. The footer then rides up over its bottom edge.
 *
 * Reveals as on the reference, each playing once the element enters the screen (data-rise,
 * marketing.css): the title lines rise 0.25em from 0.15 s, 0.02 s apart; the line rises
 * 0.5em at 0.45 s; the pills rise 0.5em from 0.45 s, 0.15 s apart.
 */
export function Next() {
  return (
    <section
      id="next"
      aria-labelledby="next-title"
      className="relative isolate mt-12 flex h-svh min-h-[36rem] items-center justify-center overflow-hidden rounded-t-3xl bg-brand-navy-deep py-20 text-brand-snow lg:mt-20 lg:py-28"
    >
      <Image src={nextPhoto.src} alt={nextPhoto.alt} fill sizes="100vw" className="-z-20 object-cover" />
      {/* Keeps the snow text readable where the light trails run behind it. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-navy-deep/30" />

      <div className={wide}>
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            id="next-title"
            className="max-w-[46rem] font-display text-[4rem] leading-[0.9] font-semibold tracking-[-0.03em] text-balance md:text-[5rem] lg:max-w-[58%] lg:text-[8.25rem]"
          >
            {next.title.map((line, i) => (
              <span key={line} data-rise style={{ "--rise": "0.25em", "--d": `${0.15 + i * 0.02}s` } as React.CSSProperties} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p data-rise style={{ "--d": "0.45s", "--ease": "var(--ease-power2-out)" } as React.CSSProperties} className="max-w-[30ch] text-lg text-pretty text-brand-snow/90 lg:text-[1.1875rem]">
            {next.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span data-rise style={{ "--d": "0.45s" } as React.CSSProperties}>
              <PillLink href="#waitlist" className="focus-visible:outline-brand-snow">
                {next.primary}
              </PillLink>
            </span>
            <span data-rise style={{ "--d": "0.6s" } as React.CSSProperties}>
              <PillLink href="#how" variant="snow">
                {next.secondary}
              </PillLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
