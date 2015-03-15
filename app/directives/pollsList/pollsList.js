//import {pollsListController} from './pollsListController'
import template from './pollsList.template.html!text'

export default class pollsListDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
        this.controller = pollsListController
        this.controllerAs = 'vm'
    }
}
