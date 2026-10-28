"use client"

import { useEffect, useState } from "react"

const fmt = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false })

/**
 * India time, live, as trionn shows its studio clock. Renders the label alone on the server
 * (the time would only mismatch), then fills in and ticks each minute.
 */
export function IstClock({ label }: { label: string }) {
  const [now, setNow] = useState<string>()
  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <p className="text-xs font-medium tracking-wide text-brand-snow/70 uppercase tabular">
      {label} → <time>{now ?? "--:--"}</time>
    </p>
  )
}
