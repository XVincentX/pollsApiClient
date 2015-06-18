import _ from 'lodash'

export default class sirenActionController {
  constructor(pollsService)
  {

    this.buttonOptions = {
      success_class:  'success',
      error_class:    'danger',
      progress_class: 'progress',
      idle_class:     'idle',
      delay:          500
    };

    this.pollsService = pollsService

    this.model = {}
    this.fields = _(this.action.fields).map(field => {
      return {
        type: this.action.href + this.action.name + '.' + field.type,
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
    this.action.field("choices").value = _.filter(this.choices, (choice) => {return choice != ''})
    this.promise = this.pollsService.addPoll(this.action)
    this.choices = ['']
  }
}

sirenActionController.$inject = ['pollsService']
