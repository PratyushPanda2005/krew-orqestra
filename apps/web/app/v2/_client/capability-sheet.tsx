"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { STAGES, type Capability } from "./capability-data"

const ICONS = [
  "/v2/homepage/product-ui-1/icon-company-name.png",
  "/v2/homepage/product-ui-1/icon-social-presence.png",
  "/v2/homepage/product-ui-1/icon-codebase.png",
  "/v2/homepage/product-ui-1/icon-bank.png",
]

const iconFor = (title: string, i: number): string =>
  title === "LLC incorporation" ? "/v2/homepage/product-ui-1/icon-llc.png" : (ICONS[i] ?? ICONS[0]!)

/** Card tops for one, two or three cards in a roadmap column. */
const tops = (n: number) => (n <= 1 ? [173] : n === 2 ? [111, 235] : [69, 173, 277])

type Node = { title: string; subtitle: string; icon: string }

function StageLabel({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex items-center justify-between px-[11px] py-[3px]">
      <span className="inline-flex items-center justify-center px-[8px] py-[2.5px] rounded-full font-(family-name:--font-mono) text-[9px] font-normal text-ink-faint" style={{ background: "rgb(245, 245, 242)", lineHeight: "10.78px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0.15px 0px 0px, white 0px 0.3px 0.3px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0.6px 0px, rgba(255, 255, 255, 0.6) 0px 0.3px 0.3px 0px inset, rgba(0, 0, 0, 0.05) 0px -0.3px 0.3px 0px inset" }}>
        {label}
      </span>
      <span className="font-(family-name:--font-mono) text-[8px] font-medium text-ink-ui-subtle">{count}</span>
    </div>
  )
}

function Card({ node }: { node: Node }) {
  return (
    <div className="flex w-full items-center justify-between rounded-[8px] h-[54px] py-[8px] pl-[8px] pr-[10px]" style={{ background: "rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 0.67px, rgba(0, 0, 0, 0.02) 0px 0px 13.4px 0px, rgba(0, 0, 0, 0.01) 0px 13.4px 13.4px 0px, rgba(0, 0, 0, 0.02) 0px 4px 6px 0px, rgba(0, 0, 0, 0.03) 0px 2px 5.4px 0px, white 0px 0px 0px 0.67px inset" }}>
      <div className="flex h-full items-center gap-[8px]">
        <div className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-[4.014px]" style={{ width: "34px", height: "34px", background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(245, 245, 242) 100%)", boxShadow: "rgba(255, 255, 255, 0.15) 0px 0.334px 0.669px 0px inset, rgba(0, 0, 0, 0.24) 0px 0.334px 0.4px 0px, rgba(255, 255, 255, 0.1) 0px 0.669px 0.669px 0px, rgba(0, 0, 0, 0.2) 0px 0px 1.338px 0px" }}>
          <img alt="" loading="lazy" width="32" height="32" decoding="async" src={node.icon} style={{ color: "transparent" }} />
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-[12px] whitespace-nowrap leading-none" style={{ color: "rgba(38, 35, 35, 0.7)", fontFamily: "var(--font-neoris)", fontWeight: "430", letterSpacing: "0.1px" }}>
            {node.title}
          </span>
          <span className="text-[9.5px] leading-[11px] whitespace-nowrap" style={{ color: "rgba(38, 35, 35, 0.4)", fontFamily: "var(--font-neoris)", fontWeight: "400", letterSpacing: "0.08px" }}>
            {node.subtitle}
          </span>
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-center rounded-[3px] h-[19px] w-[18px]" style={{ background: "linear-gradient(rgb(235, 235, 232), rgb(245, 245, 242))", backdropFilter: "blur(16px)", boxShadow: "rgba(0, 0, 0, 0.12) 0px -0.5px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px -1px 2px 0px inset, rgba(255, 255, 255, 0.24) 0px 1px 1px 0px inset" }}>
        <svg width="8" height="9" viewBox="0 0 9 10" fill="none" style={{ transform: "rotate(90deg)" }}>
          <path d="M4.5 1.5L4.5 8.5M4.5 1.5L7.5 4.5M4.5 1.5L1.5 4.5" stroke="rgba(32,32,32,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function incomingPath(y: number) {
  if (y === 200) return `M224 ${y}H245`
  const t = y < 200 ? 1 : -1
  return `M224 ${y}H226C229.866 ${y} 233 ${y + 3.134 * t} 233 ${y + 7 * t}V${200 - 7 * t}C233 ${200 - 3.134 * t} 236.134 200 240 200H245`
}

function outgoingPath(y: number) {
  if (y === 200) return "M461 200H482"
  const t = y > 200 ? 1 : -1
  return `M461 200H463C466.866 200 470 ${200 + 3.134 * t} 470 ${200 + 7 * t}V${y - 7 * t}C470 ${y - 3.134 * t} 473.134 ${y} 477 ${y}H482`
}

