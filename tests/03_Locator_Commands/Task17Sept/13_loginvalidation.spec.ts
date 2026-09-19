import { test, expect } from '@playwright/test';
test('Login & URL Validation', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let loginLink = page.locator('a[href="#login"]');
    await loginLink.click();
    let pageURL = page.url();
    expect(pageURL).toContain('#login');
})

test('Invalid Login & URL Validation',async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let loginLink = page.locator('a[href="#login"]');
    await loginLink.click();
    let userName =  page.locator("#email");
    userName.click();
    userName.fill("asddf");
    let passWord = page.locator("#password");
    passWord.fill("asdf123");
    let rememberMe = page.locator('//label[normalize-space(.)="Remember me"]/input');
    rememberMe.click();
    let loginButton = page.locator('//button[@data-testid="login-button"]');
    loginButton.click();
    let pageURL = page.url();
    expect(pageURL).toContainEqual("https://app.thetestingacademy.com/playwright/multiple_element_filter#login");
})