import angular from 'angular'
import text from "./questions/text.html!text"
import textArray from "./questions/textArray.html!text"

const moduleName = 'formlyTemplates'

angular.module(moduleName, [])
.config(function(formlyConfigProvider) {
  formlyConfigProvider.setType({
    name: 'create.text',
    template: text,
    defaultOptions: {
      defaultValue: '',
      templateOptions: {
        required: true
      }
    }
  })

  formlyConfigProvider.setType({
    name: 'create.array[text]',
    template: textArray,
    defaultOptions: {
      defaultValue: ['']
    }
  })

})

export default moduleName
