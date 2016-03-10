import angular from 'angular';
import Navbar from './navbar';
import Sidenav from './sidenav';
import Jumbotron from './jumbotron';

let componentModule = angular.module('app.components', [
  Navbar.name,
  Sidenav.name,
  Jumbotron.name
]);

export default componentModule;
