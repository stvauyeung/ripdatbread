app = angular.module('commentModel', []);

app.factory('Comment', ['$http', '$rootScope', function($http, $rootScope) {
  return {
    create: function(comment) {
      $http.post('/api/comments', comment)
        .success(function(data) {
          $rootScope.$broadcast('req:success');
        })
        .error(function() {
          alert("There was an error posting your comment.")
        });
    }
  }
}]);