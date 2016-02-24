import template from './demo.html';

let $inject = ['$interval', 'Backend'];
export class DemoController {
  constructor($interval, Backend) {
    this.name = 'demo';
    this.Backend = Backend;
    this.starCount = '-';
    this.progressValue = 0;
    this.progressStyle = {
      width: '10%',
    };
    this.progressClass = {
      'progress-bar-success': false
    };

    $interval(() => {
      this.progressValue += 10;
      if (this.progressValue > 100) {
        this.progressValue = 0;
      }
      // Create style
      this.progressStyle.width = `${this.progressValue}%`;
    }, 1500);
  }

  colorMe() {
    this.progressClass['progress-bar-success'] = !this.progressClass['progress-bar-success'];
  }

  fetchRepoInfo() {
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

DemoController.$inject = $inject;

let DemoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: DemoController,
  controllerAs: 'vm'
};

export default DemoComponent;
