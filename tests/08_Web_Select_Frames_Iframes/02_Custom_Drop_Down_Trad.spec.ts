import { test, expect } from '@playwright/test';

test('Verify Custom Dropdown' , async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("lang-trigger").click();
    await page.waitForTimeout(2000);
    await page.getByRole("option",{name : 'JavaScript'}).click();
});