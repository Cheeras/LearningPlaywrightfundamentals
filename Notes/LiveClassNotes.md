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

