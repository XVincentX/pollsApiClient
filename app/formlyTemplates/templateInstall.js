import angular from 'angular'
import text from "./questions/text.html!text"
import textArray from "./questions/textArray.html!text"

const moduleName = 'formlyTemplates'

angular.module(moduleName, [])
.config(function(formlyConfigProvider) {
  formlyConfigProvider.setType({
    name: '/questionscreate.text',
    template: text
  })

  formlyConfigProvider.setType({
    name: '/questionscreate.array[text]',
    template: textArray
  })

})

export default moduleName
