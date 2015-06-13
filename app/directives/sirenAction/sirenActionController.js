import _ from 'lodash'

export default class pollController {
  constructor()
  {

    this.buttonOptions = {
      success_class:  'success',
      error_class:    'danger',
      progress_class: 'progress',
      idle_class:     'idle',
      delay:          1500
    };

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

    this.text = ''
    this.choices = ['']
  }

  createPoll()
  {
    this.action.field("question").value = this.text
    this.action.field("choices").value = this.choices
    this.promise = this.action.submit().$promise
    this.promise.then((response) => {

    })
  }
}
