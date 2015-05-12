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
        .then((qLink) => { return qLink.$embeddeds('questions') })
    }

    let mapPolls = (hyResLinks) =>
    {
      console.info("Received polls informations")
      return _(hyResLinks).map((element) => {
        return {
          question: element.question,
          published_at: element.published_at,
          choices: _(element.$embeddeds('choices')).map((choice) => {
            return {
              text: choice.choice,
              votes: choice.votes
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
}
