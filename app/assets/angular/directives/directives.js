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

          element.html('Successful post. <i class="ion-checkmark-circled"></i>');

          // Add a timeout to make sure button doesn't stay in success mode

          $timeout(function() {
            // Revert button's css back

            element.css({
              'background-color': '#FF0700',
              'border-color': '#FF7470',
              'font-size': '32px'
            });
            
            // Revert text
            element.text('SAY IT');

          }, 3000)

        });

      }
    }
  }])
