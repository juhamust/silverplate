import template from './sidenav.html';
import './sidenav.scss';

let $inject = ['$state', '$mdSidenav'];
export class SidenavController {
  constructor($state, $mdSidenav) {
    this.name = 'sidenav';
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;

    this.menuItems = [{
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

  navigateTo(stateName) {
    console.log('Navigate to', stateName);
    this.$state.go(stateName);
    this.$mdSidenav('left').close();
  }
}

let SidenavComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: SidenavController,
  controllerAs: 'vm'
};

SidenavController.$inject = $inject;

export default SidenavComponent;
