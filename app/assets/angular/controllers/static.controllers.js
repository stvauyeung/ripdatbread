controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', ['$scope', function($scope) {
    $scope.breads = [];
    for (var i = 0; i < 30; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }])
  .controller('BreadShowCtrl', ['$scope', function($scope) {
    $scope.bread = angular.copy(bread1);
    $scope.onInfo = true;
    $scope.breadInfoStyle = function() {
      if ($scope.onInfo) {
        return {'font-weight': '700'}
      } else {
        return {'font-weight': '300'}
      };
    };
    $scope.breadTalkStyle = function() {
      if ($scope.onInfo == false) {
        return {'font-weight': '700'}
      } else {
        return {'font-weight': '300'}
      };
    };
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
    $scope.user = angular.copy(user)
    $scope.breads = [];
    for (var i = 0; i < 24; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }]);