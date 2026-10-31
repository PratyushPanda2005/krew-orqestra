import Image from "next/image"

import { next, waitlist } from "@/app/(marketing)/copy"

import { nextPhoto } from "./photos"
import { wide } from "./styles"
import { WaitlistForm } from "./waitlist-form"

/**
 * Vantra's "Build what's next with us", in our style, as the join screen: a full-screen photo
 * with rounded top corners that rides 24 px up over the questions, the title centred over it
 * in three short lines, a short line, and the join form in a white card where
 * Vantra has its two buttons. Its bottom third fades into the footer's dark. It grows past one
 * screen when the form asks for details.
 *
 * Reveals as on the reference, each playing once the element enters the screen (data-rise,
 * marketing.css): the title lines rise 0.25em from 0.15 s, 0.02 s apart; the line and the
 * form rise 0.5em at 0.45 s.
 */
export function Next() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="relative isolate z-10 -mt-6 flex min-h-svh items-center justify-center overflow-hidden rounded-t-3xl bg-brand-navy-deep pt-28 pb-24 text-brand-snow"
    >
      <Image src={nextPhoto.src} alt={nextPhoto.alt} fill sizes="100vw" className="-z-20 object-cover" />
      {/* Keeps the snow text readable where the light trails run behind it. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-navy-deep/30" />
      {/* The photo fades into the footer's smoke below, so the two read as one dark close. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-b from-transparent to-brand-navy-deep" />

      <div className={wide}>
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            id="waitlist-title"
            className="font-display text-[3.25rem] leading-[0.95] font-semibold tracking-[-0.03em] md:text-[4.5rem] lg:text-[5.5rem]"
          >
            {/* Three fixed lines at every width, one word first as on Vantra, a size down: 52 px on phones, 88 px on desktop. */}
            {next.title.map((line, i) => (
              <span key={line} data-rise style={{ "--rise": "0.25em", "--d": `${0.15 + i * 0.02}s` } as React.CSSProperties} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
          <p data-rise style={{ "--d": "0.45s", "--ease": "var(--ease-power2-out)" } as React.CSSProperties} className="max-w-[34ch] text-lg text-pretty text-brand-snow/90 lg:text-[1.1875rem]">
            {waitlist.intro}
          </p>
          <div
            data-rise
            style={{ "--d": "0.45s" } as React.CSSProperties}
            className="w-full max-w-[34rem] rounded-2xl bg-card p-5 text-left text-foreground shadow-2xl [--primary-foreground:var(--brand-navy)] [--primary:var(--brand-green)] [--ring:var(--brand-navy)] lg:p-6"
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  )
}
