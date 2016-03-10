import template from './navbar.html';
import './navbar.scss';

let $inject = ['$state', '$mdSidenav'];
export class NavbarController {
  constructor($state, $mdSidenav) {
    this.name = 'navbar';
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;
    this.toggleSidenav = this._toggleSidenav.bind(this);
    this.toggleLove = this._toggleLove.bind(this);
    this.loved = false;
  }

  _toggleLove() {
    this.loved = !this.loved;
  }

  _toggleSidenav(navId) {
    this.$mdSidenav(navId)
      .toggle()
      .then(function () {
        // Nav opened/closed
      });
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
