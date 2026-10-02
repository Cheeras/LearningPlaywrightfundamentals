import { test, expect } from '@playwright/test';

//page is called fixture in playwright.
//It is used to create a new page in the browser context. It is used to navigate to a URL and perform actions on the page.

test('TC# 1  - Verify that the vwo login page is loaded correctly', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login', {
        waitUntil: 'domcontentloaded'
    });
    let usernameField = page.locator('#login-username');
    await usernameField.fill('testuser@gmail.com');
    let passwordField = page.locator('#login-password');
    await passwordField.fill('testpassword');
    await page.locator('#js-login-btn').click();
    await page.waitForTimeout(3000);

    let error_message = await page.locator('#js-notification-box-msg').textContent();
    expect(error_message).toContain('Your email, password, IP address or location did not match');

    await page.pause();

});

//Default locators
//Id, name, className, Tag, Custom Locator (Via CSS Selector)

//CSS Selector - Browser - CSS Engine, Help you to find the element on the page
// by using the default locator
//id => #id
//className => .
//name => [name="Value"]
//Tag => [tag]