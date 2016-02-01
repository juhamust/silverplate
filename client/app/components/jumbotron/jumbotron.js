import angular from 'angular';
import uiRouter from 'angular-ui-router';
import JumbotronComponent, { JumbotronController } from './jumbotron.component';

let JumbotronModule = angular.module('app.jumbotron', [])
.component('jumbotron', JumbotronComponent);

export default JumbotronModule;
