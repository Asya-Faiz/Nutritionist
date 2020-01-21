import { browser, by, element, ElementFinder, promise } from 'protractor';
export class DetailsDialogPage {
    dialog_opener_background;
    constructor() { this.dialog_opener_background = element(by.css(".dialog_opener_background")) }
    // get details dialog component
    getdetailsDialogComponent(): ElementFinder {
        return element(by.tagName('app-details-dialog-opener'));
    }
    navigateToDetailsDialog() {
        return browser.get('/detailsDialog');
    }
}