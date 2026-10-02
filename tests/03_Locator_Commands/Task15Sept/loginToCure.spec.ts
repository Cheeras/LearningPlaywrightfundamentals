import { test, expect } from '@playwright/test';

test('Verify Login successful with valid credentials', async ({ page }) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com/',
        { waitUntil: 'domcontentloaded' });
    await page.locator('#btn-make-appointment').click();
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');
    await page.locator('#btn-login').click();
    await page.waitForTimeout(3000);
    const currentURL =  page.url();
    expect(currentURL).toBe('https://katalon-demo-cura.herokuapp.com/#appointment');
});