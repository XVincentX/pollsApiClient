import template from "./application.template.html!text"
        
export default class applicationDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = template
    }
}
