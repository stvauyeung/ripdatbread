controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', ['$scope', function($scope) {
    $scope.breads = [];
    for (var i = 0; i < 30; i++) {
      $scope.breads.push(angular.copy(bread1));
    };

    // $scope.placeBackgroundImage = function(imgSrc) {
    //   return {
    //     'background-image': imgSrc,
    //     'background-position': 'center top',
    //     'background-repeat': 'no-repeat',
    //     'background-size': '100% auto'
    //   }
    // }
  }]);