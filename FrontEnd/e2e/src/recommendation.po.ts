import { browser, by, element, ElementFinder, promise } from 'protractor';
export class RecommendationPage {
    container;
    constructor() { this.container = element(by.css(".container")) }
    // get recommendation component
    getrecommendationComponent(): ElementFinder {
        return element(by.tagName('app-recommendation'));
    }
    navigateToRecommendation() {
        return browser.get('/recommendation');
    }
    // getBrands() {
    //     return element(by.css(".container"));
    // }
}