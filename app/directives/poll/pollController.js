export default class pollController {
  constructor(pollsService) {
    this.pollsService = pollsService
  }

  vote(choice) {
    if (choice.actions.vote != null)
    {
      this.pollsService.voteChoice(choice)
        .then(() => {
          console.info(`Voted ${choice.text}`)
          choice.votes++;
          this.poll.total++;
      })
        .catch(error => {
        alert(error)
      })

    }
  }
}
