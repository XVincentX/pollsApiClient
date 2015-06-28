import angular from 'angular'
import text from "./questions/text.html!text"
import textArray from "./questions/textArray.html!text"

const moduleName = 'formlyTemplates'

angular.module(moduleName, [])
.config(['formlyConfigProvider', function(formlyConfigProvider) {
  formlyConfigProvider.setType({
    name: 'create.text',
    template: text,
    defaultOptions: {
      defaultValue: '',
      validators: {
        notEmpty: function($viewValue, $modelValue) {
          let value = $modelValue || $viewValue
          return value.length > 0
        }
      }
    },
  })

  formlyConfigProvider.setType({
    name: 'create.array[text]',
    template: textArray,
    defaultOptions: {
      defaultValue: ['']
    }
  })

}])

export default moduleName
