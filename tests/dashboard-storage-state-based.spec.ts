import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('dashboard loads as logged in', async ({ page }) => {    
  await page.goto('/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
  await page.waitForURL('**/dashboard');
  await expect(page.getByRole('heading', { name: /Welcome to Test Automation TV Dashboard/i })).toBeVisible();    
});