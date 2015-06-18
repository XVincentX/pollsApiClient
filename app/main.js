import es6_promise from 'es6-promise'
import angular from 'angular'
import register from './utils/register'
import hrRes from 'angular-hy-res'
import formly from 'angular-formly'
import angularAnimate from 'angular-animate'
import 'ng-promise-status'
import './directives/progressBar/progressBar'

import applicationDirective from './directives/application/application'
import applicationHeaderDirective from './directives/applicationHeader/applicationHeader'
import pollsList from './directives/pollsList/pollsList'
import pollsService from './services/pollsService'
import pollDirective from './directives/poll/poll'
import sirenActionDirective from './directives/sirenAction/sirenAction'

es6_promise.polyfill();

angular.module('pollsClient', [
    'hrSiren',
    'hrLinkHeader',
    hrRes,
    formly,
    angularAnimate,
    'ngPromiseStatus',
    'isteven-omni-bar'
])
  .constant('apiLocation', 'https://polls.apiblueprint.org/')
  //.constant('apiLocation', 'http://private-851d-pollshypermedia.apiary-mock.com/')
  .config(['$compileProvider', function ($compileProvider) {
  // disable debug info
  $compileProvider.debugInfoEnabled(false);
}]);

register('pollsClient')
  .directive('application', applicationDirective)
  .directive('pollsList', pollsList)
  .directive('applicationHeader', applicationHeaderDirective)
  .directive('poll', pollDirective)
  .directive('sirenAction', sirenActionDirective)
  .service('pollsService', pollsService)
