import template from "./sirenAction.template.html!text"
import controller from './sirenActionController'
import './sirenAction.css!'

export default class sirenActionDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.template = template
        this.scope = {

        }
        this.bindToController = true
        this.controllerAs = 'ctrl'
        this.controller = controller
    }
}
