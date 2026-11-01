![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0z-Ac6RLJC5mDwlN_wQhz.png?ixlib=js-3.8.0 "image.png")

---

## 🟩 **What is a Playwright?**

- Playwright was created for end-to-end testing with reliable **auto-wait capability** for modern web apps.
- Playwright supports <u>all modern rendering engines</u>. including Chromium, WebKit, and Firefox.
- **Explain** - [What&#39;s the difference between a browser engine and rendering engine?](https://stackoverflow.com/questions/46169376/whats-the-difference-between-a-browser-engine-and-rendering-engine)
- It support the REAL browsers **Channelling**.
- You can test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.
- PW provides Context isolation, running it on multiple browser configurations out of the box.
- **Codegen tool** which generates test code by recording your actions. Save them into any language.
- **Inspector tool** helps monitor and debug execution, check click points, and verify page locators at runtime.
  [npmtrends.com/cypress-vs-playwright-vs-selenium-webdriver](https://npmtrends.com/cypress-vs-playwright-vs-selenium-webdriver)

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Z9PL2ut1YjgNsUHPxcya5.png?ixlib=js-3.8.0 "image.png")

🟩 **<u>Feature of Playwright</u>**

- Support for all browsers: Chrome, Edge, Firefox and Safari (on both Mac and Windows!)
- Emulate different devices, Ex. web apps and **mobile web browsers**
- **Ability to reuse browser storage, Ex. test with reusable "logged-in" session**
- Browser contexts. Reuse a single browser instance for multiple
- Tests and use different browser contexts in one test
- Test simultaneously in multiple domains and pages.
- Headed and headless mode, auto-waits, network request mocking
- Text/CSS/XPath/layout/nth-match selectors, ability to chain selectors
- Support for file downloads, uploads and iframes , You can specify geolocation, permissions and even dark mode.

---

**DisAdvantages**

1. Mobile App Automation( Native)
2. Desktop Application
3. Learning curve for teams new to automation.

   1. JS
   2. TS
4. Vendor lock-in risk

   1. **Microsoft-maintained;** future direction depends on Microsoft's priorities
5. Not a W3C WebDriver protocol
6. **No legacy browser support**: **IE11 and old Edge are out**, which still matters for some enterprise apps.

---

### **<u>Install Node.js</u>**

**Windows:**

1. Download the Windows installer from the [Node.js website](https://nodejs.org/).
2. Run the installer.
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and finally install).
4. Restart your computer to ensure changes take effect.

[nodejs.org/en/download](https://nodejs.org/en/download)

 how to verify if node.js is installed ?

Node > 13

---

## 🟩 **Install Playwright with VS Code**

Sure, let's break down the step-by-step instructions for installing Node.js, Playwright, Visual Studio Code, and adding Node.js to the environment variables for Windows, macOS, and Linux.

- **Visual Studio Code** - Normal Editor ( latest +Github Copilot) / CC / OpenCode / CommandCode
- Cursor, WindSurf, Antigravity ->  Coding Assistant AI Agents (Extra functionality).

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_4FdklNhSP9Mjb48ii4LW4.png?ixlib=js-3.8.0 "image.png")

**Install the Playwright**

```
npm init playwright@latest
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_o-PbAh2q_MNGk2EuddN2O.png?ixlib=js-3.8.0 "image.png")

Headless ->   Headless basically means that a test case will run without the UI. Headless is a feature which is available when you have a heavy number of test cases. For example, when you have 2,000, 3,000, or 4,000 test cases, you cannot run them by using the UI. If you run them through the UI, the test cases will be slow. They will be very, very slow, and they will take a lot of memory. When you have more test cases, you will use headless mode. Headless basically means no browser will open, and no UI will be used.

 please remember:

- screenshot
- video traces
- log
- everything you can capture in headless

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_iSMJTMALvVTicYXNt3P7A.png?ixlib=js-3.8.0 "image.png")

---

- npx playwright test
- npx playwright show-report

---

```
playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

```
await page.waitForTimeout(50000);
```

# Playwright Codegen

 CodeGen Playwright is basically a command which will help you to open a particular URL where you can record a session. You can add an assertion also. You can select and create code based on different languages. You can work with Playwright with Python. You can work with Playwright with Java. You can also work with Playwright with TypeScript also in this case. Okay

```
plawright codegen https://app.thetestingacademy.com/playwright/ttacart/
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_WuoUFMpZ3tO1qmTubmfVI.png?ixlib=js-3.8.0 "image.png")

---

**Playwright CLI Option**

 playwright CLI is specially created for the AI agents to directly communicate with Playwright, rather than typing the TypeScript code, Java code, or Python code for Playwright.

 so Playwright CLI has all the functionality that Playwright also supports. Here, you can directly call the Playwright CLI, and it will perform the same actions

[www.npmjs.com/package/@playwright/cli](https://www.npmjs.com/package/@playwright/cli)

1. Playwright CLI
2. Playwright MCP
3. Playwright AI Agent

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_KTJL-Xf1uRF1isvOqwI99.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_MjtWLdeZzA-eQAxQiR-GP.png?ixlib=js-3.8.0 "image.png")

## What is Websocket?

- WebSockets provide bidirectional, full-duplex communication between a client and server over a single TCP connection.
- This allows for real-time data transfer between client and server unlike HTTP where the client must request data from the server.
- [en.wikipedia.org/wiki/Transmission_Control_Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- With WebSockets, the client or server can push data to each other at any time after the initial handshake and connection setup

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_ZznhclnOfr1hrXbm3Yi9r.png?ixlib=js-3.8.0 "image.png")

WebDriver driver = new ChromDriver();

driver.get("[https://google.com)](https://google.com/)/); - HTTP 1

driver.findElement(By.ID, ("[&#34;#&#34;)](https://google.com/)/); - HTTP 2

---

page.goto("[https://google)](https://google)/) - **Web Socket Connect Bi Di - Connection - WS1**

page.locator().click() - **WS1**

---

1. Client Code
2. Web Socket Connection
3. Playwright Server  | BrowserServer( NODE JS)
4. JSON Format
5. CDP (Rederning engines) - Chromium, Firefox, Webkits

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image__Ys9TNH6h12c8QfILuOVv.png?ixlib=js-3.8.0 "image.png")

---

🟩 **<u>Playwright Binaries</u>**

 these are local browsers that it installs for your rendering engine

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_uzIcrxc8Sbtk9NK3cHroD.png?ixlib=js-3.8.0 "image.png")

## 🟩 But does Playwright support the Real browser?

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_VWsyAuqJywHJu7Nhpzuuc.png?ixlib=js-3.8.0 "image.png")

---

## 🟩 **Write Playwright Test.**

- Verify the Title of the Page.
- Verify the Heading of the Page.
- Click on a button
- Explain - Test Isolation (via Page)
- Browsers, Contexts & Pages in Playwright (TypeScript)
- Test Hooks

## Browsers, Contexts & Pages in Playwright (TypeScript)

> BCP

**Browser** = the application itself (Chrome, Firefox, Safari). You launch it ONCE. It's the heaviest, most expensive thing to create. Like opening the Chrome app on your desktop.

**Context** = a fresh browser profile. Each context has its OWN cookies, sessions, localStorage — **completely isolated from other contexts**. Like opening an incognito window. Same browser, but zero shared data.

**Page** = a single tab inside a context. You can open multiple tabs in one context. Like opening google.com in one tab and github.com in another tab both tabs share the same cookies (same context).

```
Browser (Chrome)
├── Context 1 (User A — logged in as admin)
│   ├── Page 1 (Dashboard tab)
│   └── Page 2 (Settings tab)
│
├── Context 2 (User B — logged in as viewer)
│   ├── Page 1 (Dashboard tab)
│   └── Page 2 (Reports tab)
│
└── Context 3 (Guest — not logged in)
    └── Page 1 (Login page)
```

Context 1 and Context 2 share NOTHING — different cookies, different sessions, different users. But Page 1 and Page 2 inside Context 1 share the same cookies — both pages see admin's session.

## Real-Life Analogy

**Browser** = a hotel building. You build it once.

**Context** = a hotel room. Each room is completely private — separate key, separate minibar, separate bathroom. Guest in Room 101 can't access Room 102.

**Page** = a window inside a room. One room can have multiple windows. All windows in the same room see the same view (same session/cookies).

Headless --> No UI

headless : false ->  want to see the UI

---

# PW Test Annotation and Locator Strategy.

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_06h_TBt31IOAFfMEgKIDW.png?ixlib=js-3.8.0 "image.png")

## Test Annonations

```
test('title', async () => {});   // the base
test.skip
test.only
test.fail
test.fixme
test.slow
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0Yt6wMgNa1e6n6xtpx4ZG.png?ixlib=js-3.8.0 "image.png")

---

# Locator Strategy and Command

 locator strategy is the most important topic for your interview to

**find the locators of the web elements so that we can interact with them**

In Playwright, we have two types of locator strategy:

1. **Common** ->  we are using the XPath, CSS selector, and normal locators
2. **Playwright Locators** ->  they have also given you some kind of inbuilt commands which you can directly use to find any type of locators ( **getByX**)

**so what is a locator and why do we even use it?**

1. Locator strategy that everyone has to learn, because it's one of the first interview portions.
2. It is actually important if you want to create any kind of automation. Right, locators are the most important things or web elements you need to find.
3. **The smallest and the best or the stable locator that you are able to find, the automation will be also smooth.**

---

## page.goto()

- you need to OPEN a page. `page.goto(url)` is how every Playwright test begins.
- await - return the promise.
- **waitUntil**
  - The `waitUntil`  option tells Playwright at which stage it should consider the page "loaded" and move to the next line of your test.
    - **There are 4 options, from fastest to slowest:**
      - `commit`  — the server has responded. HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.
      - `domcontentloaded`  — the HTML is fully parsed and the DOM tree is built. CSS, images, and fonts may still be loading. Use when you need elements in the DOM but don't care about visuals.
      - `load`  — everything is loaded including images, CSS, fonts, and scripts. This is the DEFAULT. Use for most tests.
      - `networkidle`  — no network requests for 500ms. The page is completely quiet. Use for SPAs (React, Angular, Vue) that fetch data via API calls AFTER the initial HTML loads.

