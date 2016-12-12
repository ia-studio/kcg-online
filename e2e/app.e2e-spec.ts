import { KcgOnlinePage } from './app.po';

describe('kcg-online App', function() {
  let page: KcgOnlinePage;

  beforeEach(() => {
    page = new KcgOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
