'use strict';

/*
* @ngdoc function
* @name ClaroApp.services: main
* @description Services Main
* Directives of the ClaroApp
*/

ClaroApp.factory('CacheData', function($cacheFactory) {
  return $cacheFactory('myData');
});
