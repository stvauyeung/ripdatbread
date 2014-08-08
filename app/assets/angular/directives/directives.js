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
              $('#sidebar-wrapper').show(200);
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
  }]);