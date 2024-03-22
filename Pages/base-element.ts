import { Page ,Locator} from "@playwright/test";

export class BaseElement{
    protected page:Page;
    protected element: Locator;

    constructor(page:Page,element:Locator){
        this.page = page;
        this.element = element;
    }
}