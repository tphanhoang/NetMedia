(function() {  
    'use strict';
    angular.module('netMediaApp')
    .controller('MoviesCtrl', MoviesCtrl)
    .controller('MoviesGenreCtrl', MoviesGenreCtrl)
    .controller('MovieCtrl', function($scope, $location, $routeParams, Movie, Credits, Alternative_titles, Images, Keywords, Releases, Videos, Translations, Similar, Reviews, Lists, Changes) {
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
        $scope.movie.id = $routeParams;
        $scope.alert = '';
        $scope.back = function() {
            $location.path('/movies');
        };
    });;
    
    function MoviesCtrl($scope, $location, Movies, ListGenreMovies) {
        $scope.listGenre = ListGenreMovies;
        $scope.movies = Movies;
        
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };
   }   
    function MoviesGenreCtrl($scope, $location, $routeParams, ListGenreMovies, Movies) {
        $scope.listGenre = ListGenreMovies;
        $scope.movies = Movies;
        $scope.id = $routeParams;
   }
}());
