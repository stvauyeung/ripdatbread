app = angular.module('commentModel', []);

app.factory('Comment', ['$http', function($http) {
  return {
    create: function(comment) {
      $http.post('/api/comments', comment);
    }
  }
}]);