import {Locator, Page} from "@playwright/test";
import {BaseElement} from "./base-element";

export class LeftPanel extends BaseElement{

    constructor(page: Page, Locator: Locator){
        super(page, Locator);
    }
    private readonly _elementLocator = this.element.locator('text="Elements"');
    private readonly _textboxLocator = this.element.locator('text="Text Box"');
    private readonly _radiobuttonLocator = this.element.locator('text="Radio Button"');

    public async gotoTextBoxPage(): Promise<void>{
        await this._elementLocator.click();
        await this._textboxLocator.click();

    }
    public async gotoRadiobuttonPage(): Promise<void>{
        await this._elementLocator.click();
        await this._radiobuttonLocator.click();
    }
}
