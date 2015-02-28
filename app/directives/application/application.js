import angular from "angular"
import template from "./application.template.html!text"
    
    
export var applicationModule = angular.module('applicationModule', [
]).directive('application', [
  function application() {
    return {
      restrict: 'E',
      template: template,
      controller: angular.noop,
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
      }
    };
  }
]);