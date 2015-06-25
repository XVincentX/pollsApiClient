import _ from "lodash"

export default class pollsService {
  constructor(hrRoot, apiLocation, $log) {
    this.hrRoot = hrRoot
    this.apiLocation = apiLocation
    this.$log = $log
  }

  loadPolls()
  {
    return this.hrRoot(this.apiLocation)
      .follow()
      .$followOne("questions")
      .$promise
  }

  extractData(qLink)
  {
      let questions = qLink.$embeddeds('questions')
      return {questions: questions, actions: qLink.$forms(), links: qLink.$links()}
  }

  mapPolls(questionsObject)
  {
    this.$log.info("Received polls informations")
    let questions = _(questionsObject.questions).map((element) => this.mapPoll.bind(this)(element)).value()

    this.polls = {
      actions: questionsObject.actions,
      links: _.filter(questionsObject.links, (link) => {return link.rel[0] != 'self'}),
      questions: questions
    }

    return this.polls
  }

  getPolls(source)
  {
    if (_.isUndefined(source))
      source = this.loadPolls()

    return source
      .then(this.extractData.bind(this))
      .then(this.mapPolls.bind(this))
      .catch((error) => {this.$log.error(`Error during hypermedia fetching: ${error}`)})
  }

  create(poll)
  {
      this.polls.questions.push(this.mapPoll(poll))
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

  follow(link)
  {
    return this.getPolls.bind(this)(link.follow().$promise)
  }

  executeAction(action)
  {
    return action.submit().$promise.then((element) => {
      if (_.isFunction(this[action.name]))
        this[action.name].apply(this, [element])
    })
  }
}

pollsService.$inject = ['hrRoot', 'apiLocation', '$log']
