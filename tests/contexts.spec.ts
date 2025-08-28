import { test } from '@playwright/test';

test('launch multiple contexts', async ({ browser }) => {  
  const context1 = await browser.newContext();  
  const page1 = await context1.newPage();  
  await page1.goto('https://playwright.dev');  
  
  const context2 = await browser.newContext();  
  const page2 = await context2.newPage();  
  await page2.goto('https://example.com');  
}); 
