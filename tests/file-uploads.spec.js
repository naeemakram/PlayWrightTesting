import {expect, page, test} from '@playwright/test';    

test('should upload a file successfully', async ({page}) => {
    await page.goto('/file-demo');    
    const filePath = 'tests/fixtures/test-file.txt';        
    await page.setInputFiles('#file-input', filePath);
    await page.getByRole('button', {name: 'Upload File'}).click();
    
    await expect(page.getByRole('alert')).toHaveText('File "test-file.txt" uploaded successfully!',
    { timeout: 10000 });
});

test('should handle file download', async ({ page }) => {
  await page.goto('/file-demo');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: /Download Text/ }).click()
  ]);

  // Wait until the file is fully downloaded
  const path = await download.path();
  const suggestedName = download.suggestedFilename();

  console.log(`Downloaded file path: ${path}`);
  console.log(`Suggested file name: ${suggestedName}`);

  expect(suggestedName).toBe('sample.txt');

  const fileSize = (await download.createReadStream())?.readableLength;
  console.log(`File size: ${fileSize} bytes`);
});
