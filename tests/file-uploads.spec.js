import {expect, page, test} from '@playwright/test';    

test('should upload a file successfully', async ({page}) => {
    await page.goto('/file-demo');    
    const filePath = 'tests/fixtures/test-file.txt';        
    await page.setInputFiles('#file-input', filePath);
    await page.getByRole('button', {name: 'Upload File'}).click();
    
    await expect(page.getByRole('alert')).toHaveText('File "test-file.txt" uploaded successfully!',
    { timeout: 10000 });
});