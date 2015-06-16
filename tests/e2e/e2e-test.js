var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:1234');
  });
});
