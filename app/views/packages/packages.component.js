// Register the `homeView` component on the `homeView` module,
angular
  .module('packageView')
  .controller('pkgController', ['$scope', '$http', function ($scope, $http) {
    getPackages($http).then((pkgs) => {
      $scope.packages = pkgs;
    }).catch((err) => {
      console.log(err);
    })
  }]);

//Helpers

function getPackages($http) {
  //Get packages from json source (async)
  return new Promise((resolve, reject) => {
    $http.get('packages.json')
      .then(function (res) {
        console.log(res.data);
        resolve(res.data);
      });
  })
}