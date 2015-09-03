import template from './applicationHeader.template.html!text';
import './applicationHeader.css!';

export default class headerDirective {
    constructor() {
        this.restrict = 'E';
        this.template = template;
      }
}
