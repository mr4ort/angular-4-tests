import { browser, by, element } from 'protractor';

export class SecondPage {
  navigateTo(url) {
    return browser.get(`${url ? url : '/'}`);
  }

  getText(selector) {
    return element(by.css(selector)).getText();
  }
  getElement(selector) {
    return element(by.css(selector));
  }
}
