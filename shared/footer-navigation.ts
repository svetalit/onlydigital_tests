import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class FooterNavigation extends BasePage {
  footer: Locator;
  emailLink: Locator;
  phoneLink: Locator;

  constructor(page: Page) {
    super(page);
    this.footer = this.page.locator('footer');

    this.emailLink = this.footer.locator('a[href^="mailto:"]');

    this.phoneLink = this.footer.locator('a[href^="tel:"]');
  }
}
