import { test, expect } from '@playwright/test';

test('Open more link under course overview', async ({ page }) => {
    await page.goto('/docs/intro');
    await page.getByRole('button', { name: /course overview/i }).click();
    await expect(page).toHaveURL('/docs/course-overview');
    await expect(page.getByRole('heading', { name: 'Course Overview' })).toBeVisible();
});
