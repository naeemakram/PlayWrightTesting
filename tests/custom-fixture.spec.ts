import { test as base, Page, expect } from '@playwright/test';

// const test = base.extend<{ authPage: Page }>({
//   authPage: async ({ page }, use) => {
//     // Perform login steps
//   },
// }); // peculiar syntax for extending fixtures

const test = base.extend<{ authPage: Page }>({
  authPage: async ({ page }, use) => {
    // Perform login steps
    await page.goto('/');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('admin@testautomationtv.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');
    await page.getByRole('button', { name: 'Sign in to your account' }).click();

    // Hand the logged-in page to the test
    await use(page);
  },
}); // peculiar syntax for extending fixtures

test('User sees dashboard stats', async ({ authPage }) => {
  await authPage.waitForURL('**/dashboard');
  await expect(authPage.getByRole('heading', { name: 'Dashboard page title' })).toBeVisible();   
});

test('User sees account settings', async ({ authPage }) => {
  await authPage.waitForURL('**/dashboard');
  await expect(authPage.getByRole('heading', { name: ' Recent Login Attempts' })).toBeVisible();
});


test('Show status is working', async ({ authPage }) => {

  await authPage.waitForURL('**/dashboard');

  await expect(authPage.getByRole('heading', { name: 'Dashboard page title' })).toBeVisible();    
  await authPage.getByRole('button', { name: 'Show Success' }).click();
    // This message appears after a short delay.
    await expect(authPage.getByText('Success!'))
      .toBeVisible();  // Playwright auto-retries until visible or timeout
});
