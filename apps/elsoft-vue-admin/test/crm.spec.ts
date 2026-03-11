import test from "@playwright/test";

test("CRM Test", async ({ page, context }) => {
    // Otomatis 'Allow' untuk pop-up permintaan lokasi (geolocation)
    await context.grantPermissions(['geolocation']);

    await page.goto('http://localhost:3001/a');
    await page.locator('#Domain').click();
    await page.locator('#Domain').fill('olsera.group');
    await page.getByRole('button', { name: 'Next ' }).click();
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('elsoft.nafisah');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('n@fisah12345');
    await page.getByRole('button', { name: 'Login' }).click();
})