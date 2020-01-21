import { browser, by, element, ElementFinder, promise } from 'protractor';
​
export class RegisterPage {
  // get register component
  getRegisterComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }
  navigateToRegister() {
    return browser.get('/register');
  }
  getNameTextBox(){
    return element(by.name('new_name'));
  }
  getEmailTextBox(){
    return element(by.name('new_email'));
  }
  getUsernameTextBox(){
    return element(by.name('new_username'));
  }
  getPasswordTextBox(){
    return element(by.name('new_password'));
  }
  // get register button
  getSubmitButton(): ElementFinder {
    return this.getRegisterComponent().element(by.buttonText('Register'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }
}