import { test, expect } from '@playwright/test';

test('basic auth demo', async ({ browser }) => {
  // Create a new context with credentials
  const context = await browser.newContext({
    httpCredentials: {
      username: 'testuser',
      password: 'testpass456'
    }
  });

  // Open a new page with that context
  const page = await context.newPage();
  await page.goto('/browser-auth-protected'); // Navigate to the protected page
  await page.waitForURL('**/browser-auth-protected'); // Wait for the URL to confirm successful navigation
  // Verify access was successful
  await expect(page.getByRole('heading', { name: /Authentication Successful/i })).toBeVisible();
});

test('embed auth demo', async ({ page }) => {
  // Create a new context with credentials
  await page.goto('https://testuser:testpass456@demo.testautomationtv.com/browser-auth-protected');
  await page.waitForURL('**/browser-auth-protected'); // Wait for the URL to confirm successful navigation
  await expect(page.getByRole('heading', { name: /Authentication Successful/i })).toBeVisible();
});

