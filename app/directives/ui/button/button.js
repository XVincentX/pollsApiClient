import './button.css!'
import template from './button.template.html!text'

export default class buttonDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
    }
}
