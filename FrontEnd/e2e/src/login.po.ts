import { browser, by, element, ElementFinder, promise } from 'protractor';
​
export class LoginPage {
  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }
  navigateToLogin() {
    return browser.get('/login');
  }
  getUsernameTextBox(){
    return element(by.name('username'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
  // get submit button
  getSubmitButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Sign in'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }
​
  getRegisterLink(){
      return this.getSubmitButton().element(by.linkText('Not yet Registered?'));
  }
}