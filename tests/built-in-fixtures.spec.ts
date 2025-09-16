import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});


test('launch two contexts', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('/');

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('/guestbook');
});