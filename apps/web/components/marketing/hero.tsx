import { hero } from "@/app/(marketing)/copy"

import { HeroNav } from "./header"
import { HeroBackdrop } from "./hero-backdrop"
import { HeroShader } from "./hero-shader"
import { snowFocus } from "./styles"

const icons = {
  play: <path d="M9 7.5v9l7.5-4.5z" fill="currentColor" stroke="none" />,
  shield: <path d="M12 3.5 5 6.5v5c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9v-5zM9 12l2 2 4-4" />,
  question: <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />,
}

/**
 * Full-screen, always-navy hero after the reference (novaform-astro-theme): nav on top,
 * round jump links on the right, the summary and a giant wordmark bottom-left.
 * It stays put (sticky) while the page slides up over it. The intro (marketing.css)
 * plays once per session, only with JS and motion allowed; without it, this is the final frame.
 */
export function Hero() {
  const letters = hero.name.toUpperCase().split("")

  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="sticky top-0 isolate flex h-svh min-h-[34rem] flex-col overflow-hidden bg-brand-navy-deep font-body text-brand-snow"
    >
      <HeroBackdrop />
      <HeroShader />
      <div data-hero-in style={{ "--d": "1.25s" } as React.CSSProperties}>
        <HeroNav />
      </div>

      <div className="relative z-10 mt-auto flex flex-col px-5 pb-5 lg:px-10 lg:pb-8">
        <ul data-hero-in style={{ "--d": "1.45s" } as React.CSSProperties} className="mb-4 flex flex-col items-end gap-4 lg:mb-20">
          {hero.jumps.map((j) => (
            <li key={j.href}>
              <a
                href={j.href}
                aria-label={j.label}
                title={j.label}
                className={`flex size-12 items-center justify-center rounded-full border border-brand-snow/50 transition-colors hover:bg-brand-snow/10 ${snowFocus}`}
              >
                <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  {icons[j.icon]}
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <p data-hero-in style={{ "--d": "1.35s" } as React.CSSProperties} className="max-w-[31.5rem] text-lg leading-6 text-pretty [text-shadow:0_1px_12px_var(--brand-navy-deep)] lg:text-xl">
          {hero.summary}
        </p>

        <h1 id="hero-title" className="mt-4 font-display font-bold [text-shadow:0_2px_32px_color-mix(in_srgb,var(--brand-navy-deep)_60%,transparent)] lg:mt-8">
          <span className="sr-only">{hero.name}</span>
          <span aria-hidden className="flex overflow-hidden text-[clamp(5.5rem,25vw,9rem)] leading-none tracking-tight lg:text-[clamp(9rem,16vw,17rem)]">
            {letters.map((l, i) => (
              <span key={i} data-letter style={{ "--i": i } as React.CSSProperties} className="inline-block">
                {l}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Intro curtain: the name between two bars, then the dark lifts in strips. */}
      <div data-hero-pre aria-hidden className="pointer-events-none absolute inset-0 z-50 hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} data-strip style={{ "--i": i } as React.CSSProperties} className="absolute inset-x-0 bg-brand-navy-deep" />
        ))}
        <span className="absolute inset-0 flex items-center justify-center">
          <span data-pre-word className="grid border-x-2 border-brand-snow px-1.5 font-display text-lg leading-7 font-semibold tracking-wide">
            <span className="overflow-hidden whitespace-nowrap">{hero.name.toUpperCase()}</span>
          </span>
        </span>
      </div>
    </section>
  )
}
