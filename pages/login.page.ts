import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Enter your email address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign in to your account' }).click();
  }

  async expectDashboardVisible() {
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
}
