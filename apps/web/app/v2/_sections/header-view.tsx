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
        <a className="shrink-0" aria-label="Home" href="#">
          <svg width="126" height="26" viewBox="0 0 126 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[18px] w-auto min-[1000px]:h-[26px]">
            <path d="M116.384 22.0101H111.751V20.8572H112.904V11.5848H111.751V10.4249H112.904V9.26497H114.064V8.10504H115.224V10.4249H116.384V11.5848H115.224V20.8572H116.384V22.0101ZM121.017 11.5848H118.704V10.4249H116.384V9.26497H121.017V11.5848Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M108.272 22.0107H102.48V20.8578H101.32V19.6979H100.16V17.378H99.0068V13.9053H100.16V11.5854H101.32V12.7454H108.272V11.5854H107.112V10.4255H102.48V9.26556H108.272V10.4255H109.432V11.5854H110.592V13.9053H101.32V17.378H102.48V19.6979H103.639V20.8578H108.272V22.0107ZM102.48 11.5854H101.32V10.4255H102.48V11.5854ZM110.592 19.6979H109.432V18.538H110.592V19.6979ZM109.432 20.8578H108.272V19.6979H109.432V20.8578Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M98.4375 22.0104H94.9577V20.8576H93.7978V19.6977H94.9577V11.5852H93.7978V10.4253H94.9577V3.47273H93.7978V2.31279H94.9577V1.15286H96.1176V0H97.2776V20.8576H98.4375V22.0104ZM93.7978 22.0104H89.1651V20.8576H88.0052V19.6977H86.8452V17.3778H85.6924V13.9051H86.8452V11.5852H88.0052V10.4253H89.1651V9.26532H93.7978V10.4253H90.325V11.5852H89.1651V13.9051H88.0052V17.3778H89.1651V19.6977H90.325V20.8576H93.7978V22.0104Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M75.8266 22.0101H71.194V20.8572H72.3468V11.5848H71.194V10.4249H72.3468V9.26497H73.5068V8.10504H74.6667V10.4249H75.8266V11.5848H74.6667V20.8572H75.8266V22.0101ZM84.5191 22.0101H79.8793V20.8572H81.0393V11.5848H79.8793V10.4249H75.8266V9.26497H81.0393V10.4249H82.1992V11.5848H83.3591V20.8572H84.5191V22.0101Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M64.2327 22.0107H60.18V20.8578H59.0201V19.6979H57.8601V10.4255H56.7073V9.26556H60.18V19.6979H61.3399V20.8578H64.2327V22.0107ZM70.0324 22.0107H66.5526V19.6979H65.3926V18.538H66.5526V10.4255H65.3926V9.26556H68.8724V20.8578H70.0324V22.0107ZM65.3926 20.8578H64.2327V19.6979H65.3926V20.8578Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M52.6497 22.0107H46.8571V20.8578H45.6972V19.6979H44.5373V17.378H43.3844V13.9053H44.5373V11.5854H45.6972V10.4255H46.8571V9.26556H52.6497V10.4255H53.8097V11.5854H54.9696V13.9053H56.1295V17.378H54.9696V19.6979H53.8097V20.8578H52.6497V22.0107ZM48.0171 20.8578H51.4898V19.6979H52.6497V17.378H53.8097V13.9053H52.6497V11.5854H51.4898V10.4255H48.0171V11.5854H46.8571V13.9053H45.6972V17.378H46.8571V19.6979H48.0171V20.8578Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M45.1416 3.47273H42.8288V1.15286H39.349V0H43.9816V1.15286H45.1416V3.47273ZM40.5089 22.0104H35.8762V20.8576H37.0291V10.4253H35.3033V9.26532H37.0291V3.47273H38.189V1.15286H39.349V9.26532H43.4017V10.4253H39.349V20.8576H40.5089V22.0104Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M31.2299 22.0107H25.4373V20.8578H24.2774V19.6979H23.1175V17.378H21.9646V13.9053H23.1175V11.5854H24.2774V10.4255H25.4373V9.26556H31.2299V10.4255H32.3899V11.5854H33.5498V13.9053H34.7097V17.378H33.5498V19.6979H32.3899V20.8578H31.2299V22.0107ZM26.5973 20.8578H30.07V19.6979H31.2299V17.378H32.3899V13.9053H31.2299V11.5854H30.07V10.4255H26.5973V11.5854H25.4373V13.9053H24.2774V17.378H25.4373V19.6979H26.5973V20.8578Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
            <path d="M20.2178 8.10526H19.0579V6.9524H17.9051V5.79246H16.7451V4.63253H9.79259V3.4726H19.0579V5.79246H20.2178V8.10526ZM9.79259 20.8575H7.47273V19.6975H6.31279V18.5376H5.15286V16.2177H4V9.26519H5.15286V6.9524H6.31279V5.79246H7.47273V4.63253H9.79259V5.79246H8.63266V6.9524H7.47273V9.26519H6.31279V16.2177H7.47273V18.5376H8.63266V19.6975H9.79259V20.8575ZM19.0579 22.0103H9.79259V20.8575H16.7451V19.6975H17.9051V18.5376H19.0579V17.3777H20.2178V19.6975H19.0579V22.0103Z" fill={v("white", "rgba(38,35,35,0.80)", "rgba(38,35,35,0.80)")} />
          </svg>
        </a>
        <div className="hidden min-[1000px]:block">
          <nav className="flex items-center gap-3">
            <div className="relative flex h-[41px] items-center pl-[14px] pr-[10px] rounded-[8px]">
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              <span className="contents">
                <span className="group relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] pointer-events-none">
                  <span className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410] pointer-events-none cursor-default", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460] pointer-events-none cursor-default", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460] pointer-events-none cursor-default")} data-text="How to" style={v({ transitionDuration: "60ms", opacity: "0.64" }, { transitionDuration: "150ms", color: "rgba(32, 32, 32, 0.4)" }, { transitionDuration: "150ms", color: "rgba(32, 32, 32, 0.4)" })}>
                    How to
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
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Start" href="#">
                    Start
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
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Build" href="#">
                    Build
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
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Sell" href="#">
                    Sell
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
                  <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Scale" href="#">
                    Scale
                  </a>
                </span>
              </span>
            </div>
            <div className={v("relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px] group", "relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px]", "relative flex h-[41px] items-center justify-center rounded-[8px] px-[8px]")}>
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              {mode === "top" ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-hover transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" /> : null}
              <span className={mode === "top" ? "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]" : "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] group"}>
                {mode === "top" ? null : <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[4px] bg-[rgba(231,231,227,0.80)] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />}
                <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Resources" href="#">
                  Resources
                </a>
              </span>
            </div>
            <div className={v("relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px] group", "relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px]", "relative flex h-[41px] items-center justify-center rounded-[8px] w-[81px]")}>
              <span aria-hidden="true" style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out glass-pill opacity-0")} />
              {mode === "top" ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[8px] glass-pill-hover transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" /> : null}
              <span className={mode === "top" ? "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px]" : "relative inline-flex items-center justify-center rounded-[4px] py-[2px] px-[5px] group"}>
                {mode === "top" ? null : <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[4px] bg-[rgba(231,231,227,0.80)] transition-opacity duration-200 ease-out opacity-0 group-hover:opacity-100" />}
                <a className={v("nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-surface-raised font-[410]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]", "nav-link relative z-10 no-underline whitespace-nowrap px-[6px] text-[15px] leading-[150%] tracking-[0.15px] transition-[color,font-weight] duration-200 ease-in-out text-ink-ui font-[460]")} style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} data-text="Pricing" href="#">
                  Pricing
                </a>
              </span>
            </div>
            <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] w-[130px]" href="#">
              <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100")} />
              <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0")} />
              <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 transition-opacity rounded-[8px] cta-btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100")} />
              <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                <span style={v({ transitionDuration: "60ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-[#1a1a1a]", "font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-on-dark", "font-[460] text-[15px] tracking-[0.15px] transition-[color] duration-200 ease-in-out text-on-dark")}>
                  Run a company
                </span>
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center min-[1000px]:hidden">
          <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] w-[130px]" href="#">
            <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn-dark opacity-100")} />
            <span aria-hidden="true" style={v({ transitionDuration: "120ms" }, { transitionDuration: "150ms" }, { transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-100", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0", "pointer-events-none absolute inset-0 transition-opacity ease-in-out rounded-[8px] cta-btn opacity-0")} />
            <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 transition-opacity rounded-[8px] cta-btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100", "pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100")} />
            <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
              <span style={v({ transitionDelay: "80ms", transitionDuration: "120ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" })} className={v("font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-[#1a1a1a]", "font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-on-dark", "font-[460] text-[15px] tracking-[0.15px] transition-[color] ease-in-out text-on-dark")}>
                Run a company
              </span>
            </span>
          </a>
          <button type="button" onClick={onToggle} aria-label={v("Open menu", "Open menu", "Close menu")} aria-expanded={v("false", "false", "true")} className="ml-3 relative flex h-[41px] w-[41px] items-center justify-center rounded-[8px]">
            <span aria-hidden="true" style={v({ transitionDelay: "80ms", transitionDuration: "120ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" }, { transitionDelay: "80ms", transitionDuration: "150ms" })} className={v("pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] glass-pill transition-opacity ease-in-out opacity-0")} />
            <span aria-hidden="true" className={v("pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-0", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-100", "pointer-events-none absolute inset-0 rounded-[8px] transition-opacity ease-in-out opacity-100")} style={v({ border: "1px solid rgba(32, 32, 32, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "120ms" }, { border: "1px solid rgba(32, 32, 32, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "150ms" }, { border: "1px solid rgba(32, 32, 32, 0.1)", background: "rgb(245, 245, 242)", boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset", transitionDelay: "80ms", transitionDuration: "150ms" })} />
            <span aria-hidden="true" className="relative z-10 flex flex-col items-center justify-center w-[18px] h-[14px]">
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", transform: "translateY(-5px) rotate(0deg)" }, { background: "rgba(38, 35, 35, 0.8)", transform: "translateY(-5px) rotate(0deg)" }, { background: "rgba(38, 35, 35, 0.8)", transform: "translateY(0px) rotate(45deg)" })} />
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", opacity: "1", transform: "scaleX(1)" }, { background: "rgba(38, 35, 35, 0.8)", opacity: "1", transform: "scaleX(1)" }, { background: "rgba(38, 35, 35, 0.8)", opacity: "0", transform: "scaleX(0)" })} />
              <span className="absolute block h-[1.5px] w-full rounded-full origin-center transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" style={v({ background: "rgb(251, 251, 248)", transform: "translateY(5px) rotate(0deg)" }, { background: "rgba(38, 35, 35, 0.8)", transform: "translateY(5px) rotate(0deg)" }, { background: "rgba(38, 35, 35, 0.8)", transform: "translateY(0px) rotate(-45deg)" })} />
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
            How to
          </span>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 300ms 1 normal both running mm-link-in", opacity: "0" }}>
            Start
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 320ms 1 normal both running mm-link-in", opacity: "0" }}>
            Build
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 340ms 1 normal both running mm-link-in", opacity: "0" }}>
            Sell
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 360ms 1 normal both running mm-link-in", opacity: "0" }}>
            Scale
          </a>
          <div className="w-25 h-px bg-white my-6 [@media(max-height:600px)]:my-3 border-t border-border-light" />
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 300ms 1 normal both running mm-link-in", opacity: "0" }}>
            Resources
          </a>
          <a className="text-[40px] [@media(max-height:600px)]:text-[24px] font-[400] tracking-[-0.3px] text-ink no-underline leading-[160%]" href="#" style={{ animation: "220ms ease-out 320ms 1 normal both running mm-link-in", opacity: "0" }}>
            Pricing
          </a>
        </nav>
        <div className="px-[20px] pb-[48px] [@media(max-height:600px)]:pb-[16px] flex gap-[20px] max-[348px]:flex-col justify-between items-center" style={{ animation: "300ms ease-out 480ms 1 normal both running mm-footer-in", opacity: "0" }}>
          <div className="flex items-start gap-[10px]">
            <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface" aria-label="X" href="#">
              <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <g filter="url(#filter0_i_mm_x)">
                    <path d="M11.4539 1.19043H13.5624L8.95607 6.45511L14.375 13.6192H10.132L6.80877 9.2742L3.00622 13.6192H0.89652L5.8234 7.98799L0.625 1.19043H4.97569L7.97962 5.16189L11.4539 1.19043ZM10.7139 12.3572H11.8822L4.34087 2.38614H3.08716L10.7139 12.3572Z" fill="#262323" fillOpacity="0.8" />
                  </g>
                  <defs>
                    <filter id="filter0_i_mm_x" x="0.625" y="1.19043" width="13.75" height="13.5266" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="1.09792" />
                      <feGaussianBlur stdDeviation="0.548958" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_mm_x" />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
            <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface" aria-label="LinkedIn" href="#">
              <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <g clipPath="url(#clip0_mm_li)">
                    <g filter="url(#filter0_i_mm_li)">
                      <path d="M11.6062 4.38379C13.4656 4.58517 14.5202 5.80673 14.5203 7.88086V13.9434H11.6062V8.52539C11.6062 8.38999 11.572 6.93457 9.96167 6.93457C9.41821 6.93464 8.93528 7.17626 8.66675 7.65918C8.35127 8.23644 8.39819 8.90809 8.39819 9.53906V13.9023H5.48413V4.6123H8.27026V5.85352C8.27294 5.84909 8.31392 5.78305 8.39819 5.67285C8.72043 5.25664 9.64003 4.28932 11.2712 4.35645C11.3851 4.36315 11.499 4.3704 11.6062 4.38379ZM3.72534 13.876H0.812256V4.58496H3.72534V13.876ZM2.26831 0C3.2025 0 3.96056 0.757245 3.96069 1.69141C3.96069 2.62568 3.20259 3.38379 2.26831 3.38379C1.33415 3.38365 0.576904 2.6256 0.576904 1.69141C0.577041 0.757328 1.33423 0.00013546 2.26831 0Z" fill="#262323" fillOpacity="0.8" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_i_mm_li" x="0.576904" y="0" width="13.9434" height="14.4434" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="0.5" />
                      <feGaussianBlur stdDeviation="0.25" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_mm_li" />
                    </filter>
                    <clipPath id="clip0_mm_li">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
          <div className="flex flex-col flex-wrap">
            <p className="m-0 text-[#BFBFBF] max-[348px]:text-center font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
              Copyright © 2026 The General Intelligence Company Of New York
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
