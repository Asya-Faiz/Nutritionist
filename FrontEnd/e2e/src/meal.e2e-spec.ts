import { MealPage } from './meal.po';
describe('MEAL TEST', () => {
    let page: MealPage;
    beforeEach(() => {
        page = new MealPage();
        page.navigateToMeal();
    });
    //Submit Button
    it('should get submit button', () => {
        page.navigateToMeal();
        expect(page.getMealButton()).toBeTruthy(`<button mat-raised-button class="my-3" (click)=showNutrients()>Click to find total nutrients</button> should
      exist in login.component.html`);
    });
});