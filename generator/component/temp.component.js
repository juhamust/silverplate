import template from './<%= slugCaseName %>.html';
import './<%= pascalCaseName %>.scss';

let $inject = [];
export class <%= pascalCaseName %>Controller {
  constructor() {
    this.name = '<%= slugCaseName %>';
  }
}

let <%= pascalCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller: <%= pascalCaseName %>Controller,
  controllerAs: 'vm'
};

<%= pascalCaseName %>Controller.$inject = $inject;

export default <%= pascalCaseName %>Component;
