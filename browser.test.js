import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pahu-landing-ijd.vercel.app/');

  // Expect a title "to contain" a substring.3
  await page.pause();
});

