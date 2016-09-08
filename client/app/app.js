'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import Services from './services';
import Components from './components';
import Views from './views';

import './assets/styles/variables.scss';
import 'angular-material/angular-material.scss';
import 'highlight.js/styles/github.css';
import './app.scss';

import template from './app.html';
let appComponent = {
  template,
  restrict: 'E'
};

angular.module('app', [
  uiRouter,
  ngMaterial,
  Services.name,
  Components.name,
  Views.name
])

.config(($urlRouterProvider, $mdThemingProvider, $locationProvider) => {
  'ngInject';

  // Material theme
  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue');

  $locationProvider.html5Mode(true).hashPrefix('!');

  // Router
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');
})

.component('app', appComponent);
