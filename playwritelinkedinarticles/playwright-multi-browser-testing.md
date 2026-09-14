# 🧠 Playwright Doesn't Use Your Chrome, Firefox, or Safari — Here's What It Actually Launches

**Wait, what?**

Yes, you read that right.

When you run `npx playwright test --project=webkit` on your **Windows laptop**, Playwright is **not** opening Safari.

There is no Safari for Windows.

So what browser is it actually launching? And how does it work internally?

Let me pull back the curtain on Playwright's browser architecture — because understanding this changed how I think about cross-browser testing forever.

---

## ❌ The Common Misconception

Most beginners (myself included) assume:

> "Playwright opens my installed Chrome, Firefox, and Safari to run tests."

**Nope.**

Playwright downloads and manages its **own private, bundled browser binaries** — completely separate from the browsers you use daily.

| Your Machine Has           | Playwright Uses                                         |
| -------------------------- | ------------------------------------------------------- |
| Chrome (installed)         | `chromium-1243` — a raw Chromium build               |
| Firefox (installed)        | `firefox-1543` — a raw Firefox build                 |
| Safari (not on Windows ❌) | `webkit-xxxx` — a standalone WebKit build            |
| Edge (installed)           | Uses your Edge**only** with `channel: 'msedge'` |

---

## 🔧 How Playwright Downloads Browsers — The Internals

When you run:

```bash
npx playwright install
```

Playwright downloads browser binaries into a **hidden cache folder** on your machine:

```
C:\Users\Shankar\AppData\Local\ms-playwright\
  ├── chromium-1243/
  ├── firefox-1543/
  └── webkit-xxxx/
```

Each folder contains a **complete, self-contained browser executable** — no installation needed, no dependencies on your system browsers.

These are **stripped-down, automation-optimized builds** — no auto-updaters, no extensions, no "first-run" dialogs. Just pure browser engine, ready to be controlled programmatically.

---

## 🚀 How Playwright Launches a Browser — Step by Step

Here's what happens internally when you run a test:

### Step 1: You run the command

```bash
npx playwright test tests/01_Basics/04_tta_check.spec.ts --project=chromium
```

### Step 2: Playwright reads `playwright.config.ts`

It finds the `chromium` project configuration.

### Step 3: Playwright locates the browser binary

It looks in the cache folder:

```
C:\Users\Shankar\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe
```

You can even **explicitly set this path** in config:

```typescript
{
  name: 'chromium',
  use: {
    ...devices['Desktop Chrome'],
    launchOptions: {
      executablePath: 'C:\\Users\\Shankar\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe',
    },
  },
}
```

### Step 4: Playwright launches the browser via CDP or custom protocol

- **Chromium/Edge** → Uses **CDP** (Chrome DevTools Protocol) — the same protocol Chrome DevTools uses
- **Firefox** → Uses a **custom Playwright-specific protocol** built into the Firefox binary
- **WebKit** → Uses a **custom Playwright-specific protocol** built into the WebKit binary

### Step 5: Playwright injects its automation layer

It creates a fresh **BrowserContext** (like an incognito session) for each test — isolated, clean, no cookies, no cache from previous runs.

### Step 6: Your test code runs

```typescript
await page.goto('https://example.com');
await page.fill('#email', 'test@example.com');
```

Each command is translated into protocol commands and sent to the browser.

---

## 📋 The Configuration That Makes It All Work

Here's the `playwright.config.ts` that controls everything:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    headless: false,  // 👈 Set to true for CI, false to watch tests
    trace: 'on-first-retry',
  },

  projects: [
    // 🟢 Chromium — Playwright's bundled build
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          executablePath: 'C:\\Users\\Shankar\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe',
        },
      },
    },

    // 🦊 Firefox — Playwright's bundled build
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // 🧅 WebKit (Safari engine) — Playwright's bundled build
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // 🔵 Microsoft Edge — Uses YOUR installed Edge
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
  ],
});
```

### Key configuration points:

| Setting                       | What It Does                                                                            |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| `executablePath`            | Points to Playwright's**bundled browser binary**                                  |
| `channel: 'msedge'`         | Tells Playwright to use your**system-installed Edge** instead of bundled Chromium |
| `devices['Desktop Chrome']` | Sets viewport, user agent, and other emulation settings                                 |
| `headless: false`           | Shows the browser window (set`true` for CI/headless runs)                             |

---

## 🧪 Real Example — What I Ran Today

I wrote a simple login test:

```typescript
test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.getByRole('textbox', { name: 'Email Address' }).fill('shankar');
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByTestId('login-button').click();
});
```

Then ran it across **4 browsers** with zero code changes:

```bash
# Chromium (bundled)
npx playwright test tests/01_Basics/04_tta_check.spec.ts --project=chromium --headed

# Firefox (bundled)
npx playwright test tests/01_Basics/04_tta_check.spec.ts --project=firefox --headed

# WebKit/Safari engine (bundled — runs on Windows!)
npx playwright test tests/01_Basics/04_tta_check.spec.ts --project=webkit --headed

# Microsoft Edge (your installed Edge)
npx playwright test tests/01_Basics/04_tta_check.spec.ts --project="Microsoft Edge" --headed
```

**One test. Four browsers. Zero modifications.**

---

## 💡 Why This Architecture Matters

| Aspect                          | Benefit                                                              |
| ------------------------------- | -------------------------------------------------------------------- |
| **Isolation**             | Tests never affected by your browser extensions, cookies, or history |
| **Consistency**           | Same browser version across all team members and CI                  |
| **No Safari on Windows?** | No problem — Playwright bundles WebKit for all OSes                 |
| **Reproducibility**       | Pin a specific browser version in your project                       |

---

## 📌 The One Exception — Branded Browsers (Edge & Chrome)

For **Microsoft Edge** and **Google Chrome**, you can optionally use the `channel` option to launch your **system-installed browser** instead of the bundled one:

```typescript
{
  name: 'Microsoft Edge',
  use: { ...devices['Desktop Edge'], channel: 'msedge' },
}
```

This is useful when you need to test against the **actual Edge/Chrome** that your users have, with their rendering quirks and all.

---

## 🔑 Key Takeaways

1. 🧠 **Playwright bundles its own browsers** — not your system browsers
2. 📁 **Browsers live in** `C:\Users\<you>\AppData\Local\ms-playwright\`
3. 🔌 **Chromium** uses CDP protocol; **Firefox & WebKit** use custom protocols
4. 🪟 **WebKit runs on Windows** — no Mac needed for Safari testing
5. ⚙️ **`executablePath`** controls which binary Playwright launches
6. 🔵 **`channel: 'msedge'`** is the exception — it uses your installed Edge

---

**Did you know Playwright used its own browser binaries? Drop a 🧠 in the comments if this was news to you!**

#Playwright #Testing #Automation #WebDevelopment #CrossBrowserTesting #SoftwareEngineering #DevTools #QualityAssurance
