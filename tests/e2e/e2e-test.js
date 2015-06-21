var faker = require('faker')

describe('polls CRUD cycle', function() {
  var question = 'What could be a good surname for ' + faker.name.firstName() + '?'
  var answers = [ faker.name.lastName(), faker.name.lastName(), faker.name.lastName(), faker.name.lastName() ]


  describe('If I go to home page', function() {
    browser.get('');
  });

  it('Create', function() {
    var poll = undefined

    describe('And I create a new poll', function() {
      element(by.css('.question input')).sendKeys(question);

      for (var i = 0; i < answers.length; i++)
      {
        element.all(by.css('.inputContainer input')).get(i).sendKeys(answers[i]);
        if (i != answers.length - 1)
          element.all(by.css('.form-group .choiceLine .btn')).get(i).click();
      }

      return element(by.buttonText('Create')).click();
    });

    describe('And I get the first element', function(){
      return poll = element.all(by.css('.poll')).get(0);
    })

    it('I should find that poll with ' + question + ' as title' , function(){
      expect(poll.element(by.css('h4')).getText()).toBe(question)
    });
  })

  it('Delete', function() {
    describe('When then I try to delete that poll', function() {
      return element.all(by.css('.poll')).get(0).element(by.buttonText('delete')).click()
    })

    it('I should not find that poll with ' + question + ' as title' , function(){
        expect(element.all(by.css('.poll')).get(0).element(by.css('h4')).getText()).not.toBe(question)
      });

  })
});
