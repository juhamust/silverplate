import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SidenavComponent, { SidenavController } from './sidenav.component';

let SidenavModule = angular.module('app.sidenav', [])
.component('sidenav', SidenavComponent);

export default SidenavModule;
