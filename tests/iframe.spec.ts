import { test, expect } from '@playwright/test';

test('fill credit card details inside iframe', async ({ page }) => {
  // 1) Open your demo page
  await page.goto('/payment');

  // 2) Target the iframe by ID and work inside it
  // const frame = page.frameLocator('#payment-frame');
  const frame = page.frameLocator('iframe');

  //wait for h2 to show
  await expect(
  frame.getByRole('heading', { name: /Demo Payment Form/i, level: 2 })).toBeVisible();

  // 3) Interact with fields inside the iframe
  await frame.getByRole('textbox', { name: /Card Number/i }).fill('4111 1111 1111 1111');
  await frame.getByRole('textbox', { name: /Expiry Date/i }).fill('12/28');
  await frame.getByRole('textbox', { name: /CVV/i }).fill('123');

  // (Optional) Click submit and assert the status region updates (from the client-only script)
  await frame.getByRole('button', { name: /Pay Now/i }).click();
  await expect(frame.getByRole('status')).toContainText('Payment form submitted');
});

