'use strict';

/**
 * @ngdoc function
 * @name sportsbracketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsbracketApp
 */
angular.module('sportsbracketApp')
.controller('MainCtrl', function ($scope, $http) {
          $http.get('https://api.myjson.com/bins/36fo6').success(function(result){
              $scope.knockoutObject = result;
          })

        });