---

**commit** = "the server said yes, move on". Fastest. Use when you only need the URL or status, not the content.

**domcontentloaded** = "HTML is ready". Use for fast tests where you interact with text and buttons, not images.

**load** = "everything on the page finished". The default, safe.

**networkidle** = "the page stopped talking to the network". Slowest and flaky.

---

# Locators

1. Default Locator - ID, Class, Tag
2. CSS Engine
3. Xpath
4. Playwright Own Locators getByX

> Our task is to find the best stable locator, which is the shortest and does not break

## FINDING ELEMENTS ON A PAGE

you need to simulate scenario manually
first enter wrong username and password
this is the scenario i want to automate

to understand this better we need goto w3schools.com/html

Task - Research about HTML and how many HTML elements are present and how to use them

which location strategy
debuggin strategy

## FINDING ELEMENTS ON A PAGE

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_ty9gPmtx5PA3FCn7hvZyx.png?ixlib=js-3.8.0 "image.png")

# HTML Elements

- HTML is the standard markup language for Web pages.
- <tagname>Content goes here...</tagname>
  ![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_PO5qsz0nMES8yjvrj-igc.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_sD1yKgROjOGVzHBMD0fu2.png?ixlib=js-3.8.0 "image.png")

WebElement - **Key and Value - Attribute and Value.**

```
<input 

type="email" 
**class**="text-input W(100%)" 
**name**="username" 
vwo-html-translate-attr="placeholder" 
vwo-html-translate-placeholder="login:enterEmailID" 
**id**="login-username" 
**data-qa="hocewoqisi"** 
placeholder="Enter email ID"

>
```

**PS. - every locator can be tracked by its tag, HTML tag, and its unique attributes**

A locator is a way of identifying an element on a web page so that it can be interacted with.

There are several different types of locators that can be used, including:

- **ID:** This locator type uses the unique ID attribute of an element to locate it on the page.
- **Name:** This locator type uses the name attribute of an element to locate it on the page.
- **Class name:** This locator type uses the class attribute of an element to locate it on the page.
- **Tag name:** This locator type uses the HTML tag name of an element to locate it on the page.
- **Custom Attribute** - data-qa, data-testid, data-id, `data-testid="to-testID-origin"`
- **CSS selector**: This locator type uses a CSS selector to locate an element on the page.
- **XPath:** This locator type uses an XPath expression to locate an element on the page.
- When writing test scripts with Selenium, you can use a combination of these locator types to accurately and reliably locate elements on the page.

**Preference rule**

ID -> NAME -> CLASS -> TAG NAME -> CSS -> XPATH

**Playwright**

getByX -> ID -> NAME -> CLASS -> TAG NAME -> CSS -> XPATH

```
<a 
id="btn-make-appointment" 
href="./profile.php#login" 
class="btn btn-dark btn-lg">
Make Appointment
</a>
```

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_thmsXvYnuXE6NI0dcUREu.png?ixlib=js-3.8.0 "image.png")

**What is the reason why people create a Custom attribute for QA ?**

there are many times when developers do not write the id, name, and any unique thing in a locator. Then how will we be able to locate that element? **_QAs actually have to locate the element, interact with it so that they can write an automation_**. That's why it is important that people also add a custom attribute to help the qa perform the automation.

**Custom Attribute** - data-qa, data-testid, data-id, `data-testid="to-testID-origin"`

```
data-testid="to-testID-origin"

```

data-testid="to-testID-origin"

```
```

data-qa="hocewoqisi"

```
data-qa-test
```

data-cy="flightSW"

```
```

### **HTML Forms**

What is an HTML Form?

A HTML form is a section of a web page that contains form elements, such as text fields, checkboxes, and buttons. Forms allow users to enter data and interact with a website.

Forms are created using the

<form></form>

 HTML tag. This tag defines the start and end of a form, and it can have several attributes that determine how the form behaves.

For example, the action attribute specifies the URL of the server-side script that will process the form data, and the method attribute specifies whether the form data will be sent to the server using the GET or POST method.

```
<form action="http://www.example.com/form-handler.php" method="POST">
 <label for="username">Username:</label>
 <input type="text" id="username" name="username">
 <br>
 <label for="password">Password:</label>
 <input type="password" id="password" name="password">
 <br>
 <input type="submit" value="Log In">
</form>
```

## Locator Strategy

Three important things about locators:

**Lazy** -> When you create a locator, Playwright does NOT search for the element immediately. It only searches when you actually DO something with it -> click, fill, read text. This means you can create locators at the top of your test and use them later, even if the element doesn't exist yet.

**Strict** -> If a locator matches MORE than one element, Playwright throws an error. This prevents you from accidentally clicking the wrong button. If you need to work with multiple elements, use `nth()`, `first()`, or `last()`.

**Auto-Wait** -> When you call `locator.click()`, **Playwright automatically waits for the element to be visible, enabled, and stable before clicking**. No need for manual `sleep()` or `waitFor()` in most cases.

100% Advance Playwright Framework

- Playwright -> 80% ( getbYRole. getByid)
- Default - 20 %- XPath/ Css Selector  page.locator()

