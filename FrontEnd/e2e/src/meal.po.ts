​
import { browser, by, element, ElementFinder, promise } from 'protractor';
export class MealPage {
    // get meal component
    getMealComponent(): ElementFinder {
        return element(by.tagName('app-meal'));
    }
    navigateToMeal() {
        return browser.get('/meal');
    }
    // get submit button
    getMealButton(): ElementFinder {
        return this.getMealComponent().element(by.buttonText('Click to find total nutrients'));
    }
    
}