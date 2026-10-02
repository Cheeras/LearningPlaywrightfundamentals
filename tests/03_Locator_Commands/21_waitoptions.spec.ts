import { test, expect } from '@playwright/test';

test("Verify page loads correctly", async ({ page }) => {

    await page.goto("https://app.vwo.com/#/login", { waitUntil: 'domcontentloaded' });
});

test("Verify page loads correctly with waitUntil 'load'", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login", { waitUntil: 'load' });
});

test("Verify page loads correctly with waitUntil 'networkidle'", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login", { waitUntil: 'networkidle' });
});