[katalon-demo-cura.herokuapp.com/](https://katalon-demo-cura.herokuapp.com/)

---

> 17th Sept 2026

# **Mastering XPATH and CSS Selector (CSS engine)**

## What is XPATH?

- XPath is a query language for **selecting nodes** from an **XML/HTML document.**
- XPath was defined by the **World Wide Web Consortium.**
- XPath is supported by all **modern browsers.**

Core Logic - **//tagName[@attribute='value']**

//  - In this document (HTML)

**TAG** - h1, p, input, a, form, img, video, audio,button, table, ul, li, tr, div, select, span, -> Html Tags

**Attribute** - id, class, name, alt, href, src, data-qa, ….srcset ..

 There are two types of XPath which are very popular.

- Absolute XPath
- **Relative XPath**
  ![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_E7dOkYmuBGytqZwr2Wzij.png?ixlib=js-3.8.0 "image.png")

**Absolute XPath -** xPath is an expression which basically contains details from **the root element**

 **the problem with the absolute** XPath is if any element changes, the XPath basically breaks. So generally people don't use it

 **PS. : We generally do not use absolute.**

/html/body/header/div/a

##### Relative Xpath

You can simply start by referencing the element you want and go from there

Core Logic - **//tagName[@attribute='value']**

```
//a[@id="btn-make-appointment"]
//*[@id="btn-make-appointment"] - slow
```

```
[app.wingify.com/#/login](https://app.wingify.com/#/login)

1. //input[@id="login-username"] - 1
2. //*[@placeholder="Enter email ID"] - Slow( * is find all) 
3. //input[@data-qa="hocewoqisi"] - 1
4.//input[@name="username"] - not uniuqe 4/4 -> get(0), first()
5.//input[@placeholder="Enter email ID"] - 4/4 -> get(0)
6.//input[@type="email"] - not uniuqe 4/4
7.//input[@class="text-input W(100%)"] - Low
```

**XPATH to CSS selector**

```
//input[@data-qa="hocewoqisi"] ->  remove the // and @ -> input[data-qa="hocewoqisi"]
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_xEGjknC91beyTkTOQtKC1.png?ixlib=js-3.8.0 "image.png")

**page.locator("css=button").click()**
**page.locator("xpath=//button").click()**

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_gGyPPFkGzWBP-Wrrn7S58.png?ixlib=js-3.8.0 "image.png")

---

# **XPATH Functions**

- _XPath F(n) -> they are majorly used for the dynamic elements_
- Function says that there are certain functions you can also use, which I am going to give you
  - **Contains()**//tag_name[**contains**(@attribute,'value_of_attribute')]
  - **Starts-with()**//tag_name[**starts-with**(@attribute,'Part_of_Attribute_value')]
  - **Text()**//tag_name[text()='Text of the element']

```
import { test, expect} from '@playwright/test';
test("Verfiy the error message in the wingify free trial", async({ page})=>{

    await page.goto("https://wingify.com/free-trial/");
    let inputBox = page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("abccd");
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();
    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    let error_message_text = await error_message.textContent();
    expect(error_message_text).toContain("The email address you entered is incorrect.");
    await page.pause();


});
```

**String functions**

**concat**(string, ...): XPath concat function concatenated number of arguments and return to a concatenated string.

**starts-with**(string, string): XPath start-with function return True/False. Return True if second argument string is start with first argument.

**contains**(string, string) - XPath contains function return True/False. Return True if second argument string is a contain of first argument.

string-length(string): XPath string-length function return the length of string.

**substring-after**(string, string): XPath substring-after function return the substring of the first argument string base on first occurrence of the second argument string after all character.

**substring-before**(string, string): XPath substring-before function return the substring of the first argument string base on first occurrence of the second argument string before all character.

**normalize-space**(string): XPath normalize-space function sequence of whitespace combine into single normalize space and removing leading and trailing whitespace.

```
//a[contains(@id,"btn-make")] - Partial Match
//a[text()="Make Appointment"]
//a[contains(text(),"Make Appointment")]
//a[text()="Make Appointment" or @id="btn-make-appointment"] - 100 Either True
//a[starts-with(@id,"btn")]
//a[ends-with(@id,"btn")]
```

[katalon-demo-cura.herokuapp.com/](https://katalon-demo-cura.herokuapp.com/)

CheatSheet - [devhints.io/xpath](https://devhints.io/xpath)

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_2u3Y-PLBZb0VoL5V6_uFa.png?ixlib=js-3.8.0 "image.png")

---

Dynamic Element

```
<a id="btn-make-appointmentaldljasdhlashdlaldhhadhsi" href="./profile.php#login" class="btn btn-dark btn-lg"> Make Appointment </a>
```

//a[@id='btn-make-appointment17092026']

# XPATH Axes

 if we can find one element with another element by using the relation

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_-HELO5N5Y7Tzar7sDJBJM.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_g3aWz6nwCL_NNpRXlvNRE.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_sgwrQlwgRMLFBoCElSRvQ.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_m549A0chrJldbuPAa9tIo.png?ixlib=js-3.8.0 "image.png")

# CSS Selectors MasterSheet

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_jJdkozfI-69kXBRKbsUAP.png?ixlib=js-3.8.0 "image.png")


> Normal Locator -> XPath -> Css Selector -> Playwright default Locators(80%)

## Debug vs UI Mode

 npx playwright test tests/03_Locator_Commands/227_Fresh.spec.ts --debug

- debug will help you to execute the testcase one by one command

---

 npx playwright test tests/03_Locator_Commands/227_Fresh.spec.ts --ui

debug + ui see also( rollback and network requet, other extra things to see)

---

Headless(no UI) vs Headed (with UI)

---

# Playwright Locator (80%)

#### Locator Priority -> Which One to Use First

When choosing a locator, Playwright recommends this priority. Start from the top. Use the first one that works for your element.

**1st -> getByRole()** — Most resilient. Doesn't break when CSS or text changes.

**2nd -> getByTestId()** — Very stable. Created specifically for automation.

**3rd -> getByText()** — Human-readable. Breaks only if visible text changes.

**4th -> getByPlaceholder()** — Good for form inputs.

**5th -> getByLabel()** — Finds inputs by their `<label>` text.

**6th -> CSS Selectors** — Fallback. Fragile when IDs or classes change.

**7th -> XPath** — Last resort. Brittle and hard to read. Avoid.

```
These locators follows the concept of ARIA concept.(every modern browser have to 
support the aria things ( acceessbiloty things and dev html they have to follow
the rules))
```

| <u></u>               | <u></u>                     | <u></u>                                                                                                                                  | <u></u>                                      | <u></u>                                                                    |
| --------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| <u></u>               | `<u>getByRole</u>`        | `page.getByRole('button', { name: 'Submit' })``page.getByRole('heading', { level: 1 })``page.getByRole('checkbox', { checked: true })` | `<u><button>Submit</button></u>`           | <u>Best for accessibility. Works with ARIA roles. First choice always.</u> |
| <u></u>               | `<u>getByTestId</u>`      | `page.getByTestId('login-btn')``page.getByTestId('user-card')`                                                                         | `<u><button data-testid="login-btn"></u>`  | <u>Most stable. Add custom test IDs for reliable automation.</u>           |
| <u></u>               | `<u>getByText</u>`        | `page.getByText('Welcome back')``page.getByText('Login', { exact: true })``page.getByText(/welcome/i)`                                 | `<u><span>Welcome back</span></u>`         | <u>Match visible text content. Supports regex.</u>                         |
| <u></u>               | `<u>getByLabel</u>`       | `page.getByLabel('Email')``page.getByLabel('Password')`                                                                                | `<u><label>Email <input/></label></u>`     | <u>Form inputs with associated labels.</u>                                 |
| <u></u>               | `<u>getByPlaceholder</u>` | `page.getByPlaceholder('Enter email')``page.getByPlaceholder(/search/i)`                                                               | `<u><input placeholder="Enter email"></u>` | <u>Inputs with placeholder text, no label available.</u>                   |
| <u></u>               | `<u>getByAltText</u>`     | `page.getByAltText('Company Logo')``page.getByAltText(/profile/i)`                                                                     | `<u><img alt="Company Logo"></u>`          | <u>Images with alt text.</u>                                               |
| <u></u>               | `<u>getByTitle</u>`       | `page.getByTitle('Close dialog')``page.getByTitle(/settings/i)`                                                                        | `<u><button title="Close dialog"></u>`     | <u>Elements with title attribute.</u>                                      |
| **getByRole()** |                             |                                                                                                                                          |                                              |                                                                            |

`getByRole()` finds elements by their **ARIA role** -> the accessibility role that tells screen readers what an element IS. A button is a `button`, an input is a `textbox`, a link is a `link`. These roles are built into HTML -> you don't need to add them manually.

[developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

This is Playwright's **#1 RECOMMENDED** locator strategy. Why? Because ARIA roles are tied to WHAT the element IS, not how it looks. When the design team changes `class="primary-btn"` to `class="main-button"`, the role `button` stays the same. Your test doesn't break.

<button role=button />

```
getByRole(role: 
"alert" | 
"alertdialog" | 
"application" | "article" | 
"banner" | "blockquote" | "button" | "caption" | "cell" 
| "checkbox" | "code" | "columnheader" | "combobox" | 
"complementary" | "contentinfo" | "definition" | "deletion" 
| "dialog" | "directory" | "document" | "emphasis" | "feed" | 
"figure" | "form" | "generic" | "grid" | "gridcell" | "group" 
| "heading" | "img" | "insertion" | "link" | "list" | "listbox" | 
"listitem" | "log" | "main" | "marquee" | "math" | "meter" | 
"menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" |
 "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | 
 "progressbar" | "radio" | "radiogroup" | "region" | "row" |
  "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" |
   "separator" | "slider" | "spinbutton" | "status" | "strong" | 
   "subscript" | "superscript" | "switch" | "tab" | "table" | 
   "tablist" | "tabpanel" | "term" | "textbox" | "time" | 
   "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem", 
   options?: {
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Tvg1xnkt0SPnaRku1eAKw.png?ixlib=js-3.8.0 "image.png")

```
import { test, expect } from "@playwright/test";

test("find elements by ARIA role", async ({ page }) => {
    await page.goto("https://app.vwo.com/login");

    // Find heading
    let heading = await page.getByRole("heading", { name: "Login" }).textContent();
    console.log("Heading:", heading);**

    // Find textbox (input) by its label
    await page.getByRole("textbox", { name: "Email" })**.fill("dev@test.com");**
    console.log("Filled email textbox ✅");

    // Find checkbox
    await page.getByRole("checkbox", { name: "Remember me" }).check();
    console.log("Checked 'Remember me' ✅");

    // Find button
    await page.getByRole("button", { name: "Sign In" })**.click();**
    console.log("Clicked 'Sign In' button ✅");

    // Find link
    await page.getByRole("link", { name: "Forgot Password" })**.click();**
    console.log("Clicked 'Forgot Password' link ✅");
});
```

---

> 22th Sept 2026

# Session State in Playwright

- Session state is the data that keeps a user "logged in" .
- typically a session token in a **cookie** or **localStorage**.
- When you login, the server creates a session and sends back a token.
- Your browser stores it and includes it in every subsequent request.
- Testing session state means verifying: **sessions persist across pages**, sessions **survive page refresh, sessions expire when they should,** and sessions are destroyed on logout.
- **Storage state is Playwright's way of SAVING a login session to a JSON file and REUSING it later.** Instead of logging in before every test (slow), you login ONCE, save everything (cookies + localStorage), and load it in all future tests.
  ![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_3huxE3YndOeRUwB7C18q9.png?ixlib=js-3.8.0 "image.png")

**If you have 50 tests, that's 50 login operations saved. Massive time saver.**

> 12000

login 4000 -> we can save lot of time.

> 3-4 hours -> in that time, we can complete our testcases -

VWO cookie is 1 hour to 24 hours ->

[www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

```
npx tsx tests/04_Session_Storage/231_SessionStorage.ts 2>&1 | tail -30
```

```
npx playwright test tests/04_Session_Storage/232_TestWingify.spec.ts --reporter=list
```

---

Allure Report

[allurereport.org/docs/playwright/](https://allurereport.org/docs/playwright/)

## Getting started with Allure Playwright

- Make sure [Node.js](https://nodejs.org/) is installed.
- **npm install --save-dev @playwright/test allure-playwright**
- In the `playwright.config.ts add this line``**["allure-playwright"]]**`
- Make sure that before running this command - npm i allure-commandline (one time)
- To see the Results -> **allure serve allure-results/**
- Reference -> [allurereport.org/docs/playwright/](https://allurereport.org/docs/playwright/)
  ![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_ifPMb0WvzqE88y7aA3pyg.png?ixlib=js-3.8.0 "image.png")

/// if allure is not recognized

> npm i -g allure-commandline

 want to add a custom log

 **await allure.attachment**("Text file", "This is the file content.", ContentType.TEXT);


- 95% - Default Playwright Reporter
- 2-3% - Allure Reporter - HTML
- 1% Custom Solution -> Create by using AI or You can reuse **CustomTTA Reporter.**

[github.com/PramodDutta/AdvancePlaywrightFramework2x/blob/main/src/utils/CustomReporter.ts](https://github.com/PramodDutta/AdvancePlaywrightFramework2x/blob/main/src/utils/CustomReporter.ts)

---

> 24th Sept 2026

# **Multiple Element & Web Tables Support in** Playwright

```
import { test, expect, Locator } from '@playwright/test';
test('Basic verify how to handle multiple elements ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts: Locator[] =  await page.locator('a.list-group-item').;
    console.log(rightPanelLinksTexts.length);
    for (const link of rightPanelLinksTexts) {
        console.log(await link.getAttribute('href'));
    }

    await page.pause();
});
```

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_--eV8rl-vbb2dc-sZMoHf.png?ixlib=js-3.8.0 "image.png")

---

## Locator Collection Patterns

- `page.locator('a.list-group-item').allInnerTexts()`  returns the text content for every matching element as a `string[]` . Use this when you need to inspect or compare displayed text before choosing an action.
- `page.getByText(linkText).first().click()`  clicks the first element matching dynamic text from the collected list. The `.first()`  call avoids strict-mode issues when more than one element has the same text.
- `page.locator('a.list-group-item').all()`  returns an array of `Locator`  objects. Use this when each matching element still needs locator actions or attribute reads, such as `getAttribute('href')` .

---

## How to Debug Playwright Code ?

1. await page.pause()
2. Debug will open and use the next command to check

---

# Web Tables

HTML tables allow web developers to arrange data into rows and columns.

[www.w3schools.com/htmL//tryit.asp?filename=tryhtml_table_intro](https://www.w3schools.com/htmL//tryit.asp?filename=tryhtml_table_intro)

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0OLYKDM9wWI6OiZrmfgHN.png?ixlib=js-3.8.0 "image.png")

- **Count rows and columns before iterating through a table.**
- **Build dynamic XPath expressions** when demonstrating row and column indexes.
- Use XPath axes such as `following-sibling::td`  to read related cells in the same row.
- Prefer Playwright locators like `page.locator('table tbody tr', { hasText: '...' })`  for readable row targeting.
- Use `locator('td').nth(index)`  or `allInnerTexts()`  to extract individual cells or full row data.
- Remember that **XPath table indexes are one-based,** while Playwright `nth()`  indexes are zero-based.

---

### Project - Webtable Project

> Zeta

URL - > [awesomeqa.com/webtable.html](https://awesomeqa.com/webtable.html)

**Objective** :  To find the Helen Bankett first in the web table, and following the web table, please find which country she belongs to.

**Concept** -  following sibling, Dynamic XPath creation. -> Playwright Locator.

```
//table[@id="customers"]
//table[@id="customers"]/tbody/tr -> Rows (in heading) -> 7

Helen -> **//table[@id="customers"]/tbody/tr[5]/td[2]

//table[@id="customers"]/tbody/tr[5]/td[2]/preceding-sibling::td -> Company
//table[@id="customers"]/tbody/tr[5]/td[2]/following-sibling::td -> Country**
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_1IuQ8aRHkolTWzhyGruDW.png?ixlib=js-3.8.0 "image.png")

---

> 26th Sept 2026

# WebTable Part 2

## Filter & hasCSS Selector

**Filter :**   based on the number of locators, it will allow you to find a particular locator:

- which has a text
- which does not have a text
- which has certain attributes
- which has a certain locator

```
import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => {
   await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

   const forgottenPasswordLink = page.locator('a.list-group-item')
      .filter({ hasText : 'Forgotten Password'});
   await forgottenPasswordLink.click();

   const privacyLink = page.locator('footer a')
   .filter(
      { hasText: 'Privacy Policy' }
   );

   await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

   await page.pause();
});
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Kn6VJ5fUUn3ZBF-U_HWHK.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_GVRCi17w8xLq-kGJhjavr.png?ixlib=js-3.8.0 "image.png")

---

## Project :  Pagination in WebTable

Objective : Find the on this page - [app.thetestingacademy.com/playwright/tables/webtable](https://app.thetestingacademy.com/playwright/tables/webtable)

find the Luca Greco in which country he is present and email ID.

---

> 29th Sept 2026

# 🟩 Web Select, Handling Frame/ Iframe and Windows

## Select / DropDown

Dropdowns or selects are mostly used when we have multiple options for a single question or single thing that we want to select, and people can select the options. They can select one option or two options. They can be customized, they can come after some time, they can be grouped together, and people can select multiple options also

Simple Dropdown - [the-internet.herokuapp.com/dropdown](https://the-internet.herokuapp.com/dropdown)

Custom DropDown - [app.thetestingacademy.com/playwright/tables/dropdowns](https://app.thetestingacademy.com/playwright/tables/dropdowns)

Advance 5+ DropDown -> [app.thetestingacademy.com/playwright/tables/select-boxes](https://app.thetestingacademy.com/playwright/tables/select-boxes)

## Select / Dropdown in Playwright

| Term               | Meaning                                                                                           | Playwright action                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Select**   | An HTML `<select>` element containing multiple `<option>` choices.                            | Use `locator.selectOption()`                                                    |
| **Dropdown** | A UI control that opens a list of choices; it may be a native `<select>` or a custom component. | Use `selectOption()` for native dropdowns, or `click()` for custom dropdowns. |

### Native HTML dropdown

```
<select id="country">
  <option value="in">India</option>
  <option value="us">United States</option>
</select>

const countryDropdown = page.locator('#country');

// Select using value
await countryDropdown.selectOption('in');

// Select using visible text
await countryDropdown.selectOption({ label: 'India' });
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_HhBYhNK2kyrz9ANtBqhJj.png?ixlib=js-3.8.0 "image.png")

### Custom dropdown

A custom dropdown may be created using `<button>`, `<div>`, `<li>`, or ARIA roles instead of a `<select>` element

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_ACmzl7mkUb3W9_rT3fYJZ.png?ixlib=js-3.8.0 "image.png")

```
await page.getByRole('combobox', { name: 'Country' }).click();
await page.getByRole('option', { name: 'India' }).click();
```

1. Open the DropDown
2. Select by Text or Role.

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_43yYC_Jh0WEw6F1rLUT4m.png?ixlib=js-3.8.0 "image.png")

- mouse*
  mouserHover, over down... - delete them



import { test, expect, Locator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

       // ① Single — searchable

   await page.locator('#rs-single').click();
   await page.getByText("Cypress").click()

     // ②  Multi — chips with remove
   await page.locator("#rs-multi").click();
   await page.getByText("Pytest", { exact: true }).click();
   await page.getByText("JUnit", { exact: true }).click();
   await page.keyboard.press("Escape");

    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");

    // ⑤ Async — fetched on type

    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('de');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option',{ name: "Delhi", exact :true},).click();

   await page.pause();
});

