/**
 * The hero's light: a prism band in the brand colours, rising over a dark hill, plus a
 * fainter crossing arc. Stands in for the reference's background video at ~0 KB: two
 * blurred SVGs that drift slowly (marketing.css), transform only.
 */

// One curve, drawn four times a little apart, gives the split-light (chromatic) edge.
const band = "M-160 980C120 640 420 560 700 600C960 640 1120 560 1280 400C1380 300 1500 240 1640 230"
const bandStrokes = [
  { y: -40, className: "stroke-brand-violet" },
  { y: -18, className: "stroke-brand-green" },
  { y: 2, className: "stroke-brand-lime" },
  { y: 22, className: "stroke-brand-coral" },
]
const arc = "M-120 180C280 250 600 520 820 480C1040 440 1220 170 1560 110"

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        data-drift="b"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-[-10%] size-[120%] opacity-35 blur-[22px] lg:blur-[32px]"
      >
        {bandStrokes.map((s) => (
          <path key={s.y} d={arc} fill="none" strokeWidth="22" transform={`translate(0 ${s.y * 0.8})`} className={s.className} />
        ))}
      </svg>
      <svg
        data-drift="a"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-[-10%] size-[120%] opacity-60 blur-[12px] lg:blur-[16px]"
      >
        {bandStrokes.map((s) => (
          <path key={s.y} d={band} fill="none" strokeWidth="24" transform={`translate(0 ${s.y})`} className={s.className} />
        ))}
        <path d={`${band}L1640 1200L-160 1200Z`} transform="translate(0 40)" className="fill-brand-navy-deep" />
      </svg>
    </div>
  )
}
