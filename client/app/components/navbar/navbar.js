import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('app.navbar', [
  uiRouter
])

.component('navbar', navbarComponent);

export default navbarModule;
