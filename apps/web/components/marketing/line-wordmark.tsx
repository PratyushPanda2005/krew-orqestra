"use client"

import { cn } from "@krew/ui/lib/utils"
import { useEffect, useRef } from "react"

/**
 * The footer's giant wordmark, after trionn: the letters drawn as horizontal lines, and the
 * lines near the pointer slide sideways, then settle. The text is rasterised once in Lexend
 * Deca to find each line's runs; then one 2D canvas redraws only while something moves.
 * Without JS (or before it runs) the CSS version shows: the same word, striped (marketing.css).
 * Decorative: the brand name is in the nav and the footer text.
 */
export function LineWordmark({ text, className }: { text: string; className?: string }) {
  const box = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const host = box.current
    const canvas = ref.current
    const ctx = canvas?.getContext("2d")
    if (!host || !canvas || !ctx) return
    const motion = matchMedia("(prefers-reduced-motion: no-preference)").matches
    let runs: { y: number; x0: number; x1: number }[] = []
    let shift: number[] = []
    let raf = 0
    let gap = 14
    const pointer = { x: -1e4, y: -1e4 }

    const layout = async () => {
      await document.fonts.ready
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = host.clientWidth
      gap = w < 768 ? 9 : 14
      const family = getComputedStyle(host).fontFamily
      // Size the word to the full width, then read its pixels row by row.
      const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!
      probe.font = `700 100px ${family}`
      const m = probe.measureText(text)
      const size = (100 * w) / (m.actualBoundingBoxLeft + m.actualBoundingBoxRight)
      probe.font = `700 ${size}px ${family}`
      const mm = probe.measureText(text)
      const h = Math.ceil(mm.actualBoundingBoxAscent + mm.actualBoundingBoxDescent)
      probe.canvas.width = w
      probe.canvas.height = h
      probe.font = `700 ${size}px ${family}`
      probe.fillStyle = "#000"
      probe.fillText(text, mm.actualBoundingBoxLeft, mm.actualBoundingBoxAscent)
      const px = probe.getImageData(0, 0, w, h).data
      runs = []
      for (let y = Math.floor(gap / 2); y < h; y += gap) {
        let start = -1
        for (let x = 0; x <= w; x++) {
          const on = x < w && px[(y * w + x) * 4 + 3]! > 128
          if (on && start < 0) start = x
          if (!on && start >= 0) (runs.push({ y, x0: start, x1: x }), (start = -1))
        }
      }
      shift = runs.map(() => 0)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      host.setAttribute("data-drawn", "")
      draw()
    }

    const color = getComputedStyle(host).color
    const draw = () => {
      raf = 0
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = 1.25
      let moving = false
      ctx.beginPath()
      runs.forEach((r, i) => {
        // Lines within reach of the pointer slide away from it, by up to 40 px.
        const dy = Math.abs(r.y - pointer.y)
        const cx = (r.x0 + r.x1) / 2
        const reach = Math.exp(-(dy * dy) / (2 * 28 * 28)) * Math.exp(-Math.pow((cx - pointer.x) / 220, 2))
        const target = motion ? Math.sign(cx - pointer.x || 1) * 40 * reach : 0
        shift[i]! += (target - shift[i]!) * 0.12
        if (Math.abs(target - shift[i]!) > 0.2) moving = true
        ctx.moveTo(r.x0 + shift[i]!, r.y + 0.5)
        ctx.lineTo(r.x1 + shift[i]!, r.y + 0.5)
      })
      ctx.stroke()
      if (moving) raf = requestAnimationFrame(draw)
    }
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(draw)
    }
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      wake()
    }
    const onLeave = () => {
      pointer.x = pointer.y = -1e4
      wake()
    }

    layout()
    const ro = new ResizeObserver(() => layout())
    ro.observe(host)
    host.addEventListener("pointermove", onMove)
    host.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerleave", onLeave)
    }
  }, [text])

  return (
    <div ref={box} aria-hidden data-wordmark className={cn("relative font-display", className)}>
      <p data-wordmark-css className="text-center text-[23vw] leading-[0.8] font-bold tracking-tight">
        {text}
      </p>
      <canvas ref={ref} className="absolute inset-x-0 top-0 hidden w-full" />
    </div>
  )
}
