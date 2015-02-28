//import template from "./application.template.html!text"
      
    
class applicationDirective
{
    constructor()
    {
        this.restrict = 'E'
        this.scope = {}
        this.template = '<h1>Nasino Pariosino</h1>'
    }
}

export {applicationDirective}