# pollsApiClient
PollsApiClient made in AngularJs.

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This is just a simple client to [Polls Api](http://docs.pollsapi.apiary.io) by [Apiary](http://www.apiary.io)

# Installation instructions

1. Install jspm

  ```npm install -g jspm```

2. Install npm dependencies

  ```npm install```

3. Restore jspm packages

  ```jspm install```

4. Run the fake server with npm start

  ```npm start```

5. Browse to [http://localhost:1234](http://localhost:1234) and have fun

# Testing

We use **karma** as test runner (unit test), **protractor** for E2E tests, and **mocha** as general testing framework.

NOTE: protractor is actually not working very well with **Mocha**, and we should evaluate IF move to **jasmine** (another framework to learn).

All the stuff gets transpiled using karma-jspm, no minification and bundling gets executed.

Run front end tests: (karma)
```bash
npm run frontendtests
```

Run e2e tests: (protractor)
```bash
npm run e2etests
```

Run all the tests: (karma + protractor)
```bash
npm test
```

# Deploy

Each time a new commit is done in the **master** branch, a trigger will be launched. Then the application will be deployed to Azure at [http://pollsapiclient.azurewebsites.net](http://pollsapiclient.azurewebsites.net) and on Heroku at [http://pollsapiclient.herokuapp.com](http://pollsapiclient.herokuapp.com) as well.

The deploy script is a `postinstall` npm script that will run only if `NODE_ENV` is set to production. For this reason, **jspm** is required as a production dependency.
