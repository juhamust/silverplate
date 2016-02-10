import angular from 'angular';
import Navbar from './navbar';
import Jumbotron from './jumbotron';

let componentModule = angular.module('app.components', [
  Navbar.name,
  Jumbotron.name
]);

export default componentModule;
