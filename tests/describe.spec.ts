import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {

    test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

    test('valid user should see dashboard', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Enter your email address' }).fill('admin@testautomationtv.com');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');
        await page.getByRole('button', { name: 'Sign in to your account' }).click();
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('invalid user should see error message', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Enter your email address' }).fill('wrong@testautomationtv.com');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin123');
        await page.getByRole('button', { name: 'Sign in to your account' }).click();
        await expect(page.getByRole('alert')).toHaveText(/invalid/i);
    });

});

test.describe('QA Form Demo',  () => {
    test('Is Guest Book Opening', async ({page}) => {
        await page.goto('/guestbook');
        await expect(page.getByRole('heading', { name: 'Guest Book page title' })).toBeVisible();        
});

});