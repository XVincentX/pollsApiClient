import angular from 'angular';
import text from './questions/text.html!text';
import textArray from './questions/textArray.html!text';

const moduleName = 'formlyTemplates';

angular.module(moduleName, [])
.config(['formlyConfigProvider', (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    name: 'create.text',
    template: text,
    defaultOptions: {
      defaultValue: '',
      validators: {
        notEmpty: ($viewValue, $modelValue) => {
          const value = $modelValue || $viewValue;
          return value.length > 0;
        },
      },
    },
  });

  formlyConfigProvider.setType({
    name: 'create.array[text]',
    template: textArray,
    defaultOptions: {
      defaultValue: [''],
    },
  });
}]);

export default moduleName;
