import angular from 'angular'
import register from './utils/register'

import 'angular-hy-res'
import './directives/progressBar/progressBar'

import applicationDirective from './directives/application/application'
import applicationHeaderDirective from './directives/applicationHeader/applicationHeader'
import pollsList from './directives/pollsList/pollsList'
import pollsService from './services/pollsService'
import pollDirective from './directives/poll/poll'

angular.module('pollsClient', [
    'angular-hy-res',
    'angular-hy-res-siren',
    'angular-hy-res-link-header',
    'isteven-omni-bar'
])
  .constant('apiLocation', 'https://polls.apiblueprint.org/')

register('pollsClient')
  .directive('application', applicationDirective)
  .directive('pollsList', pollsList)
  .directive('applicationHeader', applicationHeaderDirective)
  .directive('poll', pollDirective)
  .service('pollsService', pollsService)
