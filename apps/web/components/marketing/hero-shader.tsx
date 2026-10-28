"use client"

import { useEffect, useRef } from "react"

/*
 * The hero's light as a fragment shader: a prism band in the brand colours over a dark hill,
 * a fainter arc above it, film grain, and a pointer that bends the band and lights it up.
 * Plain WebGL on one full-screen triangle (no three.js: ~3 KB instead of ~150 KB gz).
 * Starts after load plus idle, pauses off screen and in background tabs. Without WebGL,
 * JS or motion, the CSS backdrop underneath (HeroBackdrop) is what people see.
 */

const vert = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`

const frag = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
uniform vec3 cViolet, cGreen, cLime, cCoral, cNavy, cDeep;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// 0 = top edge of the band to 1 = bottom edge. Mostly violet into green; lime and coral
// only as thin edges, so the colours stay clean instead of mixing to olive.
vec3 spectrum(float s) {
  vec3 c = mix(cViolet, cGreen, smoothstep(0.05, 0.5, s));
  c = mix(c, cLime, smoothstep(0.62, 0.78, s) * 0.6);
  return mix(c, cCoral, smoothstep(0.8, 1.0, s) * 0.7);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  float t = uTime;
  float x = uv.x;

  // Main band, after the reference: rises from the bottom left, arches, dips, then climbs right.
  float y = 0.12 + 0.30 * smoothstep(0.0, 0.45, x) - 0.08 * exp(-pow((x - 0.62) / 0.1, 2.0))
    + 0.35 * smoothstep(0.6, 1.0, x)
    + 0.035 * sin(x * 3.1 + t * 0.25) + 0.02 * sin(x * 7.0 - t * 0.33);
  // Tall phone screens: a gentler curve, so it reads as a band, not a zigzag.
  y = 0.2 + (y - 0.2) * mix(0.55, 1.0, clamp(aspect, 0.0, 1.0));
  float md = distance(p, m);
  float near = uHover * exp(-md * md * 9.0);
  y += (m.y - y) * 0.22 * near;
  float d = uv.y - y;
  float w = 0.07 + 0.015 * near;

  vec3 col = mix(cDeep, cNavy, smoothstep(0.0, 1.2, uv.y) * 0.55);

  float core = exp(-pow(d / w, 2.0) * 1.8);
  float s = clamp(0.5 - d / (2.2 * w), 0.0, 1.0);
  col += spectrum(s) * core * (0.42 + 0.2 * near);
  col += mix(cViolet, cNavy, 0.55) * exp(-max(d, 0.0) * 6.0) * 0.14;

  // The dark hill under the band.
  col = mix(col, cDeep * 0.55, smoothstep(-0.03, -0.15, d) * 0.94);

  // Fainter arc above, drifting the other way.
  float y2 = 0.78 - 0.16 * exp(-pow((x - 0.35) / 0.25, 2.0)) + 0.04 * sin(x * 4.0 - t * 0.2);
  y2 += (m.y - y2) * 0.12 * uHover * exp(-md * md * 6.0);
  float d2 = uv.y - y2;
  float w2 = 0.09;
  col += spectrum(clamp(0.5 - d2 / (2.2 * w2), 0.0, 1.0)) * exp(-pow(d2 / w2, 2.0) * 1.5) * 0.14;

  // A soft light that follows the pointer.
  col += cGreen * 0.05 * uHover * exp(-md * md * 14.0);

  // Rich, not bright: a little extra saturation, and a soft roll-off instead of clipping.
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(luma), col, 1.3);
  col = col / (1.0 + max(max(col.r, col.g), col.b) * 0.5);
  col += (hash(gl_FragCoord.xy + fract(t) * 91.0) - 0.5) * 0.035;
  gl_FragColor = vec4(col, 1.0);
}`

const brand = ["violet", "green", "lime", "coral", "navy", "navy-deep"] as const
const uniforms = ["cViolet", "cGreen", "cLime", "cCoral", "cNavy", "cDeep"] as const

