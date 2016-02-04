import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  ngSanitize
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
