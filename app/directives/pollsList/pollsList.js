import template from './pollsList.template.html!text'
import controller from './pollsListController'

import './pollsList.css!'

export default class pollsListDirective {
  constructor() {
    this.restrict = 'E'
    this.template = template
    this.bindToController = true
    this.controllerAs = 'ctrl'
    this.controller = controller
  }
}
