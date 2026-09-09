# LearningPlaywrightFundamentals

A Playwright end-to-end testing project for learning browser automation fundamentals.

---

**Note:** Playwright is a **Node.js library** — it runs on the Node.js runtime, not in a browser. Node.js and npm are required because:

- **Node.js** provides the JavaScript runtime that executes Playwright test scripts, handles async I/O, and communicates with browser instances via the Chrome DevTools Protocol (CDP).
- **npm** (Node Package Manager) downloads and manages the `@playwright/test` package and its dependencies from the npm registry.

**Minimum versions required:**

- **Node.js:** v18+ (Playwright v1.63.0 requires Node.js 18 or higher)
- **npm:** v8+ (comes bundled with Node.js 18+)

*Your current versions: Node.js v22.14.0, npm 11.3.0 — both fully compatible.*

## Project Structure

```
LearningPlaywrightFundamentals/
├── .env.example
├── .gitignore
├── .vscode/
│   └── settings.json
├── package.json
├── package-lock.json
├── playwright.config.ts
├── playwright-report/
├── test-results/
├── node_modules/
└── tests/
    ├── applogin.spec.ts
    └── example.spec.ts
```

### File & Folder Details

| Item | One-line Purpose |
|------|-----------------|
| `.gitignore` | Tells Git which files/folders to exclude from version control |
| `.env.example` | Template file listing required environment variables (safe to commit) |
| `package.json` | Project metadata & npm dependencies manifest |
| `package-lock.json` | Locks exact dependency versions for reproducible installs |
| `.vscode/settings.json` | Project-level VS Code settings (enables Playwright test UI in spec files) |
| `playwright.config.ts` | Central configuration for the Playwright test runner |
| `playwright-report/` | Auto-generated HTML test reports from test runs |
| `test-results/` | Auto-generated debugging artifacts (traces, screenshots) on test failure |
| `node_modules/` | Installed npm packages (auto-generated, do not edit) |
| `tests/example.spec.ts` | Sample end-to-end test cases for Playwright.dev |

---

#### `package.json`
**Type:** Manifest file (JSON format)

This is the **identity card** of your Node.js project. It stores:
- **Project metadata** — name, version, description, author, license, GitHub repository link.
- **Dependencies** — a list of external packages your project needs. Here it lists `@playwright/test` and `@types/node` under `devDependencies` (packages needed only during development, not in production).
- **Scripts** — shortcuts for common commands (e.g., `"test": "npx playwright test"`).

**Who uses it?** `npm` reads this file to know which packages to install. Other developers and CI tools read it to understand the project setup.

**Auto-generated?** Originally created manually by you via `npm init`, then partially updated by the Playwright CLI scaffolding.

---

#### `package-lock.json`
**Type:** Lock file (JSON format)

This file is **automatically generated** by npm whenever you run `npm install`. It locks down the **exact version** of every package and sub-package installed, so that every person or machine that installs the project gets **exactly the same dependency tree**.

**Why is it needed?** Without it, two developers could end up with different versions of the same package (e.g., one gets v1.2.0, another gets v1.3.0), leading to "it works on my machine" bugs.

**Who uses it?** `npm` — it reads this file during `npm install` to reproduce the exact same dependency versions. **Never edit this file manually.**

**Auto-generated?** Yes — by `npm install` phase.

---

#### `playwright.config.ts`
**Type:** Configuration file (TypeScript)

This is the **control center** for Playwright. It tells the Playwright test runner:
- **Where are the tests?** → `testDir: './tests'`
- **Which browsers to test on?** → Chromium, Firefox, WebKit (3 projects)
- **How to run tests?** → in parallel, with retries on CI, HTML reporter
- **What settings to use?** → trace on first retry, base URL, viewport size, etc.

Think of it as the **settings panel** for your test runner — you configure once here, and Playwright follows these rules for every test run.

**Who uses it?** The Playwright Test Runner reads this file automatically when you run `npx playwright test`.

**Auto-generated?** Yes — by `npm init playwright@latest` (scaffolding phase). You can customize it later.

---

#### `playwright-report/`
**Type:** Folder (auto-generated)

After running tests with the HTML reporter (default), Playwright creates a **beautiful HTML report** inside this folder. It shows:
- Which tests passed ✅ and which failed ❌
- Test duration, error messages, and stack traces
- Screenshots, trace files, and video recordings (if enabled)

