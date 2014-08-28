app = angular.module('breadServices', ['authService']);

app.factory('CurrentUser', ['$http', '$cookies', function($http, $cookies) {
  return {
    get: function() {
      return $http.get('/api/current_user/' + $cookies.user, {cache: true})
        .success(function(data){
          // console.log(data);
        })
    }
  }
}]);