(function() {
    'use strict';
    angular.module('netMediaApp').controller('SerieCtrl', function($scope, $location, $routeParams, Serie, Similar, Alternative_titles, Changes, Content_ratings, Credits, External_ids, Images, Keywords, Translations, Videos) {

    	$scope.serie = Serie;
    	$scope.serie.id = $routeParams;
        $scope.similar = Similar;
		$scope.alternative_titles = Alternative_titles;
		$scope.changes = Changes;
		$scope.content_ratings = Content_ratings;
		$scope.credits = Credits;
		$scope.external_ids = External_ids;
		$scope.images = Images;
		$scope.keywords = Keywords;
		$scope.translations = Translations;
		$scope.videos = Videos;
        $scope.back = function() {
            $location.path('/series');
        };
    });
}());
