import template from './<%= slugCaseName %>.html';

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
