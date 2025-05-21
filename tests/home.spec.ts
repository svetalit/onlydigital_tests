import { test, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/home-page/home-page';
import { FooterNavigation } from '../shared/footer-navigation';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;
  let footerNavigation: FooterNavigation;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadSite();
    footerNavigation = new FooterNavigation(page);
  });
  test('Footer is visible', async () => {
    await expect(footerNavigation.footer).toBeVisible();
  });
});
