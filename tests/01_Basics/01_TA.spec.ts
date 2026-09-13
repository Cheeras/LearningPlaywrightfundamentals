import {test, expect} from '@playwright/test';

test("Navigation to the TTA websites",async({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/");
});

test("BCP - in app.vwo.com two roles",async({browser}) =>{
    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestContext = await browser.newContext();

    let adminPage = await adminContext.newPage();
    adminPage.goto("https://app.thetestingacademy.com/playwright/");

    let userPage = await userContext.newPage();
    userPage.goto("https://google.com");

    let guestPage = await guestContext.newPage();
    guestPage.goto("https://scrolltest.com");

    await adminPage.close();
    await userPage.close();
    await guestPage.close();

});