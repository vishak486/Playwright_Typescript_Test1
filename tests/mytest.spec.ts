import {test,expect} from '@playwright/test';

test('My First Test',async({page})=>{
    await page.goto('https://google.com/ncr');
    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const result=await page.locator('h3').first().allTextContents();
    expect(result.length).toBeGreaterThanOrEqual(0);
});