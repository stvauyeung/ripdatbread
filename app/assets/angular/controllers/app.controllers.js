var app = angular.module('breadControllers', ['User.Controller', 'Bread.Controller']);

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
}]);

app.controller('LoginCtrl', ['$scope', 'AuthService', '$window', function($scope, AuthService, $window) {

  $scope.createSession = function(credentials) {
    AuthService.login(credentials);
  };

}]);

app.controller('SideNavCtrl', ['$scope', '$rootScope', 'AuthService', 'currentUser', function($scope, $rootScope, AuthService, currentUser) {

  $scope.currentUser = currentUser.data;
  $scope.loggedIn = function() {
    if ($scope.currentUser == 'null') {
      return false
    } else { 
      return true
    }
  };
  $scope.hideNav = function() {
    $rootScope.hideSideNav = true;
    console.log($rootScope.hideSideNav);
  };
  $scope.clearSession = function() {
    AuthService.logout();
  };

}]);

app.controller('UserNavCtrl', ['$scope', 'showedUser', 'currentUser', function($scope, showedUser, currentUser) {

  $scope.currentUser = currentUser;
  $scope.user = showedUser.data;
  $scope.userPhoto = $scope.user.photo.photo.normal.url;

}]);