app = angular.module('userModel', []);

app.factory('User', ['$http', '$window', function($http, $window) {
  return {
    create: function(user) {
      $http.post('/api/users', user)
        .success(function(data, status, headers) {
          $window.location.href = '/';
        })
        .error(function(data, status, headers) {
          alert('Error with creation');
        });
    },
    show: function(user_id) {
      $http.get('/api/users/'+user_id)
        .success(function(data, status, headers) {
          return data;
        })
        .error(function(data, status, headers) {
          alert('error getting user');
        });
    }
  }
}]);