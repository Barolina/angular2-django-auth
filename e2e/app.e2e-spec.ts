import { AngDPage } from './app.po';

describe('ang-d App', function() {
  let page: AngDPage;

  beforeEach(() => {
    page = new AngDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
