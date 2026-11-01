/**
 * Site header markup in its three looks: over the hero ("top"), over the page ("solid") and with the
 * phone menu open ("open"). `v(top, solid, open)` picks the value for the current look.
 */
export type HeaderMode = "top" | "solid" | "open"

export function HeaderView({ mode, onToggle }: { mode: HeaderMode; onToggle: () => void }) {
  const v = <T,>(top: T, solid: T, open: T): T => (mode === "open" ? open : mode === "solid" ? solid : top)
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[201] flex justify-center" style={v({ background: "transparent", borderBottom: "1px solid rgba(232, 231, 230, 0)", borderTopColor: "rgba(232, 231, 230, 0)", borderRightColor: "rgba(232, 231, 230, 0)", borderLeftColor: "rgba(232, 231, 230, 0)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px 0px", transition: "border-color 20ms ease-in-out, box-shadow 20ms ease-in-out, background-color 120ms ease-out 30ms" }, { background: "rgb(245, 245, 242)", borderBottom: "1px solid rgb(232, 231, 230)", borderTopColor: "rgb(232, 231, 230)", borderRightColor: "rgb(232, 231, 230)", borderLeftColor: "rgb(232, 231, 230)", boxShadow: "rgb(255, 255, 255) 0px 1px 0px 0px", transition: "background-color 200ms ease-in-out, border-color 200ms ease-in-out 50ms, box-shadow 200ms ease-in-out 50ms" }, { background: "rgb(245, 245, 242)", borderBottom: "1px solid rgb(232, 231, 230)", borderTopColor: "rgb(232, 231, 230)", borderRightColor: "rgb(232, 231, 230)", borderLeftColor: "rgb(232, 231, 230)", boxShadow: "rgb(255, 255, 255) 0px 1px 0px 0px", transition: "background-color 200ms ease-in-out, border-color 200ms ease-in-out 50ms, box-shadow 200ms ease-in-out 50ms" })}>
      <div className="w-full max-w-[1440px] mx-auto px-[20px] min-[476px]:px-[32px] md:px-[20px] py-[18px] min-[1000px]:py-0 min-[1000px]:pt-[26px] min-[1000px]:pb-[23px] flex items-center justify-between">
        <a className="shrink-0" aria-label="Krew home" href="#top">
          <span className="block text-[20px] leading-[26px] min-[1000px]:text-[26px] font-[520] tracking-[-0.03em]" style={{ color: v("#ffffff", "#23133c", "#23133c"), transition: "color 200ms ease-in-out" }}>
            Krew
          </span>
        </a>
        <div className="hidden min-[1000px]:block">
          <nav className="flex items-center gap-3">
            <div className="relative flex h-[41px] items-center pl-[14px] pr-[10px] rounded-[8px]">
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              <span className="contents">
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] pointer-events-none">
                  <span className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410] pointer-events-none cursor-default", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460] pointer-events-none cursor-default", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460] pointer-events-none cursor-default")} data-text="How to" style={v({ transitionDuration: "60ms", opacity: "0.64" }, { transitionDuration: "150ms", color: "rgba(35, 19, 60, 0.4)" }, { transitionDuration: "150ms", color: "rgba(35, 19, 60, 0.4)" })}>
                    How it works
                  </span>
                </span>
              </span>
              <span className="contents">
                <span className="relative mx-[7px] self-center shrink-0 w-[1px] h-[16px] translate-y-[4px]">
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider.png" />
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider-light.png" />
                </span>
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]">
                  <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(251,251,248,0.12)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]")} />
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Start" href="#capabilities">
                    Enquiry
                  </a>
                </span>
              </span>
              <span className="contents">
                <span className="relative mx-[7px] self-center shrink-0 w-[1px] h-[16px] translate-y-[4px]">
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider.png" />
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider-light.png" />
                </span>
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]">
                  <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(251,251,248,0.12)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]")} />
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Build" href="#capabilities">
                    Quote
                  </a>
                </span>
              </span>
              <span className="contents">
                <span className="relative mx-[7px] self-center shrink-0 w-[1px] h-[16px] translate-y-[4px]">
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider.png" />
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider-light.png" />
                </span>
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]">
                  <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(251,251,248,0.12)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]")} />
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Sell" href="#capabilities">
                    Work
                  </a>
                </span>
              </span>
              <span className="contents">
                <span className="relative mx-[7px] self-center shrink-0 w-[1px] h-[16px] translate-y-[4px]">
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider.png" />
                  <img alt="" loading="lazy" width="1" height="16" decoding="async" className={v("absolute inset-0 transition-opacity duration-200 ease-in-out opacity-0", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40", "absolute inset-0 transition-opacity duration-200 ease-in-out opacity-40")} style={v({ color: "transparent", transitionDuration: "60ms" }, { color: "transparent", transitionDuration: "150ms" }, { color: "transparent", transitionDuration: "150ms" })} src="/v2/navbar/divider-light.png" />
                </span>
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]">
                  <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(251,251,248,0.12)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]", "pointer-events-none absolute inset-0 rounded-[4px] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100 bg-[rgba(231,231,227,0.80)]")} />
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Scale" href="#capabilities">
                    Paid
                  </a>
                </span>
              </span>
            </div>
            <div className={v("relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px] group", "relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px]", "relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px]")}>
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              {mode === "top" ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-hover transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" /> : null}
              <span className={mode === "top" ? "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]" : "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] group"}>
                {mode === "top" ? null : <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[4px] bg-[rgba(231,231,227,0.80)] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />}
                <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Resources" href="#clients">
                  For clients
                </a>
              </span>
            </div>
            <div className={v("relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px] group", "relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px]", "relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px]")}>
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              {mode === "top" ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-hover transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" /> : null}
              <span className={mode === "top" ? "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]" : "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] group"}>
                {mode === "top" ? null : <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[4px] bg-[rgba(231,231,227,0.80)] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />}
                <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Pricing" href="#steps">
                  Steps
                </a>
              </span>
            </div>
            <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] px-[14px]" href="#join">
              <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100")} />
              <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0")} />
              <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 transition-opacity rounded-[8px] cta-btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100")} />
              <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                <span style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-[#1a1a1a]", "font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-on-dark", "font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-on-dark")}>
                  Join the pilot
                </span>
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center min-[1000px]:hidden">
          <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] px-[14px]" href="#join">
            <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100")} />
            <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0")} />
            <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 transition-opacity rounded-[8px] cta-btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100")} />
            <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
              <span style={v({ transitionDelay: "80ms", transitionDuration: "120ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" })} className={v("font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-[#1a1a1a]", "font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-on-dark", "font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-on-dark")}>
                Join the pilot
              </span>
            </span>
          </a>
          <button type="button" onClick={onToggle} aria-label={v("Open menu", "Open menu", "Close menu")} aria-expanded={v("false", "false", "true")} className="ml-3 relative flex h-[41px] w-[41px] items-center justify-center rounded-[8px]">
            <span aria-hidden="true" style={v({ transitionDelay: "80ms", transitionDuration: "120ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-0")} />
            <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-100")} style={v({ border: "1px solid rgba(35, 19, 60, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "120ms" }, { border: "1px solid rgba(35, 19, 60, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "150ms" }, { border: "1px solid rgba(35, 19, 60, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "150ms" })} />
            <span aria-hidden="true" className="relative z-10 flex flex-col items-center justify-center w-[18px] h-[14px]">
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", transform: "translateY(-5px) rotate(0deg)" }, { background: "rgba(35, 19, 60, 0.8)", transform: "translateY(-5px) rotate(0deg)" }, { background: "rgba(35, 19, 60, 0.8)", transform: "translateY(0px) rotate(45deg)" })} />
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", opacity: "1", transform: "scaleX(1)" }, { background: "rgba(35, 19, 60, 0.8)", opacity: "1", transform: "scaleX(1)" }, { background: "rgba(35, 19, 60, 0.8)", opacity: "0", transform: "scaleX(0)" })} />
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", transform: "translateY(5px) rotate(0deg)" }, { background: "rgba(35, 19, 60, 0.8)", transform: "translateY(5px) rotate(0deg)" }, { background: "rgba(35, 19, 60, 0.8)", transform: "translateY(0px) rotate(-45deg)" })} />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

/** Full-screen phone menu shown under the header when it is open. */
export function MobileMenu() {
  return (
    <div className="fixed inset-0 z-[200] min-[1000px]:hidden" style={{ background: "rgb(245, 245, 242)", animation: "mm-bg-in 500ms cubic-bezier(0.23, 1, 0.32, 1) both" }}>
      <div className="flex flex-col h-full" style={{ animation: "auto ease 0s 1 normal none running none" }}>
        <nav className="flex-1 flex flex-col items-center justify-center px-[20px] gap-0 pt-[62px]">
          <span className="text-[24px] [@media(max-height:600px)]:text-[15px] font-[410] tracking-[-0.3px] text-[#BFBFBF] no-underline py-[10px]" style={{ animation: "220ms ease-out 260ms 1 normal both running mm-link-in", opacity: "0" }}>
            How it works
          </span>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#capabilities" style={{ animation: "220ms ease-out 300ms 1 normal both running mm-link-in", opacity: "0" }}>
            Enquiry
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#capabilities" style={{ animation: "220ms ease-out 320ms 1 normal both running mm-link-in", opacity: "0" }}>
            Quote
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#capabilities" style={{ animation: "220ms ease-out 340ms 1 normal both running mm-link-in", opacity: "0" }}>
            Work
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#capabilities" style={{ animation: "220ms ease-out 360ms 1 normal both running mm-link-in", opacity: "0" }}>
            Paid
          </a>
          <div className="w-25 h-px bg-white my-6 [@media(max-height:600px)]:my-3 border-t border-border-light" />
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#clients" style={{ animation: "220ms ease-out 300ms 1 normal both running mm-link-in", opacity: "0" }}>
            For clients
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#steps" style={{ animation: "220ms ease-out 320ms 1 normal both running mm-link-in", opacity: "0" }}>
            Steps
          </a>
        </nav>
        <div className="px-[20px] pb-[48px] [@media(max-height:600px)]:pb-[16px] flex gap-[20px] max-[348px]:flex-col justify-between items-center" style={{ animation: "300ms ease-out 480ms 1 normal both running mm-footer-in", opacity: "0" }}>
          <div className="flex flex-col flex-wrap">
            <p className="m-0 text-[#BFBFBF] max-[348px]:text-center font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
              © 2026 Orry
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
