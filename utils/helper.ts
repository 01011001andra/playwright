import { Page, Locator, TestInfo } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";
import { ScreenshotElementParams, ScreenshotPageParams } from "../types/helper";

function generateName(name: string, uniqueName?: boolean) {
  return uniqueName === false ? name : `${name}-${uuidv4()}`;
}

/**
 * Screenshot seluruh page (viewport)
 */
export async function screenshotPage({
  page,
  testInfo,
  name,
  uniqueName = true,
}: ScreenshotPageParams) {
  const screenshot = await page.screenshot();

  await testInfo.attach(generateName(name, uniqueName), {
    body: screenshot,
    contentType: "image/png",
  });
}

/**
 * Screenshot full page (scroll seluruh halaman)
 */
export async function screenshotFullPage({
  page,
  testInfo,
  name,
  uniqueName = true,
}: ScreenshotPageParams) {
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  await testInfo.attach(generateName(name, uniqueName), {
    body: screenshot,
    contentType: "image/png",
  });
}

/**
 * Screenshot element tertentu
 */
export async function screenshotElement({
  locator,
  testInfo,
  name,
  uniqueName = true,
}: ScreenshotElementParams) {
  const screenshot = await locator.screenshot();

  await testInfo.attach(generateName(name, uniqueName), {
    body: screenshot,
    contentType: "image/png",
  });
}
