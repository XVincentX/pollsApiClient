import _ from "lodash"

export default class pollsService {
  constructor(hrRoot, apiLocation) {
    this.hrRoot = hrRoot
    this.apiLocation = apiLocation
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
      console.info("Fetched hypermedia api endpoint from polls")
      this.questionsLink = hrRootLink.$followOne("questions")
      return this.questionsLink
        .$promise
        .then((qLink) => {
        let questions = qLink.$embeddeds('questions')
        if (questions.length == 0)
          return qLink.$embeddeds('question')
        return questions
      })
    }

    let mapPolls = (hyResLinks) =>
    {
      console.info("Received polls informations")
      return _(hyResLinks).map((element) => {
        let _choices = _(element.$embeddeds('choices'))
        if (element.$embeddeds('choices').length == 0)
          _choices = _(element.$embeddeds('choice'))

        return {
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
      }).value()
    }

    return loadEndpoint()
      .then(loadPolls)
      .then(mapPolls)
      .catch((error) => {console.error(`Error during hypermedia fetching: ${error}`)})
  }

  voteChoice(choice)
  {
    return choice.actions.vote.submit().$promise
  }
}
