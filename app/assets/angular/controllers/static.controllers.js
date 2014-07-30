controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', ['$scope', function($scope) {
    $scope.breads = [];
    for (var i = 0; i < 32; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }]);