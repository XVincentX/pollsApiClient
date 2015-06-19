import _ from 'lodash'

export default class executeAction
{
  constructor(pollsService, $log)
  {
    this.pollsService = pollsService
    this.$log = $log
  }

  executeAction(action) {
      this.hasError = false
      return this.pollsService.executeAction(action)
        .then(() => {
        if (_.isFunction(this[action.name]))
          this[action.name].apply(this.poll)
      })
      .catch(error => {
          this.$log.error(error)
          this.hasError = true
        })
    }
}

executeAction.$inject = ['pollsService']
