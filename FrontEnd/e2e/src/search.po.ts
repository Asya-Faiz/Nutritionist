
import { browser, by, element, ElementFinder, promise } from 'protractor';
​
export class SearchPage {
  // get search component
  getsearchComponent(): ElementFinder {
    return element(by.tagName('app-search'));
  }
  navigateToSearch() {
    return browser.get('/search');
  }
  
  getSearchTextBox(){
    return element(by.name('generalSearch'));
  }
​
}