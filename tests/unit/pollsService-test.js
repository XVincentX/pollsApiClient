import 'angular'
import 'angular-mocks'
import '../../app/main'

describe('PollsService unit tests', () => {
  var pollsService = null

  beforeEach(angular.mock.module('pollsClient', ($provide) =>{
    $provide.constant('apiLocation','http://private-anon-68b1c0349-pollshypermedia.apiary-mock.com/')
  }));
  beforeEach(inject((_pollsService_) => {
    pollsService = _pollsService_;
  }));

  it('Test init', () => {
      assert.isTrue(true)
    })

  describe('If I try to get current polls', () => {
    let pollsData = null

    before(() => {
      pollsData = pollsService.getPolls()
    })

    it('should return 1 question', () => {
      assert.eventually.lengthOf(pollsData, 'questions', 1)
    })

    it('should return 4 choices', () => {
      assert.eventually.lengthOf(pollsData, 'questions[0].choices', 4)
    })

  })

});
