import 'angular-mocks'
import '../../app/main'

describe('PollsService unit tests', function () {
    var Restangular = null

    beforeEach(angular.mock.module('pollsClient'));

    beforeEach(angular.mock.inject(function (_Restangular_) {
        Restangular = _Restangular_;
    }));

    it('Should touch nasino', function () {
        console.log(Restangular);
        assert.isTrue(true);
    });
});