export default class pollController {
  constructor() {
  }

  vote(choice) {
    if (choice.actions.vote != null)
    {
      choice.votes++;
      this.poll.total++;
    }
  }
}
