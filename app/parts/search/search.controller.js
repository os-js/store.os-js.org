/**
  App Search Controller
*/
angular.module('appSearch', [])
  .controller('AppSearchController', function ($http) {
    var appSearch = this;
    getPackages($http, this).then((pkgs) => {
      appSearch.packages = pkgs;
    });
  });

/**
  Helpers
*/
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

