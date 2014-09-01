app = angular.module('Directives', []);

app
  .directive('sideBarHide', function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        $('.sidebar-close-button').click(function() {
          $('#sidebar-wrapper').hide(400, function() {
            $('#wrapper').css({
              'padding-left': '0px'
            });
            $('#wrapper').prepend('<span class="sidebar-open-button">&#8594;</span>')
            $('.sidebar-open-button').click(function() {
              $('#sidebar-wrapper').show(800);
              $('.sidebar-open-button').hide();
              $('#wrapper').css({
                'padding-left': '250px'
              });
            });
          });
        }); 
      }
    }
  })
  .directive('fileInput',['$parse',function($parse){
    return {
      restrict:'A',
      link:function(scope,elm,attrs){
        elm.bind('change',function(){
          $parse(attrs.fileInput)
          .assign(scope,elm[0].files)
          scope.$apply()
        })
      }
    }
  }])
  .directive('successBtn', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        $rootScope.$on('req:success', function() {

          // Change the button to show success
          element.css({
            'background-color': '#00CC45',
            'border-color': '#19FF67',
            'font-size': '24px'
          });

          element.html('SAID <i class="ion-checkmark-circled"></i>');

          // Add a timeout to make sure button doesn't stay in success mode

          $timeout(function() {
            // Revert button's css back

            element.css({
              'background-color': '#FF0700',
              'border-color': '#FF7470',
              'font-size': '24px'
            });
            
            // Revert text
            element.text('SAY IT');

          }, 3000)

        });

      }
    }
  }])
  .directive('ripBtn', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, elm, attr) {
        $rootScope.$on('rip:success', function() {
          elm.css({
            'background-color': 'transparent',
            'border-color': '#D90600',
            'color': '#D90600'
          });
          elm.attr('disabled', true);
          elm.text("RIP'D!")
        });
      }
    }
  }])
  .directive('dipBtn', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, elm, attr) {
        $rootScope.$on('dip:success', function() {
          elm.css({
            'background-color': 'transparent',
            'border-color': '#D96800',
            'color': '#D96800'
          });
          elm.attr('disabled', true);
          elm.text("DIP'D!")
        });
      }
    }
  }])
  .directive('lastSlice', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        elm.on('click', function() {
          $window.history.back();
        });
      }
    }
  }])
  .directive('reloadLink', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function(scope, elm, attr) {
        elm.on('click', function() {
          $window.location.href = attr.href;
        })
      }
    }
  }])
  .directive('requireLogin', ['$cookies', '$rootScope', '$sce', function($cookies, $rootScope, $sce) {
    return {
      restrict: 'A',
      link: function(scope, elm, attr) {
        $rootScope.alerts = [];

        $rootScope.closeAlert = function(index) {
          $rootScope.alerts.splice(index, 1);
        }

        elm.on('click', function() {
          if ($cookies.user === null || $cookies.user === undefined) {
            $rootScope.alerts.push({type: 'danger', msg: $sce.trustAsHtml('You must be <a reload-link href="/login">logged in</a> to do that')})
          }
        });
      }
    }
  }])
