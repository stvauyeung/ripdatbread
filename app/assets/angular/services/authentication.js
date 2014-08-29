app = angular.module('authService', []);

app.factory('AuthService', ['$http', '$window', '$cookies', '$location', function($http, $window, $cookies, $location) {

  return {
    login: function(credentials) {
      return $http.post('/api/login', credentials)
        .success(function(data, status, headers) {
          console.log(data);
          $window.location.href = 'users/' + data
        })
        .error(function(data, status, headers) {
          console.log('failed login');
        });
    },

    logout: function() {
      return $http
        .get('/api/logout')
        .success(function(d) {
          console.log('successful logout');
          $window.location.href = $location.absUrl();
        })
    }
  }

}]);