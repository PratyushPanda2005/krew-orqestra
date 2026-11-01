import { Tilt } from "../_client/tilt"

/** Closing statement, links, the sunflower card and the grass strip. */
export function Footer() {
  return (
    <footer className="w-full footer-bg relative overflow-x-hidden">
      <picture className="pointer-events-none absolute inset-x-0 bottom-0 h-[75px]">
        <source srcSet="/v2/footer/footer-bg.avif" type="image/avif" />
        <source srcSet="/v2/footer/footer-bg.webp" type="image/webp" />
        <img src="/v2/footer/footer-bg.jpg" alt="" width="5760" height="225" loading="lazy" decoding="async" aria-hidden="true" className="h-full w-full object-cover object-bottom" />
      </picture>
      <div className="mx-auto max-w-[1100px] px-6 pt-[80px] pb-[64px] relative z-10">
        <div className="relative">
          <div className="hidden md:block absolute -top-1/5 -right-[30%] w-full h-[120%] z-1 bg-pattern-footer">
            <div className="absolute inset-0 radial-bg-gradient" />
          </div>
          <div className="flex flex-col gap-[48px] md:flex-row md:gap-[80px] relative z-10">
            <div className="flex-1 flex flex-col">
              <h2 className="m-0 min-[767px]:text-[32px] min-[1000px]:text-[40px] font-normal text-[28px] leading-[115%] tracking-[0.28px] md:text-[40px] md:leading-[115%] md:tracking-normal max-w-[335px] md:max-w-[404px]">
                <span className="text-ink-navy md:text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>Run an entire company</span>
                <span className="text-ink-navy/50 md:text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>{" with AI agents"}</span>
              </h2>
              <div className="mt-[32px] md:hidden max-w-[312px]">
                <Tilt className="footer-card-2-tilt">
                  <div className="block p-[12px] rounded-[16px] h-[475px]" style={{ background: "rgba(251, 251, 248, 0.80)", boxShadow: "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)" }}>
                    <img src="/v2/footer/img-footer-(1).avif" alt="Cofounder product preview" loading="lazy" className="w-full h-full block rounded-[8px] object-cover" />
                    <div className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]" style={{ borderRadius: "8px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)", boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset", backdropFilter: "blur(25px)" }}>
                      <p className="m-0" style={{ fontSize: "24px", fontWeight: "460", lineHeight: "115%", letterSpacing: "0.24px", textShadow: "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)" }}>
                        <span className="text-white">Cofounder gives your AI agent</span>
                        {" "}
                        <span style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          the tools to run your company.
                        </span>
                      </p>
                      <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface" href="#">
                        <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                          <span className="text-[15px] font-[460] tracking-[0.15px]">Run a company</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </Tilt>
              </div>
              <nav className="mt-[48px] flex flex-col gap-[32px]">
                <div className="flex items-center gap-[12px]">
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-faint">How to</span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">How to start</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">How to build</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">How to sell</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">How to scale</a>
                  </span>
                </div>
                <div className="flex gap-[80px]">
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a className="footer-link text-ink no-underline" href="#">Homepage</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Resources</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Pricing</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Careers</a>
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Privacy Policy</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Terms of Service</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Docs</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Support</a>
                    </span>
                  </div>
                </div>
              </nav>
              <div className="mt-[40px] flex items-center gap-[10px]">
                <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface text-ink-faint hover:text-[#e1e8e7]" aria-label="X" href="#">
                  <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <g filter="url(#filter0_i_642_8678)">
                        <path d="M11.4539 1.19043H13.5624L8.95607 6.45511L14.375 13.6192H10.132L6.80877 9.2742L3.00622 13.6192H0.89652L5.8234 7.98799L0.625 1.19043H4.97569L7.97962 5.16189L11.4539 1.19043ZM10.7139 12.3572H11.8822L4.34087 2.38614H3.08716L10.7139 12.3572Z" fill="#262323" fillOpacity="0.8" />
                      </g>
                      <defs>
                        <filter id="filter0_i_642_8678" x="0.625" y="1.19043" width="13.75" height="13.5266" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.09792" />
                          <feGaussianBlur stdDeviation="0.548958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_642_8678" />
                        </filter>
                      </defs>
                    </svg>
                  </span>
                </a>
                <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[36px] w-[36px] rounded-full btn-light-surface text-ink-faint hover:text-[#e1e8e7]" aria-label="LinkedIn" href="#">
                  <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <g clipPath="url(#clip0_642_8680)">
                        <g filter="url(#filter0_i_642_8680)">
                          <path d="M11.6062 4.38379C13.4656 4.58517 14.5202 5.80673 14.5203 7.88086V13.9434H11.6062V8.52539C11.6062 8.38999 11.572 6.93457 9.96167 6.93457C9.41821 6.93464 8.93528 7.17626 8.66675 7.65918C8.35127 8.23644 8.39819 8.90809 8.39819 9.53906V13.9023H5.48413V4.6123H8.27026V5.85352C8.27294 5.84909 8.31392 5.78305 8.39819 5.67285C8.72043 5.25664 9.64003 4.28932 11.2712 4.35645C11.3851 4.36315 11.499 4.3704 11.6062 4.38379ZM3.72534 13.876H0.812256V4.58496H3.72534V13.876ZM2.26831 0C3.2025 0 3.96056 0.757245 3.96069 1.69141C3.96069 2.62568 3.20259 3.38379 2.26831 3.38379C1.33415 3.38365 0.576904 2.6256 0.576904 1.69141C0.577041 0.757328 1.33423 0.00013546 2.26831 0Z" fill="#262323" fillOpacity="0.8" />
                        </g>
                      </g>
                      <defs>
                        <filter id="filter0_i_642_8680" x="0.576904" y="0" width="13.9434" height="14.4434" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="0.5" />
                          <feGaussianBlur stdDeviation="0.25" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_642_8680" />
                        </filter>
                        <clipPath id="clip0_642_8680">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="mt-[40px] flex flex-col">
                <p className="m-0 flex items-center gap-[6px] text-ink-faint font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  Automate with
                  <span className="footer-soc2-badge inline-flex items-center gap-[3px] rounded-[17px] py-[4px] pr-[8px] pl-[7px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <g filter="url(#filter0_i_642_8691)">
                        <path d="M7.08329 4.16667V3.33333C7.08329 2.18274 6.15054 1.25 4.99996 1.25C3.84937 1.25 2.91663 2.18274 2.91663 3.33333V4.16667M4.99996 6.04167V6.875M3.66663 8.75H6.33329C7.03338 8.75 7.38338 8.75 7.65079 8.61375C7.886 8.49392 8.07721 8.30271 8.19704 8.0675C8.33329 7.80008 8.33329 7.45008 8.33329 6.75V6.16667C8.33329 5.46658 8.33329 5.11658 8.19704 4.84917C8.07721 4.61396 7.886 4.42275 7.65079 4.30292C7.38338 4.16667 7.03338 4.16667 6.33329 4.16667H3.66663C2.96656 4.16667 2.61653 4.16667 2.34914 4.30292C2.11393 4.42275 1.92271 4.61396 1.80287 4.84917C1.66663 5.11658 1.66663 5.46658 1.66663 6.16667V6.75C1.66663 7.45008 1.66663 7.80008 1.80287 8.0675C1.92271 8.30271 2.11393 8.49392 2.34914 8.61375C2.61653 8.75 2.96656 8.75 3.66663 8.75Z" stroke="#BFBFBF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <filter id="filter0_i_642_8691" x="1.06665" y="0.650391" width="7.8667" height="9.19922" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="0.5" />
                          <feGaussianBlur stdDeviation="0.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_642_8691" />
                        </filter>
                      </defs>
                    </svg>
                    <span className="footer-soc2-label">SOC 2</span>
                  </span>
                  compliant security
                </p>
                <p className="m-0 pt-[10px] text-[#BFBFBF] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  Copyright © 2026 The General Intelligence Company Of New York
                </p>
                <p className="m-0 pt-[24px] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  <span className="text-[#BFBFBF]">{"Design by "}</span>
                  <a href="#" className="text-ink-faint no-underline hover:underline">Altalogy</a>
                </p>
              </div>
            </div>
            <div className="hidden md:relative md:block md:w-full md:max-w-[350px] md:shrink-0">
              <Tilt className="footer-card-2-tilt">
                <div className="block p-[12px] rounded-[16px] h-[475px]" style={{ background: "rgba(251, 251, 248, 0.80)", boxShadow: "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)" }}>
                  <img src="/v2/footer/img-footer-(1).avif" alt="Cofounder product preview" loading="lazy" className="w-full h-full block rounded-[8px] object-cover" />
                  <div className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]" style={{ borderRadius: "8px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)", boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset", backdropFilter: "blur(25px)" }}>
                    <p className="m-0" style={{ fontSize: "24px", fontWeight: "460", lineHeight: "115%", letterSpacing: "0.24px", textShadow: "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)" }}>
                      <span className="text-white">Cofounder gives your AI agent</span>
                      {" "}
                      <span style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        the tools to run your company.
                      </span>
                    </p>
                    <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface" href="#">
                      <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                        <span className="text-[15px] font-[460] tracking-[0.15px]">Run a company</span>
                      </span>
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full leading-none pt-[60px] relative z-10">
        <div className="py-[10px] flex items-center justify-center gap-[6px]">
          <span className="footer-made-with font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">Made with</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <g filter="url(#filter0_i_698_9835)">
              <path d="M10.8643 6.22461H9.3125V7.77246H7.7627V9.31641H6.20898V10.8477H4.6543V9.31641H3.11035V7.76172H4.66406V9.29297H6.20801V7.76172H7.75781V6.21777H9.30957V1.56152H10.8643V6.22461ZM1.55469 6.21777H3.1084V7.77246H1.55371V6.22461H0V1.56152H1.55469V6.21777ZM4.66309 1.54297H6.20312V0H9.3125V1.55469H6.20898V3.09766H4.6543V1.55469H1.55371V0H4.66309V1.54297Z" fill="#549F4B" />
            </g>
            <defs>
              <filter id="filter0_i_698_9835" x="0" y="0" width="10.8643" height="11.3477" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.5" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.396078 0 0 0 0 0.247059 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_698_9835" />
              </filter>
            </defs>
          </svg>
          <span className="footer-made-with font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
            by The General Intelligence Company Of New York
          </span>
        </div>
      </div>
    </footer>
  )
}
