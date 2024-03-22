import { Page } from "@playwright/test";
import { BasePage } from "./Base-page";
import { LeftPanel } from "./left-panel-component";

export class HomePage extends BasePage{
    constructor(page: Page){
        super(page);
    }

    private readonly _pageeaderLocator = this.page.locator('');
    public readonly leftPanelLocator = new LeftPanel(this.page, this.page.locator('div.left-pannel'));

    public async getTitle(){
        return await this._pageeaderLocator.innerText();
    }
}