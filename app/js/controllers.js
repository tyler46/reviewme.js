'use strict';

/* Controllers */

var reviewmeControllers = angular.module('reviewmeControllers', ['ui.utils']);

reviewmeControllers.controller('RepositoryListCtrl', ['$scope', 'Repositories',
  function($scope, Repositories) {
    $scope.repositories = Repositories.query();
    $scope.orderProp = 'updated_at';
    $scope.language = 'language';

  }]);

reviewmeControllers.controller('RepositoryDetailCtrl', ['$scope', '$routeParams', 'Repository',
  function($scope, $routeParams, Repository) {
    $scope.repository = Repository.get({repositoryName: $routeParams.repositoryName}, function(repository) {
      $scope.repositoryUrl = repository.url;
    });

  }]);
