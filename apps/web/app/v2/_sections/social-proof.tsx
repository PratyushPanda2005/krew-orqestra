/** Logo tiles with the hover pill, and the company count. */
export function SocialProof() {
  return (
    <div id="social-proof" aria-label="Apps Krew works with" className="w-full bg-surface flex flex-col items-center pt-[32px] pb-[72px] max-[700px]:pt-[24px] max-[700px]:pb-[56px]">
      <div data-logo-strip className="relative grid grid-cols-2 justify-items-center min-[1001px]:flex min-[1001px]:items-center">
        <a className="flex items-center justify-center p-[6px] cursor-pointer" aria-label="See how Krew connects" href="#capabilities">
          <div className="logo-tile flex items-center justify-center w-[170px] h-[84px] p-[28px]">
            <span className="whitespace-nowrap text-[17px] font-[520] leading-none text-ink/70">Instagram</span>
          </div>
        </a>
        <a className="flex items-center justify-center p-[6px] cursor-pointer" aria-label="See how Krew connects" href="#capabilities">
          <div className="logo-tile flex items-center justify-center w-[170px] h-[84px] p-[28px]">
            <span className="whitespace-nowrap text-[17px] font-[520] leading-none text-ink/70">WhatsApp</span>
          </div>
        </a>
        <a className="flex items-center justify-center p-[6px] cursor-pointer" aria-label="See how Krew connects" href="#capabilities">
          <div className="logo-tile flex items-center justify-center w-[170px] h-[84px] p-[28px]">
            <span className="whitespace-nowrap text-[17px] font-[520] leading-none text-ink/70">Gmail</span>
          </div>
        </a>
        <a className="flex items-center justify-center p-[6px] cursor-pointer" aria-label="See how Krew connects" href="#capabilities">
          <div className="logo-tile flex items-center justify-center w-[170px] h-[84px] p-[28px]">
            <span className="whitespace-nowrap text-[17px] font-[520] leading-none text-ink/70">UPI</span>
          </div>
        </a>
        <div data-logo-pill className="pointer-events-none absolute z-50 -translate-x-1/2 translate-y-[24px] transition-[opacity,scale] ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 scale-[0.8] duration-200" style={{ left: "0", top: "0" }}>
          <span className="logo-pill inline-flex min-w-[32px] items-center gap-[4px] whitespace-nowrap">
            <span className="m-0 text-[13px] font-[460] leading-[140%] tracking-[0.13px] text-white/90">How it connects</span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g clipPath="url(#clip0_762_8763)">
                  <g filter="url(#filter0_ii_762_8763)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.39648 2.27169C6.59175 2.07643 6.90825 2.07643 7.10352 2.27169L10.4785 5.64669C10.5102 5.6784 10.5352 5.71413 10.5566 5.75118C10.5834 5.79745 10.6044 5.84747 10.6152 5.90157C10.6282 5.96631 10.6281 6.03311 10.6152 6.09786C10.5956 6.19673 10.5471 6.28518 10.4785 6.35372L7.10352 9.72872C6.90829 9.92387 6.59173 9.92384 6.39648 9.72872C6.20125 9.53348 6.2013 9.21696 6.39648 9.02169L8.91797 6.50021H1.875C1.59896 6.50017 1.37512 6.27622 1.375 6.00021C1.375 5.72409 1.59889 5.50024 1.875 5.50021H8.91797L6.39648 2.97872C6.20125 2.78348 6.2013 2.46696 6.39648 2.27169Z" fill="white" fillOpacity="0.5" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_ii_762_8763" x="1.375" y="2.12524" width="9.24988" height="7.74976" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_762_8763" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-0.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow_762_8763" result="effect2_innerShadow_762_8763" />
                  </filter>
                  <clipPath id="clip0_762_8763">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </div>
      </div>
      <p className="m-0 text-[13px] font-[460] leading-[140%] tracking-[0.13px] mt-6 text-ink-faint text-center max-w-[366px]">
        <span className="shimmer">Works with the apps</span>
        {" your clients already use"}
      </p>
    </div>
  )
}
