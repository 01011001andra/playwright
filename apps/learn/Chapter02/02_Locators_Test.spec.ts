// Import Playwright Module
import { test, expect } from "@playwright/test";

/**
 * 02_Locators_Test.spec.ts
 * Example demonstrating ALL core Playwright locators.
 * To make it "complete" (lengkap), we use sites that have these specific attributes.
 */

// Configure getByTestId to use 'data-test' (as used in SauceDemo)
test.use({ testIdAttribute: "data-test" });

test("Locators in Playwright - All Active Examples", async ({ page }) => {
  // --- PART 1: SauceDemo (Placeholder, Role, Text, AltText, TestId) ---
  await page.goto("https://www.saucedemo.com/");

  // 1. getByPlaceholder
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // 2. getByRole
  await page.getByRole("button", { name: "Login" }).click();

  // 3. getByText
  await expect(page.getByText("Products")).toBeVisible();

  // 4. getByAltText
  // Finding an image by its alternative text
  await expect(page.getByAltText("Sauce Labs Backpack")).toBeVisible();

  // 5. getByTestId
  // Uses data-test attribute because of the test.use configuration above
  await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

  // --- PART 2: The Internet (Label) ---
  // SauceDemo doesn't use <label> tags, so we go to a site that does.
  await page.goto("https://the-internet.herokuapp.com/login");

  // 6. getByLabel
  // Finds a form element via its associated <label> text
  await page.getByLabel("Username").fill("tomsmith");

  // --- PART 3: Playwright Dev (Title) ---
  // Finding an element by its title attribute (common for tooltips/links)
  await page.goto("https://playwright.dev/");

  // 7. getByTitle
  await expect(page.getByTitle("GitHub repository")).toBeVisible();
});
