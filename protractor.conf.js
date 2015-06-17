ci = process.env.CI !== undefined

exports.config = {
  directConnect: !ci,
  specs: 'tests/e2e/*.js',
  baseUrl: (ci ? 'http://www.pollsapiclient.dev:3000' : 'http://localhost:3000'),
  framework: 'jasmine2',
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey : process.env.SAUCE_ACCESS_KEY,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  }
};


if (ci)
{
  exports.config.multiCapabilities = [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }, {
    'browserName': 'internet explorer',
    'version': '11'
  }, {
    'browserName': 'safari'
  }]
}
else
{
  require("./server")
}
