import _ from 'lodash'

export default class pollController {
  constructor()
  {
    this.model = {}
    this.fields = _(this.action.fields).map(field => {
      return {
        type: 'input',
        key: field.name,
        templateOptions: {
          label: field.name
        }
      }
    }).value()
  }
}
