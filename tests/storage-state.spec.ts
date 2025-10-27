import { test, expect } from '@playwright/test';

test('login and save session', async ({ browser }) => {
 // Create a new context with credentials
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin@testautomationtv.com',
      password: 'admin123'
    }
  });

  // Open a new page with that context
  const page = await context.newPage();
  await page.goto('/browser-auth-protected'); // Navigate to the protected page
  await page.waitForURL('**/browser-auth-protected'); // Wait for the URL to confirm successful navigation
  // Verify access was successful
  await expect(page.getByRole('heading', { name: /Authentication Successful/i })).toBeVisible();
  // Save session to a file

  await context.storageState({ path: 'auth.json' });
});

