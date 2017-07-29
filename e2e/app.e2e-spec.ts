import { ReceipePage } from './app.po';

describe('receipe App', () => {
  let page: ReceipePage;

  beforeEach(() => {
    page = new ReceipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
