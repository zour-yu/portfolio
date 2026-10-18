import { test, expect } from "@playwright/test";

test.describe("Contact Form & API Route Tests", () => {
  test("validates /api/contact request validation", async ({ request }) => {
    // 1. Missing name / invalid payload -> 400
    const resBad = await request.post("/api/contact", {
      data: { name: "", email: "test@example.com", message: "Hello world" },
    });
    expect(resBad.status()).toBe(400);

    // 2. Invalid email -> 400
    const resBadEmail = await request.post("/api/contact", {
      data: { name: "Recruiter", email: "invalid-email", message: "Hello there from test" },
    });
    expect(resBadEmail.status()).toBe(400);

    // 3. Short message -> 400
    const resShortMessage = await request.post("/api/contact", {
      data: { name: "Recruiter", email: "recruiter@company.com", message: "Hi" },
    });
    expect(resShortMessage.status()).toBe(400);
  });

  test("fills contact form on page and checks submission error or success feedback", async ({
    page,
  }) => {
    await page.goto("/#contact");
    await page.waitForLoadState("domcontentloaded");

    const nameInput = page.getByPlaceholder("Your name");
    const emailInput = page.getByPlaceholder("your.email@example.com");
    const messageInput = page.getByPlaceholder(/Tell me about your project/i);

    await nameInput.fill("Engineering Recruiter");
    await emailInput.fill("recruiter@techcorp.com");
    await messageInput.fill("We have an open software engineering role we would love to discuss with you.");

    // Click submit
    const submitBtn = page.getByRole("button", { name: /Transmit Message/i });
    await submitBtn.click();

    // Verify either success state or informative fallback message appears
    await expect(
      page.locator("text=Message Dispatched").or(page.locator("text=Resend API key is not yet configured"))
    ).toBeVisible({ timeout: 5000 });
  });
});
