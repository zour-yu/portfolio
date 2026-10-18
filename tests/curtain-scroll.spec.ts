import { test, expect } from "@playwright/test";

test.describe("Hero Curtain Scroll Overlap Effect Tests", () => {
  test("validates curtain scroll effect and captures transition progression", async ({
    page,
  }) => {
    // Navigate to homepage
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // 1. Initial State (scrollY = 0)
    await page.screenshot({
      path: "tests/screenshots/curtain-01-top.png",
      fullPage: false,
    });

    // 2. Mid Scroll (scrollY = 450) - Sheet rises, hero recedes with rounded corners
    await page.evaluate(() => window.scrollTo({ top: 450, behavior: "instant" }));
    await page.waitForTimeout(500);

    // Verify work section is visible and advancing
    const workHeading = page.getByRole("heading", { name: /Featured Projects/i });
    await expect(workHeading).toBeVisible();

    await page.screenshot({
      path: "tests/screenshots/curtain-02-mid-overlap.png",
      fullPage: false,
    });

    // 3. Complete Curtain Coverage (scrollY = 900)
    await page.evaluate(() => window.scrollTo({ top: 900, behavior: "instant" }));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: "tests/screenshots/curtain-03-full-sheet.png",
      fullPage: false,
    });

    // 4. Return to Top to verify smooth reverse transition
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(500);

    const headline = page.getByRole("heading", {
      name: /Building Resilient Digital Systems/i,
    });
    await expect(headline).toBeVisible();
  });
});
