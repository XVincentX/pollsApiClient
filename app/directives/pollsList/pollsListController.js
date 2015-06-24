import _ from 'lodash'

export default class pollsListController {
  constructor(pollsService) {
    this.pollsService = pollsService

    this.pollsService.getPolls()
      .then((polls) => {
      this.polls = polls
    })
    .catch(() => { alert("Fanculo amico"); })
  }

  deletePoll(poll)
  {
    _.remove(this.polls.questions, {id: poll.id})
  }

  followLink(link)
  {
    this.pollsService.follow(link)
  }
}

pollsListController.$inject = ['pollsService']
