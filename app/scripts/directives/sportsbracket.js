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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sportsBracket directive');
      }
    };
  });
