import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async waitForTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
}