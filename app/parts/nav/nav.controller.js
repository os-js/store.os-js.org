/**
  App Nav Controller
*/
angular.module('appNav', [])
  .controller('AppNavController', function ($http, $location) {
    var ctrl = this;

    ctrl.getClass = function (path) {
      console.log(path);
      return ($location.path().substr(0, path.length) === path) ? 'uk-active' : '';
    }
  });