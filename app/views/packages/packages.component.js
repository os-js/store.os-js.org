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
  return new Promise((resolve, reject) => {
    //Get the packages.json file
    $http.get('packages.json')
      .then(function (res) {
        //Return the data 
        resolve(res.data);
      }, (err) => {
        //Or reject if we've hit a snag.
        reject(err);
      });
  })
};