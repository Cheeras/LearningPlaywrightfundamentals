# Playwright Terminal Commands

## Run all tests
```powershell
npx playwright test
```
**What it does:** Discovers and runs every `.spec.ts` file inside the `tests/` folder (or the directory configured in `playwright.config.ts`).  
**Browsers:** Runs tests **in all configured projects** (e.g., chromium, firefox, webkit) in parallel by default.  
**Use when:** You want to run the full test suite across all browsers.

---

## Run a specific test file
```powershell
npx playwright test tests/path/to/your/file.spec.ts
```
**What it does:** Runs only the tests inside that one file — ignores all other spec files.  
**Browsers:** Still runs across **all configured projects** (chromium, firefox, webkit) unless you add `--project`.  
**Use when:** You're working on a single file and don't want to wait for the entire suite.

---

## Run in a specific browser (project)
```powershell
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```
**What it does:** Filters tests to run **only in the specified browser project**.  
**Browsers:** Exactly **1 browser** — the one you specify.  
**Use when:** Debugging a browser-specific issue or you only need to validate in Chrome.  
**Combine:** `npx playwright test tests/myfile.spec.ts --project=chromium` — runs one file in one browser.

---

## Run tests matching a title (--grep)
```powershell
npx playwright test --grep "Login"
npx playwright test --grep "Login" --project=chromium
```
**What it does:** Scans all test titles (the string inside `test('...')`) and runs only those containing the given word/phrase.  
**Browsers:** All projects by default, or only the one you specify with `--project`.  
**Shorthand:** `-g` works the same as `--grep`.  
**Regex support:** `--grep "(Login|Validation)"` matches titles containing **Login** OR **Validation**.  
**Use when:** You have many tests and want to run a subset by name without modifying code.

---

## Exclude tests matching a title
```powershell
npx playwright test --grep-invert "Login"
```
**What it does:** Runs **all tests except** those whose titles contain the given word/phrase.  
**Browsers:** All projects by default.  
**Use when:** You want to skip certain tests (e.g., slow tests, WIP tests) without editing the file.

---

## Run with browser visible (headed mode)
```powershell
npx playwright test --headed
```
**What it does:** Overrides the config to launch the browser **with the UI window visible** so you can watch what Playwright is doing.  
**Browsers:** All projects (or the one you specify).  
**Use when:** Debugging — seeing the browser helps you understand what's happening step-by-step.

---

## Run in headless mode (no browser UI)
```powershell
npx playwright test --headless
```
**What it does:** Runs tests **without showing the browser window** (faster, uses less CPU).  
**Browsers:** All projects.  
**Use when:** CI/CD pipelines, quick validation, or when you don't need to watch the test.

---

## Run a single test using .only
Add `.only` to the test in code:
```ts
test.only('My Test', async ({ page }) => { ... });
```
Then run the file normally:
```powershell
npx playwright test tests/path/to/file.spec.ts
```
**What it does:** Tells Playwright to **skip every other test** in that file and run only this one.  
**Browsers:** All projects (or the one you specify).  
**⚠️ Warning:** Remove `.only` before committing — it will cause CI to skip all other tests!  
**Use when:** You need to focus on a single test case during development.

---

## View HTML report
```powershell
npx playwright show-report
```
**What it does:** Opens the previously generated HTML test report in your default browser. Shows pass/fail status, screenshots, traces, and error logs.  
**Requires:** A previous test run with `reporter: 'html'` in config (already set in your project).  
**Use when:** Analyzing test results, failures, or sharing reports with the team.