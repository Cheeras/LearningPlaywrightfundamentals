import { test, expect } from '@playwright/test';


test.describe('Verify SVG is loaded correctly', () => {
    test('Verify SVG is loaded correctly', async ({ page }) => {
        await page.goto('https://app.vwo.com/#/login', {   waitUntil: 'domcontentloaded' });
        let svgElement = page.locator('svg');
        await expect(svgElement).toBeVisible();
    });
});

/**
 * 
 * we can debug the test in --UI and --debug mode
 * 
 * 
 
 * 
 */