import { GgawebPage } from './app.po';

describe('ggaweb App', function() {
  let page: GgawebPage;

  beforeEach(() => {
    page = new GgawebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
