exports.config = {
  directConnect: true,
  specs: 'tests/e2e/*.js',
  baseUrl: 'http://localhost:1234',
  framework: 'mocha',

  mochaOpts: {
    reporter: "mocha",
    slow: 3000
  }
};
