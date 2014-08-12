app = angular.module('breadModel', []);

app.factory('Bread', ['$http', '$window', function($http, $window) {
  return {
    create: function(bread) {
      $http.post('/api/breads/create', bread)
        .success(function(data, status, headers) {
          $window.location.href = '/';
        })
        .error(function(data, status, headers) {
          alert('error with bread creation');
        })
    },
    show: function(bread_id) {
      return $http.get('/api/breads/'+bread_id)
        .success(function(data, status, headers) {
          return data;
        })
        .error(function(data, status, headers) {
          alert('error getting bread');
        })
    }
  }
}]);