'use strict';

let $inject = ['$http'];
class Backend {
  constructor($http) {
    this.$http = $http;
    this.shared = 'Example of shared value';
  }

  getGithubInfo() {
    return this.$http.get('https://api.github.com/repos/juhamust/silverplate');
  }

  static getInstance($http) {
    return new Backend($http);
  }
}

Backend.getInstance.$inject = $inject;

export default Backend.getInstance;
