import { DetailsDialogPage } from './details-dialog-opener.po';
describe('DETAILS-DIALOG TEST', () => {
    let page: DetailsDialogPage;
    beforeEach(() => {
        page = new DetailsDialogPage();
        page.navigateToDetailsDialog();
    });
    //div class container
    it('should get div class', () => {
        expect(page.dialog_opener_background.isPresent()).toBeTruthy();
    });
});