import {test, expect} from '@playwright/test';

test("Verify X", async({page}) => {
    await page.goto("https://app.thetestingacademy.com/masterclass/claudecode#cold-open");
})