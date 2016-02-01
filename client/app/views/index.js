import angular from 'angular';
import Home from './home';

let viewsModule = angular.module('app.views', [
  Home.name
]);

export default viewsModule;
