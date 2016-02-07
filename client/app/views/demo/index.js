import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DemoComponent, { DemoController } from './demo.component';

let DemoModule = angular.module('app.views.demo', [
  uiRouter
])
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('demo', {
      url: '/demo',
      template: '<demo></demo>'
    });
})
.component('demo', DemoComponent);

export default DemoModule;
