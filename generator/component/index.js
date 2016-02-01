import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= pascalCaseName %>Component, { <%= pascalCaseName %>Controller } from './<%= slugCaseName %>.component';

let <%= pascalCaseName %>Module = angular.module('app.<%= slugCaseName %>', [])
.component('<%= upCaseName %>', <%= pascalCaseName %>Component);

export default <%= pascalCaseName %>Module;
