import { LoginPage } from './login.po';
describe('LOGIN TEST', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });
//Input Box Username
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getUsernameTextBox())
    .toBeTruthy(`<input class="username" matInput type="text" [formControl]="username" placeholder="Username"> should exist in login.component.html`);
  });
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input class="password" matInput type="password" [formControl]="password" placeholder="Password">
      should exist in login.component.html`);
  });
  //Submit Button
  it('should get submit button', () => {
    page.navigateToLogin();
    expect(page.isSubmitButtonPresent()).toBeTruthy(`<button  type="submit" [disabled]="!loginForm.valid">Sign in</button> should
      exist in login.component.html`);
  });
​
  it('should have link to register', () => {
      page.navigateToLogin();
      expect(page.getRegisterLink()).toBeTruthy(`<a [routerLink]="['/register']">Not yet Registered? </a>
​
      `);
  });
});