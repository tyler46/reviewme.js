'use strict';

/* Services */

var reviewmeServices = angular.module('reviewmeServices', ['ngResource']);

reviewmeServices.factory('Repositories', ['$resource',
  function($resource){
    var url = 'https://api.github.com/orgs/mozilla/repos?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac';
    return $resource(url, {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

reviewmeServices.factory('Repository', ['$resource',
  function($resource){
    var url = 'https://api.github.com/repos/mozilla/:repositoryName?access_token=31ba2e7935e0630d95eddfd14229c51376cee7ac';
    return $resource(url, {}, {
      query: {method:'GET', params:{repositoryName: 'repository'}, isArray:false}
    });
  }]);
