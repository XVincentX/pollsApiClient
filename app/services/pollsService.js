export default class pollsService {
  constructor(hrRoot) {
    this.mainLink = hrRoot('http://polls.apiblueprint.org/').follow()
    this.mainLink.$promise.then((hrRootLink)=> {
        console.info("Fetched hypermedia api endpoint from polls")
        hrRootLink.$followOne("questions").$promise.then((qLink) =>{
          this.questions = qLink.$embeddeds("questions")
          debugger
        }, (error) => {console.log(`Error during hypermedia fetching: ${error}`)})
    }, (error) => {console.log(`Error during hypermedia fetching: ${error}`)})

  }
}
