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
          templateUrl: 'app/views/packages/packages.template.html',
          controller: 'pkgController'
        }).
        otherwise('/home');
    }
  ]);