// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL ='http://localhost:5174/'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')
  // Expect a title "to contain" a substring.
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.length).toBeGreaterThan(0);
  //per executar: $npx playwright test
  //es pot hhaver de canviar playwrightconfig per .cjs
});

