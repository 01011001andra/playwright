// Import Playwright Module
import { test, expect } from "@playwright/test";

// Write a test
test("Locators in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto('https://github.com/');

  // getByRole
  await page.getByRole('link', { name: 'Sign in' }).click();

  // getByLabel
  await page.getByLabel('Username or email address').fill('yandrayt1@gmail.com');

  // getByPlaceholder
  await page.getByPlaceholder('Password').fill('123123123');

  // getByText
  await page.getByText('Sign in').click();

  // getByAltText
  await page.getByAltText('Avatar').click();

  // getByTitle
  await page.getByTitle('Notifications').click();

  // getByTestId
  await page.getByTestId('test-id').click();



});
