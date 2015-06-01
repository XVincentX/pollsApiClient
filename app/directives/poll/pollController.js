export default class pollController {
  constructor(pollsService) {
    this.pollsService = pollsService
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
          console.info(`Voted ${choice.text}`)
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
      if (action.name == 'delete')
        this.delete(this.poll)
    })
    .catch(error => {
        alert(error)
      })
  }
}
