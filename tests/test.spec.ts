import { Locator, Page, expect, test } from '@playwright/test';
import { constants } from 'os';

test("scneario 1", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.close();
});

test("scneario 2", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('#item-4 > span >> text="Buttons"').click();
    //await page.locator('#item-4 > span >> nth=0') วิธีการใช้เชน
    // await page.locator('#item-4 > span') >> nth=(0)
    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
    await page.locator('#rightClickBtn').click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
    // await page.locator('#67R7q').click();
    // await expect (page.locator ('#dynamicClickMessage')).toContainText('You have done a dynamic click');
    await page.close();
})

test("scneario 3", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Text Box"').click();
    await page.locator('#userName').fill('nan');
    await page.locator('#userEmail').fill('nan@gmail.com');
    await page.locator('textarea#currentAddress').fill('here');
    await page.locator('#permanentAddress').fill('here');

    await page.locator('#submit').click();
    await expect(page.locator('#name')).toContainText('nan'); //ขอแค่มีค่า 
    //   expect(await page.locator('#name').innerText()).toEqual("Name:nan"); //ต้องมีค่านี้เปะๆ
    await expect(page.locator('#email')).toContainText('nan@gmail.com');
    await expect(page.locator('p#currentAddress')).toContainText('here');
    //(page.locator ('p#currentAddress')).nth(1); // หรือใส่แบบนี้แทนถ้ามีหลายตัวซ้ำ
    await expect(page.locator('p#permanentAddress')).toContainText('here');

})

test("scneario 4", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Check Box"').click();
    //await page.locator("//label[@for='tree-node-home']").click();
    await page.locator("//label[@for='tree-node-home']/../button").click(); // click expain button
    await page.locator("//label[@for='tree-node-desktop']/../button").click(); //click expain button
    await page.locator("//label[@for='tree-node-documents']/../button").click(); //click expain button
    await page.locator("//label[@for='tree-node-downloads']/../button").click(); //click expain button
    // Check desktop
    const nodeDesktopLocator = page.locator("//input[@id='tree-node-desktop']/../span[@class='rct-checkbox']")
    await nodeDesktopLocator.setChecked(true)
    await nodeDesktopLocator.check();
    //await nodeDesktopLocator.uncheck();

    //Expect

    const isDesktopLocator = await nodeDesktopLocator.isChecked()
    expect(isDesktopLocator).toBeTruthy();

    // const isDesktopLocator = await nodeDesktopLocator.isChecked()
    // expect(isDesktopLocator).toBeFalsy();
})

test("scneario 5 Radio button", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Radio Button"').click();

    const yesRadio = page.locator('#yesRadio >> xpath=./..');
    await yesRadio.click();

    const ImpressiveRadio = page.locator('#impressiveRadio >> xpath=./..');
    await ImpressiveRadio.click();

    await page.locator('#impressiveRadio >> xpath=./..').click();
    await expect(page.locator('#impressiveRadio')).toBeTruthy();

})


test("scneario 6: dropdown", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Widgets"').click();
    await page.locator("//span[@class='text'and text()='Select Menu']").click();

    const selectOneLocator = page.locator('#selectOne');
    const listLocator = page.locator('selectOne >> xpath=./div[2]')
    await selectOneLocator.click();

    const drLocator = page.locator("//div[@id='selectOne']/div[2]//*[text()='Mr.']");
    await drLocator.click();

    await selectOneFromDropdown(page, 'Mr.');
    await page.locator("#oldSelectMenu").selectOption('Yellow');

    const text = 'Mr.'
    const newLocator = "//div[@id='selectOne']/div[2]//*[text()='${text}']"
    console.log(newLocator);

})

async function selectOneFromDropdown(page: Page, text: string) {
    const selectOneLocator = page.locator('#selectOne');
    const listLocator = page.locator('#selectOne >> xpath=./div[2]')
    await selectOneLocator.click();
    await listLocator.locator('text=${text}').click();

}

test("scneario 7: MultiDropdown", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('text="Widgets"').click();
    await page.locator('div.left-pannel >> text="Select Menu"').click();
    // await page.locator("//span[@class='text'and text()='Select Menu']").click();

    //await page.locator("//*[@id="selectMenuContainer"]/div[7]/div/div/div[2]").click();

    const selectMulLocator = page.locator("//b[text()='Multiselect drop down']/../../div[1]");
    await selectMulLocator.click();

    const selectMulLocator2 = page.locator("//b[text()='Multiselect drop down']/../../div/div[2]");
    await selectMulLocator2.click();

    const selectMulLocator3 = page.locator("//b[text()='Multiselect drop down']/../../div/div[2]");
    await selectMulLocator3.click();

})

