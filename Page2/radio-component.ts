import { HomePage } from "./home-page";

export class RadioBoxPage extends HomePage{
    private readonly _yesButtonLocator = this.page.locator('#yesRadio >> //./..');
    private readonly _impressiveButtonLocator = this.page.locator('#impressiveRadio >> xpath=./..');
    private readonly _resultLocator = this.page.locator('');

    public async checkYes(){
        await this._yesButtonLocator.click();
    }
    public async checkImpressive(){
        await this._impressiveButtonLocator.click();
    }
    public async getResult(){
        const text = await this._resultLocator.innerText();
        return text;
    }
}