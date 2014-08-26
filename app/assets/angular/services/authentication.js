app = angular.module('authService', []);

app.factory('AuthService', ['$http', '$window', '$cookies', function($http, $window, $cookies) {

  return {
    login: function(credentials) {
      return $http.post('/api/login', credentials)
        .success(function(data, status, headers) {
          console.log('successful login');
          $window.location.href = 'users/' + $cookies.user
        })
        .error(function(data, status, headers) {
          console.log('failed login');
        });
    },

    logout: function() {
      return $http
        .get('/api/logout')
        .success(function(d) {
          console.log('successful logout')
        })
    }
  }

}]);