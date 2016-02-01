import template from './<%= slugCaseName %>.html';

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

export default <%= pascalCaseName %>Component;
