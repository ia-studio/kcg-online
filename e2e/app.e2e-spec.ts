import { Demo0813Page } from './app.po';

describe('demo0813 App', function() {
  let page: Demo0813Page;

  beforeEach(() => {
    page = new Demo0813Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
