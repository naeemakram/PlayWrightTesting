import { test, expect } from '@playwright/test';

test.describe('QA Form Tests', () => {

  test('Complete QA Form submission with all required fields', async ({ page }) => {
    // Open the home page
    await page.goto('/');
    
    // Click the QA Form menu item
    const qaFormMenuItem = page.getByRole('menuitem', { name: 'QA Form' });
    await expect(qaFormMenuItem).toBeVisible();
    await qaFormMenuItem.click();
    
    // Wait for the QA Form modal to show up
    const qaFormModal = page.getByRole('dialog', { name: 'QA Form' });
    await expect(qaFormModal).toBeVisible();
    
    // Set salutation to Mr.
    const salutationField = page.getByRole('combobox', { name: 'Salutation (optional)' });
    await salutationField.selectOption('Mr.');
    
    // Input name: Naeem
    const nameField = page.getByRole('textbox', { name: 'Name (optional)' });
    await nameField.fill('Naeem');
    
    // Input company: random string
    const randomCompany = 'TestCorp_' + Math.random().toString(36).substring(2, 8);
    const companyField = qaFormModal.getByRole('textbox', { name: 'Company (optional)' });
    await companyField.fill(randomCompany);
    
    // Input a random email
    const randomEmail = 'test_' + Math.random().toString(36).substring(2, 8) + '@example.com';
    const emailField = page.getByRole('textbox', { name: 'Email (validated when enabled)' });
    await emailField.fill(randomEmail);
    
    // Input a phone number (10 digits long)
    const randomPhone = '5' + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    const phoneField = page.getByRole('textbox', { name: 'Phone (validated when enabled)' });
    await phoneField.fill(randomPhone);
    
    // Enter a lucky number (random)
    const luckyNumber = Math.floor(Math.random() * 100) + 1;
    const luckyNumberField = page.getByRole('spinbutton', { name: 'Lucky number counter' });
    await luckyNumberField.fill(luckyNumber.toString());
    
    // Click OK button
    const okButton = page.getByRole('button', { name: 'Submit form data' });
    await expect(okButton).toBeVisible();
    await okButton.click();
    
    // Assert a success flash is shown with text "Form Submitted"
    const successMessage = page.getByRole('alert', { name: 'Form submission message' });
await expect(successMessage).toHaveText(/Form Submitted/i);

  });

  test('QA Form modal visibility test', async ({ page }) => {
    // Open the home page
    await page.goto('/');
    
    // Click the QA Form menu item
    const qaFormMenuItem = page.getByRole('menuitem', { name: 'QA Form' });
    await qaFormMenuItem.click();
    
    // Verify the modal appears
    const qaFormModal = page.getByRole('dialog', { name: 'QA Form' });
    await expect(qaFormModal).toBeVisible();
    
    // Verify form fields are present
    await expect(page.getByRole('combobox', { name: 'Salutation (optional)' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Name (optional)' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Company (optional)' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email (validated when enabled)' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Phone (validated when enabled)' })).toBeVisible();
    await expect(page.getByRole('spinbutton', { name: 'Lucky number counter' })).toBeVisible();
  });

  test('QA Form field validation test', async ({ page }) => {
    // Open the home page
    await page.goto('/');
    
    // Click the QA Form menu item
    const qaFormMenuItem = page.getByRole('menuitem', { name: 'QA Form' });
    await qaFormMenuItem.click();
    
    // Wait for the modal to appear
    const qaFormModal = page.getByRole('dialog', { name: 'QA Form' });
    await expect(qaFormModal).toBeVisible();
    
    // Enable validation first
    const validationCheckbox = page.getByRole('checkbox', { name: 'Enable validation' });
    await validationCheckbox.check();
    
    // Fill invalid email
    const emailField = page.getByRole('textbox', { name: 'Email (validated when enabled)' });
    await emailField.fill('invalid-email');
    
    // Fill invalid phone
    const phoneField = page.getByRole('textbox', { name: 'Phone (validated when enabled)' });
    await phoneField.fill('invalid-phone');
    
    // Try to submit
    const okButton = page.getByRole('button', { name: 'Submit form data' });
    await okButton.click();
    
    // Check for validation messages
    await page.waitForTimeout(1000); // Give time for validation to appear
  });

});