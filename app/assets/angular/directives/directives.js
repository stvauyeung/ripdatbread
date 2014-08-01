app = angular.module('Directives', []);

app.directive('sideBarHide', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      $('.sidebar-close-button').click(function() {
        $('#sidebar-wrapper').hide(400, function() {
          $('#wrapper').css({
            'padding-left': '0px'
          });
          $('#wrapper').prepend('<h1 class="sidebar-open-button">&#8594;</h1>')
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
});