/** Platform statement, the department wheel with the chat panel, three features and the CTA strip. */
export function Orchestration() {
  return (
    <div className="relative w-full overflow-hidden bg-surface pt-[20px] min-[1100px]:pt-[20px]">
      <div aria-hidden="true" className="top-0 min-[1100px]:top-[20px] pointer-events-none absolute right-0 z-0 w-[clamp(260px,42vw,760px)] h-1/2 max-[999px]:w-[clamp(220px,55vw,560px)]" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)", background: "linear-gradient(250deg, #f0f0f0c2 0%, #f0f0f047 36%, rgba(255, 255, 255, 0) 74%)" }} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 flex flex-col items-center">
        <div className="w-full text-center">
          <h2 className="m-0 text-[28px] min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal leading-[115%] mx-auto">
            <span className="text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>Krew is one workspace for you, your crew</span>
            <br />
            <span className="text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>and every client job</span>
          </h2>
        </div>
        <div className="orch-frame mt-[40px] min-[768px]:mt-[80px] relative flex flex-col overflow-hidden w-full min-[1100px]:w-[1080px] h-auto min-[1000px]:h-[600px] rounded-[16px]">
          <div className="absolute bottom-[12px] left-[12px] z-10 flex items-center gap-[4px] max-[767px]:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M7.74868 1.92239C7.83964 1.62897 7.86882 1.31989 7.83437 1.01463C7.79993 0.709377 7.70261 0.414568 7.54856 0.148796C7.52243 0.103548 7.48486 0.0659756 7.4396 0.0398567C7.39435 0.0137378 7.34302 -6.86424e-06 7.29078 4.8697e-06C6.94416 -0.000720646 6.60218 0.0796321 6.29216 0.234643C5.98214 0.389654 5.71267 0.615026 5.50528 0.892753H4.61253C4.40514 0.615026 4.13567 0.389654 3.82565 0.234643C3.51563 0.0796321 3.17365 -0.000720646 2.82704 4.8697e-06C2.77479 -6.86424e-06 2.72346 0.0137378 2.67821 0.0398567C2.63295 0.0659756 2.59538 0.103548 2.56925 0.148796C2.4152 0.414568 2.31788 0.709377 2.28344 1.01463C2.24899 1.31989 2.27817 1.62897 2.36913 1.92239C2.18527 2.2433 2.08678 2.606 2.08308 2.97583V3.27341C2.0837 3.77693 2.26649 4.26321 2.59768 4.64246C2.92887 5.02172 3.3861 5.26834 3.88494 5.33678C3.68132 5.59733 3.5708 5.91856 3.57099 6.24924V6.54682H2.67824C2.44147 6.54682 2.2144 6.45277 2.04698 6.28534C1.87955 6.11792 1.7855 5.89085 1.7855 5.65408C1.7855 5.45868 1.74701 5.2652 1.67224 5.08468C1.59746 4.90415 1.48786 4.74013 1.3497 4.60196C1.21153 4.4638 1.0475 4.3542 0.866982 4.27942C0.68646 4.20465 0.492978 4.16616 0.297583 4.16616C0.218659 4.16616 0.142968 4.19751 0.0871599 4.25332C0.0313524 4.30913 0 4.38482 0 4.46374C0 4.54267 0.0313524 4.61836 0.0871599 4.67417C0.142968 4.72998 0.218659 4.76133 0.297583 4.76133C0.534354 4.76133 0.761428 4.85538 0.928851 5.02281C1.09627 5.19023 1.19033 5.4173 1.19033 5.65408C1.19033 6.04869 1.34709 6.42715 1.62613 6.70619C1.90517 6.98523 2.28362 7.14199 2.67824 7.14199H3.57099V7.73715C3.57099 7.81608 3.60234 7.89177 3.65815 7.94758C3.71396 8.00338 3.78965 8.03474 3.86857 8.03474C3.9475 8.03474 4.02319 8.00338 4.079 7.94758C4.1348 7.89177 4.16616 7.81608 4.16616 7.73715V6.24924C4.16616 6.01247 4.26021 5.7854 4.42764 5.61797C4.59506 5.45055 4.82213 5.35649 5.05891 5.35649C5.29568 5.35649 5.52275 5.45055 5.69017 5.61797C5.8576 5.7854 5.95165 6.01247 5.95165 6.24924V7.73715C5.95165 7.81608 5.98301 7.89177 6.03881 7.94758C6.09462 8.00338 6.17031 8.03474 6.24924 8.03474C6.32816 8.03474 6.40385 8.00338 6.45966 7.94758C6.51547 7.89177 6.54682 7.81608 6.54682 7.73715V6.24924C6.54701 5.91856 6.43649 5.59733 6.23287 5.33678C6.73171 5.26834 7.18894 5.02172 7.52013 4.64246C7.85132 4.26321 8.03411 3.77693 8.03473 3.27341V2.97583C8.03103 2.606 7.93254 2.2433 7.74868 1.92239ZM7.43957 3.27341C7.43957 3.66803 7.2828 4.04649 7.00377 4.32553C6.72473 4.60457 6.34627 4.76133 5.95165 4.76133H4.16616C3.77154 4.76133 3.39308 4.60457 3.11404 4.32553C2.83501 4.04649 2.67824 3.66803 2.67824 3.27341V2.97583C2.68189 2.67826 2.77098 2.388 2.93491 2.13962C2.96547 2.09935 2.98526 2.05195 2.99242 2.0019C2.99958 1.95185 2.99387 1.9008 2.97583 1.85357C2.89829 1.65368 2.86098 1.44044 2.86602 1.22609C2.87107 1.01174 2.91837 0.8005 3.00521 0.60447C3.24875 0.630669 3.48327 0.711345 3.69139 0.840516C3.89951 0.969688 4.07588 1.14404 4.20745 1.35066C4.23426 1.39258 4.27115 1.42711 4.31476 1.45109C4.35836 1.47507 4.40728 1.48773 4.45704 1.48792H5.66039C5.71035 1.48792 5.75949 1.47535 5.80331 1.45136C5.84712 1.42737 5.8842 1.39274 5.91111 1.35066C6.04265 1.14403 6.21902 0.969656 6.42714 0.840482C6.63526 0.711307 6.86979 0.630643 7.11334 0.60447C7.20007 0.80055 7.24724 1.01182 7.25216 1.22617C7.25707 1.44051 7.21963 1.65372 7.14198 1.85357C7.124 1.90035 7.11798 1.95088 7.12448 2.00057C7.13097 2.05027 7.14978 2.09755 7.17918 2.13814C7.34477 2.3865 7.43518 2.67736 7.43957 2.97583V3.27341Z" fill="#23133c" fillOpacity="0.4" />
            </svg>
            <span className="font-mono text-[8px] font-[400] leading-[11.427px] text-[rgba(35,19,60,0.4)]">riya-rao-studio/jobs</span>
          </div>
          <div className="flex-1 min-[1000px]:flex-1 max-[999px]:flex-none flex max-[999px]:flex-col items-stretch">
            <div className="flex-1 max-[999px]:flex-none flex flex-col">
              <div className="flex items-center justify-between px-[12px] pt-[12px] max-[767px]:hidden">
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center gap-[8px] px-[6px] py-[5px] rounded-[4.285px] border-[0.357px] border-black/10 bg-[rgba(35,19,60,0.03)] backdrop-blur-[1.428px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#D9D9D6] flex items-center justify-center">
                      <span className="text-[8px] font-medium text-[rgba(35,19,60,0.5)]">RR</span>
                    </div>
                    <span className="text-[10px] font-medium text-[rgba(35,19,60,0.6)] whitespace-nowrap">Riya Rao Studio</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L4 4L7 1" stroke="rgba(35,19,60,0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[10px] font-medium text-[rgba(35,19,60,0.3)]">Z</span>
                    <span className="text-[10px] font-medium text-[rgba(35,19,60,0.4)]">60%</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px] pr-[16px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                    <path d="M0.357117 3.85675H10.3559M9.35602 8.85614C9.6212 8.85614 9.87552 8.75079 10.063 8.56328C10.2505 8.37577 10.3559 8.12144 10.3559 7.85626V2.85687C10.3559 2.59169 10.2505 2.33736 10.063 2.14985C9.87552 1.96234 9.6212 1.85699 9.35602 1.85699H5.4065C5.23928 1.85863 5.07431 1.8183 4.92671 1.7397C4.7791 1.66109 4.65357 1.54672 4.5616 1.40705L4.15665 0.807123C4.06561 0.668875 3.94167 0.555393 3.79595 0.476861C3.65023 0.39833 3.48729 0.357205 3.32175 0.357178H1.35699C1.09181 0.357178 0.837487 0.462522 0.649974 0.650035C0.462461 0.837548 0.357117 1.09187 0.357117 1.35706V7.85626C0.357117 8.12144 0.462461 8.37577 0.649974 8.56328C0.837487 8.75079 1.09181 8.85614 1.35699 8.85614H9.35602Z" stroke="#23133c" strokeOpacity="0.4" strokeWidth="0.714198" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9.99514 9.99908L7.92873 7.93266M9.04652 5.23752C9.04652 7.34121 7.34115 9.04658 5.23746 9.04658C3.13378 9.04658 1.42841 7.34121 1.42841 5.23752C1.42841 3.13384 3.13378 1.42847 5.23746 1.42847C7.34115 1.42847 9.04652 3.13384 9.04652 5.23752Z" stroke="#23133c" strokeOpacity="0.4" strokeWidth="0.952264" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 max-[999px]:flex-none flex items-center justify-center px-[40px] max-[999px]:px-[20px] pt-0 pb-[80px] max-[999px]:pb-[20px]">
                <div className="relative w-full max-w-[520px] aspect-square @container">
                  <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs />
                    <circle cx="260" cy="260" r="204" stroke="rgba(0,0,0,0.10)" strokeWidth="1" />
                    <line x1="260" y1="225.5" x2="260" y2="77" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="290.9852813742386" y1="229.01471862576142" x2="384.4213562373095" y2="135.5786437626905" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="311" y1="260" x2="425" y2="260" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="290.9852813742386" y1="290.9852813742386" x2="384.4213562373095" y2="384.4213562373095" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="260" y1="294.5" x2="260" y2="443" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="229.01471862576142" y1="290.9852813742386" x2="135.5786437626905" y2="384.4213562373095" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="209" y1="260" x2="95" y2="260.00000000000006" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <line x1="229.01471862576142" y1="229.01471862576142" x2="135.57864376269046" y2="135.57864376269052" stroke="rgba(35,19,60,0.10)" strokeWidth="1.128" strokeLinecap="round" strokeDasharray="4.51 4.51" />
                    <g>
                      <circle cx="260" cy="225.5" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="260" cy="77" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="290.9852813742386" cy="229.01471862576142" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="384.4213562373095" cy="135.5786437626905" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="311" cy="260" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="425" cy="260" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="290.9852813742386" cy="290.9852813742386" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="384.4213562373095" cy="384.4213562373095" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="260" cy="294.5" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="260" cy="443" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="229.01471862576142" cy="290.9852813742386" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="135.5786437626905" cy="384.4213562373095" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="209" cy="260" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="95" cy="260.00000000000006" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <g>
                      <circle cx="229.01471862576142" cy="229.01471862576142" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                      <circle cx="135.57864376269046" cy="135.57864376269052" r="2.5" fill="#F5F5F2" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                    </g>
                    <foreignObject x="201" y="217.5" width="118" height="85" style={{ overflow: "visible" }}>
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                        <div style={{ width: "78px", height: "45px", borderRadius: "4.972px", border: "0.634px solid rgba(35, 19, 60, 0.20)", background: "#F2F2EE", boxShadow: "0 40.556px 20.278px 0 rgba(255, 255, 255, 0.03), 0 22.813px 17.743px 0 rgba(255, 255, 255, 0.02), 0 1.267px 0 0 rgba(255, 255, 255, 0.25) inset, 0 1.657px 9.944px 0 rgba(0, 0, 0, 0.03) inset", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                          <span style={{ fontSize: "15px", fontWeight: 520, letterSpacing: "-0.03em", color: "#23133c", lineHeight: "16px" }}>Krew</span>
                        </div>
                      </div>
                    </foreignObject>
                    <g>
                      <g>
                        <foreignObject x="195" y="9" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Enquiry
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="339.2497833620557" y="68.7502166379443" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Quote
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="399" y="213" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Advance
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                      <foreignObject x="418" y="213" width="92" height="28" style={{ overflow: "visible" }}>
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 8px", borderRadius: "4.972px", background: "rgba(245, 245, 242, 0.95)", boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0.622px inset, rgba(0, 0, 0, 0.08) 0px 0px 0px 0.887px", opacity: "0", transform: "translateY(6px) scale(0.9)", transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgb(238, 199, 93)", boxShadow: "rgb(184, 68, 68) 0px 0.829px 0.829px 0px inset", flexShrink: "0" }} />
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <svg aria-hidden="true" width="7" height="7" viewBox="0 0 10 10" style={{ display: "block", flexShrink: "0" }}>
                                <circle cx="5" cy="5" r="3.5" fill="none" stroke="#45DC97" strokeLinecap="round" strokeWidth="1.6" strokeDasharray="12 10">
                                  <animateTransform attributeName="transform" type="rotate" from="0 5 5" to="360 5 5" dur="0.8s" repeatCount="indefinite" />
                                </circle>
                              </svg>
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgb(113, 206, 69)", boxShadow: "rgb(52, 112, 45) 0px 0.829px 0.829px 0px inset", flexShrink: "0" }} />
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="339.2497833620557" y="357.2497833620557" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Work
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="195" y="417" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Review
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="50.750216637944305" y="357.2497833620557" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Invoice
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="-9" y="213.00000000000006" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Paid
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    </g>
                    <g>
                      <g>
                        <foreignObject x="50.75021663794428" y="68.75021663794433" width="130" height="94" style={{ overflow: "visible" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                            <div style={{ display: "flex", width: "70px", padding: "11.944px 10.287px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8.287px", borderRadius: "6.629px", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", boxSizing: "border-box", color: "rgba(35, 19, 60, 0.60)", textAlign: "center", fontFamily: "var(--font-neoris), sans-serif", fontSize: "11px", fontWeight: "400", lineHeight: "120%", whiteSpace: "nowrap" }}>
                              Ledger
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                      <foreignObject x="69.75021663794428" y="68.75021663794433" width="92" height="28" style={{ overflow: "visible" }}>
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent" }}>
                          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 8px", borderRadius: "4.972px", background: "rgba(245, 245, 242, 0.95)", boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0.622px inset, rgba(0, 0, 0, 0.08) 0px 0px 0px 0.887px", opacity: "0", transform: "translateY(6px) scale(0.9)", transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgb(238, 199, 93)", boxShadow: "rgb(184, 68, 68) 0px 0.829px 0.829px 0px inset", flexShrink: "0" }} />
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <svg aria-hidden="true" width="7" height="7" viewBox="0 0 10 10" style={{ display: "block", flexShrink: "0" }}>
                                <circle cx="5" cy="5" r="3.5" fill="none" stroke="#45DC97" strokeLinecap="round" strokeWidth="1.6" strokeDasharray="12 10">
                                  <animateTransform attributeName="transform" type="rotate" from="0 5 5" to="360 5 5" dur="0.8s" repeatCount="indefinite" />
                                </circle>
                              </svg>
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: "0.3", transition: "opacity 300ms" }}>
                              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgb(113, 206, 69)", boxShadow: "rgb(52, 112, 45) 0px 0.829px 0.829px 0px inset", flexShrink: "0" }} />
                              <span style={{ color: "rgba(35, 19, 60, 0.8)", textAlign: "center", fontFamily: "\"IBM Plex Mono\", monospace", fontSize: "8.287px", fontWeight: "400", lineHeight: "90%", fontVariantNumeric: "tabular-nums" }}>
                                0
                              </span>
                            </span>
                          </div>
                        </div>
                      </foreignObject>
                    </g>
                  </svg>
                  <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full pointer-events-none" fill="none" style={{ willChange: "transform" }}>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="0s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="0s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="0.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="0.5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="1s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="1s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="1.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="1.5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="2s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="2s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="2.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="2.5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="3s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="3s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="3.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="3.5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="4s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="4s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="4.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="4.5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 311 262 L 425 262" dur="1.8s" begin="5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="5s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 311 258 L 425 258" dur="1.8s" begin="5.5s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="5.5s" repeatCount="1" fill="freeze" />
                    </rect>
                  </svg>
                  <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full pointer-events-none" fill="none" style={{ willChange: "transform" }}>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 230.42893218813452 227.6005050633883 L 136.99285732506357 134.1644302003174" dur="1.8s" begin="0s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="0s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 227.6005050633883 230.42893218813452 L 134.16443020031736 136.99285732506362" dur="1.8s" begin="0.55s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="0.55s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 230.42893218813452 227.6005050633883 L 136.99285732506357 134.1644302003174" dur="1.8s" begin="1.1s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="1.1s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 227.6005050633883 230.42893218813452 L 134.16443020031736 136.99285732506362" dur="1.8s" begin="1.6500000000000001s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="1.6500000000000001s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 230.42893218813452 227.6005050633883 L 136.99285732506357 134.1644302003174" dur="1.8s" begin="2.2s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="2.2s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#A6D9E9" opacity="0">
                      <animateMotion path="M 227.6005050633883 230.42893218813452 L 134.16443020031736 136.99285732506362" dur="1.8s" begin="2.75s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="2.75s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#46ABFD" opacity="0">
                      <animateMotion path="M 230.42893218813452 227.6005050633883 L 136.99285732506357 134.1644302003174" dur="1.8s" begin="3.3000000000000003s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="3.3000000000000003s" repeatCount="1" fill="freeze" />
                    </rect>
                    <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#69B4E5" opacity="0">
                      <animateMotion path="M 227.6005050633883 230.42893218813452 L 134.16443020031736 136.99285732506362" dur="1.8s" begin="3.8500000000000005s" repeatCount="1" fill="freeze" calcMode="linear" rotate="auto" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.97;1" dur="1.8s" begin="3.8500000000000005s" repeatCount="1" fill="freeze" />
                    </rect>
                  </svg>
                  <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <image href="/v2/UI-04/flower.svg" x="244" y="197.5" width="32" height="40" />
                  </svg>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "84.47111218501071%", top: "22.259657045758523%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "0.697px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "5px", top: "-1px", width: "108px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "43px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                    <div style={{ position: "absolute", left: "113px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "95.96153846153847%", top: "50%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "0.697px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "5px", top: "-1px", width: "108px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "43px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                    <div style={{ position: "absolute", left: "113px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "84.47111218501071%", top: "77.74034295424148%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "0.697px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "5px", top: "-1px", width: "57.186px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "62.186px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "50%", top: "92.5%", width: "0", height: "0" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "-4.5px", top: "0.697px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" viewBox="0 0 1 55" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-0.5px", top: "5px", height: "55px" }}>
                      <path d="M0.489 53.275L0.489 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-70px", top: "31.5px", width: "140px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-74.5px", top: "28px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "65.5px", top: "28px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" viewBox="0 0 1 29" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-70.5px", top: "32.5px", height: "29px" }}>
                      <path d="M0.489 27.86L0.489 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" viewBox="0 0 1 29" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "69.5px", top: "32.5px", height: "29px" }}>
                      <path d="M0.489 27.86L0.489 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-70px - 5.075cqw)", top: "61.5px" }} />
                    <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "60px" }} />
                    <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(70px - 5.075cqw)", top: "61.5px" }} />
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "15.52888781498929%", top: "77.74034295424148%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "-9.169px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-62.186px", top: "-1px", width: "57.186px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "-62.186px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "4.038461538461538%", top: "50.000000000000014%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "-9.169px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-62.186px", top: "-1px", width: "57.186px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "-62.186px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "15.528887814989284%", top: "22.259657045758527%", width: "0", height: "0" }}>
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <filter id="finDotFilter" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="0.65" />
                        </filter>
                      </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "-9.169px", top: "-4.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-113px", top: "-1px", width: "108px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", left: "-43px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                    <div style={{ position: "absolute", left: "-113px", top: "1px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "0" }}>
                        <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-4.5px", top: "6.5px" }}>
                        <g filter="url(#finDotFilter)">
                          <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                          <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                        </g>
                      </svg>
                      <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-5.075cqw)", top: "11px" }} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute pointer-events-none" style={{ left: "50%", top: "7.5%", width: "0", height: "0" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "1", left: "-4.5px", top: "-9.169px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-0.5px", top: "-27px" }}>
                      <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 143 2" fill="none" preserveAspectRatio="none" style={{ position: "absolute", left: "-70px", top: "-28px", width: "140px" }}>
                      <path d="M0.489 0.489L142.231 0.489" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "-74.5px", top: "-31.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ position: "absolute", opacity: "0.4", left: "65.5px", top: "-31.5px" }}>
                      <g filter="url(#finDotFilter)">
                        <circle cx="4.236" cy="4.236" r="2.933" fill="#F5F5F2" />
                        <circle cx="4.236" cy="4.236" r="2.810" stroke="black" strokeOpacity="0.2" strokeWidth="0.244" />
                      </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "-70.5px", top: "-38px" }}>
                      <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="11" viewBox="0 0 1 11" fill="none" style={{ position: "absolute", left: "69.5px", top: "-38px" }}>
                      <path d="M0.489 0.489L0.489 9.287" stroke="#23133c" strokeOpacity="0.1" strokeWidth="0.977" strokeLinecap="round" strokeDasharray="3.91 3.91" />
                    </svg>
                    <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(-70px - 5.075cqw)", top: "calc(-38px - 7.14cqw)" }} />
                    <div style={{ position: "absolute", width: "10.15cqw", height: "7.14cqw", borderRadius: "1.275cqw", opacity: "0.3", background: "#FBFBF8", boxShadow: "0 0 0 0.829px #FFF inset, 0 0 0 0.829px rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.06)", left: "calc(70px - 5.075cqw)", top: "calc(-38px - 7.14cqw)" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden min-[1000px]:flex shrink-0 flex-col p-[8px] pl-0">
              <div className="orch-panel-card flex flex-col items-center overflow-hidden pt-0 pr-[4px] pb-[4px] pl-[4px] rounded-[7.142px] bg-[#F5F5F2] w-[328.531px] h-[580px]">
                <div className="flex gap-[8.57px] items-center py-[12.856px] px-[8px]">
                  <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans bg-black/5 border border-black/5 text-[rgba(35,19,60,0.8)]">
                    Home
                  </span>
                  <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                    Jobs
                  </span>
                  <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                    Clients
                  </span>
                  <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                    Crew
                  </span>
                  <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                    Money
                  </span>
                </div>
                <div className="orch-panel-card flex-1 w-full flex flex-col rounded-[7.142px] bg-[#FBFBF8] overflow-hidden">
                  <div className="orch-chat-scroll flex-1 flex flex-col px-[12px] pt-[10px] pb-[8px] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "0px", animation: "500ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal none running orch-section-fade-in" }}>
                      <div style={{ display: "flex", justifyContent: "flex-end", animation: "350ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal both running orch-block-reveal" }}>
                        <div style={{ maxWidth: "82%", padding: "9px 12px", borderRadius: "8px", background: "rgba(35, 19, 60, 0.04)", border: "0.734px solid rgba(0, 0, 0, 0.06)", color: "rgba(35, 19, 60, 0.85)", fontSize: "11px", fontWeight: "500", lineHeight: "1.5", fontFamily: "var(--font-neoris), sans-serif" }}>
                          A wedding enquiry just came in on Instagram for 14 Dec.
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginTop: "18px", animation: "400ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal both running orch-block-reveal" }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: "0", marginTop: "3px" }}>
                          <rect x="3" y="3" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                          <rect x="7" y="3" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                          <rect x="2" y="7" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                          <rect x="8" y="7" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                          <rect x="5" y="7" width="2" height="2" fill="rgba(35,19,60,0.2)" />
                        </svg>
                        <p style={{ margin: "0px", flex: "1 1 0%", color: "rgba(35, 19, 60, 0.7)", fontSize: "11px", fontWeight: "400", lineHeight: "1.6", fontFamily: "var(--font-neoris), sans-serif" }}>
                          <span>
                            {"I’ve replied with your starting-from rates and portfolio, and asked for the date, budget and type of work. "}
                          </span>
                          <span style={{ fontWeight: "600", color: "rgba(35, 19, 60, 0.85)" }}>Once they answer, I’ll hand the chat to you. I never agree a price.</span>
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "8px", background: "linear-gradient(rgb(245, 245, 242) 0%, rgba(245, 245, 242, 0.5) 100%)", boxShadow: "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1.469px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 1.469px 0px", opacity: "1", transform: "translateY(0px)", transition: "opacity 400ms cubic-bezier(0.23, 1, 0.32, 1), transform 400ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                          <svg aria-hidden="true" width="8" height="8" viewBox="0 0 10 10" style={{ display: "block", flexShrink: "0" }}>
                            <circle cx="5" cy="5" r="3.5" fill="none" stroke="#45DC97" strokeLinecap="round" strokeWidth="1.6" strokeDasharray="12 10">
                              <animateTransform attributeName="transform" type="rotate" from="0 5 5" to="360 5 5" dur="0.8s" repeatCount="indefinite" />
                            </circle>
                          </svg>
                          <span style={{ color: "rgba(35, 19, 60, 0.85)", fontSize: "10px", fontWeight: "500", lineHeight: "14.689px", flexShrink: "0", fontFamily: "var(--font-neoris), sans-serif" }}>
                            Enquiry bot
                          </span>
                          <span style={{ flex: "1 1 0%", color: "rgba(35, 19, 60, 0.5)", fontSize: "9px", fontWeight: "400", lineHeight: "14.689px", fontFamily: "var(--font-neoris), sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            Waiting for budget and venue
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 5px", borderRadius: "3px", background: "rgba(69, 220, 151, 0.18)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", color: "rgb(29, 112, 217)", fontSize: "8px", fontWeight: "500", lineHeight: "9.5px", fontFamily: "var(--font-neoris), sans-serif", flexShrink: "0" }}>
                            Running
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-[8px] mb-[8px]">
                    <div className="orch-input-bar w-full rounded-[8px] flex items-end gap-[14px] bg-[#FBFBF8]" style={{ minHeight: "36px", padding: "8px 12px 8px 12px" }}>
                      <span className="flex-1 text-[10px] font-[400]" style={{ color: "rgba(35, 19, 60, 0.3)", whiteSpace: "pre-wrap", overflowWrap: "anywhere", lineHeight: "1.55", alignSelf: "center" }}>
                        Search jobs, clients or invoices…
                      </span>
                      <div className="logo-pill shrink-0 flex items-center justify-center w-[22px] h-[22px] !rounded-[4px] !p-0" style={{ alignSelf: "flex-end" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 17 17" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.5156 3.39746C8.53822 3.39816 8.5606 3.40055 8.58298 3.4043C8.59217 3.40584 8.60131 3.40715 8.61032 3.40918C8.63392 3.41449 8.65689 3.4219 8.67966 3.43066C8.68583 3.43305 8.69217 3.43488 8.69822 3.4375C8.75471 3.46186 8.80835 3.49686 8.85447 3.54297L12.5371 7.22656C12.7318 7.42187 12.7322 7.7385 12.5371 7.93359C12.342 8.12834 12.0252 8.12823 11.8301 7.93359L8.99997 5.10352V13.1045C8.99971 13.3804 8.77595 13.6045 8.49997 13.6045C8.22403 13.6045 8.00024 13.3804 7.99997 13.1045V5.10352L5.17087 7.93359C4.9758 8.12842 4.65908 8.12815 4.46384 7.93359C4.26865 7.73841 4.2688 7.42184 4.46384 7.22656L8.14646 3.54199C8.17001 3.51847 8.19577 3.49699 8.22361 3.47852H8.22556C8.2507 3.46194 8.27655 3.4471 8.30368 3.43555C8.30746 3.43394 8.31158 3.43316 8.3154 3.43164C8.34058 3.42165 8.36635 3.41394 8.39255 3.4082C8.40126 3.40629 8.41005 3.40477 8.41892 3.40332C8.44127 3.39967 8.46372 3.39808 8.4863 3.39746C8.49086 3.39734 8.49539 3.39649 8.49997 3.39648C8.50519 3.39648 8.51042 3.3973 8.5156 3.39746Z" fill="#E7E7E3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-[1000px]:hidden w-full max-w-[293px] sm:max-w-[473px] sm:mr-auto mt-[12px] -translate-y-[45px] sm:translate-y-0">
          <div className="orch-panel-card flex flex-col items-center overflow-hidden pt-0 pr-[4px] pb-[4px] pl-[4px] rounded-[7.142px] bg-[#F5F5F2] w-full h-[260px]">
            <div className="flex gap-[8.57px] items-center py-[12.856px] px-[8px]">
              <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans bg-black/5 border border-black/5 text-[rgba(35,19,60,0.8)]">
                Home
              </span>
              <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                Jobs
              </span>
              <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                Clients
              </span>
              <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                Crew
              </span>
              <span className="flex items-center justify-center h-[17px] px-[5.7px] py-[2.8px] rounded-[4px] text-[10px] font-medium leading-none whitespace-nowrap font-sans text-[rgba(35,19,60,0.6)]">
                Money
              </span>
            </div>
            <div className="orch-panel-card flex-1 w-full flex flex-col rounded-[7.142px] bg-[#FBFBF8] overflow-hidden">
              <div className="orch-chat-scroll flex-1 flex flex-col px-[12px] pt-[10px] pb-[8px] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "0px", animation: "500ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal none running orch-section-fade-in" }}>
                  <div style={{ display: "flex", justifyContent: "flex-end", animation: "350ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal both running orch-block-reveal" }}>
                    <div style={{ maxWidth: "82%", padding: "9px 12px", borderRadius: "8px", background: "rgba(35, 19, 60, 0.04)", border: "0.734px solid rgba(0, 0, 0, 0.06)", color: "rgba(35, 19, 60, 0.85)", fontSize: "11px", fontWeight: "500", lineHeight: "1.5", fontFamily: "var(--font-neoris), sans-serif" }}>
                      A wedding enquiry just came in on Instagram for 14 Dec.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginTop: "18px", animation: "400ms cubic-bezier(0.23, 1, 0.32, 1) 0s 1 normal both running orch-block-reveal" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: "0", marginTop: "3px" }}>
                      <rect x="3" y="3" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                      <rect x="7" y="3" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                      <rect x="2" y="7" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                      <rect x="8" y="7" width="2" height="2" fill="rgba(35,19,60,0.6)" />
                      <rect x="5" y="7" width="2" height="2" fill="rgba(35,19,60,0.2)" />
                    </svg>
                    <p style={{ margin: "0px", flex: "1 1 0%", color: "rgba(35, 19, 60, 0.7)", fontSize: "11px", fontWeight: "400", lineHeight: "1.6", fontFamily: "var(--font-neoris), sans-serif" }}>
                      <span>
                        {"I’ve replied with your starting-from rates and portfolio, and asked for the date, budget and type of work. "}
                      </span>
                      <span style={{ fontWeight: "600", color: "rgba(35, 19, 60, 0.85)" }}>Once they answer, I’ll hand the chat to you. I never agree a price.</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "18px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "8px", background: "linear-gradient(rgb(245, 245, 242) 0%, rgba(245, 245, 242, 0.5) 100%)", boxShadow: "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgb(255, 255, 255) 0px 1.469px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 1.469px 0px", opacity: "1", transform: "translateY(0px)", transition: "opacity 400ms cubic-bezier(0.23, 1, 0.32, 1), transform 400ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                      <svg aria-hidden="true" width="8" height="8" viewBox="0 0 10 10" style={{ display: "block", flexShrink: "0" }}>
                        <circle cx="5" cy="5" r="3.5" fill="none" stroke="#45DC97" strokeLinecap="round" strokeWidth="1.6" strokeDasharray="12 10">
                          <animateTransform attributeName="transform" type="rotate" from="0 5 5" to="360 5 5" dur="0.8s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                      <span style={{ color: "rgba(35, 19, 60, 0.85)", fontSize: "10px", fontWeight: "500", lineHeight: "14.689px", flexShrink: "0", fontFamily: "var(--font-neoris), sans-serif" }}>
                        Enquiry bot
                      </span>
                      <span style={{ flex: "1 1 0%", color: "rgba(35, 19, 60, 0.5)", fontSize: "9px", fontWeight: "400", lineHeight: "14.689px", fontFamily: "var(--font-neoris), sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        Waiting for budget and venue
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 5px", borderRadius: "3px", background: "rgba(69, 220, 151, 0.18)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", color: "rgb(29, 112, 217)", fontSize: "8px", fontWeight: "500", lineHeight: "9.5px", fontFamily: "var(--font-neoris), sans-serif", flexShrink: "0" }}>
                        Running
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[8px] mb-[8px]">
                <div className="orch-input-bar w-full rounded-[8px] flex items-end gap-[14px] bg-[#FBFBF8]" style={{ minHeight: "36px", padding: "8px 12px 8px 12px" }}>
                  <span className="flex-1 text-[10px] font-[400]" style={{ color: "rgba(35, 19, 60, 0.3)", whiteSpace: "pre-wrap", overflowWrap: "anywhere", lineHeight: "1.55", alignSelf: "center" }}>
                    Search jobs, clients or invoices…
                  </span>
                  <div className="logo-pill shrink-0 flex items-center justify-center w-[22px] h-[22px] !rounded-[4px] !p-0" style={{ alignSelf: "flex-end" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 17 17" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.5156 3.39746C8.53822 3.39816 8.5606 3.40055 8.58298 3.4043C8.59217 3.40584 8.60131 3.40715 8.61032 3.40918C8.63392 3.41449 8.65689 3.4219 8.67966 3.43066C8.68583 3.43305 8.69217 3.43488 8.69822 3.4375C8.75471 3.46186 8.80835 3.49686 8.85447 3.54297L12.5371 7.22656C12.7318 7.42187 12.7322 7.7385 12.5371 7.93359C12.342 8.12834 12.0252 8.12823 11.8301 7.93359L8.99997 5.10352V13.1045C8.99971 13.3804 8.77595 13.6045 8.49997 13.6045C8.22403 13.6045 8.00024 13.3804 7.99997 13.1045V5.10352L5.17087 7.93359C4.9758 8.12842 4.65908 8.12815 4.46384 7.93359C4.26865 7.73841 4.2688 7.42184 4.46384 7.22656L8.14646 3.54199C8.17001 3.51847 8.19577 3.49699 8.22361 3.47852H8.22556C8.2507 3.46194 8.27655 3.4471 8.30368 3.43555C8.30746 3.43394 8.31158 3.43316 8.3154 3.43164C8.34058 3.42165 8.36635 3.41394 8.39255 3.4082C8.40126 3.40629 8.41005 3.40477 8.41892 3.40332C8.44127 3.39967 8.46372 3.39808 8.4863 3.39746C8.49086 3.39734 8.49539 3.39649 8.49997 3.39648C8.50519 3.39648 8.51042 3.3973 8.5156 3.39746Z" fill="#E7E7E3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-[40px] min-[1000px]:mt-[80px] grid grid-cols-1 min-[1000px]:grid-cols-3 gap-[24px] min-[1000px]:gap-[40px] w-full min-[1100px]:w-[1080px]">
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] max-w-[473px]">
            <span className="text-ink font-[530]">One job, every step</span>
            {" — "}
            <span className="text-ink-muted">Enquiry, quote, work, review, invoice and payment all live in the same job.</span>
          </p>
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] max-w-[473px]">
            <span className="text-ink font-[530]">You stay in charge</span>
            {" — "}
            <span className="text-ink-muted">The bot shares your rates and hands the chat to you. It never agrees a price.</span>
          </p>
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] max-w-[473px]">
            <span className="text-ink font-[530]">Your crew, in the loop</span>
            {" — "}
            <span className="text-ink-muted">Each person sees only the jobs and tasks you give them, and you choose who replies to clients.</span>
          </p>
        </div>
        <div className="my-24 grid w-full grid-cols-1 items-center gap-6 border-y border-border-outline py-7 text-left min-[768px]:my-32 min-[768px]:grid-cols-[minmax(0,1fr)_auto] min-[768px]:gap-10 min-[768px]:py-8 min-[1100px]:w-[1080px]">
          <div>
            <h3 className="m-0 font-[460] tracking-[0.15px] text-[22px] text-ink min-[768px]:text-[24px]">Run your next job on Krew.</h3>
            <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-2 max-w-[540px] text-ink-muted">
              We’re opening Krew to a small group of creators first.
            </p>
          </div>
          <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer rounded-[8px] cta-btn-dark h-11 w-full px-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink min-[768px]:w-auto" href="#">
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100" />
            <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
              <span className="text-[15px] font-[460] tracking-[0.15px] text-on-dark">Join the pilot</span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1 text-on-dark">
                <path d="M3.5 8h9m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