---
```
import { test, expect, Locator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

       // ① Single — searchable

   await page.locator('#rs-single').click();
   await page.getByText("Cypress").click()

     // ②  Multi — chips with remove
   await page.locator("#rs-multi").click();
   await page.getByText("Pytest", { exact: true }).click();
   await page.getByText("JUnit", { exact: true }).click();
   await page.keyboard.press("Escape");


    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");


    // ⑤ Async — fetched on type


    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('de');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option',{ name: "Delhi", exact :true},).click();

   await page.pause();
});
```
---
# Handling Frame/ Iframe

## **What is an iframe?**

An iframe (`<iframe>`) embeds another HTML page inside the current page. It has its own DOM, its own CSS, its own JavaScript , completely isolated from the parent page.

Common iframe examples: payment forms (Stripe, Razorpay), embedded YouTube videos, Google Maps, reCAPTCHA, social media widgets, and third-party chat widgets.

```
<!-- Main page -->
<h1>Payment Page</h1>
<p>Enter your card details below:</p>

<!-- iframe — another page embedded inside -->
<iframe src="https://payment-provider.com/form" id="payment-frame">
    <!-- Inside this iframe is a SEPARATE page with its own elements -->
    <!-- <input id="card-number" placeholder="Card Number" /> -->
    <!-- <button>Pay Now</button> -->
</iframe>
```

**here is no need to switch in Playwright**

## Frames

| Method                           | What It Does                |
| -------------------------------- | --------------------------- |
| `**page.frameLocator("#id")**` | Access iframe (recommended) |
| `frame.locator("selector")`    | Find element inside iframe  |
| `outer.frameLocator("#inner")` | Access nested iframe        |
| `page.frame({ name: "X" })`    | Older approach              |

---

