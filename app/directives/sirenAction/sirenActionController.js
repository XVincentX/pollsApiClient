import _ from 'lodash';
import executeAction from '../../utils/executeAction';

class sirenActionController extends executeAction {
  constructor(pollsService, $log) {
    super(pollsService, $log);

    this.buttonOptions = {
      success_class: 'success',
      error_class: 'danger',
      progress_class: 'progress',
      idle_class: 'idle',
      delay: 500,
    };

    this.model = {};

    this.fields = _(this.action.fields).map(field => {
      return {
        type: this.action.name + '.' + field.type,
        key: field.name,
        templateOptions: {
          label: field.name
        },
      };
    }).value();
  }

  executeAction() {
    Object.keys(this.model).forEach((key) => {
      this.action.field(key).value = this.model[key];
    });

    this.promise = super.executeAction(this.action);
    return this.promise;
  }
}

sirenActionController.$inject = ['pollsService'];

export default sirenActionController;
