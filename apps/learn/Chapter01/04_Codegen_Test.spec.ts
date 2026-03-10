import { test, expect } from '@playwright/test';

test('Codegen Test Case', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('mac mini');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Bikin Mac Mini M4 jadi SERBA' }).click();
  await page.getByTitle('Bikin Mac Mini M4 jadi SERBA').click();
  await expect(page.getByRole('heading', { name: 'Bikin Mac Mini M4 jadi SERBA' }).locator('yt-formatted-string')).toBeVisible();
});