import { KcgPage } from './app.po';

describe('kcg App', () => {
  let page: KcgPage;

  beforeEach(() => {
    page = new KcgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
