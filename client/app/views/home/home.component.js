import template from './home.html';
import './home.scss';

let $inject = ['Backend'];
export class HomeController {
  constructor(Backend) {
    this.name = 'home';
    this.starCount = '...';
    this.Backend = Backend;
  }

  showRepoInfo() {
    this.Backend.getGithubInfo()
    .then((resp) => {
      this.starCount = resp.data.stargazers_count;
    })
    .catch((err) => {
      this.starCount = 'Failure';
      console.warn('Request failed', err);
    })
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
