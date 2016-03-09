import SidenavModule from './index';
import SidenavComponent, { SidenavController } from './sidenav.component';
import SidenavTemplate from './sidenav.html';

describe('sidenav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SidenavModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SidenavController();
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
      //expect(SidenavTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    let component = SidenavComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(SidenavTemplate);
    });
  });
});
