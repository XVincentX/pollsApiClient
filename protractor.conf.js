require("./server")

exports.config = {
  directConnect: true,
  specs: 'tests/e2e/*.js',
  baseUrl: 'http://localhost:1234',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  }
};
