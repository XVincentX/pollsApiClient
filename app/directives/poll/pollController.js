import _ from 'lodash'

export default class pollController {
  constructor(pollsService, $log) {
    this.pollsService = pollsService
    this.$log = $log
    this.buttonOptions = {
      success_class:  'success',
      error_class:    'danger',
      progress_class: 'progress',
      idle_class:     'idle',
      delay:          1500
    };
  }

  vote(choice) {
    if (choice.actions.vote != null)
    {
      choice.promise = this.pollsService.voteChoice(choice)

      choice.promise.then(() => {
          this.$log.info(`Voted ${choice.text}`)
          choice.votes++;
          this.poll.total++;
      })
        .catch(error => {
        alert(error)
      })
    }
  }

  executeAction(action) {
    return this.pollsService.executeAction(action)
    .then(() => {
      debugger
      if (_.isFunction(this[action.name]))
        this[action.name].apply(this.poll)
    })
    .catch(error => {
        alert(error)
      })
  }
}
