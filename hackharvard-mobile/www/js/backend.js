angular.module('starter')

.factory('Backend', ['$http', function($http){
  return {
    getPatients: function getPatients(callback){
      $http.get('')
        .then(function(success){
          callback(success);
        }
      );
    },
    respondToAlert: function respondToAlert(callback) {
      $http.get('')
        .then(function(success){
          callback(success);
        }
      );
    }

  };
}]);