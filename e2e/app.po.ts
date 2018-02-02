import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getText(selector) {
    return element(by.css(selector)).getText();
  }

  getElements(selector) {
    return element(by.css(selector));
  }

  mainForm = element(by.id('main-form'));

  emailBlock = element(by.id('email'));
  emailInput = this.emailBlock.all(by.tagName('input')).get(0);

  nameBlock = element(by.id('name'));
  nameInput = this.nameBlock.all(by.tagName('input')).get(0);
}
