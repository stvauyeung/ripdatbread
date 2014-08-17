app = angular.module('voteModel', []);

app.factory('Vote', ['$http', '$rootScope', function($http, $rootScope) {
  return {
    create: function(values) {
      $http.post('/api/votes', values)
        .success(function(data) {
          $rootScope.$broadcast(data.value+':success')
        });
    }
  }
}]);