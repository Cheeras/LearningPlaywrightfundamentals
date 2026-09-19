import { test, expect } from '@playwright/test';

test.skip('checkout with paypal', async({page}) => {
    //never execute
});

test.only('login as shankar', async({page}) => {
    //only this test runs, everything else in the file is ignored
});

test.fail('cart total is wrong, BUG-451', async({page}) => {
});


