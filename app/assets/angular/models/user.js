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
        })
    }
  }
}]);