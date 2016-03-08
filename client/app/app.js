import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
//import uiBootstrap from 'angular-ui-bootstrap';
//import 'bootstrap-loader';
import angularComponent from 'angular-component';
import Services from './services';
import Components from './components';
import Views from './views';

import 'angular-material/angular-material.scss';
//import 'angular-material/angular-material.layouts.css';
//import 'angular-material/angular-material.css';
import 'highlight.js/styles/github.css';
//import 'normalize.css';
//import './app.scss';

import template from './app.html';
let appComponent = {
  template,
  restrict: 'E'
};

angular.module('app', [
  uiRouter,
  //uiBootstrap,
  ngMaterial,
  Services.name,
  Components.name,
  Views.name
])

.config(($urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');
})

.component('app', appComponent);
