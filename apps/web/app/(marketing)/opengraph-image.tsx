import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Krew: from the first DM to getting paid. A strip of seven frames from Enquiry to Paid."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Theme tokens (light), copied because ImageResponse can't read CSS variables.
const ink = "#1a1d3a"
const paper = "#f7f7fa"
const rani = "#c8195e"
const muted = "#5b607a"
const frames = ["Enquiry", "Quote", "Advance", "Work", "Review", "Invoice", "Paid"]

export default async function Image() {
  const font = await readFile(join(process.cwd(), "app/(marketing)/_og/AnekLatin-Condensed-SemiBold.ttf"))
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: paper, padding: 72, fontFamily: "Anek", color: ink }}>
        <div style={{ fontSize: 44, color: rani }}>Krew</div>
        <div style={{ fontSize: 104, lineHeight: 0.95, marginTop: 24, maxWidth: 900 }}>From the first DM to getting paid.</div>
        <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
          {frames.map((f, i) => (
            <div key={f} style={{ display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
              <div style={{ height: 56, borderRadius: 6, background: i === frames.length - 1 ? rani : ink }} />
              <div style={{ fontSize: 26, color: i === frames.length - 1 ? rani : muted }}>{f}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Anek", data: font, weight: 600, style: "normal" }] }
  )
}
