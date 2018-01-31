import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

function selectOption() {

}

describe('angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   browser.sleep(10000);
  //   // expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });

  it('should have form', () => {
    page.navigateTo();
    expect(element(by.id('form-title')).getText()).toEqual('Form');
  });

  it('should have work validation of email field', () => {
    const block = element(by.id('email'));
    const input = block.all(by.tagName('input')).get(0);

    input.click();
    element(by.id('main-form')).click();
    expect(block.all(by.className('error-message')).get(0).getText()).toEqual('email is required');
    // browser.sleep(5000);
    input.sendKeys('some text');
    expect(block.all(by.className('error-message')).get(0).getText()).toEqual('email not valid');
    input.clear();
    input.sendKeys('example@domain.com');
    expect(block.all(by.className('error-message')).length).toBeUndefined();
  });

  // it('not allows submit invalid form form', () => {
  //   const form = element(by.id('main-form'));
  //   const button = element(by.id('submit-button'));
  //
  //   expect(element(by.id('main-form')).className).not.toMatch('ng-invalid');
  //   button.click();
  //   expect(element(by.id('main-form')).className).toMatch('ng-invalid');
  // });

  it('should add value', () => {
    const el1 = element(by.css('input[name="name"]'));
    expect(el1).toBeDefined();
    el1.sendKeys('Ivan');
    browser.sleep(2000);
  });

  it('should defined radiobuttons', () => {
    const el2 = element(by.id('Girl-input'));
    expect(el2).toBeDefined();

    element(by.id('gender')).all(by.className('mat-radio-label')).get(0).click();
    // browser.sleep(2000);
  });

  it('should define select age', () => {
    const el = element(by.id('age'));
    expect(el).toBeDefined();

    // element(by.name('age')).click();
    browser.sleep(2000);
    element(by.id('age'))
      .all(by.tagName('option'))
      .get(0)
      .click();
    // browser.sleep(5000);
  });

  it('should have datapicker', () => {
    const el = element(by.id('datapicker'));
    expect(el).toBeDefined();

    el.all(by.className('btnpicker btnpickerenabled')).get(0).click();
    browser.sleep(1000);

    element(by.tagName('my-date-picker')).all(by.className('daycell')).get(0).click();
    browser.sleep(2000);

  });

  it('should enable button submit', () => {
    const button = element(by.id('submit-button'));
    expect(button).toBeDefined();

    expect(button.isEnabled()).toBe(true);
  });
});
