import { test, expect } from '@playwright/test';

/**
 * LECTURE 2: Dialogs — Automatic welcome alert on page load
 *
 * Q: Does this go inside a test?  → Yes.
 * Q: Should page.once be async?   → Yes, if you await accept()/dismiss().
 * Q: What if no dialog shows?     → Use waitForEvent with timeout (see below patterns B/C).
 */
test('auto welcome alert on page load (page.once pattern)', async ({ page }) => {
  // Navigate; your HTML triggers alert ~500ms after 'load'
  await page.goto('/dialog-demo?showDefault=1');

  // Register a one-shot handler BEFORE navigation.
  page.once('dialog', async dialog => {
    // handler can be sync or async; async recommended when awaiting accept/dismiss
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });
  // The page JS shows this status after accepting the alert
  await expect(page.locator('#dialog-status')).toContainText('Welcome dialog accepted!', { timeout: 3000 });
});

/**
 * Pattern B: Robust + assertable using waitForEvent + Promise.all
 * Handy when you must assert the message/type and also fail fast if no dialog appears.
 */
test('manual alert button (waitForEvent + Promise.all)', async ({ page }) => {
  await page.goto('/dialog-demo');

  await expect(page.getByRole('heading', { name: 'Playwright Dialog Automation' })).toBeVisible();
    
  // 1. Register a one-time handler for the 'dialog' event.
  // This code will run AS SOON as the dialog appears.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toMatch(/This is a JavaScript Alert dialog/i);
    await dialog.accept(); // This unblocks the page and allows the click to complete.
  });

  await page.getByRole('button', { name: /show alert/i }).click();

  // 3. Assert the outcome after the dialog has been handled.
  await expect(page.locator('#dialog-status')).toContainText('Alert dialog accepted!');

});

/**
 * Confirm dialog: accept path
 */
test('manual confirm button — accept', async ({ page }) => {
  await page.goto('/dialog-demo');

  await expect(page.getByRole('heading', { name: 'Playwright Dialog Automation' })).toBeVisible();
    
  // 1. Register a one-time handler for the 'dialog' event.
  // This code will run AS SOON as the dialog appears.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toMatch(/This is a JavaScript Confirm dialog/i);
    await dialog.accept(); // This unblocks the page and allows the click to complete.
  });

  await page.getByRole('button', { name: /show confirm/i }).click();

  await expect(page.locator('#dialog-status')).toContainText('Confirm dialog accepted!', { timeout: 3000 });
});

/**
 * Confirm dialog: cancel path
 */
test('manual confirm button — cancel', async ({ page }) => {
  
  await page.goto('/dialog-demo');

  await expect(page.getByRole('heading', { name: 'Playwright Dialog Automation' })).toBeVisible();
    
  // 1. Register a one-time handler for the 'dialog' event.
  // This code will run AS SOON as the dialog appears.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toMatch(/This is a JavaScript Confirm dialog/i);
    await dialog.dismiss(); // This unblocks the page and allows the click to complete.
  });

  await page.getByRole('button', { name: /show confirm/i }).click();  

  await expect(page.locator('#dialog-status')).toContainText('Confirm dialog canceled!', { timeout: 3000 });
});

/**
 * Prompt dialog: provide text to accept
 */
test('manual prompt button, accept with text', async ({ page }) => {
  await page.goto('/dialog-demo');

  // 1. Register a one-time handler for the 'dialog' event.
  // This code will run AS SOON as the dialog appears.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toMatch(/This is a JavaScript prompt dialog/i);
    await dialog.accept('Playwright FTW'); //(); // This unblocks the page and allows the click to complete.
  });

  await page.getByRole('button', { name: /show prompt/i }).click();  

  await expect(page.locator('#dialog-status')).toContainText('Prompt accepted with text: "Playwright FTW"', { timeout: 3000 });
});

/**
 * Prompt dialog: cancel
 */
test('manual prompt button — cancel', async ({ page }) => {
  await page.goto('/dialog-demo');

  // 1. Register a one-time handler for the 'dialog' event.
  // This code will run AS SOON as the dialog appears.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toMatch(/This is a JavaScript prompt dialog/i);
    await dialog.dismiss(); //(); // This unblocks the page and allows the click to complete.
  });

  await page.getByRole('button', { name: /show prompt/i }).click();  

  await expect(page.locator('#dialog-status')).toContainText('Prompt dialog canceled!', { timeout: 3000 });
});

/**
 * Pattern C: Defensive handling when a dialog might NOT appear at all.
 * Instead of hanging, we try/timeout and choose how to proceed.
 */
test('defensive: proceed gracefully if no dialog appears', async ({ page }) => {
await page.goto('/dialog-demo?showDefault=1');

  // Register a one-shot handler BEFORE navigation.
  page.once('dialog', async dialog => {
    // handler can be sync or async; async recommended when awaiting accept/dismiss
    expect(dialog.type()).toBe('alert');
    await dialog.accept();
  });    
  await expect(page.getByRole('heading', { name: /Playwright Dialog Automation Demo/i })).toBeVisible();
});
