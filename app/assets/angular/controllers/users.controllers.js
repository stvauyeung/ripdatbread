var app = angular.module('User.Controller', []);

app.controller('NewUserCtrl', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {
  $scope.createNewUser = function(user) {

    var fd = new FormData();
    fd.append('photo',$scope.files[0]);
    fd.append('name', user.name);
    fd.append('email', user.email);
    fd.append('password', user.password);
    fd.append('password_confirmation', user.password_confirmation);
    $http.post('/api/users', fd,
    {
      transformRequest:angular.identity,
      headers:{'Content-Type':undefined}
    })
    .success(function(d) {
      $window.location.href = '/';
    })
  };

}]);

app.controller('UserShowCtrl', ['$scope', 'showedUser', function($scope, showedUser) {

  $scope.user = showedUser.data;
  $scope.breads = $scope.user.breads;

}]);