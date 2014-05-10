'use strict';

/* App Module */

var reviewmeApp = angular.module('reviewmeApp', [
  'ngRoute',

  'reviewmeControllers',
  'reviewmeServices'
]);

reviewmeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/repositories', {
        templateUrl: 'partials/repository-list.html',
        controller: 'RepositoryListCtrl'
      }).
      when('/repositories/:repositoryName', {
        templateUrl: 'partials/repository-detail.html',
        controller: 'RepositoryDetailCtrl'
      }).
      otherwise({
        redirectTo: '/repositories'
      });
  }]);
