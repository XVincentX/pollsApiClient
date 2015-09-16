# pollsApiClient
PollsApiClient made in AngularJs.

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

A simple hypermedia enabled application on top of [Polls Api](http://docs.pollsapi.apiary.io) by [Apiary](http://www.apiary.io).

Want to know more? Read the [blog post serie](http://vncz.js.org/hypermedia-client-in-angularjs/)

# Installation instructions

1. Install jspm

  `npm install -g jspm`

2. Install npm dependencies

  `npm install`

3. Restore jspm packages

  `jspm install`

4. Run the fake server with npm start

  `npm start`

5. Browse to [http://localhost:3000](http://localhost:3000) and have fun

# Testing

[![Circle CI](https://circleci.com/gh/XVincentX/pollsApiClient.svg?style=svg)](https://circleci.com/gh/XVincentX/pollsApiClient)
[![Sauce Test Status](https://saucelabs.com/buildstatus/vincenzchianese)](https://saucelabs.com/u/vincenzchianese)

We use **karma** as test runner (unit test), **protractor** for E2E tests, and **mocha** as general testing framework.

All the stuff gets transpiled using karma-jspm, no minification and bundling gets executed.

Run front end tests: (karma)
```bash
npm run frontendtests
```

Run e2e tests: (protractor)
```bash
npm run e2etests
```

Lint the code (following the airbnb rules)
```
npm run lint
```

Run all the tests: (linting + karma + protractor)
```bash
npm test
```

**NOTE:** protractor does not work very well with **Mocha**, so _jasmine_ is used in place for e2e tests.
E2E tests run on [SauceLabs](http://saucelabs.com) and they are publicly accessible.

# Deploy

Each time a new commit is done in the **master** branch, a trigger will be launched. Then the application will be deployed to Azure at [http://pollsapiclient.azurewebsites.net](http://pollsapiclient.azurewebsites.net) and on Heroku at [http://pollsapiclient.herokuapp.com](http://pollsapiclient.herokuapp.com) as well.

The deploy script is a `postinstall` npm script that will run only if `NODE_ENV` is set to production. Therefore, **jspm** is required as a production dependency.
