/**
 * Created by Pebie on 28/04/15.
 */
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
                        Credits: function($route, MovieFactory) {
                            return MovieFactory.getMovieCredits($route.current.params.id);
                        },
                        Movie: function($route, MovieFactory) {
                            return MovieFactory.getMovie($route.current.params.id);
                        },
                        Alternative_titles: function($route, MovieFactory){
                            return MovieFactory.getMovieAlternative_titles($route.current.params.id);
                        },
                        Images: function($route, MovieFactory){
                            return MovieFactory.getMovieImages($route.current.params.id);
                        },
                        Keywords: function($route, MovieFactory){
                            return MovieFactory.getMovieKeywords($route.current.params.id);
                        },
                        Releases: function($route, MovieFactory){
                            return MovieFactory.getMovieReleases($route.current.params.id);
                        },
                        Videos: function($route, MovieFactory){
                            return MovieFactory.getMovieVideos($route.current.params.id);
                        },
                        Translations: function($route, MovieFactory){
                            return MovieFactory.getMovieTranslations($route.current.params.id);
                        },
                        Similar: function($route, MovieFactory){
                            return MovieFactory.getMovieSimilar($route.current.params.id);
                        },
                        Reviews: function($route, MovieFactory){
                            return MovieFactory.getMovieReviews($route.current.params.id);
                        },
                        Lists: function($route, MovieFactory){
                            return MovieFactory.getMovieLists($route.current.params.id);
                        },
                        Changes: function($route, MovieFactory){
                            return MovieFactory.getMovieChanges($route.current.params.id);
                        }

                    }
                })
                .otherwise('/movies');
        });
}());
