// Register the `searchBox` component on the `appSearch` module,
angular.
  module('appSearch').
  component('searchBox', {
    templateUrl: 'app/parts/search/search-box.template.html',
    controller: function ($rootScope, $scope, $http) {
      getPackages($http, this);
    }
  });

//Helpers

function getPackages($http, ctrl) {
  $http.get('packages.json')
    .then(function (res) {
      console.log(res.data);
      ctrl.packages = res.data;
    });
}
