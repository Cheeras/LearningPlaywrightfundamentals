# Run Playwright Tests in the Terminal

Open a terminal at the project root (the folder containing `playwright.config.ts`).

Run one test file in Chromium and show the results in the terminal:

```powershell
npx playwright test tests/03_Locator_Commands/21_waitoptions.spec.ts --project=chromium --reporter=list
```

Run all tests with terminal results:

```powershell
npx playwright test --reporter=list
```

The browser window is visible by default in this project. The terminal shows each test's result and any failure details.

To open the HTML report from a run configured with the HTML reporter:

```powershell
npx playwright show-report
```

Use forward slashes in the test-file path, including in PowerShell, to avoid Playwright reporting **No tests found**.
