import template from './demo.html';

let $inject = ['$interval'];
export class DemoController {
  constructor($interval) {
    this.name = 'demo';
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

  hackon() {
    this.progressClass['progress-bar-success'] = !this.progressClass['progress-bar-success'];
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