/** The three-column roadmap strip: what came before, the selected item, what comes next. */
function RoadmapSlice({ stageLabel, stageCount, activeIndex, items }: { stageLabel: string; stageCount: string; activeIndex: number; items: string[] }) {
  const before = items.slice(0, activeIndex)
  const after = items.slice(activeIndex + 1)
  const left: Node[] = before.length
    ? before.map((title, i) => ({ title, subtitle: "Prerequisite", icon: iconFor(title, i) }))
    : [{ title: "Company context", subtitle: "Cofounder memory", icon: "/v2/homepage/product-ui-1/icon-idea-new.png" }]
  const right: Node[] = after.length
    ? after.map((title, i) => ({ title, subtitle: "Upcoming capability", icon: iconFor(title, activeIndex + i + 1) }))
    : [{ title: "Review work", subtitle: "Approval task", icon: "/v2/homepage/product-ui-1/icon-brand-spec.png" }]
  const lt = tops(left.length)
  const rt = tops(right.length)
  const selected: Node = { title: items[activeIndex] ?? "Selected capability", subtitle: "Selected capability", icon: iconFor(items[activeIndex] ?? "", activeIndex) }

  return (
    <div className="relative -mx-6 mt-9 h-[400px] w-[calc(100%+3rem)] shrink-0 overflow-hidden border-t border-black/8 min-[768px]:-mx-8 min-[768px]:mt-10 min-[768px]:w-[calc(100%+4rem)]" role="img" aria-label={`${items[activeIndex]} selected in the ${stageLabel} roadmap stage`} style={{ background: "var(--Bg-darker, #E7E7E3)", boxShadow: "rgba(255, 255, 255, 0.8) 0px 1px 0px inset, rgba(255, 255, 255, 0.55) 0px -1px 0px inset" }}>
      <div className="absolute left-1/2 top-0 h-[400px] w-[707px] -translate-x-1/2">
        <div className="absolute left-0 top-[-25px] flex h-[473px] w-[707px] gap-[5px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[473px] flex-1 overflow-hidden rounded-[4px]">
              <img alt="" loading="lazy" width="232" height="473" decoding="async" className="h-full w-full object-cover" src="/v2/homepage/product-ui-1/col-bg.png" style={{ color: "transparent" }} />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-[9px] flex w-full gap-x-[5px]">
          <div className="min-w-[232px] flex-1 opacity-65">
            <StageLabel label={before.length ? "Earlier stage" : "Company context"} count={`${left.length}/${left.length}`} />
          </div>
          <div className="min-w-[232px] flex-1">
            <StageLabel label={`${stageLabel} stage`} count={stageCount} />
          </div>
          <div className="min-w-[232px] flex-1 opacity-55">
            <StageLabel label={after.length ? "Next stage" : "Review stage"} count={`0/${right.length}`} />
          </div>
        </div>
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0" width="707" height="400" viewBox="0 0 707 400" fill="none">
          {lt.map((top, i) => {
            const y = top + 27
            return (
              <g key={`in-${left[i]?.title ?? i}`}>
                <path d={incomingPath(y)} stroke="#29BCFF" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                <path d="M242 197L244.5 200L242 203" stroke="#29BCFF" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" />
                <circle cx="225" cy={y} r="2" fill="#F5F5F2" stroke="#29BCFF" strokeWidth="0.7" />
              </g>
            )
          })}
          {rt.map((top, i) => {
            const y = top + 27
            return (
              <g key={`out-${right[i]?.title ?? i}`} opacity="0.28">
                <path d={outgoingPath(y)} stroke="#B7B7B7" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                <path d={`M479 ${y - 3}L481.5 ${y}L479 ${y + 3}`} stroke="#B7B7B7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="round" />
              </g>
            )
          })}
          <circle cx="462" cy="200" r="2" fill="#F5F5F2" stroke="#B7B7B7" strokeOpacity="0.32" strokeWidth="0.7" />
        </svg>
        {left.map((node, i) => (
          <div key={node.title} className="absolute left-0 w-[232px] px-[8px] opacity-65" style={{ top: `${lt[i]}px` }}>
            <Card node={node} />
          </div>
        ))}
        <div className="absolute left-[237px] w-[232px] px-[8px]" style={{ top: "173px" }}>
          <Card node={selected} />
        </div>
        {right.map((node, i) => (
          <div key={node.title} className="absolute left-[474px] w-[232px] px-[8px] opacity-45" style={{ top: `${rt[i]}px` }}>
            <Card node={node} />
          </div>
        ))}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10" style={{ boxShadow: "rgba(152, 146, 140, 0.16) 2px 3px 4px 0px inset" }} />
      </div>
    </div>
  )
}

function findCapability(number: string) {
  for (const stage of STAGES) {
    const index = stage.capabilities.findIndex((c) => c.number === number)
    if (index >= 0) return { stage, index, capability: stage.capabilities[index] as Capability }
  }
  return null
}

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Side sheet for one capability. Opens from any element with `data-capability="1.1"` (the "+" rows
 * in the capabilities section): slides in from the right over a blurred backdrop, closes on Escape,
 * the backdrop or the close button.
 */
