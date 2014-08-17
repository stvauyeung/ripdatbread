controllers = angular.module('staticCtrls', []);

controllers
  // .controller('ApplicationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  //   $rootScope.currentUser = null;
  //   $scope.setCurrentUser = function(user) {
  //     $rootScope.currentUser = user;
  //   };
  // }])
  .controller('StaticHomeCtrl', ['$scope', function($scope) {
    $scope.breads = [];
    for (var i = 0; i < 30; i++) {
      $scope.breads.push(angular.copy(bread1));
    };
  }])
  .controller('LoginCtrl', ['$scope', '$window', 'AuthService', function($scope, $window, AuthService) {
    $scope.createSession = function(credentials) {
      AuthService.login(credentials)
        .success(function(data) {
          // $scope.setCurrentUser(data)
          // $window.location.href = '/';
        });
    };
  }])
  .controller('NewUserCtrl', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {
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
        console.log(d);
        $window.location.href = '/breads/'+d.id;
      });
    };
  }])
  .controller('BreadShowCtrl', ['$scope', 'showedBread', 'Vote', 'Comment', '$window', '$cookies', function($scope, showedBread, Vote, Comment, $window, $cookies) {
    
    $scope.bread = showedBread.data;
    $scope.onInfo = true;
    
    $scope.createVote = function(value) {
      vote = {bread_id: $scope.bread.id, value: value};
      Vote.create(vote);
      if (value == 'rip') {
        $scope.bread.rips += 1;
      } else if (value == 'dip') {
        $scope.bread.dips += 1;
      };
    };

    $scope.createComment = function(comment_text) {
      comment = {text: comment_text, bread_id: $scope.bread.id}
      Comment.create(comment);
      comment.username = $cookies.current_user;
      comment.user_id = $cookies.user_id;
      $scope.bread.comments.unshift(comment);
      $scope.comment = {};
    };
  }])
  .controller('SideNavCtrl', ['$scope', '$rootScope', 'AuthService', '$window', function($scope, $rootScope, AuthService, $window) {
    $scope.hideNav = function() {
      $rootScope.hideSideNav = true;
      console.log($rootScope.hideSideNav);
    };
    $scope.clearSession = function() {
      AuthService.logout();
      // $window.location.href = '/';
    };
    $scope.loggedIn = function() {
      if (AuthService.loggedIn()) {
        return true
      } else { 
        return false 
      }
    };
  }])
  .controller('UserNavCtrl', ['$scope', 'showedUser', function($scope, showedUser) {
    $scope.user = showedUser.data;
    $scope.userPhoto = $scope.user.photo.photo.normal.url;
  }]);