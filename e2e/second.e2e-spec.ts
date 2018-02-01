import { SecondPage } from './second.po';
import { browser, element, by } from 'protractor';

function selectOption() {

}

describe('angular-test Second page', () => {
  let page: SecondPage;

  beforeEach(() => {
    page = new SecondPage();
  });

  it('should open base url', () => {
    browser.refresh();
    page.navigateTo('/');
    expect(element(by.id('link-to-second'))).toBeDefined();
    page.navigateTo('/second');
    browser.sleep(4000);
  });

  it('should have title', () => {
    expect(page.getText('h1.page__title')).toBe('Title');
  });

  it('should have table', () => {
    expect(page.getElement('.table')).toBeDefined();
  });

  it('should have buttons edit', () => {
    expect(page.getElement('.btn-update')).toBeDefined();
    expect(page.getText('.btn-update')).toBe('update');
  });

  it('should show message', () => {
    page.getElement('.btn-update').click();
    expect(page.getElement('#edit-message')).toBeDefined();
  });

});
