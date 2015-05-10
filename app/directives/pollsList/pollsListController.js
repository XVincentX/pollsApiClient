export default class pollsListController {
  constructor(pollsService) {
    this.pollsService = pollsService

    this.pollsService.getPolls()
      .then((polls) => {
      this.polls = polls
    })
  }
}
