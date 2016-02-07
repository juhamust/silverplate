import template from './<%= slugCaseName %>.html';

let $inject = [];
export class <%= pascalCaseName %>Controller {
  constructor() {
    this.name = '<%= slugCaseName %>';
  }
}

<%= pascalCaseName %>Controller.$inject = $inject;

let <%= pascalCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller: <%= pascalCaseName %>Controller,
  controllerAs: 'vm'
};

export default <%= pascalCaseName %>Component;
