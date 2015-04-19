export default class pollsService {
  constructor(hrRoot) {
    this.mainLink = hrRoot('http://polls.apiblueprint.org').follow({ headers: { Accept: 'application/hal+json' } })

    this.mainLink.$promise.then((hrRootLink)=> {
        console.info("Fetched hypermedia api from polls")
        this.hrRootLink = hrRootLink
    }, (error) => {console.log("Error during hypermedia fetching:" + error)})

  }
}
