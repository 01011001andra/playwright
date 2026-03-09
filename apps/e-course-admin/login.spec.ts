import { test, expect } from "@playwright/test";

test("user can login with valid credentials", async ({ page }) => {
  // buka halaman login
  await page.goto("https://www.saucedemo.com/");

  // isi username
  await page.fill('[data-test="username"]', "standard_user");

  // isi password
  await page.fill('[data-test="password"]', "secret_sauce");

  // klik tombol login
  await page.click('[data-test="login-button"]');

  // verifikasi berhasil login (url berubah ke inventory)
  await expect(page).toHaveURL(/inventory/);

  // verifikasi produk muncul
  await expect(page.locator(".inventory_list")).toBeVisible();
});
