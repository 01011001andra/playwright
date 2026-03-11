import { test, expect } from "@playwright/test";

test("github invalid login test", async ({ page }) => {
  await test.step("Navigate to GitHub", async () => {
    await page.goto("https://github.com/");
  });

  await test.step("Go to login page", async () => {
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("Fill credentials and submit", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("yandrayt1@gmail.com");
    await page.getByRole("textbox", { name: "Password" }).fill("123123123");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Verify error message", async () => {
    await expect(page.getByRole("alert")).toContainText(
      "Incorrect username or password.",
    );
  });
});
