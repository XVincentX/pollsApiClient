exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
    specs: ['tests/e2e/*.js'],
    baseUrl: 'http://localhost:1234'
};
