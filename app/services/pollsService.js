import _ from "lodash"

export default class pollsService {
  constructor(hrRoot) {
    this.hrRoot = hrRoot
  }

  getPolls()
  {
    let loadEndpoint = () =>
    {
      this.hrRoot = hrRoot('http://polls.apiblueprint.org/').follow()
      return this.hrRoot.$promise.then((hrRootLink) => { return hrRootLink })
    }

    let loadPolls = (hrRootLink) =>
    {
      console.info("Fetched hypermedia api endpoint from polls")
      this.questionsLink = hrRootLink.$followOne("questions")
      return this.questionsLink.$promise.then((qLink) => { return qLink.$$embedded.questions })
    }

    let mapPolls = (hyResLinks) =>
    {
      console.info("Received polls informations")
      return _(hyResLinks).map((element) =>
      {
        console.log(element)
        return {
          question: element.question,
          published_at: element.published_at,
          choices: _(element.$$embedded.choices).map((choice) => {return choice.choice}).value()

        }
      }).value()
    }

    return loadEndpoint()
      .then(loadPolls)
      .then(mapPolls)
      .catch((error) => {console.error(`Error during hypermedia fetching: ${error}`)})


  }
}
