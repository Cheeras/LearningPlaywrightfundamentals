import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/');
  await page.getByRole('button', { name: 'Login' }).click();
});