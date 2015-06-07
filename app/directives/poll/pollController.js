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

}
