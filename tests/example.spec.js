// @ts-check
import { test, expect } from '@playwright/test';
const {email, password } = require("../user");

test('login', async ({ page }) => {

    await page.goto("https://netology.ru/");
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByText('Войти по почте').click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Пароль' }).click();
    await page.getByRole('textbox', { name: 'Пароль' }).fill(password);
    await page.getByTestId('login-submit-btn').click();
    await expect(page.locator('[data-testid="advanced-iframe"]')).toBeVisible();
    //await expect(page).toHaveURL('https://netology.ru/profile/9861028');
});  


test('login falling', async ({ page }) => {
    await page.goto("https://netology.ru/");
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByText('Войти по почте').click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill("123456");
    await page.getByRole('textbox', { name: 'Пароль' }).click();
    await page.getByRole('textbox', { name: 'Пароль' }).fill("7890");
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByText('Неверный email')).toBeVisible();
});  

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
