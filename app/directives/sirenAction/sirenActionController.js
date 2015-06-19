import _ from 'lodash'
import executeAction from '../../utils/executeAction'

export default class sirenActionController extends executeAction {
  constructor(pollsService, $log)
  {
    super(pollsService, $log)

    this.buttonOptions = {
      success_class:  'success',
      error_class:    'danger',
      progress_class: 'progress',
      idle_class:     'idle',
      delay:          500
    };

    this.model = {}

    this.fields = _(this.action.fields).map(field => {
      return {
        type: this.action.name + '.' + field.type,
        key: field.name,
        templateOptions: {
          label: field.name
        }
      }
    }).value()
  }

  createPoll()
  {
    debugger
    this.action.field("question").value = this.model.question
    this.action.field("choices").value = _.filter(this.model.choices, (choice) => {return choice != ''})
    this.promise = this.pollsService.addPoll(this.action)
  }
}

sirenActionController.$inject = ['pollsService']
