import { browser, by, element, ElementFinder, promise } from 'protractor';
export class SearchResultPage {
    card;
    constructor() { this.card = element(by.css(".card")) }
    // get recommendation component
    getsearchResultComponent(): ElementFinder {
        return element(by.tagName('app-search-result'));
    }
​
    getSearchResultButton(): ElementFinder {
        return this.getsearchResultComponent().element(by.buttonText('Reset'));
    }
​
    navigateToSearchResult() {
        return browser.get('/searchResult');
    }
}