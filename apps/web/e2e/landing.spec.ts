import { expect, test } from "@playwright/test"

import { slow4G } from "./throttle"

const isGsap = (url: string) => /gsap/i.test(url)

test.describe("landing page at 390 px", () => {
  test("LCP under 2.5 s and CLS under 0.1 on slow 4G", async ({ page }) => {
    await slow4G(page)
    await page.addInitScript(() => {
      const w = window as unknown as { __lcp: number; __cls: number }
      w.__lcp = 0
      w.__cls = 0
      new PerformanceObserver((list) => {
        for (const e of list.getEntries()) w.__lcp = e.startTime
      }).observe({ type: "largest-contentful-paint", buffered: true })
      new PerformanceObserver((list) => {
        for (const e of list.getEntries() as unknown as { value: number; hadRecentInput: boolean }[])
          if (!e.hadRecentInput) w.__cls += e.value
      }).observe({ type: "layout-shift", buffered: true })
    })
    await page.goto("/", { waitUntil: "load" })
    // Let the hero sequence run, so any shift it caused would be counted.
    await page.waitForTimeout(6000)
    const { lcp, cls } = await page.evaluate(() => {
      const w = window as unknown as { __lcp: number; __cls: number }
      return { lcp: w.__lcp, cls: w.__cls }
    })
    console.log(`LCP ${Math.round(lcp)} ms, CLS ${cls.toFixed(3)}`)
    expect(lcp).toBeGreaterThan(0)
    expect(lcp).toBeLessThan(2500)
    expect(cls).toBeLessThan(0.1)
  })

  test("GSAP is not requested before the page has loaded, then the rail plays to Paid", async ({ page }) => {
    const before: string[] = []
    let loaded = false
    page.on("request", (r) => {
      if (!loaded && isGsap(r.url())) before.push(r.url())
    })
    page.on("load", () => (loaded = true))
    await page.goto("/")
    expect(before).toEqual([])
    const hero = page.locator("[data-hero]")
    await expect(hero).toHaveAttribute("data-playing", "", { timeout: 8000 })
    await expect(hero.locator('li[aria-current="step"]')).toContainText("Paid", { timeout: 8000 })
    await expect(hero.locator("[data-hero-caption]")).toHaveText("₹40,000 received · ₹4,000 TDS recorded")
  })

  test("reduced motion: finished hero, and GSAP never loads", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 390, height: 844 } })
    const page = await context.newPage()
    const gsap: string[] = []
    page.on("request", (r) => isGsap(r.url()) && gsap.push(r.url()))
    await page.goto("/", { waitUntil: "load" })
    await page.waitForTimeout(2500)
    const rail = page.locator("[data-hero] ol")
    await expect(rail).toHaveAttribute("aria-label", "Step 7 of 7: Paid")
    await expect(page.locator("[data-hero]")).not.toHaveAttribute("data-playing", "")
    await expect(page.locator("[data-hero-caption]")).toBeVisible()
    expect(gsap).toEqual([])
    await context.close()
  })

  test("works without JS: content, FAQ and the form", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
    const page = await context.newPage()
    await page.goto("/")
    await expect(page.locator("h1")).toHaveText("From the first DM to getting paid.")
    await expect(page.locator("[data-step-rail]")).toBeHidden()
    await expect(page.locator("[data-hero-caption]")).toBeVisible()

    const q = page.locator("summary", { hasText: "Can I connect my personal WhatsApp?" })
    await q.click()
    await expect(page.getByText("Krew connects a WhatsApp Business number")).toBeVisible()

    await page.getByRole("button", { name: "Join the pilot" }).click()
    await expect(page.locator("form").getByRole("alert")).toContainText("Fix 5 things to continue.")
    await expect(page.locator("#name-error")).toHaveText("Enter your name.")

    await page.fill("#name", "Riya")
    await page.locator("label", { hasText: "Photo" }).click()
    await page.fill("#city", "Pune")
    await page.locator("label", { hasText: "Just me" }).click()
    await page.fill("#contact", "98765 43210")
    await page.getByRole("button", { name: "Join the pilot" }).click()
    await expect(page.getByRole("status")).toContainText("You're on the list, Riya.")
    await context.close()
  })

  test("with JS: inline errors on blur, summary announced and focused, then success", async ({ page }) => {
    await page.goto("/")
    await page.fill("#contact", "12345")
    await page.locator("#name").focus()
    await expect(page.locator("#contact-error")).toHaveText("Enter a 10-digit mobile number or an email address.")
    await expect(page.locator("#contact")).toHaveAttribute("aria-invalid", "true")

    await page.getByRole("button", { name: "Join the pilot" }).click()
    const alert = page.locator("form").getByRole("alert")
    await expect(alert).toContainText("Fix 5 things to continue.")
    await expect(alert).toBeFocused()

    await page.fill("#name", "Arjun")
    await page.locator("label", { hasText: "Video" }).click()
    await page.fill("#city", "Jaipur")
    await page.locator("label", { hasText: "I have a team" }).click()
    await page.fill("#instagram", "@arjun.films")
    await page.fill("#contact", "arjun@example.com")
    await page.getByRole("button", { name: "Join the pilot" }).click()
    const status = page.getByRole("status")
    await expect(status).toContainText("You're on the list, Arjun.")
    await expect(status).toBeFocused()
  })

  test("one h1 and no skipped heading levels", async ({ page }) => {
    await page.goto("/")
    const levels = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((els) =>
      els.filter((e) => !e.closest("[inert]")).map((e) => Number(e.tagName[1]))
    )
    expect(levels.filter((l) => l === 1)).toHaveLength(1)
    expect(levels[0]).toBe(1)
    for (let i = 1; i < levels.length; i++) expect(levels[i]! - levels[i - 1]!).toBeLessThanOrEqual(1)
  })

  test("every tap target is at least 44 × 44 px", async ({ page }) => {
    await page.goto("/")
    // Open the FAQ so its contents are measured too.
    await page.locator("summary").evaluateAll((els) => els.forEach((e) => e.parentElement?.setAttribute("open", "")))
    const small = await page.locator("a, button, summary, input, label:has(input[type=radio])").evaluateAll((els) =>
      els
        .filter((e) => !e.closest("[inert], [aria-hidden=true]") && !(e as HTMLInputElement).classList.contains("sr-only"))
        .filter((e) => (e as HTMLInputElement).type !== "radio" && getComputedStyle(e).display !== "none")
        .filter((e) => !e.matches(".sr-only:not(:focus)"))
        .map((e) => ({ el: e.outerHTML.slice(0, 80), r: e.getBoundingClientRect() }))
        .filter(({ r }) => r.width > 0 && (r.height < 44 || r.width < 44))
        .map(({ el, r }) => `${Math.round(r.width)}×${Math.round(r.height)} ${el}`)
    )
    expect(small).toEqual([])
  })
})

test.describe("landing page at 1280 px", () => {
  test.use({ viewport: { width: 1280, height: 800 }, isMobile: false, hasTouch: false })

  test("no horizontal scroll, and a snapshot for review", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" })
    await page.goto("/")
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(0)
    await page.screenshot({ path: "test-results/landing-1280.png", fullPage: true })
  })
})

test("390 px has no horizontal scroll", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(overflow).toBeLessThanOrEqual(0)
  await page.screenshot({ path: "test-results/landing-390.png", fullPage: true })
})
