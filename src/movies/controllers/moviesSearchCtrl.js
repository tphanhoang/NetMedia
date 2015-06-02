(function() {  
    'use strict';
    angular.module('netMediaApp').controller('MoviesSearchCtrl', function($scope, $location, $routeParams, MoviesSearch){

        $scope.movies = MoviesSearch;
    } );
    
   
}());
