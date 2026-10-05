import { test,expect } from '@playwright/test';

test('Verify login successful with valid credentials', async ({ page }) => {
    await page.goto('https://demo.applitools.com/', { waitUntil: 'domcontentloaded' });
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill('admin');
    await page.locator('#log-in').click();
    await page.waitForTimeout(3000);
    const currentURL =  page.url();
    expect(currentURL).toBe('https://demo.applitools.com/app.html');

    const amountCell =  page.locator('//table//tr/td[count(//table//th[normalize-space()=\'Amount\']/preceding-sibling::th) + 1]');
    const rawAmount = await amountCell.allInnerTexts();

    let totalAmount = 0;
    for (const amount of rawAmount) {
        const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ''));
        
        if(!isNaN(numericAmount)) {
            totalAmount += numericAmount;
        }
    }

    console.log('Total Amount:', totalAmount);


});