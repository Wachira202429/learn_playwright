import { Page } from "@playwright/test";
import { BasePage } from "./Base-page";
import { todo } from "node:test";

export class HomePage extends BasePage{
    constructor(page: Page){
        super(page);
    }

    private readonly _pagereaderLocator = this.page.locator('');
    public readonly todosLocator = new todos(this.page, this.page.locator('("//div/./header[@class]")'));

    public async getTitle(){
        return await this._pagereaderLocator.innerText();
    }
}