**How to view it?** Run `npx playwright show-report` in the terminal — it starts a local web server and opens the report in your browser.

**Who uses it?** Developers — to review test results visually.

**Auto-generated?** Yes — by `npx playwright test` (test execution phase).

---

#### `test-results/`
**Type:** Folder (auto-generated)

When a test **fails**, Playwright saves debugging artifacts here:
- **Trace files** (`.zip`) — a full recording of the test: network requests, DOM snapshots, console logs, timings. Open with `npx playwright show-trace <file>`.
- **Screenshots** (`.png`) — what the page looked like at the moment of failure.
- **Error context** (`.md`) — a markdown file with the error message and call stack.

This folder is your **debugging toolkit** — it helps you understand exactly why a test failed without re-running it.

**Who uses it?** Developers — for debugging failed tests.

**Auto-generated?** Yes — by `npx playwright test` (test execution phase), only when tests fail.

---

#### `node_modules/`
**Type:** Folder (auto-generated)

This is the **library** of your project. It contains all the npm packages your project depends on — `@playwright/test`, `playwright-core`, TypeScript, and hundreds of their sub-dependencies.

**Important rules:**
- **Never edit files inside `node_modules/`** — your changes will be overwritten on the next `npm install`.
- **Never commit it to Git** — it's already listed in `.gitignore`. Other developers run `npm install` to generate their own copy.
- **It can get large** — a typical Playwright project has thousands of files here. That's normal.

**Who uses it?** The Node.js runtime — when your test script does `import { test } from '@playwright/test'`, Node.js looks inside `node_modules/` to find that package.

**Auto-generated?** Yes — by `npm install` phase.

---

#### `.gitignore`
**Type:** Configuration file

This file tells Git which files and folders to **ignore** — meaning they won't be tracked or committed to the repository. For this project, it ignores:
- `node_modules/` — too large, can be regenerated via `npm install`
- `test-results/` and `playwright-report/` — generated output, not source code
- Playwright cache folders (`.cache/`, `.auth/`)

**Why is it needed?** Committing generated files bloats the repository and causes merge conflicts. Only source code should be committed.

**Who uses it?** Git — it reads `.gitignore` before every `git add` / `git commit` operation.

**Auto-generated?** Yes — by `npm init playwright@latest` (scaffolding phase).

---

#### `.env` (Environment Variables file)
**Type:** Configuration file (key=value format) — **NOT committed to Git**

A `.env` file stores **sensitive configuration values** as key-value pairs, such as:
```
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=supersecret123
API_KEY=abc123xyz
```

**Why is it used in this project?**
Playwright tests often need environment-specific data like login credentials, API endpoints, or base URLs. Instead of hardcoding these values in test files (which is a security risk and makes tests non-portable), you store them in `.env` and load them using a library like `dotenv`.

**Why is `.env` NOT pushed to Git?**
- It contains **secrets** — passwords, API keys, tokens, etc. Committing these to a public (or even private) repo is a major security risk.
- It contains **developer/machine-specific values** — each developer may have different credentials or local URLs.
- It's already listed in `.gitignore` (Playwright scaffolding adds `.env` by default).

If `.env` were accidentally committed, anyone with repo access would see your passwords and API keys. Use **GitHub Secrets** or a **vault service** for CI/CD instead.

---

#### `.env.example`
**Type:** Template file (key=value format) — **SAFE to commit**

`.env.example` is the **public template** that shows other developers **which environment variables are needed** but without exposing the actual secret values:

```
BASE_URL=<your-base-url>
USERNAME=<your-username>
PASSWORD=<your-password>
API_KEY=<your-api-key>
```

**Why is `.env.example` important?**
1. **Onboarding** — A new developer cloning the repo knows exactly which variables to create in their own `.env` file.
2. **Documentation** — Acts as a living specification of all environment dependencies.
3. **Safety** — Contains placeholders, not real secrets, so it's safe to commit.

**Typical workflow:**
```
1. Clone repo
2. Copy .env.example → .env
3. Fill in real values in .env
4. Run tests
```

**Does this project have one?** Not yet — it's created manually when you decide to use environment variables. You can create it anytime with:

```bash
echo "BASE_URL=" > .env.example
```

---

#### `.vscode/settings.json`
**Type:** Configuration file (JSON)

This folder contains **project-level VS Code settings** that apply only to this workspace. It tells VS Code and the Playwright extension how to behave when working on this project.

