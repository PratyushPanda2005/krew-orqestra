import { Tilt } from "../_client/tilt"

/** Closing statement, links, the sunflower card and the grass strip. */
export function Footer() {
  return (
    <footer id="join" className="w-full footer-bg relative overflow-x-hidden">
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
                <span className="text-ink-navy md:text-ink" style={{ filter: "url(#headline-inner-shadow-dark)" }}>Run your next job</span>
                <span className="text-ink-navy/50 md:text-ink-faint" style={{ filter: "url(#headline-inner-shadow-light)" }}>{" on Krew"}</span>
              </h2>
              <div className="mt-[32px] md:hidden max-w-[312px]">
                <Tilt className="footer-card-2-tilt">
                  <div className="block p-[12px] rounded-[16px] h-[475px]" style={{ background: "rgba(251, 251, 248, 0.80)", boxShadow: "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)" }}>
                    <img src="/v2/footer/img-footer-(1).avif" alt="" loading="lazy" className="w-full h-full block rounded-[8px] object-cover" />
                    <div className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]" style={{ borderRadius: "8px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)", boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset", backdropFilter: "blur(25px)" }}>
                      <p className="m-0" style={{ fontSize: "24px", fontWeight: "460", lineHeight: "115%", letterSpacing: "0.24px", textShadow: "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)" }}>
                        <span className="text-white">From the first DM</span>
                        {" "}
                        <span style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          to getting paid.
                        </span>
                      </p>
                      <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface" href="#">
                        <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                          <span className="text-[15px] font-[460] tracking-[0.15px]">Join the pilot</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </Tilt>
              </div>
              <nav className="mt-[48px] flex flex-col gap-[32px]">
                <div className="flex items-center gap-[12px]">
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] text-ink-faint">How it works</span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">Win the job</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">Do the work</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">Share and review</a>
                  </span>
                  <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                    <a href="#" className="footer-link text-ink no-underline">Get paid</a>
                  </span>
                </div>
                <div className="flex gap-[80px]">
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a className="footer-link text-ink no-underline" href="#">Home</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">For clients</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Steps</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Join the pilot</a>
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Privacy Policy</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Terms</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Your data</a>
                    </span>
                    <span className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px]">
                      <a href="#" className="footer-link text-ink no-underline">Contact</a>
                    </span>
                  </div>
                </div>
              </nav>
              <div className="mt-[40px] flex flex-col">
                <p className="m-0 flex items-center gap-[6px] text-ink-faint font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  Personal chats are never stored. Payments go straight to you.
                </p>
                <p className="m-0 pt-[10px] text-[#BFBFBF] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  © 2026 Orry
                </p>
                <p className="m-0 pt-[24px] font-[family-name:var(--font-neoris)] text-[12px] font-[460] leading-[140%] tracking-[0.12px]">
                  <span className="text-[#BFBFBF]">{"Illustrations by "}</span>
                  <a href="#" className="text-ink-faint no-underline hover:underline">Altalogy</a>
                </p>
              </div>
            </div>
            <div className="hidden md:relative md:block md:w-full md:max-w-[350px] md:shrink-0">
              <Tilt className="footer-card-2-tilt">
                <div className="block p-[12px] rounded-[16px] h-[475px]" style={{ background: "rgba(251, 251, 248, 0.80)", boxShadow: "0 0 0.357px 1.5px rgba(255, 255, 255, 0.35) inset, 0 2px 0 0 #FFF inset, 0 0 2px 0 rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(232, 231, 230, 0.32)" }}>
                  <img src="/v2/footer/img-footer-(1).avif" alt="" loading="lazy" className="w-full h-full block rounded-[8px] object-cover" />
                  <div className="-mt-[232px] md:-mt-[200px] mx-[12px] p-[16px] flex flex-col items-start gap-[10px]" style={{ borderRadius: "8px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)", boxShadow: "0 -1px 0 0 rgba(0, 0, 0, 0.12) inset, 0 -1px 2px 0 rgba(0, 0, 0, 0.10) inset, 0 1px 1px 0 rgba(255, 255, 255, 0.24) inset", backdropFilter: "blur(25px)" }}>
                    <p className="m-0" style={{ fontSize: "24px", fontWeight: "460", lineHeight: "115%", letterSpacing: "0.24px", textShadow: "0 0 3px rgba(0, 0, 0, 0.08), 0 0.5px 0.5px rgba(0, 0, 0, 0.12)" }}>
                      <span className="text-white">From the first DM</span>
                      {" "}
                      <span style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.80) -0.93%, rgba(255, 255, 255, 0.64) 104.17%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        to getting paid.
                      </span>
                    </p>
                    <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] btn-light-surface" href="#">
                      <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
                        <span className="text-[15px] font-[460] tracking-[0.15px]">Join the pilot</span>
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
            in India by Orry
          </span>
        </div>
      </div>
    </footer>
  )
}
