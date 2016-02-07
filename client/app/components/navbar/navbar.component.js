import template from './navbar.html';
import './navbar.scss';

let $inject = ['$state'];
export class NavbarController {
  constructor($state) {
    this.name = 'navbar';
    this.$state = $state;

    this.isCollapsed = true;
    this.menu = [{
      title: 'Home',
      state: 'home'
    }, {
      title: 'Demo',
      state: 'demo'
    }];
  }

  isActive(state) {
    return state === this.$state.current.name;
  }
}

NavbarController.$inject = $inject;

let navbarComponent = {
  restrict: 'E',
  bindings: {
    caption: '='
  },
  template,
  controller: NavbarController,
  controllerAs: 'vm'
};

export default navbarComponent;
