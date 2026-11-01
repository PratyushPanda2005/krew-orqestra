/** Four chapter books on the grid background, and the sticky download button. */
export function Books() {
  return (
    <div data-guide-books="true" className="relative w-full bg-surface">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="guide-books-bg h-full w-full max-w-[1400px] self-stretch bg-repeat-y bg-[position:50%_0] bg-[length:200%_auto] md:bg-[length:100%_auto]" style={{ backgroundImage: "image-set(url(\"/v2/decor/behind-the-books.avif\") type(\"image/avif\"), url(\"/v2/decor/behind-the-books.webp\") type(\"image/webp\"), url(\"/v2/decor/behind-the-books.png\") type(\"image/png\"))" }} />
      </div>
      <div className="h-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 flex flex-col gap-[60px] items-center">
        <div className="flex flex-col md:flex-row gap-[80px] justify-center">
          <a className="group shrink-0 select-none block" draggable="false" href="#" style={{ cursor: "grab" }}>
            <div className="relative">
              <div style={{ transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)", transform: "translateY(0px)" }}>
                <div className="flex items-stretch w-[290px] shrink-0 min-h-[350px]" style={{ borderRadius: "4px 12px 12px 4px", background: "#FAFAF7", boxShadow: "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)", overflow: "hidden" }}>
                  <div className="w-[16px] shrink-0" style={{ background: "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)" }} />
                  <div className="flex-1 flex flex-col" style={{ background: "#FAFAF7" }}>
                    <div className="px-[20px] pt-[32px] pb-[26px]">
                      <h3 style={{ margin: "0", maxWidth: "200px", textShadow: "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)", fontFamily: "var(--font-neoris)", fontSize: "20px", fontWeight: "440", lineHeight: "110%", letterSpacing: "-0.4px", color: "rgba(38,35,35,0.85)", whiteSpace: "pre-line" }}>
                        {"Chapter 1\nHow To Start"}
                      </h3>
                    </div>
                    <div className="px-[20px]">
                      <div style={{ height: "1px", background: "rgba(38,35,35,0.10)", boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)" }} />
                    </div>
                    <div className="px-[20px] mt-[10px]">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "8px", fontWeight: "500", lineHeight: "11.611px" }}>Chapter I</span>
                    </div>
                    <div className="mt-[12px] px-[20px]">
                      <img alt="" loading="lazy" width="290" height="0" decoding="async" className="w-full h-auto rounded-[6px]" style={{ color: "transparent" }} src="/v2/books-covers/UI-04/Frame-2147239727test-img-2.png" />
                    </div>
                    <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>
                        by Cofounder
                      </span>
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 331 122" preserveAspectRatio="none" fill="none" className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none" style={{ height: "30%" }}>
                <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                  <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_chap_clip_path)", height: "100%", width: "100%" }} />
                </foreignObject>
                <g filter="url(#filter0_chap)">
                  <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" fill="#CFCFCF" fillOpacity="0.16" shapeRendering="crispEdges" />
                </g>
                <defs>
                  <filter id="filter0_chap" x="-4" y="-5" width="338.508" height="129.741" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="1 1" stitchTiles="stitch" numOctaves="3" result="noise" seed="2856" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood floodColor="rgba(199, 199, 199, 0.06)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="shape" />
                      <feMergeNode in="color1" />
                    </feMerge>
                    <feBlend mode="normal" in="effect2_noise" in2="effect1_dropShadow" result="effect2_noise" />
                  </filter>
                  <clipPath id="bgblur_chap_clip_path" transform="translate(4 5)">
                    <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-[40px] flex justify-center">
              <div className="relative inline-flex items-center">
                <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                  Read this chapter (I)
                </span>
                <span className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z" fill="currentColor" fillOpacity="0.5" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
          <a className="group shrink-0 select-none block" draggable="false" href="#" style={{ cursor: "grab" }}>
            <div className="relative">
              <div style={{ transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)", transform: "translateY(0px)" }}>
                <div className="flex items-stretch w-[290px] shrink-0 min-h-[350px]" style={{ borderRadius: "4px 12px 12px 4px", background: "#FAFAF7", boxShadow: "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)", overflow: "hidden" }}>
                  <div className="w-[16px] shrink-0" style={{ background: "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)" }} />
                  <div className="flex-1 flex flex-col" style={{ background: "#FAFAF7" }}>
                    <div className="px-[20px] pt-[32px] pb-[26px]">
                      <h3 style={{ margin: "0", maxWidth: "200px", textShadow: "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)", fontFamily: "var(--font-neoris)", fontSize: "20px", fontWeight: "440", lineHeight: "110%", letterSpacing: "-0.4px", color: "rgba(38,35,35,0.85)", whiteSpace: "pre-line" }}>
                        {"Chapter 2\nHow To Build"}
                      </h3>
                    </div>
                    <div className="px-[20px]">
                      <div style={{ height: "1px", background: "rgba(38,35,35,0.10)", boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)" }} />
                    </div>
                    <div className="px-[20px] mt-[10px]">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "8px", fontWeight: "500", lineHeight: "11.611px" }}>Chapter II</span>
                    </div>
                    <div className="mt-[12px] px-[20px]">
                      <img alt="" loading="lazy" width="290" height="0" decoding="async" className="w-full h-auto rounded-[6px]" style={{ color: "transparent" }} src="/v2/books-covers/UI-04/Frame-2147239728.png" />
                    </div>
                    <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>
                        by Cofounder
                      </span>
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 331 122" preserveAspectRatio="none" fill="none" className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none" style={{ height: "30%" }}>
                <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                  <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_chap_clip_path)", height: "100%", width: "100%" }} />
                </foreignObject>
                <g filter="url(#filter0_chap)">
                  <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" fill="#CFCFCF" fillOpacity="0.16" shapeRendering="crispEdges" />
                </g>
                <defs>
                  <filter id="filter0_chap" x="-4" y="-5" width="338.508" height="129.741" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="1 1" stitchTiles="stitch" numOctaves="3" result="noise" seed="2856" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood floodColor="rgba(199, 199, 199, 0.06)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="shape" />
                      <feMergeNode in="color1" />
                    </feMerge>
                    <feBlend mode="normal" in="effect2_noise" in2="effect1_dropShadow" result="effect2_noise" />
                  </filter>
                  <clipPath id="bgblur_chap_clip_path" transform="translate(4 5)">
                    <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-[40px] flex justify-center">
              <div className="relative inline-flex items-center">
                <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                  Read this chapter (II)
                </span>
                <span className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z" fill="currentColor" fillOpacity="0.5" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-[80px] justify-center">
          <a className="group shrink-0 select-none block" draggable="false" href="#" style={{ cursor: "grab" }}>
            <div className="relative">
              <div style={{ transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)", transform: "translateY(0px)" }}>
                <div className="flex items-stretch w-[290px] shrink-0 min-h-[350px]" style={{ borderRadius: "4px 12px 12px 4px", background: "#FAFAF7", boxShadow: "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)", overflow: "hidden" }}>
                  <div className="w-[16px] shrink-0" style={{ background: "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)" }} />
                  <div className="flex-1 flex flex-col" style={{ background: "#FAFAF7" }}>
                    <div className="px-[20px] pt-[32px] pb-[26px]">
                      <h3 style={{ margin: "0", maxWidth: "200px", textShadow: "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)", fontFamily: "var(--font-neoris)", fontSize: "20px", fontWeight: "440", lineHeight: "110%", letterSpacing: "-0.4px", color: "rgba(38,35,35,0.85)", whiteSpace: "pre-line" }}>
                        {"Chapter 3\nHow To Sell"}
                      </h3>
                    </div>
                    <div className="px-[20px]">
                      <div style={{ height: "1px", background: "rgba(38,35,35,0.10)", boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)" }} />
                    </div>
                    <div className="px-[20px] mt-[10px]">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "8px", fontWeight: "500", lineHeight: "11.611px" }}>
                        Chapter III
                      </span>
                    </div>
                    <div className="mt-[12px] px-[20px]">
                      <img alt="" loading="lazy" width="290" height="0" decoding="async" className="w-full h-auto rounded-[6px]" style={{ color: "transparent" }} src="/v2/books-covers/UI-04/Frame-2147239727test-img.png" />
                    </div>
                    <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>
                        by Cofounder
                      </span>
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 331 122" preserveAspectRatio="none" fill="none" className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none" style={{ height: "30%" }}>
                <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                  <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_chap_clip_path)", height: "100%", width: "100%" }} />
                </foreignObject>
                <g filter="url(#filter0_chap)">
                  <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" fill="#CFCFCF" fillOpacity="0.16" shapeRendering="crispEdges" />
                </g>
                <defs>
                  <filter id="filter0_chap" x="-4" y="-5" width="338.508" height="129.741" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="1 1" stitchTiles="stitch" numOctaves="3" result="noise" seed="2856" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood floodColor="rgba(199, 199, 199, 0.06)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="shape" />
                      <feMergeNode in="color1" />
                    </feMerge>
                    <feBlend mode="normal" in="effect2_noise" in2="effect1_dropShadow" result="effect2_noise" />
                  </filter>
                  <clipPath id="bgblur_chap_clip_path" transform="translate(4 5)">
                    <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-[40px] flex justify-center">
              <div className="relative inline-flex items-center">
                <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                  Read this chapter (III)
                </span>
                <span className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z" fill="currentColor" fillOpacity="0.5" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
          <a className="group shrink-0 select-none block" draggable="false" href="#" style={{ cursor: "grab" }}>
            <div className="relative">
              <div style={{ transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)", transform: "translateY(0px)" }}>
                <div className="flex items-stretch w-[290px] shrink-0 min-h-[350px]" style={{ borderRadius: "4px 12px 12px 4px", background: "#FAFAF7", boxShadow: "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03), 0 9px 8px 0 rgba(0,0,0,0.02)", overflow: "hidden" }}>
                  <div className="w-[16px] shrink-0" style={{ background: "linear-gradient(270deg, rgba(210,208,202,0.20) 0%, rgba(230,228,224,0.10) 60%, rgba(245,244,241,0.02) 100%)" }} />
                  <div className="flex-1 flex flex-col" style={{ background: "#FAFAF7" }}>
                    <div className="px-[20px] pt-[32px] pb-[26px]">
                      <h3 style={{ margin: "0", maxWidth: "200px", textShadow: "0 0.5px 0.5px #FFF, 0 0.3px 0.3px rgba(0,0,0,0.12)", fontFamily: "var(--font-neoris)", fontSize: "20px", fontWeight: "440", lineHeight: "110%", letterSpacing: "-0.4px", color: "rgba(38,35,35,0.85)", whiteSpace: "pre-line" }}>
                        {"Chapter 4\nHow To Scale"}
                      </h3>
                    </div>
                    <div className="px-[20px]">
                      <div style={{ height: "1px", background: "rgba(38,35,35,0.10)", boxShadow: "0 0.5px 0 0 rgba(255,255,255,0.8)" }} />
                    </div>
                    <div className="px-[20px] mt-[10px]">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "8px", fontWeight: "500", lineHeight: "11.611px" }}>Chapter IV</span>
                    </div>
                    <div className="mt-[12px] px-[20px]">
                      <img alt="" loading="lazy" width="290" height="0" decoding="async" className="w-full h-auto rounded-[6px]" style={{ color: "transparent" }} src="/v2/books-covers/UI-04/Frame-2147239727.png" />
                    </div>
                    <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[18px] mt-auto">
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>
                        by Cofounder
                      </span>
                      <span style={{ color: "rgba(38,35,35,0.50)", fontFamily: "\"IBM Plex Mono\"", fontSize: "7px", fontWeight: "500", lineHeight: "11.611px" }}>2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 331 122" preserveAspectRatio="none" fill="none" className="absolute bottom-[-20px] left-[-20px] right-[-20px] w-[calc(100%+40px)] pointer-events-none" style={{ height: "30%" }}>
                <foreignObject x="-4" y="-5" width="338.508" height="129.741">
                  <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_chap_clip_path)", height: "100%", width: "100%" }} />
                </foreignObject>
                <g filter="url(#filter0_chap)">
                  <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" fill="#CFCFCF" fillOpacity="0.16" shapeRendering="crispEdges" />
                </g>
                <defs>
                  <filter id="filter0_chap" x="-4" y="-5" width="338.508" height="129.741" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="1 1" stitchTiles="stitch" numOctaves="3" result="noise" seed="2856" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood floodColor="rgba(199, 199, 199, 0.06)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect2_noise">
                      <feMergeNode in="shape" />
                      <feMergeNode in="color1" />
                    </feMerge>
                    <feBlend mode="normal" in="effect2_noise" in2="effect1_dropShadow" result="effect2_noise" />
                  </filter>
                  <clipPath id="bgblur_chap_clip_path" transform="translate(4 5)">
                    <path d="M1 0H329.508V95.7412C329.508 108.996 318.763 119.741 305.508 119.741H25C11.7452 119.741 1 108.996 1 95.7412V0Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mt-[40px] flex justify-center">
              <div className="relative inline-flex items-center">
                <span className="font-mono text-[12px] font-normal leading-[16px] text-ink-faint group-hover:text-[rgba(38,35,35,0.85)] transition-colors">
                  Read this chapter (IV)
                </span>
                <span className="absolute left-full top-0 bottom-0 ml-[6px] flex items-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate,transform] duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.39648 2.27145C6.59175 2.07618 6.90825 2.07618 7.10352 2.27145L10.4785 5.64645C10.5102 5.67815 10.5352 5.71388 10.5566 5.75094C10.5834 5.79721 10.6044 5.84723 10.6152 5.90133C10.6282 5.96607 10.6281 6.03287 10.6152 6.09762C10.5956 6.19648 10.5471 6.28494 10.4785 6.35348L7.10352 9.72848C6.90829 9.92362 6.59173 9.92359 6.39648 9.72848C6.20125 9.53324 6.2013 9.21671 6.39648 9.02145L8.91797 6.49996H1.875C1.59896 6.49992 1.37512 6.27598 1.375 5.99996C1.375 5.72384 1.59889 5.5 1.875 5.49996H8.91797L6.39648 2.97848C6.20125 2.78324 6.2013 2.46671 6.39648 2.27145Z" fill="currentColor" fillOpacity="0.5" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="h-[100px]" />
      <div className="sticky bottom-[32px] z-[90] mx-auto w-fit" style={{ pointerEvents: "none", transform: "translateY(100px)", opacity: "0", transition: "transform 400ms ease-in, opacity 300ms ease-in" }}>
        <a href="#" download="cofounder-founder-guide.pdf" className="btn-light-surface no-underline flex items-center justify-center overflow-hidden" style={{ width: "186px", height: "44px", padding: "0px 12px", transition: "width 700ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease-out, box-shadow 200ms ease-out", cursor: "pointer", gap: "10px", whiteSpace: "nowrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px", opacity: "1", transform: "scale(1)", transition: "opacity 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <span style={{ fontFamily: "var(--font-neoris)", fontSize: "15px", fontWeight: "460", lineHeight: "140%", letterSpacing: "0.15px", color: "rgba(32, 32, 32, 0.80)" }}>
              Download full guide
            </span>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "2.5px", background: "#B2E7FF", boxShadow: "0 1px 1px 0 rgba(0, 126, 183, 0.70), 0 0.5px 0.2px 0 #FFF inset, 0 0 0 1.5px #96DEFF", flexShrink: "0" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <g clipPath="url(#clip0_dl_icon)">
                  <g filter="url(#filter0_dl_icon)">
                    <path d="M11.3411 8.14307C11.5895 8.14307 11.7911 8.34491 11.7913 8.59326V11.3872C11.7912 11.6357 11.5895 11.8374 11.3411 11.8374H3.65845C3.41 11.8374 3.20834 11.6356 3.20825 11.3872V8.59326C3.20846 8.34493 3.41007 8.1431 3.65845 8.14307C3.90685 8.14307 4.10844 8.34491 4.10864 8.59326V10.937H10.8918V8.59326C10.8921 8.34503 11.0928 8.14325 11.3411 8.14307ZM7.50024 3.25439C7.74868 3.2545 7.95044 3.45613 7.95044 3.70459V7.50635L8.92798 6.52881C9.10369 6.35342 9.38905 6.35332 9.5647 6.52881C9.74034 6.70445 9.74014 6.98977 9.5647 7.16553L7.8186 8.91162C7.64287 9.08736 7.35762 9.08736 7.18188 8.91162L5.43579 7.16553C5.26019 6.98978 5.2601 6.7045 5.43579 6.52881C5.61151 6.35341 5.89686 6.3533 6.07251 6.52881L7.05005 7.50635V3.70459C7.05005 3.45606 7.25172 3.25439 7.50024 3.25439Z" fill="#0086C2" fillOpacity="0.9" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_dl_icon" x="3.20825" y="3.25439" width="8.58301" height="8.58301" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                  </filter>
                  <clipPath id="clip0_dl_icon">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </a>
      </div>
      <div className="h-[100px]" />
    </div>
  )
}
