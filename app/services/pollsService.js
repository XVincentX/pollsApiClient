export default class pollsService {
  constructor(hrRoot) {
    this.hrRoot = hrRoot
    this.mainUrl = hrRoot('http://polls.apiblueprint.org').follow()
  }
}
