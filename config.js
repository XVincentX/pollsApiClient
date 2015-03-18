System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "lodash": "npm:lodash@3.5.0",
    "restangular": "github:mgonto/restangular@1.4.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash@3.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

