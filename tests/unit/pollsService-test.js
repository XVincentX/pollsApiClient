import 'angular-mocks'
import '../../app/main'

describe('PollsService unit tests', () => {
  var Restangular = null

  beforeEach(angular.mock.module('pollsClient'));

  beforeEach(angular.mock.inject((_Restangular_) => {
    Restangular = _Restangular_;
  }));

  it('Should touch nasino', () => {
    assert.isTrue(true);
  });
});