```json
{
  "playwright.reuseBrowser": true
}
```

**What does it do?**
- The `playwright.reuseBrowser` setting signals to the **Playwright VS Code extension** that this is a Playwright project, which enables the green **▶️ Run Test** and **🐞 Debug Test** buttons (code lenses) directly in your `.spec.ts` files.
- Without this `.vscode` folder, the Playwright extension may not activate its test UI, and the run buttons won't appear.

**Other common uses of `.vscode/`:**
| File | Purpose |
|------|---------|
| `settings.json` | Override editor settings for this project (formatting, linting, test runner config) |
| `extensions.json` | Recommend extensions to anyone opening the project (e.g., `ms-playwright.playwright`) |
| `tasks.json` | Define build/run tasks (e.g., `npm run build`, `npx playwright test`) |
| `launch.json` | Debug configurations (e.g., how to launch Playwright in debug mode) |

**Should you commit it?** Yes — `.vscode/` settings are commonly committed to share consistent editor configuration across your team. Only workspace-specific settings go here (not user-specific ones like theme or font size).

**Auto-generated?** No — created manually when you need project-specific VS Code configuration.

---

#### `tests/example.spec.ts`
**Type:** Test file (TypeScript)

This is where you write your **actual test cases**. The current file contains 2 sample tests for the Playwright website:

```typescript
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

**What's happening here?**
1. `test('name', async ({ page }) => {...})` — defines a test case. Playwright provides a `page` object that represents a browser tab.
2. `page.goto(url)` — navigates the browser to a URL.
3. `expect(...).toHaveTitle(...)` — asserts that the page title matches a pattern.
4. `page.getByRole(...).click()` — finds an element by its ARIA role and clicks it.
5. `expect(...).toBeVisible()` — asserts that an element is visible on the page.

**The `.spec.ts` extension** tells Playwright: "this file contains tests." You can create more test files following the same pattern.

**Who uses it?** The Playwright Test Runner — when you run `npx playwright test`, it discovers all `.spec.ts` files in the `tests/` folder and executes them.

**Auto-generated?** Yes — by `npm init playwright@latest` (scaffolding phase). You can modify or replace it with your own tests.

### Key Dependencies

- **`@playwright/test`** — The core Playwright test framework. Provides the `test`, `expect`, and browser automation APIs.
- **`@types/node`** — TypeScript type definitions for Node.js APIs, enabling type-checking in the test files.

### Browser Installation

Playwright browsers are stored locally at:
```
C:\Users\<user>\AppData\Local\ms-playwright\
```
This project uses a locally downloaded Chromium binary. The config points to it via `launchOptions.executablePath` in `playwright.config.ts`.

---

### License: MIT vs ISC

This project's `package.json` currently specifies the **ISC** license. Both MIT and ISC are **permissive open-source licenses** — they allow anyone to use, modify, distribute, and sell the software with very few restrictions. However, there are some differences:

| Aspect | MIT License | ISC License |
|--------|-------------|-------------|
| **Full name** | Massachusetts Institute of Technology License | Internet Systems Consortium License |
| **Length** | Slightly longer (~200 words) | Shorter (~100 words) |
| **Wording** | Uses formal legal language | Uses simpler, more concise language |
| **Key requirement** | Must include the copyright notice and permission notice in all copies | Must include the copyright notice and permission notice in all copies |
| **Liability clause** | Explicitly states "no liability" in separate sentences | States "no liability" more compactly |
| **Popularity** | Most widely used open-source license (GitHub #1) | Less common, mostly used by npm packages |
| **Used by** | React, Angular, jQuery, Node.js, Playwright itself | npm, Express.js, some smaller Node.js packages |
| **Compatibility** | Fully compatible with GPL, Apache 2.0 | Fully compatible with GPL, Apache 2.0 |

**In practice, both licenses offer the same freedoms and protections.** The ISC license is essentially a simplified version of MIT — it achieves the same legal effect with fewer words. Many npm packages use ISC because it originated from the npm ecosystem.

**Which one should you use?**
- **MIT** — if you want maximum recognition and clarity (the industry standard)
- **ISC** — if you prefer minimal wording and your project is Node.js/npm-focused (perfectly valid)

> **Current project status:** This project uses the **ISC** license. You can switch to MIT by changing the `"license"` field in `package.json` from `"ISC"` to `"MIT"` and including a `LICENSE` file with the MIT license text. 
