import { Www.Poweralley.IoPage } from './app.po';

describe('www.poweralley.io App', () => {
  let page: Www.Poweralley.IoPage;

  beforeEach(() => {
    page = new Www.Poweralley.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
