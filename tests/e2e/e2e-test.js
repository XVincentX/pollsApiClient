var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://www.google.it/');
    browser.pause();
    element(by.model('ctrl.text')).sendKeys('Nasino');
  });
});
