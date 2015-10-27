'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('UsersCtrl', function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/users').
      success(function(data, status, headers, config) {
        $scope.users = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
