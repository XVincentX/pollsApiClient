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

    //Fixme

    this.text = 'baffo'
    this.choices = ['baffo']
  }

  createPoll()
  {
    this.action.field("question").value = this.text
    this.action.field("choices").value = this.choices
    this.action.submit().$promise.then((response) => {
      debugger
    })
  }
}
