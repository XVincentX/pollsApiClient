import './button.css!'
import template from './button.template.html!text'
import controller from './button.controller'

export default class buttonDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
        this.controller = controller
        this.bindToController = true
        this.controllerAs = 'ctrl'
    }
}
