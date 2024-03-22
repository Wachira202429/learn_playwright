import {Page} from "@playwright/test";
import {HomePage} from "./home-page";

export class TextBoxComponent extends HomePage{
    constructor(page:Page){
        super(page);
    }
    private readonly _fullNameLocator = this.page.locator('#userName');
    private readonly _emailLocator = this.page.locator('#userEmail');
    private readonly _submitButtonLocator = this.page.locator('#submit');

    public async fillFullName(name: string){
        await this._fullNameLocator.fill(name);
    }
    public async fillEmail(email: string){
        await this._fullNameLocator.fill(email);
    }
    public async submit(){
        await this._submitButtonLocator.click();
    }
}