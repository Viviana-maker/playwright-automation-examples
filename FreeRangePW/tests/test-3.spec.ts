import { test, expect, chromium } from '@playwright/test';

test('Búsqueda en DuckDuckGo', async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 200
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://duckduckgo.com/');

  // Escribir término de búsqueda
  const searchInput = page.locator('input[name="q"]');
  await searchInput.click();
  await searchInput.fill('gatitos');
  await searchInput.press('Enter');

  // Esperar resultados
  await page.waitForSelector('#links'); // Contenedor de resultados

  // Verificación simple
  const content = await page.textContent('body');
  expect(content?.toLowerCase()).toContain('gatitos');

  // Captura para comprobar
  await page.screenshot({ path: 'duckduckgo-resultados.png', fullPage: true });

  await browser.close();
});
