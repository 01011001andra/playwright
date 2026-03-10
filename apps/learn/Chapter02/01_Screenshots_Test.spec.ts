import { test, expect } from "@playwright/test";

test("Capture screenshots in playwright", async ({ page }, testInfo) => {
  await page.goto("https://youtube.com");

  await page
    .getByRole("combobox", { name: "Search" })
    .fill("Setup Otomatis Ipad Monitor Mac Mini M4 | ONE CLICK !!!");

  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  await page.getByRole("link", { name: "Setup Otomatis Ipad Monitor" }).click();

  // Screenshot element
  const screenshot = await page.locator("#player-container-outer").screenshot();
  
  await testInfo.attach("Player Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});
