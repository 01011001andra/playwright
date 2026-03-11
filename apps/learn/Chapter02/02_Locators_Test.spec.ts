// Import Playwright Module
import { test, expect } from "@playwright/test";

// Write a test
test("Locators in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto("http://youtube.com/");

  // getByRole
  await page.getByRole('link', {name:''})
 
});
