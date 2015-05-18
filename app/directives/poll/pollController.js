export default class pollController {
  constructor() {
  }

  canVote(choice)
  {
    debugger
    return choice.actions.vote != null
  }

  vote(choice) {
    if (this.canVote(choice))
    {
      alert('vote noted')
    }
    else
      {
        alert('you cannot vote this')
      }
  }
}
