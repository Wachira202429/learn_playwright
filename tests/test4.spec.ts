import {test} from "@playwright/test";
import { HomePage } from "../Pages/home-page";
import { TextBoxComponent } from "../Pages/text-box-component";
import { RadioBoxPage } from "../Pages/redio-box-component";

test("Textbox page fill name",async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator('text=Widgets').click();

    const textboxPage = new TextBoxComponent(page);
    await textboxPage.leftPanelLocator.gotoTextBoxPage();
    await textboxPage.fillFullName('Nan');
    await textboxPage.submit();


});

test("Textbox page fill email",async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator('text=Widgets').click();

    const textboxPage = new TextBoxComponent(page);
    await textboxPage.leftPanelLocator.gotoTextBoxPage();
    await textboxPage.fillEmail('Nana@gmail.com');
    await textboxPage.submit();


});

test("Check Yes",async({page})=>{
    await page.goto("https://demoqa.com");
    await page.locator('text=widgets').click();

    const radiobutton = new RadioBoxPage(page);
    await radiobutton.leftPanelLocator.gotoRadiobuttonPage();
    await radiobutton.checkYes();


});

