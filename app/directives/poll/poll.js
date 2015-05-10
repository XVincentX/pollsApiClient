import template from './poll.template.html!text'
import controller from './pollController'
import './poll.css!'

export default class pollsListDirective {
  constructor() {
    this.restrict = 'E'
    this.scope = {
      poll: '='
    }
    this.template = template
    this.bindToController = true
    this.controllerAs = 'ctrl'
    this.controller = controller
  }
}
