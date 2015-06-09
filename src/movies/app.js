(function() {
    'use strict';
    angular.module('netMediaApp', ['ngRoute']).config(function ($routeProvider) {

            $routeProvider
                .when('/movies', {
                    templateUrl: 'src/movies/views/movies.html',
                    controller: 'MoviesCtrl',
                    resolve: {
                        Movies: function(MovieFactory) {
                            return MovieFactory.getMovies();
                        }
                    }
                })
                .when('/movie/:id', {
                    templateUrl: 'src/movies/views/movie.html',
                    controller: 'MovieCtrl',
                    resolve: {
                        Movie: function($route, MovieFactory) {
                            return MovieFactory.getMovie($route.current.params.id);
                        }
                    }
                })
                .otherwise('/movies');
        });
}());
