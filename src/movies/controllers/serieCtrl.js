(function() {
    'use strict';
    angular.module('netMediaApp').controller('SerieCtrl', function($scope, $location, $routeParams, Serie) {

    	$scope.serie = Serie;
    	$scope.serie.id = $routeParams;
        $scope.back = function() {
            $location.path('/series');
        };
    });
}());
