import { test,expect } from '@playwright/test';

test('Verify Invalid Login with invalid credentials' , async ({ page}) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter', { waitUntil: 'domcontentloaded' }   );

    let emailField =  page.locator('#email');
    await emailField.fill('test@gmail.com');
    let passwordField = page.locator('#password');
    await passwordField.fill('testpassword'); 
    await page.locator('[data-testid="login-button"]').click();//CSS Selector 


});