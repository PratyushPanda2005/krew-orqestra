/**
 * The mess ribbon, after pixelismo's home Works carousel, with the numbers from its scene
 * (scena-about.js). A camera with a 40° field of view never moves; as the section comes up
 * (1 − its top / the screen height, eased by 0.095 a frame, smoothstep) it turns from looking
 * ahead to looking straight down at a floor 22 units below (19.5 on phones). On that floor lie
 * 10 rounded panels in a loop, tilted 10°, each bent vertex by vertex along one cosine over the
 * whole loop, so the middle rises 9 units towards the camera (4.5 on phones) and the ends sink.
 * Once the turn is past 0.12 the loop drifts left, 0.45 units a second (0.22 on phones). A
 * faint grid lies 65 units down, and a wall grid stands 70 units ahead.
 */

export type RibbonSize = {
  panelW: number
  panelH: number
  gap: number
  depth: number
  dist: number
  radius: number
  segments: number
  drift: number
}

export const ribbonSizes: { wide: RibbonSize; phone: RibbonSize } = {
  wide: { panelW: 4.8, panelH: 3, gap: 1, depth: 9, dist: 22, radius: 0.2, segments: 24, drift: 0.45 },
  phone: { panelW: 4.3, panelH: 2.7, gap: 0.75, depth: 4.5, dist: 19.5, radius: 0.16, segments: 16, drift: 0.22 },
}

export const ribbon = {
  count: 10,
  tiltDeg: 10,
  fovDeg: 40,
  /** Where the intro camera looks, and the floor and wall grids (pixelismo's CAMERA_Z, grid Y and Z). */
  ahead: 25,
  floorY: -65,
  wallZ: -70,
  gridCell: 4,
  gridHalf: { w: 90, h: 50 },
  /** Turn easing per 1/60 s, and when the drift starts. */
  turnLerp: 0.095,
  driftFrom: 0.12,
} as const

/** Wraps v into [-size/2, size/2). */
export const wrap = (v: number, size: number) => ((((v + size / 2) % size) + size) % size) - size / 2

export const smooth01 = (t: number) => {
  const x = Math.min(Math.max(t, 0), 1)
  return x * x * (3 - 2 * x)
}

/** How far the camera looks down (radians) at turn p: its target slides from 25 ahead to `dist` below. */
export const pitch = (p: number, dist: number) => Math.atan2(dist * p, ribbon.ahead * (1 - p))

/**
 * A point on the ribbon in camera space. `gx` runs along the loop (panel centre + local x), `ly`
 * across it; the cosine lifts it, the 10° tilt turns it in the floor, and the camera's pitch
 * turns the world. Returns [x, y, z] with the camera looking down −z.
 */
export function ribbonPoint(gx: number, ly: number, size: RibbonSize, loop: number, sinPitch: number, cosPitch: number) {
  const lift = Math.cos((gx / loop) * Math.PI * 2) * size.depth
  const t = (ribbon.tiltDeg * Math.PI) / 180
  const tx = gx * Math.cos(t) - ly * Math.sin(t)
  const ty = gx * Math.sin(t) + ly * Math.cos(t)
  const y = -size.dist + lift
  const z = -ty
  return [tx, y * cosPitch - z * sinPitch, y * sinPitch + z * cosPitch] as const
}
