// Import Playwright Module
import { test, expect } from "@playwright/test";

// Write a test
test("Record At Cursor", async ({ page }) => {
  // Go to URL
  await page.goto("http://youtube.com/");
  // Search with keywords
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("Setup Otomatis Ipad Monitor Mac Mini M4 | ONE CLICK !!!");

  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  // Click on playlist
  await page.getByRole("link", { name: "Setup Otomatis Ipad Monitor" }).click();

  //   await expect.soft(page).toHaveURL("http://lco");

  // Validate web page title
  await expect(page).toHaveTitle(
    "Setup Otomatis Ipad Monitor Mac Mini M4 | ONE CLICK !!! - YouTube",
  );

  await expect(
    page.locator("ytd-two-column-search-results-renderer"),
  ).toContainText(
    "iPad or Monitor Mac Mini? THIS IS THE TIME feat @minisopuru",
  );
});
