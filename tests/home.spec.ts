import { test, expect } from '@playwright/test';
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
  test('email in footer is visible', async () => {
    const emailLink = footerNavigation.emailLink;
    await expect(emailLink).toBeVisible();
  });
  test('phone in footer is visible', async () => {
    const phoneLink = footerNavigation.phoneLink;
    await expect(phoneLink).toBeVisible();
  });
});
