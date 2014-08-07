app = angular.module('breadModel', []);

app.factory('Bread', ['$http', '$window', function($http, $window) {
  return {
    create: function(bread) {
      $http.post('/api/breads/create', bread)
        .success(function(data, status, headers) {
          $window.location.href('/');
        })
        .error(function(data, status, headers) {
          alert('error with bread creation');
        })
    }
  }
}]);