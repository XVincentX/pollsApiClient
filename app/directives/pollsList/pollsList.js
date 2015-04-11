import template from './pollsList.template.html!text'
import controller from './pollsListController'

export default class pollsListDirective {
  constructor() {
    this.restrict = 'E'
    this.scope = {}
    this.template = template
    this.bindToController = true
    this.controllerAs = 'ctrl'
    this.controller = controller
  }
}
