"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

import { pitch, ribbon, ribbonPoint, ribbonSizes, smooth01, wrap, type RibbonSize } from "./ribbon"

export type RibbonPanel = { src: string; tag: string; caption: string }

/*
 * Draws the mess ribbon (ribbon.ts has the scene). Two canvases fill the section:
 *   - lines: a 2D canvas with each panel's outline, on the light ground (pixelismo shows the scene
 *     outside its window as edge lines);
 *   - photos: WebGL2, navy with the floor and wall grids and the bent photo panels, clipped by CSS
 *     to the rounded window in the middle (min(520px, 56vw) × 1.55:1, 30 px corners; 1.2× on hover).
 * No three.js: one shader for the panels (24-segment strips, bent in the vertex shader, rounded
 * in the fragment shader) and one for the grid lines. Runs only while on screen. With reduced
 * motion the camera is already turned and nothing drifts; without WebGL2 or JS the window shows
 * the first photo.
 */

const PANEL_VS = `#version 300 es
in vec2 aLocal;
uniform float uX, uLoop, uDepth, uDist, uTilt, uSinP, uCosP, uF, uAspect;
out vec2 vLocal;
void main() {
  float gx = uX + aLocal.x;
  float lift = cos(gx / uLoop * 6.2831853) * uDepth;
  float tx = gx * cos(uTilt) - aLocal.y * sin(uTilt);
  float ty = gx * sin(uTilt) + aLocal.y * cos(uTilt);
  float y = -uDist + lift;
  float z = -ty;
  float yc = y * uCosP - z * uSinP;
  float zc = y * uSinP + z * uCosP;
  vLocal = aLocal;
  gl_Position = vec4(uF * tx / uAspect, uF * yc, (zc * -1.001 - 0.2), -zc);
}`

const PANEL_FS = `#version 300 es
precision highp float;
in vec2 vLocal;
uniform sampler2D uTex;
uniform vec2 uHalf, uCropScale, uCropOffset;
uniform float uRadius, uHasTex;
uniform vec3 uFill;
out vec4 outColor;
void main() {
  vec2 q = abs(vLocal) - uHalf + uRadius;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;
  float aa = fwidth(d);
  float a = 1.0 - smoothstep(-aa, aa, d);
  if (a <= 0.0) discard;
  vec2 uv = (vLocal / (uHalf * 2.0)) * vec2(1.0, -1.0) + 0.5;
  vec3 c = uHasTex > 0.5 ? texture(uTex, uv * uCropScale + uCropOffset).rgb : uFill;
  outColor = vec4(c, a);
}`

const LINE_VS = `#version 300 es
in vec3 aPos;
uniform float uSinP, uCosP, uF, uAspect;
void main() {
  float yc = aPos.y * uCosP - aPos.z * uSinP;
  float zc = aPos.y * uSinP + aPos.z * uCosP;
  gl_Position = vec4(uF * aPos.x / uAspect, uF * yc, (zc * -1.001 - 0.2), -zc);
}`

const LINE_FS = `#version 300 es
precision highp float;
uniform vec4 uColor;
out vec4 outColor;
void main() { outColor = uColor; }`

function compile(gl: WebGL2RenderingContext, vs: string, fs: string) {
  const prog = gl.createProgram()!
  for (const [type, src] of [
    [gl.VERTEX_SHADER, vs],
    [gl.FRAGMENT_SHADER, fs],
  ] as const) {
    const sh = gl.createShader(type)!
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (process.env.NODE_ENV !== "production" && !gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(sh))
    gl.attachShader(prog, sh)
  }
  gl.linkProgram(prog)
  return gl.getProgramParameter(prog, gl.LINK_STATUS) ? prog : null
}

/** Grid lines (pixelismo: 4-unit cells): the floor 65 units down and the wall 70 ahead, as one line list in world space. */
function gridLines() {
  const { gridCell: c, gridHalf: h, floorY, wallZ } = ribbon
  const v: number[] = []
  for (let x = -h.w; x <= h.w; x += c) v.push(x, floorY, -h.h, x, floorY, h.h, x, -h.h, wallZ, x, h.h, wallZ)
  for (let t = -h.h; t <= h.h; t += c) v.push(-h.w, floorY, t, h.w, floorY, t, -h.w, t, wallZ, h.w, t, wallZ)
  return new Float32Array(v)
}

