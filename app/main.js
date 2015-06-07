import angular from 'angular'
import register from './utils/register'
import hrRes from 'angular-hy-res'
import formly from 'angular-formly'
import formlyBootstrap from 'angular-formly-templates-bootstrap'
import angularAnimate from 'angular-animate'
import 'ng-promise-status'
import './directives/progressBar/progressBar'

import applicationDirective from './directives/application/application'
import applicationHeaderDirective from './directives/applicationHeader/applicationHeader'
import pollsList from './directives/pollsList/pollsList'
import pollsService from './services/pollsService'
import pollDirective from './directives/poll/poll'
import sirenActionDirective from './directives/sirenAction/sirenAction'

angular.module('pollsClient', [
    'hrSiren',
    'hrLinkHeader',
    hrRes,
    formly,
    formlyBootstrap,
    angularAnimate,
    'ngPromiseStatus',
    'isteven-omni-bar'
])
  .constant('apiLocation', 'https://polls.apiblueprint.org/')
  //.constant('apiLocation', 'http://private-851d-pollshypermedia.apiary-mock.com/')

register('pollsClient')
  .directive('application', applicationDirective)
  .directive('pollsList', pollsList)
  .directive('applicationHeader', applicationHeaderDirective)
  .directive('poll', pollDirective)
  .directive('sirenAction', sirenActionDirective)
  .service('pollsService', pollsService)
