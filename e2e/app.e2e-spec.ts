import { FacebookManagerPage } from './app.po';

describe('facebook-manager App', () => {
  let page: FacebookManagerPage;

  beforeEach(() => {
    page = new FacebookManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
