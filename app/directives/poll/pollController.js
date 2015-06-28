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

  vote(choice) {
    choice[1].votes++;
  }

}
pollController.$inject = ['pollsService', '$log']
