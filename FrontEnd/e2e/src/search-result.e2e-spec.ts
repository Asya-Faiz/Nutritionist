import { SearchResultPage } from './search-result.po';
describe('SEARCH-RESULT TEST', () => {
    let page: SearchResultPage;
    beforeEach(() => {
        page = new SearchResultPage();
        page.navigateToSearchResult();
    });
    //div class container
    it('should get div class', () => {
        expect(page.card.isPresent()).toBeFalsy();
    });
​
    it('should get submit button', () => {
        page.navigateToSearchResult();
        expect(page.getsearchResultComponent()).toBeTruthy(` <button class="btn btn-light px-4 m-2" (click)="resetSearch()"> should
      exist in search-result.component.html`);
    });
    it('should get submit button', () => {
        page.navigateToSearchResult();
        expect(page.getsearchResultComponent()).toBeTruthy(`  <button class="btn btn-light px-4 m-2" (click)="resetSearch()"> should
      exist in search-result.component.html`);
    });
​
});