export function CapabilitySheet() {
  const [number, setNumber] = useState<string | null>(null)
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const backdropRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const closing = useRef(false)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-capability]")
      if (el?.dataset.capability) setNumber(el.dataset.capability)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  const close = useCallback(() => {
    if (closing.current) return
    closing.current = true
    if (reduced()) {
      setNumber(null)
      return
    }
    const anims = [
      backdropRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: "ease-in", fill: "forwards" }),
      panelRef.current?.animate(
        [
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
          { transform: "translate3d(calc(100% + 20px), 0, 0)", opacity: 0.96 },
        ],
        { duration: 280, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" }
      ),
    ].filter((a): a is Animation => !!a)
    void Promise.allSettled(anims.map((a) => a.finished)).then(() => setNumber(null))
  }, [])

  useEffect(() => {
    if (!number) return
    closing.current = false
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    if (!reduced()) {
      backdropRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: "ease-out", fill: "both" })
      panelRef.current?.animate(
        [
          { transform: "translate3d(calc(100% + 20px), 0, 0)", opacity: 0.96 },
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
        ],
        { duration: 460, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" }
      )
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [number, close])

  const found = number ? findCapability(number) : null
  if (!found) return null
  const { stage, index, capability } = found

  return createPortal(
    <div className="fixed inset-0 z-[300]">
      <button ref={backdropRef} type="button" onClick={close} className="absolute inset-0 h-full w-full cursor-default bg-[#111318]/20 backdrop-blur-[2px]" aria-label="Close capability details" />
      <section ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="absolute bottom-0 right-0 flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-t-[20px] bg-[rgba(247,247,243,0.68)] shadow-[-24px_0_80px_rgba(15,15,15,0.16)] backdrop-blur-[38px] backdrop-saturate-[1.45] will-change-transform min-[768px]:bottom-4 min-[768px]:right-3 min-[768px]:top-4 min-[768px]:max-h-none min-[768px]:w-[min(620px,calc(100vw-40px))] min-[768px]:rounded-[16px] min-[768px]:border min-[768px]:border-white/65 min-[768px]:shadow-[-28px_0_90px_rgba(12,14,18,0.18),0_20px_60px_rgba(12,14,18,0.14),0_0_0_1px_rgba(32,32,32,0.08),0_0_0_1px_rgba(255,255,255,0.72)_inset,0_1px_0_rgba(255,255,255,0.92)_inset]">
        <button ref={closeRef} type="button" onClick={close} className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/75 bg-white/46 text-ink shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_6px_18px_rgba(20,22,26,0.09),0_0_0_1px_rgba(32,32,32,0.07)] backdrop-blur-[16px] transition-[background-color,transform] hover:-translate-y-px hover:bg-white/68 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink min-[768px]:right-5" aria-label="Close capability details">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <path d="m4.5 4.5 7 7m0-7-7 7" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </button>
        <div className="overflow-y-auto px-6 pb-8 pt-7 [background:linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0)_24%)] min-[768px]:px-8 min-[768px]:pb-10 min-[768px]:pt-7">
          <p className="m-0 font-mono text-[11px] tracking-[0.08em] text-ink-faint">{capability.number}</p>
          <h3 id={titleId} className="m-0 mt-3 max-w-[14ch] text-[34px] font-normal leading-[106%] tracking-[-0.025em] text-ink min-[768px]:text-[48px]">
            {capability.title}
          </h3>
          <p className="m-0 text-[15px] font-[460] leading-[140%] tracking-[0.15px] mt-5 max-w-[500px] text-ink-muted min-[768px]:text-[17px]">{capability.summary}</p>
          <RoadmapSlice
            stageLabel={stage.eyebrow.split("—")[1]?.trim() ?? "Company"}
            stageCount={`${index + 1}/${stage.capabilities.length}`}
            activeIndex={index}
            items={stage.capabilities.map((c) => c.title)}
          />
          <div className="mt-9 pt-7">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">How it works</p>
            <p className="m-0 mt-3 max-w-[510px] text-[15px] leading-[155%] text-ink-muted">{capability.detail}</p>
            {capability.resource ? (
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-[520] text-ink underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black/65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                {capability.resource.label}
                <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </div>
          <div className="mt-7 rounded-[13px] border border-white/75 bg-white/42 p-5 shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_12px_30px_rgba(20,20,20,0.045),0_0_0_1px_rgba(32,32,32,0.055)] backdrop-blur-[18px]">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">Try asking</p>
            <p className="m-0 mt-3 text-[15px] leading-[145%] text-ink">{capability.example}</p>
          </div>
          <div className="mt-8 pt-7">
            <p className="m-0 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">What Cofounder delivers</p>
            <ul className="mt-4 grid list-none gap-3 p-0">
              {capability.delivers.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FD1]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a className="group relative inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer h-[41px] px-3 rounded-[8px] cta-btn-dark mt-8" href="#">
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 transition-opacity rounded-[8px] btn-dark-hover opacity-0 duration-200 ease-out group-hover:opacity-100" />
            <span className="relative z-10 inline-flex items-center justify-center gap-[6px]">
              <span className="text-[15px] font-[460] tracking-[0.15px] text-on-dark">Do this in Cofounder</span>
            </span>
          </a>
        </div>
      </section>
    </div>,
    document.getElementById("v2-root") ?? document.body
  )
}
