import angular from 'angular'
import register from './utils/register'

import 'angular-hy-res'

import applicationDirective from './directives/application/application'
import pollsList from './directives/pollsList/pollsList'
import pollsService from './services/pollsService'

angular.module('pollsClient', [
    'angular-hy-res',
    'angular-hy-res-hal',
    'angular-hy-res-siren',
    'angular-hy-res-link-header'
]).config([
  '$httpProvider',
  function($httpProvider) {
    //Temp fix until hy-res will be able to autosupply the headers.
    $httpProvider.defaults.headers.post['Accept'] += ', application/hal+json'
  }

register('pollsClient')
  .directive('application', applicationDirective)
  .directive('pollsList', pollsList)
  .service('pollsService', pollsService)
