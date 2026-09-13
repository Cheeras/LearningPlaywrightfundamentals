import { test, expect } from '@playwright/test';

test('context with options',async({ browser}) =>{
    const context = await browser.newContext()
});
