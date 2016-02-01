import template from './jumbotron.html';
import './jumbotron.scss';

export class JumbotronController {
  constructor() {
    this.name = 'jumbotron';
  }
}

let JumbotronComponent = {
  restrict: 'E',
  bindings: {
    caption: '=',
    body: '='
  },
  template,
  controller: JumbotronController,
  controllerAs: 'vm'
};

export default JumbotronComponent;
