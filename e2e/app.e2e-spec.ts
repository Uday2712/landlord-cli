import { LandlordCliPage } from './app.po';

describe('landlord-cli App', () => {
  let page: LandlordCliPage;

  beforeEach(() => {
    page = new LandlordCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
