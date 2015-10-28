'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    var step = 10, counter = 0;
    $scope.posts = [];
    $scope.loadMore = function() {
        $http.get('http://jsonplaceholder.typicode.com/posts')
        .success(function(data) {
            var i;
            if(step < 101) {
              for(i = counter; i < step; i++) {
                  $scope.posts.push(data[i]);
              }
              step += 10;
              counter += 10;
            }
        });
    };
  }]);
