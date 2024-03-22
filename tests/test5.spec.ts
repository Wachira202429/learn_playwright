import {test} from "@playwright/test";
import { HomePage } from "../Pages/home-page";
import { TextBoxComponent } from "../Pages/text-box-component";
import { RadioBoxPage } from "../Pages/redio-box-component";

test("Textbox page fill name",async({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc/#/");

    const textboxPage = new TextBoxComponent(page);
    await textboxPage.leftPanelLocator.gotoTextBoxPage();
    await textboxPage.fillFullName('Nan');
    await textboxPage.submit();


});
test("scneario : test", async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/");
    await page.locator("//div/./header[@class]").click();
    await page.locator("//input[@class='new-todo']").fill("Test1");
    await page.locator("//input[@class='new-todo']").press('Enter');
    await page.locator("//input[@class='new-todo']").fill("Test2");

});