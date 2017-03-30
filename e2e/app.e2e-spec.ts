import { MyTest1Page } from './app.po';

describe('my-test1 App', () => {
  let page: MyTest1Page;

  beforeEach(() => {
    page = new MyTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
