angular.
  module('storeApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<app-nav></app-nav><home-view></home-view><app-footer></app-footer>'
        }).
        when('/packages', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/home');
    }
  ]);