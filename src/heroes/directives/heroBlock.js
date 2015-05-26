(function() {
  'use strict';
  angular.module('netMediaApp').directive('heroBlock', heroBlock);

  function heroBlock() {
    return {
      templateUrl: 'src/heroes/directives/hero-block.html',
      restrict: 'EA',
      controller: heroBlockCtrl,
      scope: {
        hero: '='
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

    function heroBlockCtrl($scope, $location) {
      $scope.showHero = function(id) {
        $location.path('/hero/' + id);
      };
    }
  }
}());
