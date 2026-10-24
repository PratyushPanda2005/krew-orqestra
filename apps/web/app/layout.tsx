import type { Metadata, Viewport } from "next"
import { Anek_Latin } from "next/font/google"

import "@krew/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/site"

/**
 * Anek, by the Indian foundry Ek Type: one variable family with a width axis,
 * condensed for amounts and headings, normal for reading. Anek Devanagari is
 * its sibling for Hindi later.
 */
const fontSans = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["wdth"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Krew",
  description: "Run client work from the first DM to getting paid.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#12142a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${fontSans.variable} font-sans antialiased`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
