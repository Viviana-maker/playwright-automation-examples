import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  await context.setExtraHTTPHeaders({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  await page.goto('https://google.com/');
  // Ensure the page is fully loaded before waiting for selector
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('input[name="q"]');
  await page.getByRole('textbox', { name: 'Search' }).fill('gatitos');
  await page.keyboard.press('Enter');
  // Wait for navigation after search
  await page.waitForNavigation();
  await page.waitForSelector('.result__title');
  await page.locator('.result__title').first().click();
});