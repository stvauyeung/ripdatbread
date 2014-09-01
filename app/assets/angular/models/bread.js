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
    },
    recentBread: function() {
      return $http.get('/api/recent_bread')
        .success(function(data) {
          return data;
        })
    },
    nextBread: function() {
      return $http.get('/api/next_bread')
        .success(function(data) {
          return data;
        })
    },
    yummyBread: function() {
      return $http.get('/api/yummy')
        .success(function(data) {
          return data;
        })
    }
  }
}]);