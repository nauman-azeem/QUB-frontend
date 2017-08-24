import { QUBPage } from './app.po';

describe('qub App', function() {
  let page: QUBPage;

  beforeEach(() => {
    page = new QUBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('qub works!');
  });
});
