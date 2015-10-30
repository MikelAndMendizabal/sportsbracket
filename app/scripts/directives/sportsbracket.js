'use strict';

/**
 * @ngdoc directive
 * @name sportsbracketApp.directive:sportsBracket
 * @description
 * # sportsBracket
 */
angular.module('sportsbracketApp')
  .directive('sportsBracket', function () {
     return {
      templateUrl: 'views/main.html',
      restrict: 'E',
      scope: {knockoutObject: '=bracket' },
      controller: function($scope, $http){
      $http.get('https://api.myjson.com/bins/36fo6').success(function(result){
              $scope.knockoutObject= result;
         });
    },
      link: function (scope, element, attrs) {
       
      }
    };
  });