Coding Practice - [app.thetestingacademy.com/student/coding-practice](https://app.thetestingacademy.com/student/coding-practice)

Selector - [qabattle.com/app/battles/selector-battle](https://qabattle.com/app/battles/selector-battle)

---

## 🟩 Handle Keyboard and Mouse Events, JS Alerts

```
await page.keyboard.type('Hello World!');
await page.keyboard.press('ArrowLeft');
await page.keyboard.press('Shift+KeyA');

await keyboard.down(key);
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_tizesmd8VRoSvaRPyRsOw.png?ixlib=js-3.8.0 "image.png")

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_qqXY89RiALSsXiZ1ZykSu.png?ixlib=js-3.8.0 "image.png")

---

# 🟩 Handle Keyboard and Mouse Events, JS Alerts

> 1 Oct 2026

```
import { test, expect, Locator } from '@playwright/test';

test('Verify Hover for the spicejet', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();

    // Code

   await page.pause();
});
```

**Hover Problem Statement**


**Hover Problem Statement**

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0lUcQDHwXX6L1j9W83ygi.png?ixlib=js-3.8.0 "image.png")

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_XjtDmHop8qsC923S6TW2V.png?ixlib=js-3.8.0 "image.png")

```
import { test, expect, Locator } from '@playwright/test';

test.describe('Javascript Alerts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });



    test('JS Alert accept 1', async ({ page }) => {


        await page.getByRole('button', { name: "Click for JS Alert" }).click();
        page.once('dialog', async dialog => {
            console.log('Alert type:', dialog.type());
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        });
        await page.pause();
    });
    test('JS Alert accept 2', async ({ page }) => {

        page.once('dialog', async dialog => {
            console.log('Alert type:', dialog.type());
            expect(dialog.type()).toBe('confirm');
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
            //await dialog.dismiss();
        });

        await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');






    });
    test('JS Alert accept 3', async ({ page }) => {

        const inputText = 'Hello from The Testing Academy';

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt');
            expect(dialog.defaultValue()).toBe('');
            await dialog.accept(inputText);
            //await dialog.dismiss();
        });

        await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);







    });
});
```

---

> 3rd Oct 2026

**Basic Auth**

Use the URL -> [admin:admin@the-internet.herokuapp.com/basic_auth](https://admin:admin@the-internet.herokuapp.com/basic_auth)

 mostly, it is used in the staging or QA environments. The credential that you see, admin-admin, you can store it in the **env file**

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_BZx-kS_nPBhOrGZA2kwnI.png?ixlib=js-3.8.0 "image.png")

## 🟩 Handle SVG & Shadow DOM, FIle Upload.

### SVG (Scalable Vector Graphics)

- [SVG defines vector-based graphics in XML](https://www.w3schools.com/graphics/svg_intro.asp), which can be directly embedded in HTML pages.
- 2D Vector Graphics This is created by using the XML tags.
- there are very, very complex graphics. You can create faces, art, and many more things on the internet that are actually present with SVG

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_3qOeksdVxUSL7WXZ9pXDT.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_gn795RP9-rx52uBrfR0Y-.png?ixlib=js-3.8.0 "image.png")

<svg></svg>, <g></g> , <circle></circle> , <polygon></polygon> , <path></path>

<svg>

<g>

<path></path>

<path></path></path

</g>

</svg>

## How to handle SVG Elements in Playwright?

1. **XPATH**
   1. **name()** / **local-name()**

**PS. This is a normal image file with the svg extenstion it will be hanlded like an image.**

<img src="abc.svg"/>

<svg>

```
// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs **name() / local-name()** because
// tag names are namespaced (e.g. svg:path).
// Common patterns: locate SVG, locate child shapes **(path**/rect/circle/g),
// click, hover, read attributes (d, fill, viewBox, stroke), assert state.
```

## Task - Search and Print the Titles of the macmins available in the flipkart.

1. Navigate - [www.flipkart.com/search](https://www.flipkart.com/search)
2. Search for the "macmini"
3. Print all the titles and prices.

---

> npx playwright test tests/12_Handle_SVG/255_SVG_TestCase.spec.ts --debug

---

> 6th Oct 2026

## Handling Shadow DOM, File Upload and Download

Shadow DOM is a web standard that offers a way to **encapsulate style and markup in web components.**

[developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_PGZ4EdGG7-g21w21mwJWk.png?ixlib=js-3.8.0 "image.png")

If the Shadow Root is closed, we will not be able to communicate.or intrect.

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_S_WwVjcWUFfxt-0cIQWIN.png?ixlib=js-3.8.0 "image.png")

**File Upload**

 file upload is nothing but a mechanism where you can upload a file by using the input box

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_fR3nTPgFAMovM52fjasYC.png?ixlib=js-3.8.0 "image.png")

P.S :  the problem with the network idle is that it will wait for all the requests or APIs to be finished, which will take a lot of time

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Op0Pf9BCPlXCPfd7bIOtK.png?ixlib=js-3.8.0 "image.png")

| Order                                                                                                                                                                                                                                                                                                                                                                            | Result                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|                                                                                                                                                                                                                                                                                                                                                                                  | caught `sample-download.txt` in **252ms** |
| Click, then listener immediately                                                                                                                                                                                                                                                                                                                                                 | caught it (got lucky)                             |
| Click, wait 3s, then listener                                                                                                                                                                                                                                                                                                                                                    |                                                   |
| **The reason:** `**waitForEvent**` **only sees events that fire while it's listening.** It does not replay history. The download event fires during the click, so a listener registered afterwards is racing it, and once the event has passed it is gone forever. Your test then sits until the timeout and fails with a misleading "waiting for event download". |                                                   |

My second probe is the honest version of that: with a 3-second gap it misses every time. The immediate-after case passing was luck, the event just hadn't landed yet in that run. That's the worst kind of bug, it passes on your laptop and fails on a slower CI box.

**What** `**Promise.all**` **actually does here**, and it's not parallelism:

```ts
const [staticDownload] = await Promise.all([
      page.waitForEvent('download'),            // ① runs first, registers the listener
      page.getByTestId('download-static').click()  // ② then the click fires the event
]);
```

Array elements evaluate top to bottom. `waitForEvent` is called first and returns a pending promise, which registers the listener _synchronously_. Only then is `click()` called. `Promise.all` just waits for both to settle. The ordering is doing the work, not the concurrency.

**The form Playwright now recommends** is the same thing, more plainly:

```ts
const downloadPromise = page.waitForEvent('download');   // register, don't await
await page.getByTestId('download-static').click();       // fire it
const download = await downloadPromise;                  // now collect

await download.saveAs('./out/' + download.suggestedFilename());
```

The missing `await` on line 1 is the whole trick. `await` there would block until a download happened, but nothing has clicked yet, so it would deadlock until timeout.

This is the identical shape as `page.once('dialog', ...)` in [254_JS_Alerts.spec.ts](https://tests/11_JS_Alerts/254_JS_Alerts.spec.ts): register the handler, then trigger. Worth teaching them as one rule, **subscribe before you trigger**, since it covers `download`, `dialog`, `popup`, `filechooser`, `request` and `response`.

One note on your line 16: `'./out/'` resolves against the working directory, not the spec. `path.join(__dirname, 'out', ...)` is the portable form, same point as 265.

---

> 10th Oct 2026

## ScrollTo, Expect, Test hooks, DDT

```
scrollIntoViewIfNeeded(options?: {
  signal?: AbortSignal;  // added in v1.62
  timeout?: number;      // ms
}): Promise<void>
```

> signal none , Cancels early and throws AbortError.It doesn’t turn off the timeout. Doesn’t exist in 1.61 or older

> timeout	In the test runner, no per-action limit, so the test timeout (30s) is the cap. In library mode, 30s

```
import { test, expect } from '@playwright/test';

test.describe('Scroll to Element - TestingAcademy', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

   });
   test('scroll to view', async ({ page }) => {


      // 5) lazy list grows past 10 once visible

      await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
      await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

      const list = page.getByTestId('lazy-list').locator('li');
      const initialCount = await list.count();

      // scroll the LAST existing item into view — item 11 does not exist yet,
      // so nth(10) would just wait until the test times out.
      // const controller = new AbortController();
      // setTimeout(() => controller.abort(), 500);
    
      // // await list.last().scrollIntoViewIfNeeded({ signal: controller.signal});




      await expect.poll(async () => list.count(), {
         message: "expected_itmes > 10",
         timeout: 10_000
      }).toBeGreaterThan(initialCount);

      const finalCount = await list.count();
      console.log(finalCount);

      await page.waitForTimeout(5000);

   });


