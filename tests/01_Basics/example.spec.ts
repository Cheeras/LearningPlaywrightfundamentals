import { test, expect } from '@playwright/test';
//when in click on run button internally it will exeucte followign command
//npx playwright test --project=chromium -g "has title"
test('viewer', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});
