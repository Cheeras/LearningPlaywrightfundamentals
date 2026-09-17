import { test, expect } from "@playwright/test";

test("Verify the error message in the wingify free trail" ,async({page})=> {
    await page.goto("https://wingify.com/free-trial/");
    let inputBox =  page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("asdf");
    let yesAgree =  page.locator("input[id='free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox']");
    await yesAgree.click();
    let iagree   =  page.locator("input[id='free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox']");
    await iagree.click();
    let createFreeTrailAccountButton = page.locator("//button/span[contains(text(),'Create a Free Trial Account')]");
    await createFreeTrailAccountButton.click();
    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    let message = await error_message.textContent();
    await expect(error_message).toContainText('The email address you entered is incorrect.');
});