test('Pramod: cancel the wait with an AbortSignal (v1.62+)', async ({ page }) => {
  await page.setContent('<button style="display:none">Hidden</button>');
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 500);

  await expect(
    page.locator('button').scrollIntoViewIfNeeded({ signal: controller.signal })   // option 2: signal
  ).rejects.toThrow('aborted');
});

});
```

# Assertions

 Assertion basically means to validate the expected result with the actual result

- **Soft Assertion** is an assertion which is used as the `expect.soft`, **_which means that even if they fail, still all the other lines will be executed_**
- **Hard assertion** is something where, if it fails, **_then the next line will not be executed,_** and the program will be halted.

# Playwright `expect` Assertions

# -> Interview Cheatsheet

Quick reference of every common `expect` assertion in Playwright. One example each. Format: **What** → **How** → **Example**.

## 1. Value Assertions (non-retrying, synchronous)

### `toBe`

- **What:** Strict equality (`===`  ). Primitives or same reference.
- **How:** `expect(value).toBe(expected)`

```ts
expect(1 + 2).toBe(3);
```

### `toEqual`

- **What:** Deep equality. Use for objects/arrays.
- **How:** `expect(obj).toEqual(expectedObj)`

```ts
expect({ a: 1, b: 2 }).toEqual({ b: 2, a: 1 });
```

### `toStrictEqual`

- **What:** Deep equality + same type + no extra undefined props.
- **How:** `expect(obj).toStrictEqual(expectedObj)`

```ts
expect({ a: 1 }).toStrictEqual({ a: 1});
```

### `toBeTruthy` /  `toBeFalsy`

- **What:** Asserts truthy/falsy in JS sense.
- **How:** `expect(value).toBeTruthy()`

```ts
expect('hello').toBeTruthy();
expect(0).toBeFalsy();
```

### `toBeNull` / `toBeUndefined` / `toBeDefined` /  `toBeNaN`

- **What:** Check `null`  , `undefined`  , defined, or `NaN`  .

```ts
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect(42).toBeDefined();
expect(NaN).toBeNaN();
```

### `toBeGreaterThan` / `toBeLessThan` / `toBeGreaterThanOrEqual` /  `toBeLessThanOrEqual`

- **What:** Numeric comparison.

```ts
expect(34).toBeGreaterThan(11);
expect(5).toBeLessThanOrEqual(5);
```

### `toBeCloseTo`

- **What:** Floating-point comparison within precision.
- **How:** `expect(num).toBeCloseTo(expected, numDigits)`

> expect(0.1 + 0.2).toBeCloseTo(0.3, 5);

### `toContain`

- **What:** String contains substring, or array contains item.

```ts
expect('playwright').toContain('play');
expect([1, 2, 3]).toContain(2);
```

### `toContainEqual`

- **What:** Array contains an item that deep-equals expected.

```ts
expect([{ id: 1 }, { id: 2 }]).toContainEqual({ id: 1 });
```

### `toHaveLength`

- **What:** Array/string length match.

```ts
expect([1, 2, 3]).toHaveLength(3);
```

### `toMatch`

- **What:** String matches regex or substring.

```ts
expect('user@test.com').toMatch(/@/);
```

### `toMatchObject`

- **What:** Object contains subset of expected properties.

```ts
expect({ id: 1, name: 'Pramod', role: 'admin' }).toMatchObject({ role: 'admin' });
```

### `toThrow` /  `toThrowError`

- **What:** Function throws an error.

```ts
expect(() => { throw new Error('boom'); }).toThrow('boom');
```

---

## 2. Locator Assertions (auto-retrying, `await` required)

### `toBeVisible` / `toBeHidden`

- **What:** Element visible / hidden in DOM.

```ts
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
```

### `toBeEnabled` / `toBeDisabled`

- **What:** Element is enabled / disabled.

```ts
await expect(page.getByLabel('First name')).toBeEnabled();
```

### `toBeEditable`

- **What:** Input is editable (not readonly/disabled).

```ts
await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();
```

### `toBeEmpty`

- **What:** Element has no text or no value.

```ts
await expect(page.locator('#cart')).toBeEmpty();
```

### `toBeChecked`

- **What:** Checkbox/radio is checked. Use `{ checked: false }`  for unchecked.

```ts
await expect(page.getByLabel('Remember me')).toBeChecked();
```

### `toBeFocused`

- **What:** Element has keyboard focus.

```ts
await expect(page.getByLabel('Search')).toBeFocused();
```

### `toBeAttached`

- **What:** Element exists in DOM (may not be visible).

```ts
await expect(page.locator('#toast')).toBeAttached();
```

### `toBeInViewport`

- **What:** Element is within viewport bounds.

```ts
await expect(page.getByText('Footer link')).toBeInViewport();
```

### `toHaveText`

- **What:** Exact text match (string or regex). Array for multiple elements.

```ts
await expect(page.locator('h1')).toHaveText('Welcome');
```

### `toContainText`

- **What:** Element text contains substring.

```ts
await expect(page.locator('.alert')).toContainText('success');
```

### `toHaveValue`

- **What:** Input has given value.

```ts
await expect(page.getByLabel('Email')).toHaveValue('test@test.com');
```

### `toHaveValues`

- **What:** Multi-select has given selected values.

```ts
await expect(page.locator('#langs')).toHaveValues(['en', 'fr']);
```

### `toHaveAttribute`

- **What:** Element has attribute with value.

```ts
await expect(page.getByLabel('Email')).toHaveAttribute('type', 'email');
```

### `toHaveClass`

- **What:** Element has class (string, regex, or array).

```ts
await expect(page.locator('button')).toHaveClass(/btn-primary/);
```

### `toHaveCount`

- **What:** Locator matches N elements.

```ts
await expect(page.locator('footer a')).toHaveCount(16);
```

### `toHaveCSS`

- **What:** Element has computed CSS property.

```ts
await expect(page.locator('button')).toHaveCSS('background-color', 'rgb(255, 0, 0)');
```

### `toHaveId`

- **What:** Element has given `id` .

```ts
await expect(page.getByLabel('First name')).toHaveId('first-name');
```

### `toHaveJSProperty`

- **What:** Element has JS DOM property with value.

```ts
await expect(page.locator('#video')).toHaveJSProperty('paused', true);
```

### `toHaveScreenshot`

- **What:** Visual regression — element/page matches stored snapshot.

```ts
await expect(page.locator('.hero')).toHaveScreenshot('hero.png');
```

### `toHaveAccessibleName` / `toHaveAccessibleDescription` / `toHaveRole`

- **What:** A11y tree assertions.

```ts
await expect(page.getByRole('button')).toHaveAccessibleName('Submit');
await expect(page.locator('button')).toHaveRole('button');
```

## 3. Page Assertions

### `toHaveTitle`

- **What:** Page `<title>`  matches.

```ts
await expect(page).toHaveTitle(/Playwright/);
```

### `toHaveURL`

- **What:** Page URL matches.

```ts
await expect(page).toHaveURL('https://playwright.dev/');
```

### `toHaveScreenshot` (page-level)

- **What:** Full-page visual snapshot.

```ts
await expect(page).toHaveScreenshot('home.png', { fullPage: true });
```

---

## 4. API Response Assertions

### `toBeOK`

- **What:** Response status is 2xx.

```ts
const res = await request.get('/api/users');
await expect(res).toBeOK();
```

---

## 5. Modifiers

### `.not`

- **What:** Negate any assertion.

```ts
await expect(page.locator('#error')).not.toBeVisible();
expect('hello').not.toContain('bye');
```

### `expect.soft`

- **What:** Records failure but continues test. Useful for multiple checks.

```ts
await expect.soft(input).toBeVisible();
await expect.soft(input).toHaveValue('');
```

### `expect.poll`

- **What:** Re-runs a function until assertion passes or timeout.

```ts
await expect.poll(async () => (await api.get('/jobs')).status, { timeout: 10_000 }).toBe(200);
```

### `expect.toPass`

- **What:** Retries an entire block until it passes.

```ts
await expect(async () => {
  const res = await page.request.get('/health');
  expect(res.status()).toBe(200);
}).toPass({ timeout: 10_000 });
```

### `expect.configure`

- **What:** Custom expect with preset timeout/soft.

```ts
const slowExpect = expect.configure({ timeout: 30_000 });
await slowExpect(page.locator('#late')).toBeVisible();
```

![Playwright Expect Assertions Cheatsheet.png](<https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/Playwright%20Expect%20Assertions%20Cheatsheet_4Hc3pNNawZiismbuzJ_Dz.png?ixlib=js-3.8.0 "Playwright Expect Assertions Cheatsheet.png">)

---

# 📘 PLAYWRIGHT ASSERTIONS & EXPECTATIONS — COMPLETE REFERENCE

## 📌 Run Tests

```bash
npx playwright test playwright-assertions.spec.ts -g "<test-name>"
```

# ⚡ Quick Reference Cheat Sheet

| Category      | Assertion                  | Auto Retry |
| ------------- | -------------------------- | ---------- |
| Visibility    | `toBeVisible()`          | ✅         |
| Visibility    | `toBeHidden()`           | ✅         |
| Presence      | `toBeAttached()`         | ✅         |
| Viewport      | `toBeInViewport()`       | ✅         |
| State         | `toBeEnabled()`          | ✅         |
| State         | `toBeDisabled()`         | ✅         |
| State         | `toBeEditable()`         | ✅         |
| State         | `toBeChecked()`          | ✅         |
| State         | `toBeFocused()`          | ✅         |
| Text          | `toHaveText()`           | ✅         |
| Text          | `toContainText()`        | ✅         |
| Attribute     | `toHaveAttribute()`      | ✅         |
| CSS           | `toHaveCSS()`            | ✅         |
| JS Property   | `toHaveJSProperty()`     | ✅         |
| Values        | `toHaveValue()`          | ✅         |
| Count         | `toHaveCount()`          | ✅         |
| Accessibility | `toHaveRole()`           | ✅         |
| Accessibility | `toHaveAccessibleName()` | ✅         |
| Accessibility | `toMatchAriaSnapshot()`  | ✅         |
| Screenshot    | `toHaveScreenshot()`     | ✅         |
| Page          | `toHaveTitle()`          | ✅         |
| Page          | `toHaveURL()`            | ✅         |
| API           | `toBeOK()`               | ❌         |
| Equality      | `toBe()`                 | ❌         |
| Equality      | `toEqual()`              | ❌         |
| Equality      | `toStrictEqual()`        | ❌         |
| Numeric       | `toBeGreaterThan()`      | ❌         |
| Numeric       | `toBeCloseTo()`          | ❌         |
| Arrays        | `toContain()`            | ❌         |
| Regex         | `toMatch()`              | ❌         |
| Objects       | `toHaveProperty()`       | ❌         |
| Errors        | `toThrow()`              | ❌         |

---

# 🧠 Rule of Thumb

- **Locator/Page Assertions** → Auto-retry until timeout
- **Generic Assertions** → Execute once immediately
- Use `.soft`  → Continue execution after failures
- Use `expect.poll`  → Poll non-locator values repeatedly
- Prefer `toHaveCount(0)`  over `.not.toBeVisible()`  for lists

# _expect()_ in Playwright

```
import { test, **expect** } from '@playwright/test';
```

await expect(page.locator('#username').**toBeVisible()**

#### What an assertion actually does

When Playwright hits `expect(locator).toBeVisible()`, three things happen:

1. It checks the condition (is the element visible?)
2. If true → test continues silently
3. If false → it throws an `AssertionError`  with the expected vs. actual value, a screenshot, the trace, and the line number

---

# Test Hooks

This module shows how Playwright tests can control setup, teardown, reporting context, and execution flow with hooks, annotations, steps, and grouped suites.

## Patterns Covered

- Use annotations inside tests when behavior depends on browser support, known defects, or expected failures.
- Use `test.step()`  to make reports easier to read without splitting one scenario into multiple tests.
- Use `beforeEach`  for repeated page setup and `beforeAll`  or `afterAll`  for worker-level setup and teardown.
- Use `afterEach`  with `testInfo.status`  and `testInfo.expectedStatus`  to collect artifacts only when a test ends unexpectedly.
- Use `test.describe.serial()`  only when tests must share ordering; keep independent tests outside serial groups.
  [peter.sh/experiments/chromium-command-line-switches/](https://peter.sh/experiments/chromium-command-line-switches/)

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_yCD3yb1lljoscm5wPvfg7.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_WjsAT3TKpQ7OURz0WD8s6.png?ixlib=js-3.8.0 "image.png")

> 13th Oct 2026

# Data-driven Testing

- Data-driven testing is a way of testing where **you have an external data source and the application under test.**
- You basically use the external files or external test data to test the application under test multiple times with this.

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_f67tBZOGMLYCv4CF2yMom.png?ixlib=js-3.8.0 "image.png")

---

## **JSON**

- **JSON** stands for **JavaScript Object Notation**.
- It is a lightweight format used to store and transfer data between applications.

```
{
  "name": "Pramod",
  "role": "QA Engineer",
  "experience": 15
}
```

**JSON is commonly used in:**

- API
- Configuration files
- Test data
- Playwright and Selenium frameworks
- Frontend and backend communication

## JSON Syntax Rules

JSON data uses **key-value pairs**.

```
{
  "name": "Pramod"
}
```

```
Here:

