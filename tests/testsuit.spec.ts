import {Page, expect, test} from 'playwright/test';
let _page:Page;

test.describe("Group1", async() => {
    test.beforeAll (async ({browser})=>{
    _page = await (await browser.newContext()).newPage()
    await _page.goto("https://demoqa.com");

        console.log
    }
)
});

