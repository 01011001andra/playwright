import { Page, Locator, TestInfo } from "@playwright/test";

export type ScreenshotPageParams = {
  page: Page;
  testInfo: TestInfo;
  name: string;
  uniqueName?: boolean;
};

export type ScreenshotElementParams = {
  locator: Locator;
  testInfo: TestInfo;
  name: string;
  uniqueName?: boolean;
};
