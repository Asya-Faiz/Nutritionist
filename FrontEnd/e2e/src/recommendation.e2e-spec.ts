import { RecommendationPage } from './recommendation.po';
describe('RECOMMENDATION TEST', () => {
    let page: RecommendationPage;
    beforeEach(() => {
        page = new RecommendationPage();
        page.navigateToRecommendation();
    });
    //div class container
    it('should get div class', () => {
        expect(page.container.isPresent()).toBeTruthy();
    });
});