function rgb(hex: string): [number, number, number] {
  const n = parseInt(hex.trim().replace("#", ""), 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

function afterLoadAndIdle(run: () => void) {
  const idle = () =>
    typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(run, { timeout: 1500 }) : window.setTimeout(run, 200)
  if (document.readyState === "complete") idle()
  else window.addEventListener("load", idle, { once: true })
}

export function HeroShader() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const hero = canvas?.closest<HTMLElement>("[data-hero]")
    if (!canvas || !hero || !matchMedia("(prefers-reduced-motion: no-preference)").matches) return
    let stop = () => {}
    let cancelled = false

    afterLoadAndIdle(() => {
      if (cancelled) return
      const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" })
      if (!gl) return

      const shader = (type: number, src: string) => {
        const s = gl.createShader(type)!
        gl.shaderSource(s, src)
        gl.compileShader(s)
        return s
      }
      const prog = gl.createProgram()!
      gl.attachShader(prog, shader(gl.VERTEX_SHADER, vert))
      gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, frag))
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
      gl.useProgram(prog)

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      gl.enableVertexAttribArray(0)
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

      // Colours come from the brand tokens in globals.css, so the shader never drifts from them.
      const u = (name: string) => gl.getUniformLocation(prog, name)
      const css = getComputedStyle(document.documentElement)
      brand.forEach((b, i) => gl.uniform3fv(u(uniforms[i]!), rgb(css.getPropertyValue(`--brand-${b}`))))
      const uRes = u("uRes")
      const uTime = u("uTime")
      const uMouse = u("uMouse")
      const uHover = u("uHover")

      // Phones draw at 1×; big screens at up to 1.5×, since the image is soft anyway.
      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, innerWidth < 768 ? 1 : 1.5)
        canvas.width = Math.round(canvas.clientWidth * dpr)
        canvas.height = Math.round(canvas.clientHeight * dpr)
        gl.viewport(0, 0, canvas.width, canvas.height)
        gl.uniform2f(uRes, canvas.width, canvas.height)
      }
      resize()
      const ro = new ResizeObserver(resize)
      ro.observe(canvas)

      // Pointer (mouse only), eased each frame so the band follows smoothly.
      const target = { x: 0.7, y: 0.4, hover: 0 }
      const now = { ...target }
      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return
        const r = hero.getBoundingClientRect()
        target.x = (e.clientX - r.left) / r.width
        target.y = 1 - (e.clientY - r.top) / r.height
        target.hover = 1
      }
      const onLeave = () => (target.hover = 0)
      hero.addEventListener("pointermove", onMove)
      hero.addEventListener("pointerleave", onLeave)

      let raf = 0
      let visible = true
      const start = performance.now()
      const frame = (ts: number) => {
        now.x += (target.x - now.x) * 0.06
        now.y += (target.y - now.y) * 0.06
        now.hover += (target.hover - now.hover) * 0.04
        gl.uniform1f(uTime, (ts - start) / 1000)
        gl.uniform2f(uMouse, now.x, now.y)
        gl.uniform1f(uHover, now.hover)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
        if (!hero.hasAttribute("data-gl")) hero.setAttribute("data-gl", "")
        raf = visible && !document.hidden ? requestAnimationFrame(frame) : 0
      }
      const resume = () => {
        if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame)
      }
      const io = new IntersectionObserver(([e]) => {
        visible = !!e?.isIntersecting
        resume()
      })
      io.observe(canvas)
      document.addEventListener("visibilitychange", resume)
      resume()

      stop = () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        io.disconnect()
        document.removeEventListener("visibilitychange", resume)
        hero.removeEventListener("pointermove", onMove)
        hero.removeEventListener("pointerleave", onLeave)
        hero.removeAttribute("data-gl")
      }
    })

    return () => {
      cancelled = true
      stop()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      data-gl-canvas
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full opacity-0 transition-opacity duration-1000"
    />
  )
}