test("scneario 8: Key and Short cut", async ({ page }) => {
    await page.goto("https://google.com");
    await page.locator("//textarea[@role='combobox']").press("H");
    await page.locator("//textarea[@role='combobox']").press("e");
    await page.locator("//textarea[@role='combobox']").press("l");
    await page.locator("//textarea[@role='combobox']").press("l");
    await page.locator("//textarea[@role='combobox']").press("O");
    await page.locator("//textarea[@role='combobox']").press("!");
    await page.locator("//textarea[@role='combobox']").press("Backspece");
    await page.locator("//textarea[@role='combobox']").press("Enter");

})


test("scneario 9: Updaload and Download", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("//span[@class='text'and text()='Upload and Download']").click();
//download file
    const downloadsButton = page.locator("#downloadButton");
    const downloadsPromise = page.waitForEvent('download');
    await downloadsButton.click();
    const downloaded = await downloadsPromise;
    console.log(downloaded.suggestedFilename())
//Upload file
    const uploadLocator = page.locator("#uploadFile");
    await uploadLocator.setInputFiles('test.jpg');
});

test("scneario 10: Drag and Deop", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('text="Interactions"').click();
    await page.locator('div.left-pannel >> text="Droppable"').click();

    const DragLocator = page.locator("div.simple-drop-container >> #draggable");
    const DropLocator = page.locator("div.simple-drop-container >> #droppable");

    await DragLocator.dragTo(DropLocator);
})

test("scneario 11: Get Data", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Text Box"').click();
    await page.locator('#userName').fill('nan');
    await page.locator('#userEmail').fill('nan@gmail.com');
    await page.locator('textarea#currentAddress').fill('here');
    await page.locator('#permanentAddress').fill('here');

    const name = await page.locator("#userName").innerText();
    console.log("Name: ", name);
})

class BaseElement{ //ประกาศไว้เรียกใช้
    protected page: Page;
    protected element: Locator;

    constructor(page: Page,element: Locator){
        this.page = page;
        this.element =element;
    }
}
class rowElement extends BaseElement{
    private readonly _fnameLocator = this.element.locator('xpath=/div[1]');
    private readonly _lnameLocator = this.element.locator('xpath=/div[2]');  
    
    public async getFirstName(){
        const text = await this._fnameLocator.innerText();
        return text;
    }
}

test("scneario 12: Get table", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Web Tables"').click();

    const rowLocator = page.locator("//div[@class='rt-tbody']//div[@role='row' and not (contains(@class, -padRow))]");
    const rowCount = await rowLocator.count();
     const rowElements = new Array<rowElement>();
    for (let i = 0; i < rowCount; i++ ){
       rowElements.push(new rowElement(page, rowLocator.nth(i)));
 }
    for await (const row of rowElements){
       const fName = await row.getFirstName();
        console.log(fName);
  }
    page.locator (
        ("//div[@class='rt-tbody']//div[@role='row' and not (contains(@class, -padRow))][1]/div[1]"));
   

});
    

test("scneario 13: Get Page", async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator('div.left-pannel >> text="Web Tables"').click();
    // get current page url
    const currentUrl = page.url();
    console.log("Current page: ", currentUrl);
});

test("scneario 14: Assert text", async ({ page }) => {
    const text = 'Hello';
    expect(text).toMatch(/Hello/)
});

test("scneario 15: Assert number", async ({ page }) => {
        const num = 123.55;
        expect(num).toEqual(123.55);
        
        const text = "15.04"
        expect(Number(text)).toBeLessThan(20);
        console.log(Number(text))
    });


    test("scneario 16: Date Piker", async ({ page }) => {
        await page.goto("https://demoqa.com");
        await page.locator("//h5[text()='Elements']").click();
        await page.locator('text="Widgets"').click();
        await page.locator('div.left-pannel >> text="Date Picker"').click();
        // get currentDate picker value
        const currentDateText = await page.locator("#datePickerMonthYearInput").inputValue();

        //Assert currentdate as text
        expect(currentDateText).toEqual("01/21/2024");

        const currentDate = new Date(currentDateText)
        const time = currentDate.getTime();
        expect(time).toBeGreaterThanOrEqual(1702400400000 - 5000);
        expect(time).toBeLessThanOrEqual(1702400400000 + 5000);
    });

    test("scneario 17: test", async ({ page }) => {
        await page.goto("https://demo.playwright.dev/todomvc/#/");
        await page.locator("//div/./header[@class]").click();
        await page.locator("//input[@class='new-todo']").fill("Test1");
        await page.locator("//input[@class='new-todo']").press('Enter');
        await page.locator("//input[@class='new-todo']").fill("Test2");

    });