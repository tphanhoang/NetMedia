(function() {  
    'use strict';
    angular.module('netMediaApp')
    .controller('MovieCtrl', MovieCtrl)
    .controller('MoviesCtrl', MoviesCtrl)
    .controller('MoviesGenreCtrl', MoviesGenreCtrl)
    .controller('MoviesSearchCtrl', MoviesSearchCtrl);
    

    function MovieCtrl($scope, $location, $routeParams, Movie) {
        
        $scope.movie = Movie;
        $scope.movie.id = $routeParams;
        
        $scope.back = function() {
            $location.path('/movies');
        }
    }

    function MoviesCtrl($scope, $location, Movies, ListGenreMovies, MovieFactory) {
        $scope.listGenre = ListGenreMovies;
        
        $scope.genreList = {};

        $scope.movies = Movies;    
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
        $scope.changeOrder = function(filter){
            $scope.query.order = filter;
        }
        $scope.showMovie = function(id){
            $location.path('/movie/' + id);
        }

        ListGenreMovies.genres.forEach(function(y){
            $scope.genreList[y.id]=y.name
        });
    }   
   
   function MoviesGenreCtrl($scope, $location, $routeParams, ListGenreMovies, Movies) {
        $scope.movies = Movies;
        $scope.listGenre = ListGenreMovies;
        $scope.id = $routeParams;
    }

   function MoviesSearchCtrl($scope, $location, $routeParams, MoviesSearch){
        $scope.movies = MoviesSearch;
    }


}());
