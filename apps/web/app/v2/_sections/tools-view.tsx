import type { ReactNode, RefObject } from "react"

type ToolsViewProps = {
  TABS: readonly string[]
  PANELS: readonly ReactNode[]
  tab: number
  select: (i: number) => void
  barRef: RefObject<HTMLSpanElement | null>
  panelRef: RefObject<HTMLDivElement | null>
  sectionRef: RefObject<HTMLElement | null>
  leftCloud: RefObject<HTMLDivElement | null>
  rightCloud: RefObject<HTMLDivElement | null>
}

/** Blue tools band: pixel sky, drifting clouds, three tabs with a progress line, and the product panel. */
export function ToolsView({ TABS, PANELS, tab, select, barRef, panelRef, sectionRef, leftCloud, rightCloud }: ToolsViewProps) {
  return (
    <section ref={sectionRef} className="relative w-full min-h-0 flex flex-col bg-[#1a6fd1] text-white overflow-hidden" aria-label="All the tools and systems your company needs" style={{ backgroundImage: "url(\"/v2/build-ui-bits/section-bg.avif\")", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-2 overflow-hidden select-none pixel-bg">
        <img aria-hidden="true" alt="Left carousel decor" loading="lazy" width="812" height="725" decoding="async" className="absolute h-full max-[767px]:w-[80vw] w-[50vw] max-h-[725px] max-w-[812px] object-contain object-bottom-left bottom-[40px] left-0" style={{ color: "transparent" }} src="/v2/build-ui-bits/left-decor.png" />
        <img aria-hidden="true" alt="Right top carousel decor" loading="lazy" width="694" height="434" decoding="async" className="absolute max-[767px]:hidden h-full w-full max-h-[434px] max-w-[694px] object-contain object-bottom-right min-[1280px]:top-[70px] -right-[4vw] min-[1728px]:-right-[2vw] min-[2000px]:right-0 min-[2000px]:top-[50px] min-[2600px]:hidden" style={{ color: "transparent" }} src="/v2/build-ui-bits/right-top-decor.png" />
        <img aria-hidden="true" alt="Right bottom carousel decor" loading="lazy" width="694" height="684" decoding="async" className="absolute h-full min-[1440px]:w-[36vw] w-full max-h-[684px] max-w-[694px] object-contain object-bottom-right min-[1440px]:bottom-[3vw] bottom-[40px] right-0 min-[2600px]:bottom-[80px]" style={{ color: "transparent" }} src="/v2/build-ui-bits/right-bottom-decor.png" />
        <img aria-hidden="true" alt="Left top carousel decor" loading="lazy" width="219" height="317" decoding="async" className="absolute h-full w-[16vw] max-h-[317px] max-w-[219px] object-contain object-bottom-left bottom-[70px] right-0" style={{ color: "transparent" }} src="/v2/build-ui-bits/right-small-decor.png" />
        <img aria-hidden="true" alt="Carousel top decor" loading="lazy" width="1920" height="92" decoding="async" className="absolute h-full w-full min-w-screen max-h-[92px] object-cover min-[767px]:object-[95%_bottom] min-[1440px]:object-[100%_bottom] top-0 hidden max-[1920px]:block" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-top.png" />
        <img aria-hidden="true" alt="Carousel top decor" loading="lazy" width="2545" height="92" decoding="async" className="absolute h-full w-full min-w-screen max-h-[92px] object-cover -top-px hidden min-[1920px]:block min-[2600px]:hidden" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-top-big.png" />
        <img aria-hidden="true" alt="Carousel bottom decor - desktop" loading="lazy" width="1920" height="92" decoding="async" className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-[80%_bottom] min-[1000px]:block min-[1440px]:hidden" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-bottom-1000.png" />
        <img aria-hidden="true" alt="Carousel bottom decor - mobile" loading="lazy" width="1920" height="92" decoding="async" className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-[80%_bottom] hidden max-[768px]:block" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-bottom-mobile.png" />
        <img aria-hidden="true" alt="Carousel bottom decor" loading="lazy" width="1920" height="92" decoding="async" className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-top-center hidden min-[1440px]:block min-[2220px]:hidden" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-bottom.png" />
        <img aria-hidden="true" alt="Carousel bottom decor" loading="lazy" width="2545" height="92" decoding="async" className="absolute bottom-0 h-full w-full min-w-screen max-h-[92px] object-cover object-top-center hidden min-[2220px]:block" style={{ color: "transparent" }} src="/v2/build-ui-bits/carousel-bottom-big.png" />
      </div>
      <div ref={leftCloud} aria-hidden="true" className="pointer-events-none absolute left-0 bottom-1/3 z-1 w-[50vw] max-w-[391px] select-none will-change-transform">
        <img alt="" loading="lazy" width="784" height="344" decoding="async" className="h-auto w-full" style={{ color: "transparent" }} src="/v2/build-ui-bits/clouds-left.png" />
      </div>
      <div ref={rightCloud} aria-hidden="true" className="pointer-events-none absolute right-0 bottom-1/3 z-1 w-[50vw] max-w-[488px] select-none will-change-transform">
        <img alt="" loading="lazy" width="960" height="422" decoding="async" className="h-auto w-full" style={{ color: "transparent" }} src="/v2/build-ui-bits/clouds-right.png" />
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pt-[100px] min-[1000px]:pb-[220px] pb-[160px] min-[767px]:pb-[100px]">
        <div className="mx-auto max-w-[800px] max-[1000px]:w-full shrink-0 px-6 mt-[100px]">
          <h2 style={{ lineHeight: "115%", color: "#FFF", textShadow: "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)" }} className="m-0 mx-auto text-center text-[28px] min-[768px]:text-[32px] min-[1000px]:text-[40px] max-w-[20ch]">
            {"All the tools and systems "}
            <span style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", textShadow: "none" }}>
              your company needs
            </span>
          </h2>
          <p className="m-0 mx-auto mt-5 max-w-[580px] text-center text-[16px] font-[460] leading-[150%] text-white/70">
            Give agents the context, tools, and approvals they need to keep company work moving.
          </p>
        </div>
        <div className="relative z-20 mt-[40px] w-full min-w-0 max-w-[800px] shrink-0 self-center box-border px-4 md:px-6">
          <div className="grid w-full min-w-0 grid-cols-1 min-[768px]:grid-cols-2 max-[1000px]:max-w-[500px] gap-6 min-[767px]:gap-y-8! md:gap-4 lg:gap-x-6 min-[1000px]:grid-cols-3">
            {TABS.map((label, i) => (
              <button key={label} type="button" onClick={() => select(i)} className={`group min-w-0 flex items-center gap-3 md:gap-4 text-left rounded-lg md:rounded-none p-2 md:p-0 -m-2 md:m-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white/80 ${i === tab ? "text-white" : "text-white/40 hover:text-white/60"}`} aria-pressed={i === tab}>
                <span className="shrink-0 loader-bar-after" style={{ width: "1px", minWidth: "1px", maxWidth: "1px", height: "44px", flex: "0 0 3px", position: "relative", backgroundColor: "rgba(255, 255, 255, 0.35)", transform: "translateZ(0)" }} aria-hidden="true">
                  {i === tab ? <span ref={barRef} className="absolute left-0 top-0 bg-white" style={{ width: "1px", height: "0%", transform: "translateZ(0px)" }} /> : null}
                </span>
                <span className="text-[15px] md:text-[16px] font-[460] leading-[140%] tracking-[0.01em] max-w-[28ch] md:max-w-none">{label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative z-0 mt-[50px] flex shrink-0 items-center justify-center overflow-hidden px-4 w-full max-[767px]:h-[577px]! max-[1000px]:h-[677px]!" style={{ height: "507px" }}>
          <div className="relative overflow-hidden mx-auto max-[1000px]:max-w-[500px] max-[767px]:max-h-[577px] max-[1000px]:h-[677px]! max-[1000px]:mx-auto max-[1000px]:w-full!" style={{ width: "min(100%, 800px)", height: "507px" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 will-change-transform max-[1000px]:max-w-[500px] max-[1000px]:mx-auto max-[1000px]:w-full!" style={{ width: "800px", height: "471px" }}>
<div ref={panelRef} className="flex h-full w-full min-h-0 items-center justify-center">{PANELS[tab]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const TOOLS_TABS = ["You stay in control, nothing ships without your approval", "Run multiple tasks in the background at the same time.", "Customize agents with apps, skills, and schedules"] as const
