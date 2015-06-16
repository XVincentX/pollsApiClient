ci = process.env.CI !== undefined

if (!ci)
  require("./server")

exports.config = {
  directConnect: !ci,
  specs: 'tests/e2e/*.js',
  baseUrl: (ci ? 'http://pollsapiclient.herokuapp.com' : 'http://localhost:1234'),
  framework: 'jasmine2',
  sauceUser: 'vincenzchianese',
  sauceKey : 'ebcc4534-bdcc-4ad5-8fd2-31ea2a1b6fce',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  }
};
