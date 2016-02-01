'use strict';

let $inject = ['$http'];
class <%= pascalCaseName %> {
  constructor($http) {
    this.$http = $http;
    this.shared = 'Example of shared value';
  }

  fetchData() {
    // TODO: Remove me
    // This is just example
    let api = this.$http();
    return api;
  }

  static getInstance($http) {
    return new <%= pascalCaseName %>($http);
  }
}

<%= pascalCaseName %>.getInstance.$inject = $inject;

export default <%= pascalCaseName %>.getInstance;
