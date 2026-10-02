Default locators in Playwright

1. Default Locators - ID, Class , Tag
2. CSS Engine
3. Xpath
4. Playwright Own Locators getByX - maximum time we will use Playwright Own locators

Our task is to find the best stable locator which is shortest and does not break

Preference rule

ID -> Name -> Class -> Tag Name -> CSS -> Xpath

Playwright

getByX( playwright locator)-> ID - > Name -> Class -> TAG Name -> CSS -> Xpath

Custom attribute can be  - data-qa, data-testid, data-test

partial link text and linktext are not available in playwright

==============================

what is the reason why people create a custom attribute for QA ?

there are many times when developers do not write the id,name and unique things in a locator.

Then how will we be able to locate that element? QA actually have to locate the element, interact with it so

that they can write an automation. That's why it is important that people also add a custom attirbute to help the QA

to perform the automation

example: data-qa,data-testid,data-id

=====================

Locator Strategy:

===============

Lazy -> When you create locator, PW does not search for the element immediately. It only searchs when you actually DO something with it -> click, fill , read text. This means you can create locators at the top of your test and user them later, even if the element doesn't exist yet

Strinct -> If a locator matches MORE than one element, PW throws an error. This prevents you from accidentally clicking the wrong button. if you need to work with multiple elements, user nth(),first(), or last()

Auto-Wait -> When you call locator.click() , **PW automatically waits for the element to be visible, enabled and stable before clicking**. NO need for manual sleep() or waitFor() in the most cases

=======================

100% Advanced Playwright Framework

	Playwright Locators - 80% (getByXRole,getById)

	Default - 20% - Xpath/CSS selector page.locator()
