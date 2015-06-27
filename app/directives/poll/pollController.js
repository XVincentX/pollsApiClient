import _ from 'lodash'
import executeAction from '../../utils/executeAction'


export default class pollController extends executeAction {
  constructor(pollsService, $log) {
    super(pollsService)
    this.$log = $log
    this.buttonOptions = {
      success_class:  'success',
      error_class:    'danger',
      progress_class: 'progress',
      idle_class:     'idle',
      delay:          500
    };
  }

  votePoll(choice) {
      choice.promise = this.executeAction(choice.actions.vote)

      choice.promise.then(() => {
          this.$log.info(`Voted ${choice.text}`)
          choice.votes++;
          this.poll.total++;
      })
        .catch(error => {
        $log.error(error)
      })
  }
}

pollController.$inject = ['pollsService', '$log']
