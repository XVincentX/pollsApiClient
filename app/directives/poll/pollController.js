export default class pollController {
  constructor() {
  }

  vote(choice) {
    if (choice.actions.vote != null)
    {
      choice.actions.vote.submit().$promise
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
