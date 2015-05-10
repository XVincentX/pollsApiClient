import 'angular-mocks'
import '../../app/main'

describe('PollsService unit tests', () => {
  var pollsService = null

  beforeEach(angular.mock.module('pollsClient'));
  beforeEach(inject((_pollsService_) => {
    pollsService = _pollsService_;
  }));

  it('should return true', () => {
      assert.isTrue(true)
    })

  describe('If I try to get current polls', () => {
    before(() => {
      pollsService.getPolls()
    })

    it('should return true', () => {
      assert.isTrue(true)
    })
  })

});
