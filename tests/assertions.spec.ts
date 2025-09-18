import { test, expect } from '@playwright/test';

test.describe('Playwright Assertions in Depth', () => {

  test('Demo Hard and Soft Assertions', async ({ page }) => {
    await page.goto('/');
    
    var menuItem = page.getByRole('menuitem', { name: 'QA Form' });

    await expect(menuItem).toBeVisible();// get locator of menu item
    
    await menuItem.click();
    
    
  });

  test('Verify link has correct href with toHaveAttribute', async ({ page }) => {
    await page.goto('/');
    const gettingStartedLink = page.getByText(/Getting Started/i);

    await expect(gettingStartedLink)
      .toHaveAttribute('href', '/docs/intro');

  });

  test('Navigate and assert correct URL with toHaveURL', async ({ page }) => {
    await page.goto('/docs/intro');
    await expect(page).toHaveURL(/.*docs\/intro/);
  });

  test.skip('Take and verify screenshot with toHaveScreenshot', async ({ page }) => {
    // (Optional: works if you have baseline screenshots saved)
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png');
  });

  test('Check delayed element with auto-retry', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Show Success' }).click();

    // This message appears after a short delay.
    await expect(page.getByText('Success!'))
      .toBeVisible();  // Playwright auto-retries until visible or timeout
  });

  test.skip('Soft assertion example', async ({ page }) => {
    await page.goto('/');
    // Even if this fails, the test will continue
    await expect.soft(page.getByRole('heading'))
      .toHaveText('Nonexistent Heading');
    
      const gettingStartedLink = page.getByText(/Getting Started/i);
      await expect(gettingStartedLink)
      .toHaveAttribute('href', '/docs/intro');
  });

});
