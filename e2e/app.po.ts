import { browser, element, by } from 'protractor';

export class QUBPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qub-root h1')).getText();
  }
}
