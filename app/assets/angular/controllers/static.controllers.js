var app = angular.module('Static.Controller', []);

app.controller('StaticHomeCtrl', ['$scope', 'recentBread', '$window', 'currentUser', function($scope, recentBread, $window, currentUser) {
  $scope.breads = recentBread.data;
  $scope.currentUser = currentUser.data;
  $scope.loggedIn = function() {
    if ($scope.currentUser = "null") {
      return false
    } else{ 
      return true 
    }
  };
  $scope.linkToBread = function(bread_id) {
    $window.location.href = '/breads/'+bread_id;
  };
}])