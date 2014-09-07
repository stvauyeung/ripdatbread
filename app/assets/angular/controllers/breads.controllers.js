var app = angular.module('Bread.Controller', []);

app.controller('NewBreadCtrl', ['$scope', '$http', '$window', 'currentUser', function($scope, $http, $window, currentUser) {
    
  if (currentUser.data === 'null') {
    $window.location.href = '/login';
    $rootScope.alerts.push({type: 'danger', msg: $sce.trustAsHtml('You must be logged in to do that')});
  };
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
  
}]);
  
app.controller('BreadShowCtrl', ['$scope', 'showedBread', 'Vote', 'Comment', '$window', 'currentUser', 'nextBread', function($scope, showedBread, Vote, Comment, $window, currentUser, nextBread) {
    
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
}]);
  
app.controller('YummyBreadCtrl', ['$scope', 'yummyBreads', function($scope, yummyBreads) {
  $scope.breads = yummyBreads.data;
}]);

app.controller('HotBreadCtrl', ['$scope', 'hotBreads', function($scope, hotBreads) {
  $scope.breads = hotBreads.data;
}]);