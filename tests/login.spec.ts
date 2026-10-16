import {test,expect,Locator} from '@playwright/test'

test("Login test",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const username:Locator =page.locator("#user-name")
    const password:Locator =page.locator("#password")
    const loginButton:Locator =page.locator("#login-button")
    await username.fill("standard_user")
    await password.fill("secret_sauce")
    await loginButton.click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})