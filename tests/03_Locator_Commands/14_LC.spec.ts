import { test, expect } from '@playwright/test'
/**
 *
 * what is the return type of the goto command it is promise which returns either Response object
 * or null if the navigation fails or is aborted. The Response object represents the response
 * to a request made by the page. It contains information about the response,
 * such as the status code, headers, and body.
 *
 *
 */

test("Verify X", async ({ page }) => {

    await page.goto(
        "https://app.thetestingacademy.com/playwright/multiple_element_filter"
        , { waitUntil: 'commit' }
    );

    const response = await page.goto('https://app.thetestingacademy.com/login', {
        waitUntil: 'domcontentloaded',
        timeout: 45000,
        referer: 'https://thetestingacademy.com'
    });

});