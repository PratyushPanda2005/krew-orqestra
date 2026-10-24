import type { Metadata } from "next"

/** Workbench pages stay out of search results. */
export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function WorkbenchLayout({ children }: { children: React.ReactNode }) {
  return children
}
