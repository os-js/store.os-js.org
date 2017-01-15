angular.
  module('storeApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home-view></home-view>'
        }).
        when('/packages', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/home');
    }
  ]);