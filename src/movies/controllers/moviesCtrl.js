(function() {  
    'use strict';
    angular.module('netMediaApp')
    .controller('MovieCtrl', MovieCtrl)
    .controller('MoviesCtrl', MoviesCtrl)
    .controller('MoviesGenreCtrl', MoviesGenreCtrl)
    .controller('MoviesSearchCtrl', MoviesSearchCtrl);
    

   function MovieCtrl($scope, $location, $routeParams, Movie, Credits, Alternative_titles, Images, Keywords, Releases, Videos, Translations, Similar, Reviews, Lists, Changes) {
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
    }

    function MoviesCtrl($scope, $location, Movies, ListGenreMovies, MovieFactory) {
        $scope.listGenre = ListGenreMovies;
        $scope.movies = Movies;    
        $scope.moviesList = Movies; 
        $scope.query = {};
        $scope.page = 2;
        $scope.movies.more=[];
        $scope.showMoreMovies = function(page){
            MovieFactory.getMovies(page).then(function(result){
                $scope.movies.more[page] = result;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
            $scope.page ++;
        }
        $scope.genre = function(value){
            
            if(value!=null){
            MovieFactory.getMoviesGenre(value).then(function(result){
                $scope.movies = result;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })}
            else{
                $scope.movies = $scope.moviesList;
            }                
        }
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };
   }   
   
   function MoviesGenreCtrl($scope, $location, $routeParams, ListGenreMovies, Movies) {
        $scope.listGenre = ListGenreMovies;
        $scope.series = Series;
        $scope.id = $routeParams;
   }

   function MoviesSearchCtrl($scope, $location, $routeParams, MoviesSearch){
        $scope.movies = MoviesSearch;
    }


}());
