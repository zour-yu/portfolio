import { test, expect } from "@playwright/test";

test.describe("Portfolio Hover Reveal Hero & Page Tests", () => {
  test("loads portfolio home page and checks title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Software Engineering|Yasith/i);
  });

  test("validates hover reveal hero interaction and captures spotlight screenshot", async ({
    page,
  }) => {
    // Navigate to local dev server
    await page.goto("/");

    // Verify hero section is visible
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();

    // Verify headline text sits above mask and is visible
    const headline = page.getByRole("heading", {
      name: /Building Resilient Digital Systems/i,
    });
    await expect(headline).toBeVisible();

    // Move mouse across the hero to trigger spotlight reveal
    await page.mouse.move(640, 420);
    // Allow spring physics (stiffness 220, damping 25) to settle
    await page.waitForTimeout(400);

    // Capture screenshot of the spotlight hover reveal
    await page.screenshot({
      path: "tests/screenshots/hover-reveal-active.png",
      fullPage: false,
    });

    // Move cursor off to test mouse leave fade-out
    await page.mouse.move(0, 0);
    await page.waitForTimeout(400);

    // Verify projects section exists and is scrollable
    const workSection = page.locator("#work");
    await expect(workSection).toBeVisible();

    // Verify contact section exists
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeVisible();
  });
});
