(function() {  
    'use strict';
    angular.module('netMediaApp').controller('MoviesCtrl', MoviesCtrl);
    
    function MoviesCtrl($scope, $location, Movies) {
        $scope.movies = Movies;
        $scope.query = {};
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };
   }
}());
