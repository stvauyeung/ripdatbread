app = angular.module('Directives', []);

app.directive('sideBar', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      $('.sidebar-close-button').click(function() {
        alert("Clicked");
        $('#sidebar-wrapper').hide();
        $('#wrapper').css({
          'padding-left': '0px'
        });
        // show the out arrow
      });
      // second block with another click handler
      // select out arrow
      // on click show() and add padding back
      // hide out arrow
    }
  }
});