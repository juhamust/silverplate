import <%= pascalCaseName %>Module from './index';
import <%= pascalCaseName %>Component, { <%= pascalCaseName %>Controller } from './<%= slugCaseName %>.component';
import <%= pascalCaseName %>Template from './<%= slugCaseName %>.html';

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController;

  beforeEach(window.module(<%= pascalCaseName %>Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= pascalCaseName %>Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    it('contains placeholder', () => {
      //expect(<%= pascalCaseName %>Template).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = <%= pascalCaseName %>Component;

    it('includes the intended template',() => {
      expect(component.template).to.equal(<%= pascalCaseName %>Template);
    });
  });
});
