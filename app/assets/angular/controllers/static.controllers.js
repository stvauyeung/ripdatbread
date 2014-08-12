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
  .controller('NewUserCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
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
  }])
  .controller('UserShowCtrl', ['$scope', 'showedUser', function($scope, showedUser) {
    console.log(showedUser);
    $scope.user = showedUser.data;
    $scope.breads = $scope.user.breads;  
  }])
  .controller('NewBreadCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.createBread = function(bread) {
      var fd = new FormData();
      fd.append('photo', $scope.files[0]);
      fd.append('name', bread.name);
      fd.append('description', bread.description)
      $http.post('/api/breads/create', fd, 
      {
        transformRequest:angular.identity,
        headers:{'Content-Type':undefined}
      })
      .success(function(d) {
        $window.location.href = '/';
      });
    };
  }])
  .controller('BreadShowCtrl', ['$scope', 'showedBread', 'Vote', 'Comment', function($scope, showedBread, Vote, Comment) {
    $scope.bread = showedBread.data;
    $scope.onInfo = true;
    $scope.createVote = function(value) {
      vote = {bread_id: $scope.bread.id, value: value};
      Vote.create(vote);
      // how to update vote counter? animation on click?
    };
    $scope.createComment = function(comment_text) {
      comment = {text: comment_text, bread_id: $scope.bread.id}
      Comment.create(comment);
    };
  }])
  .controller('SideNavCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.hideNav = function() {
      $rootScope.hideSideNav = true;
      console.log($rootScope.hideSideNav);
    }
  }])
  .controller('UserNavCtrl', ['$scope', 'showedUser', function($scope, showedUser) {
    $scope.user = showedUser.data;
    $scope.userPhoto = $scope.user.photo.photo.normal.url;
  }]);