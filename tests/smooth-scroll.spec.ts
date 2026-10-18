import { test, expect } from "@playwright/test";

test.describe("Lenis Smooth Scrolling & Navigation Tests", () => {
  test("initializes Lenis and performs butter-smooth scroll navigation", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("domcontentloaded");

    // 1. Verify Lenis attaches to html
    await expect(page.locator("html")).toHaveClass(/lenis/);

    // 2. Test smooth scroll halfway down using wheel
    await page.mouse.move(500, 300);
    await page.mouse.wheel(0, 400);

    // Give Lenis lerp inertia 800ms to smoothly decelerate
    await page.waitForTimeout(800);

    const scrollPos = await page.evaluate(() => window.scrollY);
    console.log("Scroll position after smooth wheel:", scrollPos);
    expect(scrollPos).toBeGreaterThan(150);

    // Verify it stays rock-solid after stopping (no jump to top)
    await page.waitForTimeout(1000);
    const scrollPosAfterStop = await page.evaluate(() => window.scrollY);
    expect(Math.abs(scrollPosAfterStop - 400)).toBeLessThanOrEqual(2);

    // 3. Test anchor navigation: click 'Work' link in navbar
    const workLink = page
      .getByRole("navigation")
      .getByRole("link", { name: "Work", exact: true });
    await workLink.click();

    // Allow smooth scroll animation to travel to #work
    await page.waitForTimeout(1500);

    const workSection = page.locator("#work");
    await expect(workSection).toBeInViewport();

    // 4. Test anchor navigation: click 'Contact' link in navbar
    const contactLink = page
      .getByRole("navigation")
      .getByRole("link", { name: "Contact", exact: true });
    await contactLink.click();

    await page.waitForTimeout(1500);
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeInViewport();
  });
});
