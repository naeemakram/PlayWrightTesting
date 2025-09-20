import { test, expect } from '@playwright/test';

test('work with nested iframe (child inside payment frame)', async ({ page }) => {
  await page.goto('https://testautomationdemo.replit.app/payment');

  // Parent payment frame
  const paymentFrame = page.frameLocator('#payment-frame');

  // Child frame (nested) inside payment frame
  const child = paymentFrame.frameLocator('#child-frame');

  // Interact with an element inside the nested child frame
  await child.locator('#username').fill('testuser');

  // Quick check to ensure we actually typed into the nested frame
  await expect(child.locator('#username')).toHaveValue('testuser');
});