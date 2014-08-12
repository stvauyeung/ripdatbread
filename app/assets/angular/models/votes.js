app = angular.module('voteModel', []);

app.factory('Vote', ['$http', function($http) {
  return {
    create: function(values) {
      $http.post('/api/votes', values);
    }
  }
}]);