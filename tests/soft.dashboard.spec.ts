import { test, expect } from '@playwright/test';

 test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('admin@testautomationtv.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');    
    await page.getByRole('button', { name: 'Sign in to your account' }).click();
  });

test('Dashboard Soft Assertions', async ({page}) => {
    page.waitForURL('**/dashboard')
    await expect.soft(page.locator('h1')).toHaveText(/123Welcome to Test Automation TV Dashboard/i);
    await expect.soft(page.getByRole('heading', { name: /Demo Login Information/i })).toBeVisible();
});
