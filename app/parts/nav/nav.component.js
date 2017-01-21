// Register the `appNav` component on the `appNav` module,
angular.
  module('appNav').
  component('appNav', {
    templateUrl: 'app/parts/nav/nav.template.html',
    controller: function ($scope, $location) {
      $scope.getClass = function (path) {
        console.log(path);
        return ($location.path().substr(0, path.length) === path) ? 'uk-active' : '';
      }
    }
  });