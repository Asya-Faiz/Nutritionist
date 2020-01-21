import { SearchPage } from './search.po';
describe('REGISTER TEST', () => {
  let page: SearchPage;
  beforeEach(() => {
    page = new SearchPage();
    page.navigateToSearch();
  });
​
//Input Box Search
it('should get search input box', () => {
    page.navigateToSearch();
    expect(page.getSearchTextBox())
    .toBeTruthy(`<input class="search_input" type="text" 
    placeholder="Search Food" [(ngModel)]="generalSearch" name="generalSearch"> should exist in search.component.html`);
  });
​
});