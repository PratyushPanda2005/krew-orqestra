import { defineConfig, devices } from "@playwright/test"

/**
 * Runs against a production build, because budgets on a dev server mean nothing.
 * The landing spec throttles to slow 4G itself (see e2e/throttle.ts).
 */
const port = 3200

export default defineConfig({
  testDir: "e2e",
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${port}`,
    ...devices["Pixel 7"],
    viewport: { width: 390, height: 844 },
  },
  webServer: {
    command: `pnpm build && pnpm start -p ${port}`,
    url: `http://localhost:${port}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
