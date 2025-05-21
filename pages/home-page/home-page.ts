import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../shared/base-page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
