import _ from 'lodash'
import executeAction from '../../utils/executeAction'


class pollController extends executeAction {
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

  vote(choice) {
    this.poll.total++;
    choice[1].votes++;
  }

}
pollController.$inject = ['pollsService', '$log']
export default pollController
