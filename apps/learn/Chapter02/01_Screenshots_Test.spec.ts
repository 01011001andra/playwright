import { test, expect } from "@playwright/test";

test("Capture screenshots in playwright", async ({ page }, testInfo) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("deddy corbuzioer");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page.getByRole("link").filter({ hasText: /^$/ }).click();

  // 1. Element Screenshot
  const elementScreenshot = await page
    .locator("#page-header")
    .screenshot();
  await testInfo.attach("Element Screenshot", {
    body: elementScreenshot,
    contentType: "image/png",
  });

  // 2. Page Screenshot (Viewport)
  const pageScreenshot = await page.screenshot();
  await testInfo.attach("Viewport Screenshot", {
    body: pageScreenshot,
    contentType: "image/png",
  });

  // 3. Full page screenshot (dengan scroll untuk memaksa lazy-load elemen)
  const fullPageScreenshot = await page.screenshot({ fullPage: true });
  await testInfo.attach("Full Page Screenshot", {
    body: fullPageScreenshot,
    contentType: "image/png",
  });
});
