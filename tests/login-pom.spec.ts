import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('POM - valid user should see dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin@testautomationtv.com', 'admin123');
  await loginPage.expectDashboardVisible();
});
