import _ from 'lodash'

class executeAction
{
  constructor(pollsService, $log)
  {
    this.pollsService = pollsService
    this.$log = $log
  }

  executeAction(action) {
    this.hasError = false
      action.$promise = this.pollsService.executeAction(action)
      .then((result) => {
        if (_.isFunction(this[action.name])) {
          if (_.isUndefined(result))
            result = arguments

          this[action.name].apply(undefined, [result])
        }
    })
    .catch(error => {
        this.$log.error(error)
        this.hasError = true
      })

    return action.$promise
  }
}

executeAction.$inject = ['pollsService', '$log']
export default executeAction
