(function() {  
    'use strict';
    angular.module('netMediaApp').controller('SeriesCtrl', SeriesCtrl);
    
    function SeriesCtrl($scope, $location, Series, ListGenreSeries) {
        $scope.series = Series;
        $scope.genreList = ListGenreSeries;
        $scope.query = {};
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        }

    
    	$scope.showSerie = function(id) {
        $location.path('/serie/' + id);
      }

   }
}());
