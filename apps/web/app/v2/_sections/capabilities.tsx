import { Live } from "../_client/live"

/** What it does: three stages, each with numbered items that open a detail sheet. */
export function Capabilities() {
  return (
    <section id="capabilities" className="w-full overflow-x-clip scroll-mt-20 bg-surface py-[88px] min-[768px]:py-[112px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="max-w-[760px]">
          <p className="m-0 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-faint">What Krew does</p>
          <h2 className="m-0 text-[28px] min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal leading-[115%] mt-4 max-w-[19ch]">
            <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>Keep making the work.</span>
            {" "}
            <span className="text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>Let Krew run the job around it.</span>
          </h2>
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-6 max-w-[560px] text-ink-muted">
            Krew follows each job from the first message to the last payment, and you stay in control of everything your clients see.
          </p>
        </div>
        <div className="mt-[72px]">
          <article className="grid min-w-0 gap-12 py-[72px] min-[1000px]:items-center min-[1000px]:gap-[78px] min-[1000px]:py-[96px] min-[1000px]:grid-cols-[340px_minmax(0,1fr)]">
            <div className="">
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">1.0 — Win the job</p>
              <h3 className="m-0 text-[32px] font-normal leading-[115%] tracking-[0.32px] mt-4 !text-[30px] !leading-[112%] min-[768px]:!text-[36px]">
                <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>{"Krew turns a DM into a booked job "}</span>
                <span className="text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>with you</span>
              </h3>
              <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-5 text-ink-muted">
                Krew answers new enquiries with your rates and portfolio, sends the quote as a link and asks for the advance. Every price is yours to agree.
              </p>
              <div className="mt-8 grid gap-2">
                <button type="button" data-capability="1.1" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">1.1</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Enquiry replies</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="1.2" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">1.2</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Quote links</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="1.3" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">1.3</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Advance payments</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="1.4" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">1.4</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Shoot-day check</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex min-h-[430px] min-w-0 items-center justify-center overflow-hidden min-[1000px]:overflow-visible">
              <div className="flex w-full min-w-0 items-center justify-center">
                <div className="relative h-[400px] w-full max-w-[707px] shrink-0 overflow-hidden min-[768px]:w-[707px]" style={{ borderRadius: "12px", background: "var(--Bg-darker, #E7E7E3)", boxShadow: "1px 2px 2px 0 #FFF, 1px 4px 5px 0 #FFF" }}>
                  <div className="relative h-[400px] w-[707px] max-[767px]:will-change-transform">
                    <Live steps={8} ms={1200} hold={3000} />
                    <div className="absolute top-[-25px] left-0 flex gap-[5px] w-[707px]">
                      <div className="flex-1 h-[473px] rounded-[4px] overflow-hidden">
                        <img alt="" loading="lazy" width="232" height="473" decoding="async" className="w-full h-full object-cover" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/col-bg.png" />
                      </div>
                      <div className="flex-1 h-[473px] rounded-[4px] overflow-hidden">
                        <img alt="" loading="lazy" width="232" height="473" decoding="async" className="w-full h-full object-cover" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/col-bg.png" />
                      </div>
                      <div className="flex-1 h-[473px] rounded-[4px] overflow-hidden">
                        <img alt="" loading="lazy" width="232" height="473" decoding="async" className="w-full h-full object-cover" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/col-bg.png" />
                      </div>
                    </div>
                    <div className="absolute top-[9px] left-0 flex w-full gap-x-[5px]">
                      <div className="flex-1 min-w-[232px]">
                        <div className="flex items-center justify-between px-[11px] py-[3px]">
                          <span className="inline-flex items-center justify-center px-[8px] py-[2.5px] rounded-full font-(family-name:--font-mono) text-[9px] font-normal text-ink-faint" style={{ background: "#F5F5F2", lineHeight: "10.78px", boxShadow: "0 0.15px 0 0 rgba(0,0,0,0.2), 0 0.3px 0.3px 0 white, 0 0 0.6px 0 rgba(0,0,0,0.3), inset 0 0.3px 0.3px 0 rgba(255,255,255,0.6), inset 0 -0.3px 0.3px 0 rgba(0,0,0,0.05)" }}>
                            Enquiry
                          </span>
                          <span className="font-(family-name:--font-mono) text-[8px] font-medium text-ink-ui-subtle">1/1</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[232px]">
                        <div className="flex items-center justify-between px-[11px] py-[3px]">
                          <span className="inline-flex items-center justify-center px-[8px] py-[2.5px] rounded-full font-(family-name:--font-mono) text-[9px] font-normal text-ink-faint" style={{ background: "#F5F5F2", lineHeight: "10.78px", boxShadow: "0 0.15px 0 0 rgba(0,0,0,0.2), 0 0.3px 0.3px 0 white, 0 0 0.6px 0 rgba(0,0,0,0.3), inset 0 0.3px 0.3px 0 rgba(255,255,255,0.6), inset 0 -0.3px 0.3px 0 rgba(0,0,0,0.05)" }}>
                            Quote
                          </span>
                          <span data-steps="0/3|1/3|2/3|3/3" className="font-(family-name:--font-mono) text-[8px] font-medium text-ink-ui-subtle">0/3</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[232px]">
                        <div className="flex items-center justify-between px-[11px] py-[3px]">
                          <span className="inline-flex items-center justify-center px-[8px] py-[2.5px] rounded-full font-(family-name:--font-mono) text-[9px] font-normal text-ink-faint" style={{ background: "#F5F5F2", lineHeight: "10.78px", boxShadow: "0 0.15px 0 0 rgba(0,0,0,0.2), 0 0.3px 0.3px 0 white, 0 0 0.6px 0 rgba(0,0,0,0.3), inset 0 0.3px 0.3px 0 rgba(255,255,255,0.6), inset 0 -0.3px 0.3px 0 rgba(0,0,0,0.05)" }}>
                            Advance
                          </span>
                          <span data-steps="0/4|0/4|0/4|0/4|1/4|2/4|3/4|4/4" className="font-(family-name:--font-mono) text-[8px] font-medium text-ink-ui-subtle">0/4</span>
                        </div>
                      </div>
                    </div>
                    <svg className="absolute inset-0 pointer-events-none min-w-[calc(3*232px+10px)]" width="100%" height="100%" viewBox="0 0 707 400" fill="none" preserveAspectRatio="none">
                      <circle cx="213" cy="200" r="2" fill="#F5F5F2" />
                      <circle cx="213" cy="200" r="1.65" stroke="#45DC97" strokeWidth="0.7" fill="none" />
                      <circle cx="451" cy="142" r="2" fill="#F5F5F2" style={{ opacity: "1", transition: "opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
                      <circle cx="451" cy="142" r="1.65" strokeWidth="0.7" fill="none" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
                      <g data-at="1" data-fx="wire" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <path d="M 213 200 L 219 200 C 222.866 200, 226 196.866, 226 193 L 226 147 C 226 143.134, 229.134 140, 233 140 L 255 140" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 253 137 L 255.5 140 L 253 143" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                      </g>
                      <g data-at="2" data-fx="wire" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <path d="M 213 200 L 255 200" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 253 197 L 255.5 200 L 253 203" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                      </g>
                      <circle cx="449" cy="200" r="2" fill="#F5F5F2" opacity="1" />
                      <circle cx="449" cy="200" r="1.65" strokeWidth="0.7" fill="none" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 200ms ease-out, opacity 100ms ease-out" }} />
                      <g data-at="3" data-fx="wire" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <path d="M 213 200 L 219 200 C 222.866 200, 226 203.134, 226 207 L 226 251 C 226 254.866, 229.134 258, 233 258 L 255 258" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 253 255 L 255.5 258 L 253 261" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                      </g>
                      <g data-at="4" data-fx="wire" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <path d="M 451 142 L 455 142 C 458.866 142, 462 138.866, 462 135 L 462 87 C 462 83.134, 465.134 80, 469 80 L 492 80" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 451 142 L 455 142 C 458.866 142, 462 138.866, 462 135 C 462 131.134, 465.134 128, 469 128 L 492 128" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 451 142 L 455 142 C 458.866 142, 462 145.134, 462 149 L 462 177 C 462 180.866, 465.134 184, 469 184 L 492 184" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 490 78 L 493 80 L 490 82" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                        <path d="M 490 126 L 493 128 L 490 130" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                        <path d="M 490 182 L 493 184 L 490 186" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                      </g>
                      <g data-at="7" data-fx="wire" style={{ stroke: "rgb(41, 188, 255)", opacity: "1", transition: "stroke 100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 100ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <path d="M 449 264 L 455 264 C 458.866 264, 462 267.134, 462 271 L 462 363 C 462 366.866, 465.134 370, 469 370 L 492 370" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" fill="none" />
                        <path d="M 490 368 L 493 370 L 490 372" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" fill="none" />
                      </g>
                    </svg>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[232px] px-[20px] py-[6px]">
                      <div data-at="0" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                        <div className="flex h-full items-center gap-[6.7px]">
                          <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                            <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-idea-new.png" />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                              New enquiry
                            </span>
                            <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                              Instagram DM
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                          <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                            <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[237px] w-[232px] px-[20px] py-[6px]" style={{ top: "114px", opacity: "1", transition: "opacity 400ms ease-out" }}>
                      <div data-at="1" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                        <div className="flex h-full items-center gap-[6.7px]">
                          <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                            <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-company-name.png" />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                              Rates sent
                            </span>
                            <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                              Bot reply
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                          <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                            <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[237px] w-[232px] px-[20px] py-[6px]" style={{ top: "173px", opacity: "1", transition: "opacity 400ms ease-out" }}>
                      <div data-at="2" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                        <div className="flex h-full items-center gap-[6.7px]">
                          <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                            <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-codebase.png" />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                              Date and budget
                            </span>
                            <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                              Bot question
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                          <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                            <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[237px] w-[232px] px-[20px] py-[6px]" style={{ top: "232px", opacity: "1", transition: "opacity 400ms ease-out" }}>
                      <div data-at="3" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                        <div className="flex h-full items-center gap-[6.7px]">
                          <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                            <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-llc.png" />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                              Agree the price
                            </span>
                            <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                              Needs you
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                          <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                            <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[474px] top-[53px] w-[232px] flex flex-col" style={{ opacity: "1", transition: "opacity 400ms ease-out" }}>
                      <div className="px-[20px] py-[6px]">
                        <div data-at="4" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                          <div className="flex h-full items-center gap-[6.7px]">
                            <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                              <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-social-presence.png" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                              <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                                Send the quote
                              </span>
                              <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                                Your task
                              </span>
                            </div>
                          </div>
                          <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                            <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                              <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="px-[20px] py-[6px]">
                        <div data-at="5" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                          <div className="flex h-full items-center gap-[6.7px]">
                            <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                              <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-buy-domain.png" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                              <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                                Quote accepted
                              </span>
                              <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                                Client
                              </span>
                            </div>
                          </div>
                          <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                            <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                              <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="px-[20px] py-[6px]">
                        <div data-at="6" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                          <div className="flex h-full items-center gap-[6.7px]">
                            <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                              <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-brand-spec.png" />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                              <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                                {"Ask the advance"}
                              </span>
                              <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                                Your task
                              </span>
                            </div>
                          </div>
                          <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                            <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                              <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[474px] top-[343px] w-[232px] px-[20px] py-[6px]" style={{ opacity: "1", transition: "opacity 400ms ease-out" }}>
                      <div data-at="7" data-fx="dim" className="flex w-full items-center justify-between rounded-[8px] h-[40px] py-[6px] pl-[6px] pr-[8px]" style={{ background: "#FFF", boxShadow: "0 0 0 0.67px rgba(0,0,0,0.08), 0 0 13.4px 0 rgba(0,0,0,0.02), 0 13.4px 13.4px 0 rgba(0,0,0,0.01), 0 4px 6px 0 rgba(0,0,0,0.02), 0 2px 5.4px 0 rgba(0,0,0,0.03), inset 0 0 0 0.67px white" }}>
                        <div className="flex h-full items-center gap-[6.7px]">
                          <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "28px", height: "28px", background: "linear-gradient(180deg, #FFF 0%, #F5F5F2 100%)", boxShadow: "0 0.334px 0.669px 0 rgba(255,255,255,0.15) inset, 0 0.334px 0.4px 0 rgba(0,0,0,0.24), 0 0.669px 0.669px 0 rgba(255,255,255,0.10), 0 0 1.338px 0 rgba(0,0,0,0.20)" }}>
                            <img alt="" loading="lazy" width="26" height="26" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/product-ui-1/icon-bank.png" />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="text-[10px] whitespace-nowrap leading-none" style={{ color: "rgba(35, 19, 60, 0.70)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
                              Advance paid
                            </span>
                            <span className="text-[8px] leading-[9.4px] whitespace-nowrap" style={{ color: "rgba(35, 19, 60, 0.40)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
                              Client pays you
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[16px] w-[15px]" style={{ background: "linear-gradient(to bottom, #EBEBE8, #F5F5F2)", backdropFilter: "blur(16px)", boxShadow: "inset 0 -0.5px 0 0 rgba(0,0,0,0.12), inset 0 -1px 2px 0 rgba(0,0,0,0.1), inset 0 1px 1px 0 rgba(255,255,255,0.24)" }}>
                          <svg width="7" height="8" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                            <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(35,19,60,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 z-10 rounded-[12px]" style={{ boxShadow: "2px 3px 4px 0 rgba(152, 146, 140, 0.16) inset" }} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="grid min-w-0 gap-12 py-[72px] min-[1000px]:items-center min-[1000px]:gap-[78px] min-[1000px]:py-[96px] min-[1000px]:grid-cols-[minmax(0,1fr)_340px]">
            <div className="min-[1000px]:order-2">
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">2.0 — Do the work</p>
              <h3 className="m-0 text-[32px] font-normal leading-[115%] tracking-[0.32px] mt-4 !text-[30px] !leading-[112%] min-[768px]:!text-[36px]">
                <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>{"Krew keeps your crew on the same job "}</span>
                <span className="text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>and your client in the loop</span>
              </h3>
              <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-5 text-ink-muted">
                Turn the job into tasks, give each person only what they need, and share drafts by link. Clients comment on the exact moment, then approve.
              </p>
              <div className="mt-8 grid gap-2">
                <button type="button" data-capability="2.1" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">2.1</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Crew tasks</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="2.2" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">2.2</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Roles and access</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="2.3" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">2.3</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Draft reviews</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="2.4" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">2.4</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Client reminders</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex min-h-[430px] min-w-0 items-center justify-center overflow-hidden min-[1000px]:overflow-visible min-[1000px]:order-1">
              <div className="flex w-full min-w-0 items-center justify-center">
                <div className="relative min-h-[386px] w-[310px] shrink-0 min-[768px]:min-h-[386px] min-[768px]:w-[624px]">
                  <Live steps={9} ms={1200} hold={3000} />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 max-[767px]:w-[300px] max-[767px]:rounded-[12px]">
                    <div className="relative min-[768px]:w-[427px] h-[386px] min-[768px]:h-[330px] rounded-[12px] bg-surface overflow-hidden px-6 py-[18px] flex flex-col gap-6" style={{ boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25), 0px 0px 0px 4px rgba(232,231,230,0.32), inset 0px 0px 0.36px 1.5px rgba(255,255,255,0.35), inset 0px 2px 0px 0px white" }}>
                      <div className="flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center p-[6px] rounded-[4px] bg-white" style={{ boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.25), 0px 0px 0px 2px rgba(232,231,230,0.32), inset 0px 0px 0.36px 0.7px rgba(255,255,255,0.35), inset 0px 1px 0px 0px white" }}>
                            <img alt="" loading="lazy" width="10" height="10" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/email-app-icon.svg" />
                          </div>
                          <span className="font-neoris text-[10.6px] font-medium text-ink-ui pt-[2px]">Email preview</span>
                        </div>
                        <div className="flex items-center gap-[1.5px]">
                          <div className="flex items-center justify-center w-3 h-3 rounded-[4px] rotate-180">
                            <img alt="" loading="lazy" width="9" height="9" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/email-chevron.svg" />
                          </div>
                          <div className="flex items-center justify-center w-3 h-3 rounded-[4px]">
                            <img alt="" loading="lazy" width="9" height="9" decoding="async" style={{ color: "transparent" }} src="/v2/homepage/email-chevron.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 min-h-0 gap-5">
                        <div className="flex flex-col gap-3 shrink-0">
                          <div className="flex items-center gap-4 min-[768px]:gap-[34px] text-[10px]">
                            <span className="font-neoris font-medium text-ink-ui-muted w-[46px] shrink-0">To</span>
                            <div className="flex items-center gap-[9px] min-w-0">
                              <span className="font-neoris font-medium text-ink-ui-strong text-nowrap">Arjun Mehta</span>
                              <span className="font-neoris text-[rgba(35,19,60,0.7)] truncate">arjun.mehta@gmail.com</span>
                            </div>
                          </div>
                          <div className="w-full h-px bg-[rgba(35,19,60,0.08)]" />
                          <div className="flex items-center gap-4 min-[768px]:gap-[34px] text-[10px]">
                            <span className="font-neoris font-medium text-ink-ui-muted w-[46px] shrink-0">From</span>
                            <div className="flex items-center gap-[9px] min-w-0">
                              <span className="font-neoris font-medium text-ink-ui-strong text-nowrap">Riya Rao</span>
                              <span className="font-neoris text-[rgba(35,19,60,0.7)] truncate">riya@riyarao.in</span>
                            </div>
                          </div>
                          <div className="w-full h-px bg-[rgba(35,19,60,0.08)]" />
                          <div className="flex items-center gap-4 min-[768px]:gap-[34px] text-[10px]">
                            <span className="font-neoris font-medium text-ink-ui-muted w-[46px] shrink-0">Subject</span>
                            <span data-type="0" className="font-neoris font-medium truncate text-ink-ui-strong">Your wedding film draft is ready</span>
                          </div>
                          <div className="w-full h-px bg-[rgba(35,19,60,0.08)]" />
                        </div>
                        <div className="font-neoris text-[10px] leading-[1.6] text-ink-ui min-h-0">
                          <p data-type="1">Hi Arjun,</p>
                          <br />
                          <p data-type="2">
                            The first cut of your wedding film is ready. Open the link to watch it, comment on any moment, and approve when you’re happy.
                          </p>
                          <br />
                          <p data-type="3">
                            This reminder comes from Riya’s own email and stops as soon as you reply or approve.
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-6 right-6 h-[50px] bg-linear-to-t from-surface to-transparent pointer-events-none" />
                    </div>
                  </div>
                  <div data-at="4" data-fx="rise" className="absolute min-[1280px]:right-[-30px] right-0 left-0 min-[768px]:left-auto top-1/2" style={{ opacity: "1", transform: "translateY(-50%) translateX(0px) scale(1)", transition: "opacity 400ms cubic-bezier(0.23, 1, 0.32, 1), transform 500ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                    <div className="w-[300px] min-[768px]:w-[270px] h-[386px] rounded-[12px] bg-surface overflow-hidden" style={{ boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 0px 20px rgba(0,0,0,0.03), 0px 36px 28px rgba(0,0,0,0.02), 0px 25px 25px rgba(0,0,0,0.02), 0px 15px 15px rgba(0,0,0,0.02), inset 0px 0px 0px 1px white" }}>
                      <div className="flex items-center justify-between px-3 pr-2 py-2">
                        <span className="font-neoris font-medium text-[10px] text-ink-strong">Drafts this week</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" className="shrink-0">
                          <path d="M7.96875 0.46875L0.46875 7.96875M0.46875 0.46875L7.96875 7.96875" stroke="#23133c" strokeOpacity="0.5" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="mx-[2px] mb-[2px] rounded-[10px] bg-surface-raised h-[350px] flex flex-col justify-between px-5 pt-6 pb-4" style={{ boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 0px 20px rgba(0,0,0,0.03), 0px 65px 45px rgba(0,0,0,0.02), inset 0px 0px 0px 1px white" }}>
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex flex-col gap-2">
                            <div className="px-1">
                              <span className="font-neoris text-[10px] text-[rgba(35,19,60,0.7)]">Approved</span>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="font-neoris font-normal text-[40px] leading-none" style={{ fontVariantNumeric: "tabular-nums", backgroundImage: "radial-gradient(34.51% 17.25% at 101.06% 44.51%, rgba(111, 167, 81, 0.8) 0%, rgba(35, 19, 60, 0.8) 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent" }}>
                                  <span data-steps="0|0|0|0|0|0|20|40|60" style={{ display: "inline-block", minWidth: "1.1em", textAlign: "right" }}>60</span>
                                  %
                                </span>
                                <div className="pb-1">
                                  <div className="bg-[#dff0d5] flex items-center gap-[2px] pl-[3px] pr-1 py-[2px] rounded-full">
                                    <img alt="" loading="lazy" width="8" height="8" decoding="async" className="" style={{ color: "transparent" }} src="/v2/homepage/email-arrow-up-green.svg" />
                                    <span className="font-neoris font-medium text-[8px] leading-[9.5px] text-[#6fa751]">+20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-[33px] rounded-[4px] bg-surface overflow-hidden relative">
                              <div data-w="0|0|0|0|0|0|43|86|129" className="absolute left-[3px] top-[3px] h-[27px] rounded-[3px]" style={{ width: "129px", background: "linear-gradient(269deg, rgb(181, 233, 153), rgb(153, 233, 157))", boxShadow: "rgba(115, 163, 89, 0.7) 0px 1px 1px, rgb(170, 228, 139) 0px 0px 0px 1.3px, white 0px 1px 0px inset", transition: "width 900ms cubic-bezier(0.22, 1, 0.36, 1)", willChange: "width" }} />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 pl-[6px]">
                              <div className="w-[5px] h-[5px]" style={{ borderRadius: "3px", background: "linear-gradient(264deg, #B5E999 1.96%, #99E99D 97.96%)", boxShadow: "0 1px 1px 0 rgba(115, 163, 89, 0.70), inset 0 0.5px 0 0 rgba(255, 255, 255, 0.40), 0 0 0 1.3px #AAE48B" }} />
                              <div className="flex items-center gap-[3px] pt-px text-[8px]">
                                <span className="font-neoris font-medium text-ink-faint">Approved</span>
                                <span data-steps="0|0|0|0|0|0|1|2|3" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>3</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-[5px] h-[5px]" style={{ borderRadius: "3px", background: "repeating-linear-gradient(-45deg, rgba(108, 103, 96, 0.4) 0, rgba(108, 103, 96, 0.4) 0.4px, transparent 0.4px, transparent 1.4px), #E7E7E3" }} />
                              <div className="flex items-center gap-[3px] pt-px text-[8px]">
                                <span className="font-neoris font-medium text-ink-faint">Waiting</span>
                                <span data-steps="5|5|5|5|5|5|4|3|2" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 px-1">
                          <div className="flex items-baseline justify-between text-[10px]">
                            <span className="font-neoris text-[rgba(35,19,60,0.7)]">Job</span>
                            <span className="font-neoris font-normal text-ink-strong">Mehta wedding</span>
                          </div>
                          <div className="flex items-baseline justify-between text-[10px]">
                            <span className="font-neoris text-[rgba(35,19,60,0.7)]">Shared</span>
                            <span data-steps="5|5|5|5|5|5|5|5|5" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>5</span>
                          </div>
                          <div className="flex items-baseline justify-between text-[10px]">
                            <span className="font-neoris text-[rgba(35,19,60,0.7)]">Opened</span>
                            <span data-steps="0|0|0|0|0|3|5|5|5" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>5</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-neoris text-[rgba(35,19,60,0.7)]">Changes asked</span>
                            <div className="flex items-center gap-2">
                              <div className="bg-[#f0ddd5] flex items-center gap-[2px] pl-[3px] pr-1 py-[2px] rounded-full">
                                <img alt="" loading="lazy" width="8" height="8" decoding="async" className="rotate-180" style={{ color: "transparent" }} src="/v2/homepage/email-arrow-down-red.svg" />
                                <span data-steps="0%|0%|0%|0%|0%|0%|0%|20%|20%" className="font-neoris font-medium text-[8px] leading-[9.5px] text-[#a76451]">20%</span>
                              </div>
                              <span data-steps="0|0|0|0|0|0|0|1|1" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>1</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-neoris text-[rgba(35,19,60,0.7)]">Approved</span>
                            <div className="flex items-center gap-2">
                              <div className="bg-[#dff0d5] flex items-center gap-[2px] pl-[3px] pr-1 py-[2px] rounded-full">
                                <img alt="" loading="lazy" width="8" height="8" decoding="async" className="" style={{ color: "transparent" }} src="/v2/homepage/email-arrow-up-green.svg" />
                                <span data-steps="0%|0%|0%|0%|0%|0%|20%|40%|60%" className="font-neoris font-medium text-[8px] leading-[9.5px] text-[#6fa751]">60%</span>
                              </div>
                              <span data-steps="0|0|0|0|0|0|1|2|3" className="font-neoris font-normal text-ink-strong" style={{ fontVariantNumeric: "tabular-nums" }}>3</span>
                            </div>
                          </div>
                        </div>
                        <button className="w-full py-2 px-3 font-neoris font-medium text-[10px] text-[rgba(35,19,60,0.7)]" style={{ borderRadius: "6px", background: "#FBFBF8", boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.24), inset 0 2px 0 0 #FFF, 0 0 0 1px #E7E7E3" }}>
                          Open the job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="grid min-w-0 gap-12 py-[72px] min-[1000px]:items-center min-[1000px]:gap-[78px] min-[1000px]:py-[96px] min-[1000px]:grid-cols-[340px_minmax(0,1fr)]">
            <div className="">
              <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">3.0 — Get paid</p>
              <h3 className="m-0 text-[32px] font-normal leading-[115%] tracking-[0.32px] mt-4 !text-[30px] !leading-[112%] min-[768px]:!text-[36px]">
                <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>{"Krew gets you paid "}</span>
                <span className="text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>and keeps the books</span>
              </h3>
              <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-5 text-ink-muted">
                Raise an invoice with a payment link, record payments and TDS, and see every rupee in and out. Clients pay you directly; Krew never holds the money.
              </p>
              <div className="mt-8 grid gap-2">
                <button type="button" data-capability="3.1" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">3.1</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">GST invoices</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="3.2" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">3.2</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Payment links</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="3.3" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">3.3</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Ledger and TDS</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <button type="button" data-capability="3.4" className="group flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-white/60 px-4 py-3 text-left shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-[background-color,border-color,transform] hover:-translate-y-px hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                  <span className="font-mono text-[10px] text-ink-faint">3.4</span>
                  <span className="flex-1 text-[14px] font-[500] text-ink">Accountant export</span>
                  <span className="text-ink-faint transition-transform group-hover:rotate-90">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex min-h-[430px] min-w-0 items-center justify-center overflow-hidden min-[1000px]:overflow-visible">
              <div className="flex w-full min-w-0 items-center justify-center">
                <div className="relative pb-10 min-[767px]:w-[526px] min-[767px]:shrink-0 min-[767px]:pb-0">
                  <Live steps={7} ms={1300} hold={3400} />
                  <div className="rounded-[12px] overflow-hidden flex flex-col p-1 border-[0.5px] border-[rgba(35,19,60,0.1)] min-[767px]:w-[526px] h-[306px] bg-white max-[767px]:h-[242px]" style={{ left: "22px", top: "20px", boxShadow: "0.611px 1.222px 1.222px 0 #FFF, 0.611px 2.445px 3.056px 0 #FFF, 1.222px 1.834px 2.445px 0 rgba(152, 146, 140, 0.16) inset" }}>
                    <div className="bg-[#F8F8F6] border-[0.5px] border-ink-ui-subtle rounded-md h-full">
                      <div className="flex">
                        <div className="flex-1">
                          <div className="flex-1 px-[14px] pt-[13px] pb-[11px] max-[767px]:px-2">
                            <div className="flex items-center gap-[5px]">
                              <span className="text-[9px] text-ink-muted" style={{ fontFamily: "var(--font-neoris)" }}>Money in</span>
                            </div>
                            <div data-steps="₹0|₹0|₹25,000|₹25,000|₹65,000|₹65,000|₹1,25,000" className="mt-[5px] text-[19px] font-normal leading-none tracking-[-0.2px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>₹1,25,000</div>
                            <div className="mt-[9px]">
                              <div data-at="2" data-fx="cells" style={{ display: "grid", gridTemplateRows: "repeat(2, 3px)", gridTemplateColumns: "repeat(33, 3px)", gap: "1px" }}>
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-[6px]">
                              <div className="flex items-center gap-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path d="M5.83333 7.58336V6.41669H4.66666V7.58336H5.83333Z" fill="#2BB673" />
                                  <path d="M7 7.58336L5.83333 7.58336L5.83333 8.75003H7V7.58336Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669V7.58336H7V6.41669H8.16666Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669H9.33333V5.25003H8.16666L8.16666 6.41669Z" fill="#2BB673" />
                                  <path d="M8.75 1.75L5.25 1.75V2.91667L8.75 2.91667L8.75 4.08333H9.91666L9.91667 5.25L11.0833 5.25L11.0833 2.91667L8.75 2.91667V1.75Z" fill="#2BB673" />
                                  <path d="M2.91667 2.91667H5.25L5.25 4.08333H4.08333V5.25H2.91667L2.91667 2.91667Z" fill="#2BB673" />
                                  <path d="M2.91667 5.25L2.91667 8.75H1.75L1.75 5.25L2.91667 5.25Z" fill="#2BB673" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 11.0833V12.25L5.25 12.25L5.25 11.0833H8.75ZM8.75 11.0833L8.75 9.91667L9.91667 9.91666L9.91667 8.75L11.0833 8.75V11.0833H8.75Z" fill="#2BB673" />
                                  <path d="M11.0833 8.75V5.25L12.25 5.25L12.25 8.75H11.0833Z" fill="#2BB673" />
                                  <path d="M2.91667 8.75L2.91667 11.0833L5.25 11.0833L5.25 9.91666H4.08333V8.74999L2.91667 8.75Z" fill="#2BB673" />
                                </svg>
                                <span className="text-[8px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>+34%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex-1 px-[14px] pt-[13px] pb-[11px] max-[767px]:px-2">
                            <div className="flex items-center gap-[5px]">
                              <span className="text-[9px] text-ink-muted" style={{ fontFamily: "var(--font-neoris)" }}>Still owed</span>
                            </div>
                            <div data-steps="₹1,65,000|₹1,65,000|₹1,40,000|₹1,40,000|₹1,00,000|₹1,00,000|₹40,000" className="mt-[5px] text-[19px] font-normal leading-none tracking-[-0.2px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>₹40,000</div>
                            <div className="mt-[9px]">
                              <div data-at="4" data-fx="cells" style={{ display: "grid", gridTemplateRows: "repeat(2, 3px)", gridTemplateColumns: "repeat(33, 3px)", gap: "1px" }}>
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-[6px]">
                              <div className="flex items-center gap-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path d="M5.83333 7.58336V6.41669H4.66666V7.58336H5.83333Z" fill="#2BB673" />
                                  <path d="M7 7.58336L5.83333 7.58336L5.83333 8.75003H7V7.58336Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669V7.58336H7V6.41669H8.16666Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669H9.33333V5.25003H8.16666L8.16666 6.41669Z" fill="#2BB673" />
                                  <path d="M8.75 1.75L5.25 1.75V2.91667L8.75 2.91667L8.75 4.08333H9.91666L9.91667 5.25L11.0833 5.25L11.0833 2.91667L8.75 2.91667V1.75Z" fill="#2BB673" />
                                  <path d="M2.91667 2.91667H5.25L5.25 4.08333H4.08333V5.25H2.91667L2.91667 2.91667Z" fill="#2BB673" />
                                  <path d="M2.91667 5.25L2.91667 8.75H1.75L1.75 5.25L2.91667 5.25Z" fill="#2BB673" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 11.0833V12.25L5.25 12.25L5.25 11.0833H8.75ZM8.75 11.0833L8.75 9.91667L9.91667 9.91666L9.91667 8.75L11.0833 8.75V11.0833H8.75Z" fill="#2BB673" />
                                  <path d="M11.0833 8.75V5.25L12.25 5.25L12.25 8.75H11.0833Z" fill="#2BB673" />
                                  <path d="M2.91667 8.75L2.91667 11.0833L5.25 11.0833L5.25 9.91666H4.08333V8.74999L2.91667 8.75Z" fill="#2BB673" />
                                </svg>
                                <span className="text-[8px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>+8%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 max-[767px]:hidden">
                          <div className="flex-1 px-[14px] pt-[13px] pb-[11px] max-[767px]:px-2">
                            <div className="flex items-center gap-[5px]">
                              <span className="text-[9px] text-ink-muted" style={{ fontFamily: "var(--font-neoris)" }}>Jobs this year</span>
                            </div>
                            <div data-steps="9|9|10|10|11|11|12" className="mt-[5px] text-[19px] font-normal leading-none tracking-[-0.2px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>12</div>
                            <div className="mt-[9px]">
                              <div data-at="6" data-fx="cells" style={{ display: "grid", gridTemplateRows: "repeat(2, 3px)", gridTemplateColumns: "repeat(33, 3px)", gap: "1px" }}>
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 22ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 44ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 66ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 88ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 110ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 132ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 154ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 176ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 198ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 220ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(52, 168, 83)", opacity: "1", transition: "opacity 80ms ease-out 242ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 264ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 286ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 308ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 330ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 352ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 374ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 396ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 418ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 440ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 462ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 484ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 506ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 528ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 550ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(245, 158, 11)", opacity: "1", transition: "opacity 80ms ease-out 572ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 594ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 616ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 638ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 660ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 682ms" }} />
                                <div style={{ width: "3px", height: "3px", borderRadius: "0.3px", background: "rgb(255, 103, 47)", opacity: "1", transition: "opacity 80ms ease-out 704ms" }} />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-[6px]">
                              <div className="flex items-center gap-[3px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path d="M5.83333 7.58336V6.41669H4.66666V7.58336H5.83333Z" fill="#2BB673" />
                                  <path d="M7 7.58336L5.83333 7.58336L5.83333 8.75003H7V7.58336Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669V7.58336H7V6.41669H8.16666Z" fill="#2BB673" />
                                  <path d="M8.16666 6.41669H9.33333V5.25003H8.16666L8.16666 6.41669Z" fill="#2BB673" />
                                  <path d="M8.75 1.75L5.25 1.75V2.91667L8.75 2.91667L8.75 4.08333H9.91666L9.91667 5.25L11.0833 5.25L11.0833 2.91667L8.75 2.91667V1.75Z" fill="#2BB673" />
                                  <path d="M2.91667 2.91667H5.25L5.25 4.08333H4.08333V5.25H2.91667L2.91667 2.91667Z" fill="#2BB673" />
                                  <path d="M2.91667 5.25L2.91667 8.75H1.75L1.75 5.25L2.91667 5.25Z" fill="#2BB673" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 11.0833V12.25L5.25 12.25L5.25 11.0833H8.75ZM8.75 11.0833L8.75 9.91667L9.91667 9.91666L9.91667 8.75L11.0833 8.75V11.0833H8.75Z" fill="#2BB673" />
                                  <path d="M11.0833 8.75V5.25L12.25 5.25L12.25 8.75H11.0833Z" fill="#2BB673" />
                                  <path d="M2.91667 8.75L2.91667 11.0833L5.25 11.0833L5.25 9.91666H4.08333V8.74999L2.91667 8.75Z" fill="#2BB673" />
                                </svg>
                                <span className="text-[8px] text-ink" style={{ fontFamily: "var(--font-departure)" }}>+37%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-h-0">
                        <div className="flex flex-col h-full">
                          <div className="px-[14px] pt-[10px] pb-2.5">
                            <span className="text-[11px] text-ink" style={{ fontFamily: "var(--font-neoris)" }}>Money in, by month</span>
                          </div>
                          <div className="px-[14px] flex-1 min-h-0 flex flex-col pb-2">
                            <div className="flex flex-1 min-h-0 gap-[6px]">
                              <div className="flex flex-col justify-between shrink-0 pb-7.5 w-6">
                                <span className="text-[7px] leading-none text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>₹4L</span>
                                <span className="text-[7px] leading-none text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>₹3L</span>
                                <span className="text-[7px] leading-none text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>₹2L</span>
                                <span className="text-[7px] leading-none text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>₹1L</span>
                              </div>
                              <div className="flex-1 min-w-0 flex flex-col">
                                <div className="flex-1 min-h-0">
                                  <svg width="100%" height="100%" viewBox="0 0 450 90" preserveAspectRatio="none">
                                    <line x1="2" y1="0" x2="450" y2="0" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                                    <line x1="2" y1="30" x2="450" y2="30" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                                    <line x1="2" y1="60" x2="450" y2="60" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                                    <line x1="2" y1="90" x2="450" y2="90" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                                    <path data-at="1" data-fx="draw" d="M0.308716 66.8238L45.7116 50.5884H107.979L153.381 34.353H214.351L236.404 41.9932H279.212L347.965 17.1627H393.368L414.124 10H476.391L567.197 41.9932H586.655L655.408 17.1627H742.322V86.4017" pathLength="1" style={{ strokeDasharray: "1", strokeDashoffset: "0", transition: "stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1) 300ms", stroke: "rgb(123, 216, 91)", strokeWidth: "1.4", fill: "none" }} />
                                    <path data-at="1" data-fx="draw" d="M0.232056 77.6728L39.9423 67.2822H94.402L135.247 56.8915H187.437L206.725 61.7813H245.301L304.299 45.8897H346.278L363.297 41H417.756L473.351 55.6691H535.753L572.059 45.8897H646.941L667.363 50.7794H682.113L700.266 55.0579H742.246V85.6186" pathLength="1" style={{ strokeDasharray: "1", strokeDashoffset: "0", transition: "stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1) 150ms", stroke: "rgb(0, 184, 148)", strokeWidth: "1.4", fill: "none" }} />
                                    <path data-at="1" data-fx="draw" d="M0 82.6323H78.4566L99.733 77.6288H299.199L321.805 82.6323H371.007L393.613 77.0034H440.155L464.091 72H575.792L615.685 80.756H636.961L655.578 76.378H742.013" pathLength="1" style={{ strokeDasharray: "1", strokeDashoffset: "0", transition: "stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1)", stroke: "rgb(28, 111, 217)", strokeWidth: "1.4", fill: "none" }} />
                                  </svg>
                                </div>
                                <div className="flex justify-between [border-top:0.5px_solid_rgba(35,19,60,0.12)]">
                                  <div className="flex flex-col items-center">
                                    <svg width="8" height="6" viewBox="0 0 8 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="7.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="0.5" y1="0.5" x2="0.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint -ml-1" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Apr</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>May</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Jun</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Jul</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Aug</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Sep</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Oct</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Nov</span>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <svg width="13" height="6" viewBox="0 0 13 6" className="block -mt-px mx-auto mb-[2px]">
                                      <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                      <line x1="6.5" y1="0.5" x2="6.5" y2="5.5" stroke="var(--color-ink-ui-solid)" strokeWidth="1" />
                                    </svg>
                                    <span className="text-[7px] leading-none whitespace-nowrap text-ink-faint" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Dec</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-[10px] mt-5 pl-1">
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7BD85B" }} />
                                <span className="text-ink-ui-muted text-[9px]" style={{ fontFamily: "var(--font-neoris)" }}>Money in</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00B894" }} />
                                <span className="text-ink-ui-muted text-[9px]" style={{ fontFamily: "var(--font-neoris)" }}>Money out</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1C6FD9" }} />
                                <span className="text-ink-ui-muted text-[9px]" style={{ fontFamily: "var(--font-neoris)" }}>Kept</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-[80px] top-[112px] w-[266px] max-[767px]:-right-0 max-[767px]:w-[200px] h-[280px] rounded-[12px] overflow-hidden bg-[#f5f5f2] max-[767px]:top-[84px] max-[767px]:h-[200px] max-[767px]:max-h-[200px]" style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 0px 20px, rgba(0, 0, 0, 0.02) 0px 36px 28px, rgba(0, 0, 0, 0.02) 0px 25px 25px, rgba(0, 0, 0, 0.02) 0px 15px 15px, white 0px 0px 0px 1px inset", opacity: "1", transform: "scale(1)", transformOrigin: "100% 50%", transition: "opacity 480ms cubic-bezier(0.22, 1, 0.36, 1) 320ms, transform 620ms cubic-bezier(0.22, 1, 0.36, 1) 320ms", willChange: "transform, opacity" }}>
                    <div className="flex items-center gap-2 absolute top-0 left-0 right-0 pt-[9px] pr-2 pb-2 pl-3">
                      <div className="w-[5px] h-[5px] rounded-[3px] shrink-0" style={{ background: "linear-gradient(264deg, #b5e999 1.96%, #99e99d 97.96%)", boxShadow: "0px 1px 1px 0px rgba(115,163,89,0.7), 0px 0px 0px 2px #aae48b" }} />
                      <span className="text-[10px] font-medium text-ink leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Payments</span>
                    </div>
                    <div className="absolute left-[2px] right-[2px] bottom-[2px] top-[30px] rounded-[10px] overflow-hidden flex flex-col bg-surface-raised" style={{ boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 0px 20px rgba(0,0,0,0.03), inset 0px 0px 0px 1px white" }}>
                      <div className="flex-1 min-h-0 relative overflow-hidden">
                        <div className="flex flex-col will-change-transform">
                          <div className="flex flex-col">
                            <div data-at="1" data-fx="rise" className="flex items-center justify-between px-3 py-[10px] pui4-user-enter">
                              <div className="flex items-center gap-[10px]">
                                <div className="max-[767px]:hidden">
                                  <div className="shrink-0 flex items-center justify-center overflow-hidden w-7 h-7 rounded-full" style={{ background: "linear-gradient(rgb(245, 245, 242) 0%, rgb(251, 251, 248) 100%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 1px 1px 0px 0px inset" }}>
                                    <span className="text-[9px] font-normal tracking-[0.36px] leading-none" style={{ fontFamily: "var(--font-neoris)", background: "linear-gradient(rgb(98, 98, 97) 0%, rgb(94, 94, 93) 100%) text", WebkitTextFillColor: "transparent" }}>
                                      NS
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[10px] font-medium text-ink leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Neha Shah</div>
                                  <div className="text-[9px] font-normal text-ink-muted mt-px leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Brand reel</div>
                                </div>
                              </div>
                              <div data-at="2" data-fx="pop" className="flex items-center gap-[3px] bg-[#dae9fb] rounded-[3px] px-1 py-[3px]">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                                  <path d="M1 3L2.4 4.5L5 1.5" stroke="#1d70d9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[9px] font-medium text-[#1f9e66] leading-[9.5px]" style={{ fontFamily: "var(--font-neoris)" }}>Paid</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div data-at="3" className="h-px bg-[rgba(0,0,0,0.07)] mx-3" />
                            <div data-at="3" data-fx="rise" className="flex items-center justify-between px-3 py-[10px]">
                              <div className="flex items-center gap-[10px]">
                                <div className="max-[767px]:hidden">
                                  <div className="shrink-0 flex items-center justify-center overflow-hidden w-7 h-7 rounded-full" style={{ background: "linear-gradient(rgb(245, 245, 242) 0%, rgb(251, 251, 248) 100%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 1px 1px 0px 0px inset" }}>
                                    <span className="text-[9px] font-normal tracking-[0.36px] leading-none" style={{ fontFamily: "var(--font-neoris)", background: "linear-gradient(rgb(98, 98, 97) 0%, rgb(94, 94, 93) 100%) text", WebkitTextFillColor: "transparent" }}>
                                      KS
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[10px] font-medium text-ink leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Kapoor Studio</div>
                                  <div className="text-[9px] font-normal text-ink-muted mt-px leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Product shoot</div>
                                </div>
                              </div>
                              <div data-at="4" data-fx="pop" className="flex items-center gap-[3px] bg-[#dae9fb] rounded-[3px] px-1 py-[3px]">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                                  <path d="M1 3L2.4 4.5L5 1.5" stroke="#1d70d9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[9px] font-medium text-[#1f9e66] leading-[9.5px]" style={{ fontFamily: "var(--font-neoris)" }}>Paid</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div data-at="5" className="h-px bg-[rgba(0,0,0,0.07)] mx-3" />
                            <div data-at="5" data-fx="rise" className="flex items-center justify-between px-3 py-[10px]">
                              <div className="flex items-center gap-[10px]">
                                <div className="max-[767px]:hidden">
                                  <div className="shrink-0 flex items-center justify-center overflow-hidden w-7 h-7 rounded-full" style={{ background: "linear-gradient(rgb(245, 245, 242) 0%, rgb(251, 251, 248) 100%)", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(255, 255, 255, 0.5) 1px 1px 0px 0px inset" }}>
                                    <span className="text-[9px] font-normal tracking-[0.36px] leading-none" style={{ fontFamily: "var(--font-neoris)", background: "linear-gradient(rgb(98, 98, 97) 0%, rgb(94, 94, 93) 100%) text", WebkitTextFillColor: "transparent" }}>
                                      AM
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[10px] font-medium text-ink leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Arjun Mehta</div>
                                  <div className="text-[9px] font-normal text-ink-muted mt-px leading-[12.2px]" style={{ fontFamily: "var(--font-neoris)" }}>Wedding film</div>
                                </div>
                              </div>
                              <div data-at="6" data-fx="pop" className="flex items-center gap-[3px] bg-[#dae9fb] rounded-[3px] px-1 py-[3px]">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                                  <path d="M1 3L2.4 4.5L5 1.5" stroke="#1d70d9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-[9px] font-medium text-[#1f9e66] leading-[9.5px]" style={{ fontFamily: "var(--font-neoris)" }}>Paid</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[44px] pointer-events-none z-10" style={{ background: "linear-gradient(0deg, #fbfbf8 0%, rgba(251,251,248,0) 100%)" }} />
                      </div>
                      <div className="shrink-0 flex items-center justify-center gap-[3px] h-[22px] bg-[#f5f5f2] [border-top:0.5px_solid_#e7e7e3]">
                        <span data-steps="₹0|₹0|₹25,000|₹25,000|₹65,000|₹65,000|₹1,25,000" className="text-[9px] font-medium text-ink-muted" style={{ fontFamily: "var(--font-neoris)" }}>₹1,25,000</span>
                        <span className="text-[9px] text-ink-muted" style={{ fontFamily: "var(--font-neoris)" }}>{" received this month"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
