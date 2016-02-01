import angular from 'angular';
import Navbar from './navbar/navbar';
import Jumbotron from './jumbotron/jumbotron';

let componentModule = angular.module('app.components', [
  Navbar.name,
  Jumbotron.name
]);

export default componentModule;
