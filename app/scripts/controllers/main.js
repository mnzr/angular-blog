'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/posts').
      success(function(data, status, headers, config) {
        $scope.allposts = data;
        $scope.posts = [];
        // to show the first 10 posts
        for(var i = 0; i < 10; i++) {
          // this does work, first 10 gets copies
          $scope.posts.push($scope.allposts[i]);
        }
        console.log($scope.posts);
        console.log($scope.posts.length);
        $scope.loadMore = function () {
          var last = $scope.posts[$scope.posts.length - 1];
          for(var i = 1; i <= 8; i++) {
            $scope.posts.push($scope.allposts[last + i]);
            console.log($scope.posts);
          }
      }
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
