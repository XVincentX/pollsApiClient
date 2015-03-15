import {pollsListController} from 'pollsListController'

export class pollsListDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
        this.controller: pollsListController,
        this.controllerAs: 'vm',
    }
}
