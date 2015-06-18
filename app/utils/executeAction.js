import _ from 'lodash'

export default class executeAction
{
  constructor(pollsService)
  {
    this.pollsService = pollsService
    this.hasError = false
  }

  executeAction(action) {
      return this.pollsService.executeAction(action)
        .then(() => {
        if (_.isFunction(this[action.name]))
          this[action.name].apply(this.poll)
      })
      .catch(error => {
          $log.error(error)
          this.hasError = true
        })
    }
}

executeAction.$inject = ['pollsService']
