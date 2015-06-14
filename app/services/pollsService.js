import _ from "lodash"

export default class pollsService {
  constructor(hrRoot, apiLocation, $log) {
    this.hrRoot = hrRoot
    this.apiLocation = apiLocation
    this.$log = $log
  }

  getPolls()
  {
    let loadEndpoint = () =>
    {
      return this.hrRoot(this.apiLocation)
        .follow()
        .$promise
        .then((hrRootLink) => { return hrRootLink })
    }

    let loadPolls = (hrRootLink) =>
    {
      this.$log.info("Fetched hypermedia api endpoint from polls")
      this.questionsLink = hrRootLink.$followOne("questions")
      return this.questionsLink
        .$promise
        .then((qLink) => {
        let questions = qLink.$embeddeds('questions')
        if (questions.length == 0)
          return {questions: qLink.$embeddeds('question'), actions: qLink.$forms(), links: qLink.$links()}
        return {questions: questions, actions: qLink.$forms(), links: qLink.$links()}
      })
    }

    let mapPolls = (hyResLinks) =>
    {
      this.$log.info("Received polls informations")
      let questions = _(hyResLinks.questions).map((element) => this.mapPoll(element)).value()

      this.polls = {actions: hyResLinks.actions, links: _.filter(hyResLinks.links, (link) => {return link.rel[0] != 'self'}), questions: questions}
      return this.polls
    }

    return loadEndpoint()
      .then(loadPolls)
      .then(mapPolls)
      .catch((error) => {this.$log.error(`Error during hypermedia fetching: ${error}`)})
  }

  voteChoice(choice)
  {
    return this.executeAction(choice.actions.vote)
  }

  addPoll(poll)
  {
    return this.executeAction(poll)
    .then((element)=>{
      this.polls.questions.push(this.mapPoll(element))
    })
  }

  mapPoll(element)
  {
    let _choices = _(element.$embeddeds('choices'))
    if (element.$embeddeds('choices').length == 0)
      _choices = _(element.$embeddeds('choice'))
    return {
      id: element.$link('self').href,
      question: element.question,
      published_at: element.published_at,
      actions: element.$forms(),
      choices: _choices.map((choice) => {
        return {
          text: choice.choice,
          votes: choice.votes,
          actions: {
            vote: choice.$form('vote')
          }
        }
      }).value(),
      total: _(element.$embeddeds('choices')).reduce((innerTot, choice) => {
          return innerTot + choice.votes
      }, 0)

    }
  }

  executeAction(action)
  {
    return action.submit().$promise
  }
}
