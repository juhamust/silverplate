import template from './home.html';
import readme from '../../assets/html/readme.html';
import './home.scss';

let $inject = [];
export class HomeController {
  constructor() {
    this.name = 'home';
    this.contents = readme;
  }
}

HomeController.$inject = $inject;

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: HomeController,
  controllerAs: 'vm'
};

export default homeComponent;
