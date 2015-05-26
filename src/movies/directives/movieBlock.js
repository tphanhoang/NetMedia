(function() {
  'use strict';
  angular.module('netMediaApp').directive('movieBlock', movieBlock);

  function movieBlock() {
    return {
      templateUrl: 'src/movies/directives/movie-block.html',
      restrict: 'EA',
      controller: movieBlockCtrl,
      scope: {
        movie: '='
      }
    };

    function link(scope, element, attrs) {
      // function updateStatus() {
      //     if (scope.hero.status ==='1') {
      //         scope.lastActivity = 'En ce moment';
      //         scope.since = null;
      //         element.css({opacity: 0.4});
      //     } else {
      //         element.css({opacity: 1});
      //         scope.lastActivity = moment(scope.hero.lastActivity, 'DDMMYYYY', 'fr').format('LL');
      //         scope.since = moment(scope.hero.lastActivity, 'DDMMYYYY', 'fr').fromNow();
      //     }
      // }

      // attrs.$observe('status', function(value){
      //     updateStatus();
      // })
    }

    function movieBlockCtrl($scope, $location) {
      $scope.showMovie = function(id) {
        $location.path('/movie/' + id);
      };
    }
  }
}());
