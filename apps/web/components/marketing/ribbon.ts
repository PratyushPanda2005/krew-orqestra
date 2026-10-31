/**
 * Geometry of the mess ribbon, after pixelismo's Works carousel (read from its scene code,
 * scena-about.js): 10 rounded panels 4.8 × 3 units with 1-unit gaps, in a loop tilted 10°,
 * bent along one cosine across the whole loop so the middle comes towards you (9 units deep)
 * and the ends fall away. Units are CSS lengths: 1 unit = var(--u) (marketing.css), so the
 * window is 5.2 × 3.35 units at every size. The server renders offset 0; LandingMotion moves it.
 */
export const ribbon = {
  count: 10,
  panelW: 4.8,
  panelH: 3,
  gap: 1,
  depth: 9,
  tiltDeg: -10,
  perspective: 15,
  /** Units a second (pixelismo: 0.45 desktop, 0.22 phones). */
  auto: { wide: 0.45, phone: 0.22 },
  /** Units per pixel scrolled (pixelismo's wheel speed, 0.008 desktop and 0.006 phones). */
  scroll: { wide: 0.008, phone: 0.006 },
  /** Share of the gap closed each 1/60 s (pixelismo's lerp). */
  lerp: 0.16,
} as const

const stride = ribbon.panelW + ribbon.gap
export const loop = stride * ribbon.count

/** Wraps v into [-size/2, size/2). */
const wrap = (v: number, size: number) => ((((v + size / 2) % size) + size) % size) - size / 2

/** Where panel i sits at a given offset (units): along the loop, pushed back by the curve, and turned to follow it. */
export function place(i: number, offset: number) {
  const x = wrap(i * stride - offset, loop)
  const k = (Math.PI * 2) / loop
  const z = (Math.cos(x * k) - 1) * ribbon.depth
  const turn = (Math.atan(ribbon.depth * k * Math.sin(x * k)) * 180) / Math.PI
  return `translate3d(calc(${x.toFixed(3)} * var(--u)), 0, calc(${z.toFixed(3)} * var(--u))) rotateY(${turn.toFixed(2)}deg)`
}
