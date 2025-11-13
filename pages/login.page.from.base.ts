import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Enter your email address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign in to your account' }).click();
  }

  async expectDashboardVisible() {
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
}