export default class pollsService {
  constructor(hrRoot) {
    this.mainLink = hrRoot('http://polls.apiblueprint.org/').follow()

    this.mainLink.$promise.then((hrRootLink)=> {
        console.info("Fetched hypermedia api from polls")
        this.hrRootLink = hrRootLink
        hrRootLink.$$links.questions[0].follow().$promise.then((q) =>{console.info(q)})
    }, (error) => {console.log(`Error during hypermedia fetching: ${error}`)})

  }
}
