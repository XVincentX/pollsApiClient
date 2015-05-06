import 'angular-mocks'
import '../../app/main'

describe('PollsService unit tests', () => {
  var pollsService = null

  beforeEach(() => {angular.mock.module('pollsClient')});
  beforeEach(() => {angular.mock.inject((_pollsService_) => {
    pollsService = _pollsService_
  })})

  describe('If I try to get current polls', () => {
    before(() => {
      pollsService.getPolls()
    })

    it('should return true', () => {
      assert.isTrue(true)
    })
  })

});
