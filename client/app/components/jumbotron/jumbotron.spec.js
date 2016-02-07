import JumbotronModule from './index'
import JumbotronComponent, { JumbotronController } from './jumbotron.component';
import JumbotronTemplate from './jumbotron.html';

describe('jumbotron', () => {
  let $rootScope, makeController;

  beforeEach(window.module(JumbotronModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new JumbotronController();
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
      //expect(JumbotronTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = JumbotronComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(JumbotronTemplate);
    });
  });
});
