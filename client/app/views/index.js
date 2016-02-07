import angular from 'angular';
import Home from './home';
import Demo from './demo';

let viewsModule = angular.module('app.views', [
  Home.name,
  Demo.name
]);

export default viewsModule;
