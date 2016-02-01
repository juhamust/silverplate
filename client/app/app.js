import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'bootstrap-loader';
import angularComponent from 'angular-component';
import Services from './services';
import Components from './components';
import Views from './views';
import 'normalize.css';
import './app.scss';

import template from './app.html';
let appComponent = {
  template,
  restrict: 'E'
};

angular.module('app', [
  uiRouter,
  uiBootstrap,
  Services.name,
  Components.name,
  Views.name
])

.config(($urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');
})

.component('app', appComponent);
