import type { Page } from "@playwright/test"

/** Lighthouse's "slow 4G" profile: 150 ms RTT, 1.6 Mbps down, 750 kbps up, CPU 4× slower. */
export async function slow4G(page: Page) {
  const cdp = await page.context().newCDPSession(page)
  await cdp.send("Network.enable")
  await cdp.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  })
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 })
  // Every run starts cold, as for someone tapping an Instagram bio link.
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true })
}
