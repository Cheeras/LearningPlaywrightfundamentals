In the test case/ spec file we will see run button if and only if we install the exection "Playwright Test for VSCode" then only we can able to see the run button

after installing the "Playwright Test for VSCode" extension please relaunch the VS Code to show the run button

we can configure the headless or headed mode in the Playwright.config.ts file

in use section

headless: false means it will open the browser and exeucte the testcases

headless: true means it will not open the browser and exeucte the testcases or spec files

Whey Headless mode is required

Headless basically means that a testcase will run without the UI. Headless is feature which is avaible when you have heavy number of testcases. For example when you have more than 2000,3000 or 4000 testcass, you can not run testcases by using the UI mode

if you want to run them through UI the testcase execution is slow, They will be very very slow and they will take a lot of memory.

When we have more test cases, you will use headless mode.

Headless basically means no browser will open and no UI will be used

Please remember in case of headless mode as well we can able to capture screenshot,video traces, log

only thing i will not shown to you it will be behind

======================================

Intersting thing is playwright can be run through CLI as well i.e through terminal

to run the testcases

***npm playwright test***

to open the HTML report run

***npm playwright show-report***

playwright has default report

---

playwright commands

***playwright --version***

---

## Issues encountered and Fixed

### Issue 1: `npx playwright open https://playwright.dev/` failing

**Issue:**
Running `npx playwright open https://playwright.dev/` gave this error:

```
Error: command.parse: Executable doesn't exist at 
C:\Users\Shankar\AppData\Local\ms-playwright\chromium-1243\chrome-win64\chrome.exe
```

**Root Cause:**
When we manually installed Chromium from the downloaded zip file (`chrome-win64 (1).zip`), we extracted the files **directly** into the `chromium-1243\` folder (flattened structure). But Playwright's CLI expects the standard folder layout:

```
chromium-1243/
├── chrome-win64/       ← Playwright expects this subfolder
│   ├── chrome.exe
│   ├── chrome.dll
│   └── ...
└── INSTALLATION_COMPLETE
```

We had moved the files to be directly inside `chromium-1243\` instead of inside a `chrome-win64\` subfolder.

**Fix Applied:**

1. Created the `chrome-win64\` subfolder inside `chromium-1243\`
2. Moved all Chrome files (chrome.exe, chrome.dll, etc.) into that subfolder
3. Updated `playwright.config.ts` — changed the `executablePath` from `chromium-1243\chrome.exe` to `chromium-1243\chrome-win64\chrome.exe`

**Verification:**

- ✅ `npx playwright open https://playwright.dev/` — works now (opens browser)
- ✅ `npx playwright test --project=chromium` — 2/2 tests pass

### Issue 2: `playwright screenshot https://playwright.dev playwright.jpeg` failing

**Issue:**
Running `npx playwright screenshot https://playwright.dev playwright.jpeg` gave this error:

```
Error: command.parse: Executable doesn't exist at 
C:\Users\Shankar\AppData\Local\ms-playwright\chromium_headless_shell-1243\chrome-headless-shell-win64\chrome-headless-shell.exe
```

**Root Cause:**
The `playwright screenshot` command uses the **headless shell** binary (`chromium_headless_shell-1243`) by default, not the full Chrome browser. The headless shell is a separate, smaller executable designed specifically for automated tasks like screenshots. We never installed this binary — we only installed the full Chrome browser.

**Fix Applied:**
Use the `--channel chrome` flag to tell Playwright to use the **system-installed Chrome** instead of the missing headless shell:

```bash
npx playwright screenshot --channel chrome https://playwright.dev playwright.jpeg
```

**Verification:**

- ✅ `npx playwright screenshot --channel chrome https://playwright.dev playwright.jpeg` — works now (captures screenshot successfully)