"name" is the key
"Pramod" is the value
```

**Important rules:**

1. Keys must use double quotes.
2. String values must use double quotes.
3. Key and value are separated by `:` .
4. Multiple properties are separated by `,` .
5. Objects use `{ }` .
6. Arrays use `[ ]` .
7. The last property must not have a comma.

**JSON Data Types**

**_JSON supports six main data types._**

**Data type	Example**
String	-> "Pramod"
Number	-> 15
Boolean	-> true
Null	-> null
Object	-> { "city": "Bangalore" }
Array	-> ["JavaScript", "Playwright"]

```
{
  "name": "Pramod",
  "experience": 15,
  "isTrainer": true,
  "middleName": null,
  "skills": ["JavaScript", "Playwright", "Selenium"],
  "address": {
    "city": "Bangalore",
    "country": "India"
  }
}
```

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_eR4Y2zEm9pOKkzspZDyAy.png?ixlib=js-3.8.0 "image.png")

[todiagram.com/editor?utm_source=jsoncrack&amp;utm_medium=promotion_modal&amp;utm_campaign=editor_redirect](https://todiagram.com/editor?utm_source=jsoncrack&utm_medium=promotion_modal&utm_campaign=editor_redirect)

[jsonpath.com/](https://jsonpath.com/)

[jsonpathfinder.com/](https://jsonpathfinder.com/)

[jsoncrack.com/editor](https://jsoncrack.com/editor)

## JSON Object

A JSON object contains key-value pairs inside curly brackets.

```
{
  "username": "admin",
  "password": "admin123"
}
```

---

`const user = {   username: "admin",   password: "admin123" };`

**JS Object != JSON**

console.log(user.username);
console.log(user.password);

---

```
const data = {
  browsers: ["Chrome", "Firefox", "Safari"]
};

console.log(data.browsers[0]);
console.log(data.browsers[1]);
```

## Array of Objects

This is very common in API testing and automation.

```
{
  "users": [
    {
      "id": 1,
      "name": "Pramod"
    },
    {
      "id": 2,
      "name": "Amit"
    }
  ]
}
```

```
{
  "employee": {
    "name": "Pramod",
    "address": {
      "city": "Bangalore",
      "pinCode": 560001
    }
  }
}
```

## Convert JSON String to JavaScript Object

```
const jsonText = `{
  "name": "Pramod",
  "role": "QA Engineer"
}`;
```

```
const user = **JSON.parse**(jsonText);
console.log(user.name);
```

## Convert JavaScript Object to JSON

```
const user = {
  name: "Pramod",
  role: "QA Engineer"
};

const jsonText = **JSON.stringify(user);**

console.log(jsonText);
```

---

```
**Reading a JSON File in Node.js=**

Create a file called user.json:

{
  "username": "admin",
  "password": "admin123"
}
```

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_MP4Qvia_MD_55UvDcD_Nj.png?ixlib=js-3.8.0 "image.png")

## File System Module, Path in Node JS

```
import fs from 'fs';
import path from 'path';

// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
const filePath = path.join(__dirname, '280_Users.json');
console.log('File path:', filePath);

const fileData = fs.readFileSync(filePath,'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);

// Writing Data to a JSON File

const user = {
  name: "Pramod",
  role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");
```

[csvjson.com/](https://csvjson.com/)

---

[ponytail.dev/#top](https://ponytail.dev/#top)

 if you are creating AI content or AI code for the DB writer, YAML reader, or Excel reader, or you are using Faker JS created by AI, please use the Ponytail review

> can you do a ponytail review and make sure that the Faker JS file that we have created, which is 290, is the minimum one? Use the minimum code to implement this. Do not make the complex functions and everything.

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_M-vsO00zv8wyy6Du1TFs-.png?ixlib=js-3.8.0 "image.png")

# Faker JS

It is a third-party library which is used to generate fake test data which looks real in a dynamic format.

Generate massive amounts of fake (but realistic) data for testing and development.

[www.npmjs.com/package/@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

Faker tries to generate realistic data and not obvious fake data.

## 🚀 Features

- 🧍 Person - Generate Names, Genders, Bios, Job titles, and more.
- 📍 Location - Generate Addresses, Zip Codes, Street Names, States, and Countries!
- ⏰ Date - Past, present, future, recent, soon... whenever!
- 💸 Finance - Create stubbed out Account Details, Transactions, and Crypto Addresses.
- 👠 Commerce - Generate Prices, Product Names, Adjectives, and Descriptions.
- 👾 Hacker - “Try to reboot the SQL bus, maybe it will bypass the virtual application!”
- 🔢 Number and String - Of course, we can also generate random numbers and strings.
- 🌏 Localization - Pick from over 70 locales to generate realistic looking Names, Addresses, and Phone Numbers.

```
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const totalUserCount = 5;
const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'tta.dev', 'icloud.com'];

for (let i = 1; i <= totalUserCount; i++) {
    test(`Register user# ${i} (${emailDomains[i - 1]})`, async ({ page }) => {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomains[i - 1]}`;
        const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
        await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await page.getByRole('textbox', { name: 'Email' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
        await page.getByRole('button', { name: 'Save profile' }).click();
        await expect(page.locator('#submission-output')).toContainText(email);
    });
}
```

---

> 15th Oct 2026

# Page Object Model

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_nL7NiJJ_cdWdtyFNacCj3.png?ixlib=js-3.8.0 "image.png")

=

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_KMsU55FVsKMFgjFBsBbLy.png?ixlib=js-3.8.0 "image.png")

---

## Lets Implement the POM for this

- [app.thetestingacademy.com/playwright/ttacart/](https://app.thetestingacademy.com/playwright/ttacart/)

1. LoginPage
2. InventoryPage

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_8eLApN_oJtLsTF_ngp8Le.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_lcA6m5BOG6FcJ30E76Yso.png?ixlib=js-3.8.0 "image.png")

---

LoginPage

1. Page Locator
2. Page Actions

---

```
// Login
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    // Page Locators
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole("textbox", { name: "Username" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" })
        this.loginButton = page.getByTestId("login-button").or(page.getByText("Login")).or(page.locator("#login-button"));
    }

    // Page Actions
    async goto() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }

    async login(username: string, password: string) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }







}
```

```
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('POM with Login Page Simple', () => {
    test('Login with valid credns', async ({ page }) => {

            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login("standard_user","tta_secret");
            await expect(page).toHaveTitle("TTACart - Login");

    });
});
```

```
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { Inventorypage } from './pages/InventoryPage';
import { Cartpage } from './pages/CartPage';
import { shot } from '../../utils/stepScreenshot';

// This app tags elements with data-test, not Playwright's default data-testid.
test.use({ testIdAttribute: 'data-test' });

test('add first item to cart and verify it in the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new Inventorypage(page);
    const cartPage = new Cartpage(page);
    let itemName = '';

    await test.step('open the login page', async () => {
        await loginPage.goto();
        await shot(page, 0, 'login page');
    });

    await test.step('login as standard_user', async () => {
        await loginPage.login('standard_user', 'tta_secret');
        await expect(inventoryPage.title).toHaveText('Products');
        await shot(page, 1, 'inventory');
    });

    await test.step('add the first item to the cart', async () => {
        itemName = await inventoryPage.addFirstItemToCart();
        await shot(page, 2, 'item added');
    });

    await test.step('open the cart', async () => {
        await inventoryPage.openCart();
        await expect(cartPage.title).toHaveText('Your Cart');
        await shot(page, 3, 'cart');
    });

    await test.step('verify the item is in the cart', async () => {
        await expect(cartPage.itemName).toHaveText(itemName);
        await expect(cartPage.checkout).toBeVisible();
        await shot(page, 4, 'verified');
    });
});
```

- Gaint Calss - POM
- Weak locator will break the full automation
- sometime - Abstraction too much
  - loginPage -> footer, header, body -> body -> div page......

---

> 17th Oct 2026

# Advance Playwright _framework (fixture)_

## 1. What is framework?

- framework is a structured way of writing and managing our code.
- framework will basically help you to organize your source code into particular folders which can be **reusable**, **maintainable**, and **scalable**.

## Why a framework?

- A flat folder of `.spec.ts` files works for ten tests. It breaks at fifty.
- When tests grow, the same locator gets re-typed in twelve places.
- The login flow gets re-implemented for every spec. Hard-coded URLs leak into the code.
- CSVs of users get pasted inline.
- The CI takes 40 minutes because every spec opens its own browser.

---

- A framework is the discipline that stops this.
- It gives you one place for locators (`pages/`),
- one place for reusable flows (`modules/`),
- one place for data (`testdata/`),
- one place for environment config (`.env` + `config/`),
- one place for utilities (`utils/`), and one place for **custom reporters and fixtures**.
- Add Docker so it runs the same everywhere, then shard it across four GitHub Actions runners and you have a 40-minute suite in 10 minutes.

---

## 2. Tech stack

1. Playwright
2. TypeScript
3. Page Object Model
4. JSON fixtures -> testdata ( **page**)
5. **Custom TTA Reporter,** Allure Reporter, Built-in HTML + JSON reporters.
6. Faker JS, dotenv, **Zod(APIs)**
7. ESLint + Prettier
8. Database

   1. SQL npm to connect
9. XLocator - OS project for Locator
10. CI & CD

    1. Github + Git
    2. Jenkins
    3. GitHUB Actions
    4. Docker
11. **AI Wrapper**

    1. **LLMGateway**

       1. Openrouter
       2. Groq
       3. OpenAI api
       4. Local LLM - Ollama, LM Studio
    2. Failure RCA
    3. Visual Regression
    4. TestData GEN AI
12. Playwright MCP, AI Agents, CLI
13. API Testing, Cucumber (BDD)

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_R91wrmxucMQnwue2iq8Ab.png?ixlib=js-3.8.0 "image.png")

---

# STEP 1- Structure of the Playwright Test

**Normal Way**

1. npm init -y
2. npm install -D @playwright/test typescript @types/node
3. npx playwright install --with-deps

**Direct Playwright Setup**

npm init playwright@latest

# STEP 2 -> Install Framework Dependencies

`npm install -D dotenv npm install -D csv-parse npm install -D xlsx npm install -D winston npm install -D @faker-js/faker npm install -D jsonpath-plus npm install -D ajv npm install -D ajv-formats npm install -D allure-playwright`

# STEP 3 -> Create Folder Structure

