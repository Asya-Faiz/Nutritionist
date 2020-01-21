import { RegisterPage } from './register.po';
describe('REGISTER TEST', () => {
  let page: RegisterPage;
  beforeEach(() => {
    page = new RegisterPage();
    page.navigateToRegister();
  });
//Input Box Username
  it('should get username input box', () => {
    page.navigateToRegister();
    expect(page.getUsernameTextBox())
    .toBeTruthy(`<input class="username" matInput type="text" [formControl]="username"> should exist in register.component.html`);
  });
  //Input Box Email
it('should get email input box', () => {
    page.navigateToRegister();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input class="email" matInput type="text" [formControl]="email"> should exist in register.component.html`);
  });
  //Input Box Name
it('should get Name input box', () => {
    page.navigateToRegister();
    expect(page.getNameTextBox())
    .toBeTruthy(`<input class="name" matInput type="text" [formControl]="name"> should exist in register.component.html`);
  });
​
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToRegister();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input class="password" matInput type="password" [formControl]="password" placeholder="Password">
      should exist in register.component.html`);
  });
  //Submit Button
  it('should get submit button', () => {
    page.navigateToRegister();
    expect(page.isSubmitButtonPresent()).toBeFalsy(`<button  type="submit" [disabled]="!registerForm.valid">Register</button> should
      exist in register.component.html`);
  });
​
});