/** Points around a panel's rounded rectangle, clockwise from the top-left, in its own units, for the outline. */
function perimeter(size: RibbonSize) {
  const hw = size.panelW / 2
  const hh = size.panelH / 2
  const r = size.radius
  const n = size.segments
  const pts: [number, number][] = []
  const edge = (x0: number, y0: number, x1: number, y1: number) => {
    for (let k = 0; k <= n; k++) pts.push([x0 + ((x1 - x0) * k) / n, y0 + ((y1 - y0) * k) / n])
  }
  const arc = (cx: number, cy: number, from: number) => {
    for (let k = 1; k < 4; k++) {
      const a = from - (k / 4) * (Math.PI / 2)
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
    }
  }
  edge(-hw + r, hh, hw - r, hh)
  arc(hw - r, hh - r, Math.PI / 2)
  edge(hw, hh - r, hw, -hh + r)
  arc(hw - r, -hh + r, 0)
  edge(hw - r, -hh, -hw + r, -hh)
  arc(-hw + r, -hh + r, -Math.PI / 2)
  edge(-hw, -hh + r, -hw, hh - r)
  arc(-hw + r, hh - r, Math.PI)
  return pts
}

export function MessRibbon({
  panels,
  label,
  windowLabel,
  cursorLabel,
  fallback,
}: {
  panels: RibbonPanel[]
  label: string
  windowLabel: string
  cursorLabel: string
  fallback: React.ComponentProps<typeof Image>["src"]
}) {
  const root = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<HTMLCanvasElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const captionRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const host = root.current
    const section = host?.closest("section")
    const linesCanvas = linesRef.current
    const glCanvas = glRef.current
    if (!host || !section || !linesCanvas || !glCanvas) return
    const gl = glCanvas.getContext("webgl2", { antialias: true, alpha: false, premultipliedAlpha: false })
    const ctx = linesCanvas.getContext("2d")
    if (!gl || !ctx) return
    const panelProg = compile(gl, PANEL_VS, PANEL_FS)
    const lineProg = compile(gl, LINE_VS, LINE_FS)
    if (!panelProg || !lineProg) return
    host.setAttribute("data-gl", "")
    if (matchMedia("(prefers-reduced-motion: no-preference)").matches) host.setAttribute("data-play", "")

    const still = !matchMedia("(prefers-reduced-motion: no-preference)").matches
    const rgb = (v: string) => {
      const probe = document.createElement("span")
      probe.style.color = v
      host.append(probe)
      const m = getComputedStyle(probe).color.match(/[\d.]+/g)?.map(Number) ?? [0, 0, 0]
      probe.remove()
      return m
    }
    const navyDeep = rgb("var(--brand-navy-deep)")
    const navy = rgb("var(--brand-navy)")
    const snow = rgb("var(--brand-snow)")

    let size: RibbonSize = ribbonSizes.wide
    let loop = 0
    let W = 0
    let H = 0
    let dpr = 1
    let outline: [number, number][] = []

    // Panel strip: (segments + 1) × 2 vertices across the panel, drawn as a triangle strip.
    const stripBuf = gl.createBuffer()
    const buildStrip = () => {
      const v: number[] = []
      for (let k = 0; k <= size.segments; k++) {
        const x = -size.panelW / 2 + (size.panelW * k) / size.segments
        v.push(x, size.panelH / 2, x, -size.panelH / 2)
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, stripBuf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(v), gl.STATIC_DRAW)
    }
    const grid = gridLines()
    const gridBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuf)
    gl.bufferData(gl.ARRAY_BUFFER, grid, gl.STATIC_DRAW)

    const U = (prog: WebGLProgram, names: string[]) => Object.fromEntries(names.map((n) => [n, gl.getUniformLocation(prog, n)]))
    const pu = U(panelProg, ["uX", "uLoop", "uDepth", "uDist", "uTilt", "uSinP", "uCosP", "uF", "uAspect", "uTex", "uHalf", "uCropScale", "uCropOffset", "uRadius", "uHasTex", "uFill"])
    const lu = U(lineProg, ["uSinP", "uCosP", "uF", "uAspect", "uColor"])
    const aLocal = gl.getAttribLocation(panelProg, "aLocal")
    const aPos = gl.getAttribLocation(lineProg, "aPos")

    // Photos load once the section is near, through Next's image optimiser (see Mess).
    type Tex = { tex: WebGLTexture; w: number; h: number } | null
    const textures: Tex[] = panels.map(() => null)
    const bySrc = new Map<string, Promise<Tex>>()
    let loading = false
    const load = () => {
      if (loading) return
      loading = true
      panels.forEach((p, i) => {
        if (!bySrc.has(p.src))
          bySrc.set(
            p.src,
            new Promise((done) => {
              const img = new window.Image()
              img.decoding = "async"
              img.onload = () => {
                const tex = gl.createTexture()!
                gl.bindTexture(gl.TEXTURE_2D, tex)
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
                gl.generateMipmap(gl.TEXTURE_2D)
                done({ tex, w: img.naturalWidth, h: img.naturalHeight })
              }
              img.onerror = () => done(null)
              img.src = p.src
            })
          )
        bySrc.get(p.src)!.then((t) => {
          textures[i] = t
          draw()
        })
      })
    }

    const resize = () => {
      const phone = innerWidth < 768
      const next = phone ? ribbonSizes.phone : ribbonSizes.wide
      if (next !== size || !loop) {
        size = next
        loop = ribbon.count * (size.panelW + size.gap)
        buildStrip()
        outline = perimeter(size)
      }
      dpr = Math.min(devicePixelRatio || 1, phone ? 1.5 : 2)
      W = section.clientWidth
      H = section.clientHeight
      for (const c of [glCanvas, linesCanvas]) {
        c.width = Math.round(W * dpr)
        c.height = Math.round(H * dpr)
      }
      draw()
    }

    let turn = still ? 1 : 0
    let turnTarget = turn
    let drift = 0
    let shown = -1

    const target = () => {
      const top = section.getBoundingClientRect().top
      return still ? 1 : Math.min(Math.max(1 - top / innerHeight, 0), 1)
    }

    const draw = () => {
      if (!W || !H) return
      const p = smooth01(turn)
      const phi = pitch(p, size.dist)
      const sinP = Math.sin(phi)
      const cosP = Math.cos(phi)
      const f = 1 / Math.tan(((ribbon.fovDeg / 2) * Math.PI) / 180)
      const aspect = W / H
      const xs = Array.from({ length: ribbon.count }, (_, i) => wrap(i * (size.panelW + size.gap) + drift, loop))

      // Photos, grids and navy, in WebGL.
      gl.viewport(0, 0, glCanvas!.width, glCanvas!.height)
      gl.clearColor(navyDeep[0]! / 255, navyDeep[1]! / 255, navyDeep[2]! / 255, 1)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

      gl.useProgram(lineProg)
      gl.disable(gl.DEPTH_TEST)
      gl.uniform1f(lu.uSinP!, sinP)
      gl.uniform1f(lu.uCosP!, cosP)
      gl.uniform1f(lu.uF!, f)
      gl.uniform1f(lu.uAspect!, aspect)
      gl.uniform4f(lu.uColor!, snow[0]! / 255, snow[1]! / 255, snow[2]! / 255, 0.12)
      gl.bindBuffer(gl.ARRAY_BUFFER, gridBuf)
      gl.enableVertexAttribArray(aPos)
      gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0)
      gl.drawArrays(gl.LINES, 0, grid.length / 3)
      gl.disableVertexAttribArray(aPos)

      gl.useProgram(panelProg)
      gl.enable(gl.DEPTH_TEST)
      gl.bindBuffer(gl.ARRAY_BUFFER, stripBuf)
      gl.enableVertexAttribArray(aLocal)
      gl.vertexAttribPointer(aLocal, 2, gl.FLOAT, false, 0, 0)
      gl.uniform1f(pu.uLoop!, loop)
      gl.uniform1f(pu.uDepth!, size.depth)
      gl.uniform1f(pu.uDist!, size.dist)
      gl.uniform1f(pu.uTilt!, (ribbon.tiltDeg * Math.PI) / 180)
      gl.uniform1f(pu.uSinP!, sinP)
      gl.uniform1f(pu.uCosP!, cosP)
      gl.uniform1f(pu.uF!, f)
      gl.uniform1f(pu.uAspect!, aspect)
      gl.uniform2f(pu.uHalf!, size.panelW / 2, size.panelH / 2)
      gl.uniform1f(pu.uRadius!, size.radius)
      gl.uniform3f(pu.uFill!, navy[0]! / 255, navy[1]! / 255, navy[2]! / 255)
      gl.uniform1i(pu.uTex!, 0)
      gl.activeTexture(gl.TEXTURE0)
      const panelAspect = size.panelW / size.panelH
      xs.forEach((x, i) => {
        const t = textures[i]
        gl.uniform1f(pu.uX!, x)
        gl.uniform1f(pu.uHasTex!, t ? 1 : 0)
        if (t) {
          gl.bindTexture(gl.TEXTURE_2D, t.tex)
          // object-fit: cover
          const imgAspect = t.w / t.h
          const sx = imgAspect > panelAspect ? panelAspect / imgAspect : 1
          const sy = imgAspect > panelAspect ? 1 : imgAspect / panelAspect
          gl.uniform2f(pu.uCropScale!, sx, sy)
          gl.uniform2f(pu.uCropOffset!, (1 - sx) / 2, (1 - sy) / 2)
        }
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, (size.segments + 1) * 2)
      })
      gl.disableVertexAttribArray(aLocal)

      // Outlines on the light ground, projected the same way.
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, W, H)
      ctx!.strokeStyle = `rgb(${navy[0]} ${navy[1]} ${navy[2]} / 0.25)`
      ctx!.lineWidth = 1.25
      ctx!.lineJoin = "round"
      xs.forEach((x) => {
        ctx!.beginPath()
        let ok = true
        outline.forEach(([lx, ly], k) => {
          const [px, py, pz] = ribbonPoint(x + lx, ly, size, loop, sinP, cosP)
          if (pz > -0.2) ok = false
          const sx = W / 2 + ((f * px) / -pz) * (H / 2)
          const sy = H / 2 - ((f * py) / -pz) * (H / 2)
          if (k) ctx!.lineTo(sx, sy)
          else ctx!.moveTo(sx, sy)
        })
        ctx!.closePath()
        if (ok) ctx!.stroke()
      })

      // The panel nearest the middle names its fragment in the window.
      let near = 0
      xs.forEach((x, i) => Math.abs(x) < Math.abs(xs[near]!) && (near = i))
      if (near !== shown && tagRef.current && captionRef.current) {
        shown = near
        tagRef.current.textContent = panels[near]!.tag
        captionRef.current.textContent = panels[near]!.caption
      }
    }

    let on = false
    let frame = 0
    let last = 0
    const tick = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60
      last = now
      turnTarget = target()
      turn += (turnTarget - turn) * (1 - Math.pow(1 - ribbon.turnLerp, dt * 60))
      if (Math.abs(turnTarget - turn) < 1e-4) turn = turnTarget
      if (!still && turn > ribbon.driftFrom) drift = wrap(drift - size.drift * dt, loop)
      draw()
      frame = on && !still ? requestAnimationFrame(tick) : 0
      if (!frame) last = 0
    }
    const seen = new IntersectionObserver(
      ([e]) => {
        on = !!e?.isIntersecting
        if (on) load()
        if (on && !frame) frame = requestAnimationFrame(tick)
      },
      { rootMargin: "25% 0px" }
    )
    seen.observe(section)
    const ro = new ResizeObserver(resize)
    ro.observe(section)
    resize()

    // pixelismo's portal cursor: a small snow disc with a word, following the pointer over the window.
    const portal = host.querySelector<HTMLElement>("[data-portal]")
    const cursor = cursorRef.current
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !cursor) return
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursor.setAttribute("data-on", "")
    }
    const leave = () => cursor?.removeAttribute("data-on")
    portal?.addEventListener("pointermove", move)
    portal?.addEventListener("pointerleave", leave)

    return () => {
      seen.disconnect()
      ro.disconnect()
      cancelAnimationFrame(frame)
      portal?.removeEventListener("pointermove", move)
      portal?.removeEventListener("pointerleave", leave)
      host.removeAttribute("data-gl")
      host.removeAttribute("data-play")
    }
  }, [panels])

  return (
    <div ref={root} data-ribbon className="absolute inset-0">
      <canvas ref={linesRef} aria-hidden className="absolute inset-0 size-full" />
      {/* The window: the WebGL layer clipped to a centred rounded rectangle (marketing.css). */}
      <div data-portal-clip aria-hidden className="absolute inset-0 bg-brand-navy-deep">
        <Image data-fallback src={fallback} alt="" fill sizes="56vw" className="object-cover" />
        <canvas ref={glRef} className="absolute inset-0 size-full" />
      </div>
      <a
        href="#how"
        data-portal
        className="absolute top-1/2 left-1/2 h-[var(--wh)] w-[var(--ww)] -translate-x-1/2 -translate-y-1/2 rounded-[30px] text-brand-snow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
      >
        <span className="sr-only">{label}</span>
        <span aria-hidden className="absolute top-4 left-4 flex flex-col items-start gap-1.5">
          <span ref={tagRef} className="rounded-md bg-brand-navy-deep/40 px-2 py-1 text-[0.6875rem] font-medium ring-1 ring-brand-snow/20 backdrop-blur-md">
            {panels[0]!.tag}
          </span>
          <span ref={captionRef} className="max-w-[16rem] text-xs leading-snug font-medium [text-shadow:0_1px_8px_rgb(0_0_0/0.45)] lg:text-sm">
            {panels[0]!.caption}
          </span>
        </span>
        <span aria-hidden className="absolute bottom-4 left-4 font-display text-2xl leading-none font-bold tracking-[0.04em] uppercase mix-blend-difference">
          {windowLabel}
        </span>
      </a>
      <span ref={cursorRef} data-portal-cursor aria-hidden className="pointer-events-none fixed top-0 left-0 z-50">
        <span className="flex size-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-snow text-center text-[0.6rem] leading-[1.05] font-semibold tracking-[0.06em] text-brand-navy uppercase">
          {cursorLabel}
        </span>
      </span>
    </div>
  )
}
