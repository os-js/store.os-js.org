// Register the `searchBox` component on the `appSearch` module,
angular.
  module('appSearch').
  component('searchBox', {
    templateUrl: 'app/parts/search/search-box.template.html',
    controller: function ($rootScope, $scope, $http) {
      getPackages($http, this).then((pkgs) => {
        //Set the $ctrl.packages to pkgs
        this.packages = pkgs;
      })
    }
  });

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
  });
}
