import angular from 'angular';
import template from './demo.html';

let $inject = ['$interval', 'Backend', '$mdDialog'];
export class DemoController {
  constructor($interval, Backend, $mdDialog) {
    this.name = 'demo';
    this.Backend = Backend;
    this.$mdDialog = $mdDialog;
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

  showAlert(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

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
