import _ from 'lodash';
import angular from 'angular';
import template from './demo.html';

let $inject = ['$interval', 'Backend', '$mdDialog'];
export class DemoController {
  constructor($interval, Backend, $mdDialog) {
    this.name = 'demo';
    this.Backend = Backend;
    this.$mdDialog = $mdDialog;
    this.question = 'Follow the white rabbit?';
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

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  };

  showCustomDialog(ev) {
    // Show custom dialog using components and component variables
    this.$mdDialog.show({
      template: `
        <md-dialog class="md-default-theme md-transition-in" role="alertdialog" tabindex="-1" aria-describedby="dialog_2" style="">
          <md-dialog-content class="md-dialog-content" role="document" tabindex="-1" id="dialog_2">
            <h2 class="md-title ng-binding">{{ question }}</h2>
            <div class="md-dialog-content-body ng-scope">
              <p class="ng-binding">Think twice before you answer.</p>
            </div>
          </md-dialog-content>
          <md-dialog-actions>
            <md-button class="md-raised md-primary" ng-click="$mdDialog.hide('blue')">Blue pill</md-button>
            <md-button class="md-raised md-warn" ng-click="$mdDialog.cancel('red')">Red pill</md-button>
          </md-dialog-actions>
          <div class="md-dialog-focus-trap" tabindex="0"></div>
        </md-dialog>`,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: false,
      controller: ['$scope', ($scope) => {
        $scope = _.extend($scope, this);
      }]
    })
    .then((answer) => {
      console.log('Answer', answer);
    }, (answer) => {
      console.log('Cancel', answer);
    });
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
