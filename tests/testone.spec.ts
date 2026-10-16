import {test,expect} from '@playwright/test';

test('My First Test',async({page})=>{
    await page.goto('https://google.com/');
    await page.locator('input[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    const result=await page.locator('h3').first().textContent();
    expect(result?.length).toBeGreaterThan(0);
});