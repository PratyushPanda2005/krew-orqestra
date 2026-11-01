/** Shared SVG filters used by headline text. */
export function SvgDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute", width: "0", height: "0", overflow: "hidden" }}>
      <defs>
        <filter id="headline-inner-shadow-dark">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" />
          <feOffset dx="0" dy="2" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
          <feColorMatrix in="shadowDiff" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.75 0" result="shadow" />
          <feComposite in="shadow" in2="SourceGraphic" operator="over" />
        </filter>
        <filter id="headline-inner-shadow-light">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" />
          <feOffset dx="0" dy="2" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
          <feColorMatrix in="shadowDiff" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.75 0" result="shadow" />
          <feComposite in="shadow" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}
