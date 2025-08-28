import { test, expect } from '@playwright/test';

test('logs in and verifies Welcome back message', async ({ page }) => {
  await page.goto('https://testautomationdemo.replit.app/');

  // Fill credentials using label-based locators (stable & readable)

  await page.getByLabel('Email').fill('admin@testautomationtv.com');
  await page.getByLabel('Password').fill('admin123');

  // Submit via accessible button
  await page.getByRole('button', { name: /sign in/i }).click();

  // Tiny success verification to keep the video short & clear
  await expect(page.getByRole('heading', { name: 'Welcome to Test Automation TV' })).toBeVisible();
});