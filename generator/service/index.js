import angular from 'angular';
import <%= pascalCaseName %> from './<%= slugCaseName %>.service';

let serviceModule = angular.module('app.services.<%= slugCaseName %>', [])
.service('<%= pascalCaseName %>', <%= pascalCaseName %>);

export default serviceModule;
