import { ExalliumAngularPage } from './app.po';

describe('exallium-angular App', function() {
  let page: ExalliumAngularPage;

  beforeEach(() => {
    page = new ExalliumAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
