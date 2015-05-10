import angular from 'angular'
import register from './utils/register'

import 'angular-hy-res'

import applicationDirective from './directives/application/application'
import applicationHeaderDirective from './directives/applicationHeader/applicationHeader'
import pollsList from './directives/pollsList/pollsList'
import pollsService from './services/pollsService'

angular.module('pollsClient', [
    'angular-hy-res',
    'angular-hy-res-siren',
    'angular-hy-res-link-header'
])
  .constant('apiLocation', 'https://polls.apiblueprint.org/')

register('pollsClient')
  .directive('application', applicationDirective)
  .directive('pollsList', pollsList)
  .directive('applicationHeader', applicationHeaderDirective)
  .service('pollsService', pollsService)
