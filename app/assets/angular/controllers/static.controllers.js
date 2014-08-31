controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', ['$scope', 'recentBread', '$window', 'currentUser', function($scope, recentBread, $window, currentUser) {
    $scope.breads = recentBread.data;
    $scope.currentUser = currentUser.data;
    $scope.loggedIn = function() {
      if ($scope.currentUser = "null") {
        return false
      } else{ 
        return true 
      }
    };
    $scope.linkToPage = function(link) {
      $window.location.href = link;
    }
    $scope.linkToBread = function(bread_id) {
      $window.location.href = '/breads/'+bread_id;
    };
  }])
  .controller('LoginCtrl', ['$scope', 'AuthService', '$window', function($scope, AuthService, $window) {
    $scope.createSession = function(credentials) {
      AuthService.login(credentials);
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
  .controller('BreadShowCtrl', ['$scope', 'showedBread', 'Vote', 'Comment', '$window', 'currentUser', 'nextBread', function($scope, showedBread, Vote, Comment, $window, currentUser, nextBread) {
    
    $scope.bread = showedBread.data;
    $scope.onInfo = true;
    $scope.currentUser = currentUser.data;
    $scope.nextBread = nextBread.data.id;
    $scope.nextSlice = function(id) {
      $window.location.href = '/breads/'+id;
    };
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
      comment = {
        text: comment_text, 
        bread_id: $scope.bread.id,
        username: $scope.currentUser.name,
        user_id: $scope.currentUser.id
      }
      Comment.create(comment);
      $scope.bread.comments.unshift(comment);
      $scope.comment = {};
    };
  }])
  .controller('SideNavCtrl', ['$scope', '$rootScope', 'AuthService', 'currentUser', function($scope, $rootScope, AuthService, currentUser) {
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
  }])
  .controller('UserNavCtrl', ['$scope', 'showedUser', 'currentUser', function($scope, showedUser, currentUser) {
    $scope.currentUser = currentUser;
    $scope.user = showedUser.data;
    $scope.userPhoto = $scope.user.photo.photo.normal.url;
  }]);