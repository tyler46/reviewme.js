'use strict';

/* Controllers */

var reviewmeControllers = angular.module('reviewmeControllers', []);

reviewmeControllers.controller('RepositoryListCtrl', ['$scope', 'Repositories',
  function($scope, Repository) {
    $scope.repositories = Repository.query();
    $scope.orderProp = 'updated_at';
  }]);

reviewmeControllers.controller('RepositoryDetailCtrl', ['$scope', '$routeParams', 'Repository',
  function($scope, $routeParams, Repository) {
    $scope.repository = Repository.get({repositoryName: $routeParams.repositoryName}, function(repository) {
      $scope.repositoryUrl = repository.url;
    });

  }]);
