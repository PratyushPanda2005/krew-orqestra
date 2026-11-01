import type { ReactNode, RefObject } from "react"

type HeroViewProps = {
  contentRef: RefObject<HTMLDivElement | null>
  blurRef: RefObject<HTMLDivElement | null>
  HeroNotifications: () => ReactNode
  orbit: "idle" | "active" | "exiting"
  copy: () => void
  enter: () => void
  leave: (el: HTMLElement) => void
  settle: (e: React.AnimationEvent<HTMLDivElement>) => void
}

/** Hero markup: video scene, task notifications, headline, and the two buttons. */
export function HeroView({ contentRef, blurRef, HeroNotifications, orbit, copy, enter, leave, settle }: HeroViewProps) {
  return (
    <div id="site-hero" className="relative w-full [--hero-min-height:720px] md:[--hero-min-height:620px] pixel-bg-hero pb-[69px]">
      <div className="relative w-full h-screen min-h-[720px] md:min-h-[620px] overflow-hidden">
        <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" poster="/v2/hero/cofounder-2-hero-poster.webp" className="absolute right-0 top-0 h-full min-w-full max-w-none object-cover object-right translate-x-[50%] sm:translate-x-0" style={{ width: "max(100%, calc(max(100dvh, var(--hero-min-height)) * 1.710526))" }}>
          <source src="/v2/hero/cofounder-2-hero.webm" type="video/webm" />
          <source src="/v2/hero/cofounder-2-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="max-[1120px]:hidden">
        <div className="hero-notif-position max-[676px]:hidden max-[500px]:hidden" style={{ "--notif-top-dvh": "46dvh", "--notif-top-min": "350px", "--notif-right-image-ratio": "0.22899999999999998", "--notif-mid-right-image-ratio": "0.217", "--notif-medium-right-image-ratio": "0.24100000000000002", "--notif-small-right-image-ratio": "0.23", "--notif-font-size": "12px", "--notif-translate-y": "-85%", "--notif-mid-translate-y": "-84%", "--notif-medium-translate-y": "-77%", "--notif-small-translate-y": "-74%", "--notif-perspective": "300px", "--notif-rotate-y": "-12deg", "--notif-rotate-x": "-2deg", "--notif-rotate-z": "2deg", "--notif-scale": "0.88", "--notif-skew-y": "0deg", "--notif-skew-x": "1deg", "--notif-glass-top-alpha": "0.6", "--notif-glass-bottom-alpha": "0.8", "--notif-glass-highlight-alpha": "0.79", "--notif-glass-blur": "16px", "--notif-glass-layer-blur": "16px", "--notif-glass-saturation": "1.19", "--notif-status-text-alpha": "0.65", "--notif-label-text-alpha": "1" }}>
          <div className="hero-notif-stack relative">
            <div className="hero-notif-stack-list">
              <HeroNotifications />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-start pt-[max(15dvh,92px)] max-[500px]:pt-[calc(75px+91px)]">
        <div className="w-full max-w-[1440px] mx-auto px-[20px]">
          <div style={{ position: "relative", overflow: "visible", paddingBottom: "50px" }}>
            <div ref={contentRef}>
              <div className="max-w-[720px]">
                <div className="hero-stagger" style={{ "--stagger": "0" }}>
                  <h1 className="m-0 font-normal hero-gradient-text text-left max-w-[20ch] xl:max-w-[580px] text-[46px] leading-[108%] filter-[drop-shadow(0_1px_3px_rgba(0,0,0,0.12))] max-[900px]:text-[38px] max-[500px]:text-[34px] max-[500px]:font-normal max-[500px]:leading-[110%]">
                    Run every client job from the first DM to getting paid
                  </h1>
                </div>
                <p className="hero-stagger mt-5 max-w-[540px] pl-[2px] text-left text-[16px] font-[460] leading-[140%] tracking-[0.15px] text-[rgba(255,255,255,0.8)] [text-shadow:0_1px_1px_rgba(0,0,0,0.08)] max-[500px]:mt-4" style={{ "--stagger": "1", fontFamily: "var(--font-neoris), sans-serif" }}>
                  Krew keeps enquiries, quotes, your crew, client reviews and invoices in one place, for you and your crew.
                </p>
                <div className="hero-stagger mt-6 flex flex-wrap items-center gap-3 max-[500px]:mt-5" style={{ "--stagger": "2" }} onAnimationEnd={settle}>
                  <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface" style={{ zIndex: "3" }} href="#join">
                    <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                      <span className="text-[15px] font-[460] tracking-[0.15px]">Join the pilot</span>
                    </span>
                  </a>
                  <span className="setup-prompt-hover-module__R0JYZa__wrapper" data-orbit={orbit} onMouseEnter={enter} onMouseLeave={(e) => leave(e.currentTarget)} onFocus={(e) => { if ((e.target as HTMLElement).matches(":focus-visible")) enter() }} onBlur={(e) => leave(e.currentTarget)}>
                    <button type="button" onClick={copy} className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] rounded-[8px] glass-pill-btn gap-[10px] px-[10px] [&>span:last-child]:gap-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white text-white glass-hero-btn" style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-btn-blur" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-btn-tint" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] glass-pill-hover opacity-0 duration-200 ease-out group-hover:opacity-100" />
                      <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                                    <path d="M8 5.5v13l10.5-6.5L8 5.5z" />
                        </svg>
                        <span aria-live="polite" className="text-[15px] font-[460] tracking-[0.15px] -mt-px text-white">See how a job runs</span>
                      </span>
                    </button>
                    <span aria-hidden="true" className="setup-prompt-hover-module__R0JYZa__burst">
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "0%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4.5h10v6H7l-3 2.5v-2.5H3z" /></svg>
                        </span>
                      </span>
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "16.666666666666668%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2.5h6l2.5 2.5v8.5H4z M6 7h4 M6 9.5h4" /></svg>
                        </span>
                      </span>
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "33.333333333333336%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 6.5a2 2 0 1 0 0-.01z M10.5 6.5a2 2 0 1 0 0-.01z M2 13c.5-2 2-3 3.5-3s3 1 3.5 3 M8.5 11c.6-1 1.3-1 2-1 1.5 0 3 1 3.5 3" /></svg>
                        </span>
                      </span>
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "50%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8s2-4 5.5-4 5.5 4 5.5 4-2 4-5.5 4-5.5-4-5.5-4z M8 9.6a1.6 1.6 0 1 0 0-.01z" /></svg>
                        </span>
                      </span>
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "66.66666666666667%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 2.5h9v11l-1.5-1-1.5 1-1.5-1-1.5 1-1.5-1-1.5 1z M6 6h4 M6 8.5h4" /></svg>
                        </span>
                      </span>
                      <span className="setup-prompt-hover-module__R0JYZa__orbiter" style={{ "--position": "83.33333333333333%" }}>
                        <span className="setup-prompt-hover-module__R0JYZa__badge">
                          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#23133c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3.5h6 M5 6h6 M5 3.5c3.5 0 3.5 5 0 5H5l5 4.5" /></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div ref={blurRef} className="hero-scroll-blur" aria-hidden="true" style={{ opacity: 0 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
