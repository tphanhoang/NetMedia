(function() {
    'use strict';
    angular.module('netMediaApp').controller('MovieCtrl', function($scope, $location, Movie) {
        $scope.movie = Movie;
        $scope.alert = '';
        $scope.back = function() {
            $location.path('/movies');
        };
    });
}());
