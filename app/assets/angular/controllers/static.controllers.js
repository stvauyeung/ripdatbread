controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', ['$scope', function($scope) {
    $scope.breads = [];
    for (var i = 0; i < 30; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }])
  .controller('LoginCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.createSession = function(user) {
      $http.post('/api/login', user)
        .success(function(data, status, headers) {
          $window.location.href = '/';
          console.log('successful login');
        })
        .error(function(data, status, headers) {
          alert('failed login');
        })
    };
  }])
  .controller('NewUserCtrl', ['$scope', '$http', 'User', function($scope, $http, User) {
    $scope.createNewUser = function(user) {
      User.create(user);
    };
  }])
  .controller('BreadShowCtrl', ['$scope', function($scope) {
    $scope.bread = angular.copy(bread1);
    $scope.onInfo = true;
  }])
  .controller('SideNavCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    console.log($rootScope.hideSideNav);
    $scope.hideNav = function() {
      $rootScope.hideSideNav = true;
      console.log($rootScope.hideSideNav);
    }
  }])
  .controller('UserNavCtrl', ['$scope', function($scope) {
    $scope.user = angular.copy(user);
  }])
  .controller('UserShowCtrl', ['$scope', function($scope) {
    $scope.user = angular.copy(user);
    $scope.breads = [];
    for (var i = 0; i < 24; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }]);