app = angular.module('authService', []);

app.factory('AuthService', ['$http', function($http) {
  var authService = {}

  authService.login = function(credentials) {
    return $http.post('/api/login', credentials)
      .success(function(data, status, headers) {
        console.log('successful login');
      })
      .error(function(data, status, headers) {
        console.log('failed login');
      });
  };

  authService.logout = function() {
    return $http
      .get('/api/logout')
      .success(function(d) {
        console.log('successful logout')
      })
  };

  return authService;
}]);