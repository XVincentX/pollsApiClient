import angular from "angular"
import _ from "lodash"
import "restangular"
import "text"
import {applicationModule} from "./directives/application/application"

window._ = _; //Pollute global namespace to make it avaiable to restangular

export var application = angular.module("pollsClient", ["restangular", applicationModule.name]);