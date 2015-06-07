import template from "./createPoll.template.html!text"
import controller from './createPollController'
import './createPoll.css!'

export default class createPollDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.template = template
        this.scope = {}
        this.bindToController = true
        this.controllerAs = 'ctrl'
        this.controller = controller
    }
}
