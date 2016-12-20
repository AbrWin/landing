'use strict';

/*
* @ngdoc function
* @name ClaroApp.controller: main
* @description Directives Main
* Directives of the ClaroApp
*/

ClaroApp.directive('setHeight', function($window){
  return{
    link: function(scope, element, attrs){
        element.css('height', $window.innerHeight/3 + 'px');
    }
  }
});

ClaroApp.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height(), 'w': w.width() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'height': (newValue.h - 100) + 'px',
                    'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});
