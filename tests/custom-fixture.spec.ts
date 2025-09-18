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

    await Promise.all([      
      page.getByRole('button', { name: 'Sign in to your account' }).click(),
      page.waitForURL('**/dashboard'),
    ]);

    // Hand the logged-in page to the test
    await use(page);
  },
}); // peculiar syntax for extending fixtures

test('user sees dashboard stats', async ({ authPage }) => {
  await expect(authPage.getByRole('heading', { name: 'Dashboard page title' })).toBeVisible();   
});

test('user sees account settings', async ({ authPage }) => {
  await expect(authPage.getByRole('heading', { name: ' Recent Login Attempts' })).toBeVisible();
});