![image.png](https://eraser.imgix.net/workspaces/aGf8WeO8HWibzTxOSvQn/WWS31TdyovhjTB1TVo9v2jWpPei1/image_csvtXjuLryiYfp2FTNzOZ.png?ixlib=js-3.8.0 "image.png")

# STEP 4 -> Create `playwright.config.ts`

This is the **brain of the framework**.

It controls:

- where tests live
- timeout
- browser
- retries
- reports
- screenshots
- videos
- traces
- environment
- API project

# STEP 5 -> Create `.env`(.env)

TTA_ENV=qa
BASE_URL=[https://app.thetestingacademy.com](https://app.thetestingacademy.com/)
QA_BASE_URL=[https://app.thetestingacademy.com](https://app.thetestingacademy.com/)
STG_BASE_URL=[https://stage.thetestingacademy.com](https://stage.thetestingacademy.com/)
PROD_BASE_URL=[https://app.thetestingacademy.com](https://app.thetestingacademy.com/)
DEV_BASE_URL=[http://localhost:3000](http://localhost:3000/)
API_BASE_URL=[https://restful-booker.herokuapp.com](https://restful-booker.herokuapp.com/)
LOG_LEVEL=info
TEST_ENV=QA
TEST_AUTHOR=Pramod
USERNAME=admin
PASSWORD=ADMIN123

---

# STEP 6 -> Add Environment Switching

```
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

function resolveBaseURL(): string {
  if (process.env.BASE_URL) return process.env.BASE_URL;
  const env = (process.env.TTA_ENV || 'qa').toLowerCase();
  switch (env) {
    case 'api':
      return process.env.API_BASE_URL || 'https://restful-booker.herokuapp.com';
    case 'dev':
    case 'local':
      return process.env.DEV_BASE_URL || 'http://localhost:3000';
    case 'stg':
    case 'stage':
    case 'staging':
      return process.env.STG_BASE_URL || 'https://stage.thetestingacademy.com';
    case 'prod':
    case 'production':
      return process.env.PROD_BASE_URL || 'https://app.thetestingacademy.com';
    case 'qa':
    default:
      return process.env.QA_BASE_URL || 'https://app.thetestingacademy.com';
  }

}


export default defineConfig({
  testDir: './src/tests',

  timeout: 60_000,

  expect: {
    timeout: 10_000
  },

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: resolveBaseURL(),
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});
```

# STEP 7 -> Create Page Object Model

[app.thetestingacademy.com/playwright/ttacart/checkout-complete](https://app.thetestingacademy.com/playwright/ttacart/checkout-complete)

1. LoginPage
2. InventoryPage
3. Cart Page
4. CheckOne
5. CheckTwo
6. OrderConfirmation

---

 Architecture - the big picture (TTACart suite)

- E2E Scenarios, Individual scenarios

# Advance Playwright framework 1.0

1. Finish the Fixture
2. Page Objects of All
3. BasePage

---

**Next Level  Advance Automation Framework 2.0**

1. Fixture
2. API Testing
3. Cucumber
4. AI Agent Factory + Run via Docker Shard
5. Jenkins( it will continue)
   1. Git (LIVE)
   2. Github Actions (LIVE)
   3. Git lab Tutorial(self tutorials)

---

> 22 Oct 2026

# **Advance Automation Framework 2.0**

- UtilElementLocator
- Base Page -> LoginPage ( Single Inheritance)
- Fixtures
- Logger
- E2E Tests

---

> 27th Oct 2026

# Fixtures in AdvancePlaywrightFramework

## What are Fixtures?

Fixtures are Playwright's way of providing **SETUP** and **TEARDOWN** for your tests,

the things that need to happen **BEFORE a test runs and AFTER it finishes**.

Instead of writing `beforeEach` and `afterEach` hooks everywhere, you define fixtures ONCE and inject them into any test that needs them.

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Ma-Inrrt48dgrdJ-HOrcr.png?ixlib=js-3.8.0 "image.png")

```
test('add to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    // ...finally, the actual test
});
```

### Default Fixture | Built In

```
import { test } from "@playwright/test";

test("see all built-in fixtures", async ({ page, context, browser, browserName, request }) => {
    console.log("Browser:", browserName);
    console.log("Browser connected:", browser.isConnected());
    console.log("Page URL:", page.url());

    // API call without opening a browser page
    let response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("API status:", response.status());

    // Read cookies from context
    let cookies = await context.cookies();
    console.log("Cookies:", cookies.length);
});
```

### Why Custom Fixtures?

Built-in fixtures give you a raw **page**. But in real projects, you don't want every test to manually create page objects, login, set up test data, and clean up.

You want to say "**give me a logged-in admin page with the dashboard ready**" -> and the fixture does all the work

#### without the fixture

```
// test1.spec.ts
test("admin dashboard test 1", async ({ page }) => {
    let loginPage = new LoginPage(page);           // repeated
    await loginPage.navigate();                     // repeated
    await loginPage.login("admin", "admin123");     // repeated
    let dashboardPage = new DashboardPage(page);    // repeated

    // actual test starts HERE — everything above is boilerplate
    await dashboardPage.expectWelcome("admin");
});
```

```
// test2.spec.ts
test("admin dashboard test 2", async ({ page }) => {
    let loginPage = new LoginPage(page);           // same boilerplate
    await loginPage.navigate();                     // same boilerplate
    await loginPage.login("admin", "admin123");     // same boilerplate
    let dashboardPage = new DashboardPage(page);    // same boilerplate

    // actual test starts HERE
    let count = await dashboardPage.getStatsCardCount();
    expect(count).toBeGreaterThan(0);
});
```

---

#### with Fixture

**adminDashboard.ts**

```
let loginPage = new LoginPage(page);           // same boilerplate
await loginPage.navigate();                     // same boilerplate
await loginPage.login("admin", "admin123");     // same boilerplate
let dashboardPage = new DashboardPage(page);
```

```
test("admin dashboard test 1", async ({ adminDashboard }) => {
    await adminDashboard.expectWelcome("admin");
});

test("admin dashboard test 2", async ({ adminDashboard }) => {
    let count = await adminDashboard.getStatsCardCount();
    expect(count).toBeGreaterThan(0);
});
```

---

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_AiU0zhGeQ39VkgvU7wNRq.png?ixlib=js-3.8.0 "image.png")

![image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_izwkSjfDBYbTtv5M8nOAo.png?ixlib=js-3.8.0 "image.png")

---

# Web Fundamentals for API Testers |  API Testing

1. Fundamentals of the APIs
2. Postman. - manual API testing  | [restful-booker.herokuapp.com/apidoc/index.html](https://restful-booker.herokuapp.com/apidoc/index.html)
3. How we can automate this via the same framework
4. Fixture to the APIs

---

**Web Fundamentals For API Testers - Part1**
[https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/66883ac94c7c6](https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/66883ac94c7c6)

**Web Fundamentals For API Testers - Part 2**
[https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/668b7f8167515](https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/668b7f8167515)

---

- HTTP  -

  - Hyper Text Transfer protocol
  - Client Server
  - Resource - Which can be transfer over the internet

    - HTML, Text files, JSON, XML.  HTML page Resource
  - HTTP (MIME Types) - [developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- API, API Test (Manually)

---

## **What is API testing with Playwright**

API testing means hitting a service's HTTP endpoints directly - no browser, no DOM. You POST JSON, GET resources, assert status codes, validate response shapes, then move on.

- Playwright happens to ship an excellent HTTP client called the `**request**` **fixture.**
- It is built on the same network stack as the browser context, so cookies, proxies, and certificates work uniformly across your UI and API specs.

**GET, POST, PUT, PATCH, DELETE**

[**app.thetestingacademy.com/playwright/learn/playwright-api/**](https://app.thetestingacademy.com/playwright/learn/playwright-api/)

---

**Manual API Testing**

1. **Req**

   1. API Doc -> [restful-booker.herokuapp.com/apidoc/index.html](https://restful-booker.herokuapp.com/apidoc/index.html)
   2. Google docs
   3. Confluence Doc
   4. Google Sheet..... JIRA, Confluence, Swagger Link Ticket
   5. No Req ->  Create your High Level
2. **Test Plan**

   1. [docs.google.com/document/d/1CidM5XSkIS3-8uMoL93jh1nMUXlnHz4W/edit?usp=sharing&amp;ouid=104755920778477387077&amp;rtpof=true&amp;sd=true](https://docs.google.com/document/d/1CidM5XSkIS3-8uMoL93jh1nMUXlnHz4W/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true)
3. **Test Case**

   1. [**docs.google.com/spreadsheets/d/1EH1UJ9Qezgx_aZ0xim3KcVJUCEeR7A-7/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true**](https://docs.google.com/spreadsheets/d/1EH1UJ9Qezgx_aZ0xim3KcVJUCEeR7A-7/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true)
4. **Test Execute Manual**

   1. Postman
   2. Swagger.
   3. any other tool
   4. Bruno (postman++)
5. **Raise Bugs -> Test Closure.**

---

**Automating API Testing**

1. **TestCases**

   1. [docs.google.com/spreadsheets/d/1EH1UJ9Qezgx_aZ0xim3KcVJUCEeR7A-7/edit?gid=2092503341#gid=2092503341](https://docs.google.com/spreadsheets/d/1EH1UJ9Qezgx_aZ0xim3KcVJUCEeR7A-7/edit?gid=2092503341#gid=2092503341)
2. **Automate directly to playwright**

   1. Base Framework Ready
      1. [github.com/PramodDutta/AdvancePlaywrightFramework3x](https://github.com/PramodDutta/AdvancePlaywrightFramework3x)

---

**Requirement not given**

[docs.google.com/document/d/1y7WNwcdRfEo0q4jNBKy9U_z8i9mx7i6l/edit?usp=sharing&amp;ouid=104755920778477387077&amp;rtpof=true&amp;sd=true](https://docs.google.com/document/d/1y7WNwcdRfEo0q4jNBKy9U_z8i9mx7i6l/edit?usp=sharing&ouid=104755920778477387077&rtpof=true&sd=true)

If the requirement is not given to you, you create your own high-level requirement by using the template which I have shared with you.

---

Project ->  Req Ana -> Test Plan -> Test Exe (postman) -> Automate them

---
