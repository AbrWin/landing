/**
* @ngdoc overview
* @name ClaroMusica App
* @description ClaroMusica App
* @created By ClaroMusica App
*
* Main module of the application.
*/
'use strict';

var ClaroApp = angular.module("ClaroApp",
  [
    "ui.router",
    "ngAnimate",
    "ngTouch"
  ]
);

ClaroApp.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('landing', {
      url: '/landing',
      controller: 'mainCtrl',
      templateUrl: 'views/landing.html',
    })
    .state('unlimited', {
      url: '/unlimited',
      controller: 'unlimitedCtrl',
      templateUrl: 'views/unlimited.html'
    })
    .state('upsellUnlimited', {
      url: '/upsellUnlimited',
      controller: 'upsellUnlimitedCtrl',
      templateUrl: 'views/upsellUnlimited.html'
    })
    .state('upsellCharts', {
      url: '/upsellCharts',
      controller: 'upsellChartsCtrl',
      templateUrl: 'views/upsellCharts.html'
    })

    $urlRouterProvider.otherwise('/landing');
});
