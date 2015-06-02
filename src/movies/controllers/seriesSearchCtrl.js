(function() {  
    'use strict';
    angular.module('netMediaApp').controller('SeriesSearchCtrl', function($scope, $location, $routeParams, SeriesSearch){

        $scope.series = SeriesSearch;
    } );
    
   
}());
