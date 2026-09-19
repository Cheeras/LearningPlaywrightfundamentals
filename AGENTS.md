# LearningPlaywrightFundamentals — Agent Guide

## Project Overview

Playwright end-to-end test automation learning project (TypeScript, `@playwright/test` v1.63.0, Node.js 22).

## Quick Start

```bash
# Install dependencies (already done)
npm install

# Run all tests (headed mode — browser visible)
npx playwright test

# Run a specific file in Chrome only
npx playwright test tests/03_Locator_Commands/14_LC.spec.ts --project=chromium

# Run tests matching a title
npx playwright test --grep "Login" --project=chromium
```

Full CLI reference → [Notes/playwrightterminalcommand.md](Notes/playwrightterminalcommand.md)

## Test Organization

Tests are in `tests/` under numbered topic folders (`01_Basics/`, `02_TestAnnotations/`, `03_Locator_Commands/`, etc.). Folders `04`–`23` are scaffolded but empty (`.gitkeep` only).

**Naming:** `{number}_{description}.spec.ts` — e.g., `14_LC.spec.ts`, `18_Refer.spec.ts`

## Configuration (playwright.config.ts)

| Setting | Value |
|---|---|
| `testDir` | `./tests` |
| `fullyParallel` | `true` |
| `reporter` | `html` |
| `headless` | `false` (headed by default) |
| `trace` | `on-first-retry` |

**Browser projects:** `chromium`, `firefox`, `webkit`, `Microsoft Edge` (msedge channel). Chromium uses a custom `executablePath`.

## Common Test Patterns

```ts
// Standard test
import { test, expect } from '@playwright/test';
test('title', async ({ page }) => { ... });

// Multi-context (browser-level)
test('title', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: {...}, locale: '...' });
  const page = await ctx.newPage();
  ...
});

// Annotations
test.skip / test.only / test.fail / test.fixme

// Grouping
test.describe('Group', () => { test(...); test(...); });

// Locators: CSS, XPath, getByRole, getByTestId
// Assertions: toContainText, toContain, toHaveTitle
```

## Key Files

| File | Purpose |
|---|---|
| `playwright.config.ts` | Browser projects, reporter, test options |
| `Notes/LiveClassNotes.md` | Comprehensive Playwright class notes |
| `Notes/classnote.md` | Troubleshooting (browser path, headless issues) |
| `Notes/playwrightterminalcommand.md` | All CLI commands with descriptions |
| `playwritelinkedinarticles/` | Architecture articles (BCP hierarchy, spec vs ts, multi-browser) |

## Pitfalls

- **No npm scripts** in `package.json` — always use `npx playwright test ...` directly
- **Headed mode** by default (`headless: false`) — tests will open browser windows
- **Chromium custom path** — set to local Playwright cache, not system Chrome
- **`.ts` files** (without `.spec.ts`) are NOT picked up by the test runner — they use raw Playwright API via `chromium.launch()`
- **`.only`** — remove before committing or CI will skip other tests