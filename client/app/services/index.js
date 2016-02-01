import Backend from './backend';

let servicesModule = angular.module('app.services', [
  Backend.name
]);

export default servicesModule;
