import angular from 'angular';
import Backend from './backend.service';

let serviceModule = angular.module('app.services.backend', [])
.service('Backend', Backend);

export default serviceModule;
