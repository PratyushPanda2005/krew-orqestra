"use client"

import { cn } from "@krew/ui/lib/utils"
import { useEffect, useRef } from "react"

/*
 * Grainy shader gradients for the dark sections, in the styles of grainient.supply, painted
 * in the brand colours:
 *   aurora   a glowing horizon band low in the frame, with soft light above (join, footer)
 *   streaks  vertical spectral light, brighter towards the bottom, slowly shifting (questions)
 *   mesh     big soft blobs of colour drifting through each other (spare, for wide panels)
 * All carry film grain and follow the pointer a little. Plain WebGL on one triangle, like the
 * hero. Starts after load plus idle, draws only while on screen, and never under reduced
 * motion: the CSS gradient underneath (data-grad, marketing.css) is the still version.
 */

const kinds = { aurora: 0, streaks: 1, mesh: 2 } as const
export type ShaderKind = keyof typeof kinds

const vert = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`

const frag = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime, uKind, uHover;
uniform vec2 uMouse;
uniform vec3 cViolet, cGreen, cLime, cCoral, cNavy, cDeep;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}
vec3 spectrum(float s) {
  vec3 c = mix(cViolet, cGreen, smoothstep(0.1, 0.55, s));
  c = mix(c, cLime, smoothstep(0.62, 0.8, s) * 0.6);
  return mix(c, cCoral, smoothstep(0.82, 1.0, s) * 0.7);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  float t = uTime;
  float near = uHover * exp(-pow(distance(p, m), 2.0) * 3.0);
  vec3 col = mix(cDeep, cNavy, uv.y * 0.35);

  if (uKind < 0.5) {
    // Aurora: an arched horizon of light, warped by slow noise.
    float w = fbm(vec2(uv.x * 2.2 + t * 0.04, t * 0.05));
    float y = 0.22 + 0.16 * (1.0 - pow(abs(uv.x - 0.5) * 1.6, 2.0)) + 0.08 * (w - 0.5) + 0.05 * near;
    float d = uv.y - y;
    float band = exp(-pow(d / 0.06, 2.0));
    float glow = exp(-max(d, 0.0) * 3.5) * smoothstep(-0.05, 0.02, d);
    col += spectrum(clamp(uv.x * 0.9 + 0.1 * w, 0.0, 1.0)) * (band * 0.75 + glow * 0.28);
    col = mix(col, cDeep * 0.7, smoothstep(-0.02, -0.2, d) * 0.9);
  } else if (uKind < 1.5) {
    // Streaks: thin vertical lines of light, brighter low down, drifting sideways.
    float x = uv.x * aspect;
    float lines = pow(noise(vec2(x * 38.0 + t * 0.15, 0.0)), 6.0) * 2.2 + pow(noise(vec2(x * 11.0 - t * 0.08, 3.0)), 3.0) * 0.7;
    float rise = smoothstep(0.05, 0.95, 1.0 - uv.y);
    float flick = 0.75 + 0.25 * noise(vec2(x * 6.0, t * 0.4));
    col += spectrum(fract(uv.x * 1.3 + 0.1 * sin(t * 0.1))) * lines * rise * flick * 0.42;
    col += spectrum(0.3) * exp(-pow((uv.y - 0.0) / 0.35, 2.0)) * 0.12;
    col += spectrum(0.5) * near * 0.12;
  } else {
    // Mesh: drifting blobs of colour, sized to the width so a thin strip still reads as one wash.
    vec2 r = vec2(uv.x * 1.6, uv.y * 0.6);
    vec2 q = r + 0.3 * vec2(fbm(r * 1.6 + t * 0.05), fbm(r * 1.6 - t * 0.04));
    float a = smoothstep(0.75, 0.0, distance(q, vec2(0.35 + 0.15 * sin(t * 0.13), 0.42)));
    float b = smoothstep(0.75, 0.0, distance(q, vec2(1.15, 0.2 + 0.1 * cos(t * 0.11))));
    float c = smoothstep(0.6, 0.0, distance(q, vec2(0.8 + 0.2 * cos(t * 0.09), 0.55)));
    col += cViolet * a * 0.55 + cGreen * b * 0.45 + cCoral * c * 0.35 + cLime * near * 0.1;
  }

  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(luma), col, 1.25);
  col = col / (1.0 + max(max(col.r, col.g), col.b) * 0.45);
  col += (hash(gl_FragCoord.xy + fract(t) * 91.0) - 0.5) * 0.07;
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
    typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(run, { timeout: 2000 }) : window.setTimeout(run, 300)
  if (document.readyState === "complete") idle()
  else window.addEventListener("load", idle, { once: true })
}

/** A grainy gradient: the CSS version always, the shader on top once it can draw. */
export function ShaderGradient({ kind, className }: { kind: ShaderKind; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const host = canvas?.parentElement
    if (!canvas || !host || !matchMedia("(prefers-reduced-motion: no-preference)").matches) return
    let stop = () => {}
    let cancelled = false
    let started = false

    // Only set WebGL up when the gradient first comes near the screen.
    const near = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting || started) return
        started = true
        near.disconnect()
        afterLoadAndIdle(() => !cancelled && (stop = run(canvas, host, kinds[kind])))
      },
      { rootMargin: "50% 0px" }
    )
    near.observe(host)
    return () => {
      cancelled = true
      near.disconnect()
      stop()
    }
  }, [kind])

  return (
    <div aria-hidden data-grad={kind} data-grain className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <canvas ref={ref} className="absolute inset-0 size-full opacity-0 transition-opacity duration-1000 data-[on]:opacity-100" />
    </div>
  )
}

function run(canvas: HTMLCanvasElement, host: HTMLElement, kind: number) {
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" })
  if (!gl) return () => {}
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
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return () => {}
  gl.useProgram(prog)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

  const u = (name: string) => gl.getUniformLocation(prog, name)
  const css = getComputedStyle(document.documentElement)
  brand.forEach((b, i) => gl.uniform3fv(u(uniforms[i]!), rgb(css.getPropertyValue(`--brand-${b}`))))
  gl.uniform1f(u("uKind"), kind)
  const uRes = u("uRes")
  const uTime = u("uTime")
  const uMouse = u("uMouse")
  const uHover = u("uHover")

  // Soft images: 1× everywhere is plenty, and it keeps phones cool.
  const resize = () => {
    canvas.width = Math.round(canvas.clientWidth)
    canvas.height = Math.round(canvas.clientHeight)
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)

  // The pointer is read from the section the gradient sits in (the canvas ignores it).
  const section = host.closest("section, footer") ?? host
  const target = { x: 0.5, y: 0.5, hover: 0 }
  const now = { ...target }
  const onMove = (e: Event) => {
    const pe = e as PointerEvent
    if (pe.pointerType !== "mouse") return
    const r = canvas.getBoundingClientRect()
    target.x = (pe.clientX - r.left) / r.width
    target.y = 1 - (pe.clientY - r.top) / r.height
    target.hover = 1
  }
  const onLeave = () => (target.hover = 0)
  section.addEventListener("pointermove", onMove)
  section.addEventListener("pointerleave", onLeave)

  let raf = 0
  let visible = true
  const start = performance.now()
  const frame = (ts: number) => {
    now.x += (target.x - now.x) * 0.05
    now.y += (target.y - now.y) * 0.05
    now.hover += (target.hover - now.hover) * 0.04
    gl.uniform1f(uTime, (ts - start) / 1000)
    gl.uniform2f(uMouse, now.x, now.y)
    gl.uniform1f(uHover, now.hover)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    canvas.setAttribute("data-on", "")
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

  return () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
    document.removeEventListener("visibilitychange", resume)
    section.removeEventListener("pointermove", onMove)
    section.removeEventListener("pointerleave", onLeave)
    gl.getExtension("WEBGL_lose_context")?.loseContext()
  }
}
