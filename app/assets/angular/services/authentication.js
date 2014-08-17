app = angular.module('authService', []);

app.factory('AuthService', ['$http', 'Session', function($http, Session) {
  var authService = {}

  authService.login = function(credentials) {
    return $http
      .post('/api/login', credentials)
      .success(function(data, status, headers) {
        Session.create(data.id, data.name, data.photo.photo.normal.url)
        return data;
      })
  };

  authService.logout = function() {
    return $http
      .get('/api/logout')
      .success(function(d) {
        Session.destroy();
      })
  };

  authService.loggedIn = function() {
    return !!Session.id;
  };

  return authService;
}]);