angular.module('app')

.factory('Backend', ['$http', function($http){

  var url = '';

  return {
    getPatients: function getPatients(callback){
      $http.get('')
        .then(function(success){
          callback(success);
        }
      );
    }
  };
}]);