var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('polls CRUD cycle', function() {
  describe('If I go to home page', function() {
    browser.get('');
  });

  describe('And I create a new poll', function() {
    values = ['Cat', 'Dog', 'Elephant', 'Crocodile']
    element(by.model('ctrl.text')).sendKeys('What is your favourite pet?');

    for (var i = 0; i < values.length; i++)
    {
      element.all(by.model('ctrl.choices[$index]')).get(i).sendKeys(values[i]);
      element.all(by.css('.form-group .choiceLine .btn')).get(i).click();
    }

    element(by.buttonText('Create')).click();
  });

  it('Should have a nasino', function(){
    return true;
  });
});
