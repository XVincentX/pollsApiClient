import template from "./application.template.html!text"
import './application.css!'

export default class applicationDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
    }
}
