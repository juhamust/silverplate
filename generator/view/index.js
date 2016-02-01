import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= pascalCaseName %>Component, { <%= pascalCaseName %>Controller } from './<%= slugCaseName %>.component';

let <%= pascalCaseName %>Module = angular.module('app.views.<%= slugCaseName %>', [
  uiRouter
])
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('<%= slugCaseName %>', {
      url: '/<%= slugCaseName %>',
      template: '<<%= slugCaseName %>></<%= slugCaseName %>>'
    });
})
.component('<%= upCaseName %>', <%= pascalCaseName %>Component);

export default <%= pascalCaseName %>Module;
