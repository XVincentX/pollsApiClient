import template from "./sirenAction.template.html!text"
import controller from './sirenActionController'

export default class sirenActionDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.template = template
        this.scope = {
          action: '='
        }
        this.bindToController = true
        this.controllerAs = 'ctrl'
        this.controller = controller
    }
}
