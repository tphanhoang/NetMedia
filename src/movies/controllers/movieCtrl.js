(function() {
    'use strict';
    angular.module('netMediaApp').controller('MovieCtrl', function($scope, $location, $routeParams, Movie, Credits, Alternative_titles, Images, Keywords, Releases, Videos, Translations, Similar, Reviews, Lists, Changes) {
        $scope.movie = Movie;
        $scope.credits = Credits;
		$scope.alternative_titles = Alternative_titles;
		$scope.images = Images;
		$scope.keywords = Keywords;
		$scope.releases = Releases;
		$scope.videos = Videos;
		$scope.translations = Translations;
		$scope.similar = Similar;
		$scope.reviews = Reviews;
		$scope.lists = Lists;
		$scope.changes = Changes;
        $scope.movie.id = $routeParams
        $scope.alert = '';
        $scope.back = function() {
            $location.path('/movies');
        };
    });
}());
