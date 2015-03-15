import angular from 'angular'
import _ from 'lodash'
import register from './utils/register'

import 'restangular'



window._ = _; //Pollute global namespace to make it avaiable to restangular

import applicationDirective   from './directives/application/application'
import pollsList              from './directives/pollsList/pollsList'
import pollsService           from './services/polls'

angular.module('pollsClient', ['restangular'])

register('pollsClient')
    .directive('application', applicationDirective)
    .directive('pollsList', pollsList)
    .service('pollsService', pollsService)