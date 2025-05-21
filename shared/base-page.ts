import { Page } from '@playwright/test';
import { SITE_URL } from '../constants/url';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async loadSite(): Promise<void> {
    await this.page.goto(SITE_URL);
  }
}
