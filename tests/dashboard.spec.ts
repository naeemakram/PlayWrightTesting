import { test, expect } from '@playwright/test';

test.describe('Dashboard Feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('admin@testautomationtv.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');
    
    // Start waiting and clicking together to avoid races
    await Promise.all([      
      page.getByRole('button', { name: 'Sign in to your account' }).click(),
      page.waitForURL('**/dashboard'),
    ]);
  });

  test('user sees dashboard stats', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Dashboard page title' })).toBeVisible();   
  });

  test('user sees account settings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: ' Recent Login Attempts' })).toBeVisible();
  });

});