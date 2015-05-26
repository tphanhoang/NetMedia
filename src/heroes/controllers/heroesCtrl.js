(function() {  
    'use strict';
    angular.module('netMediaApp').controller('HeroesCtrl', HeroesCtrl);
    
    function HeroesCtrl($scope, $location, Heroes) {
        $scope.heroes = Heroes;
        $scope.query = {};
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };
   }
}());
