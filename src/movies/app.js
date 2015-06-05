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
                            return MovieFactory.getMovies(1);
                        },
                        ListGenreMovies: function(MovieFactory) {
                            return MovieFactory.getListGenreMovies();
                        }
                    }
                }) 
                .when('/series/r/:search', {
                    templateUrl: 'src/movies/views/series.html',
                    controller: 'SeriesSearchCtrl',
                    resolve: {
                        SeriesSearch: function($route, SerieFactory) {
                            return SerieFactory.getSeriesSearch($route.current.params.search);
                        }
                    }
                })
                .when('/series', {
                    templateUrl: 'src/movies/views/series.html',
                    controller: 'SeriesCtrl',
                    resolve: {
                        Series: function(SerieFactory) {
                            return SerieFactory.getSeries();
                        },
                        ListGenreSeries: function(SerieFactory) {
                            return SerieFactory.getListGenreSeries();
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
                .when('/movies/r/:search', {
                    templateUrl: 'src/movies/views/movies.html',
                    controller: 'MoviesSearchCtrl',
                    resolve: {
                        MoviesSearch: function($route, MovieFactory) {
                            return MovieFactory.getMoviesSearch($route.current.params.search);
                        }
                    }
                })
                .when('/movies/genre/:id', {
                    templateUrl: 'src/movies/views/movies.html',
                    controller: 'MoviesGenreCtrl',
                    resolve: {
                        Movies: function($route, MovieFactory) {
                            return MovieFactory.getMoviesGenre($route.current.params.id);
                        },
                        ListGenreMovies: function(MovieFactory) {
                            return MovieFactory.getListGenreMovies();
                        }
                    }
                })
                .when('/series/genre/:id', {
                    templateUrl: 'src/movies/views/series.html',
                    controller: 'SeriesGenreCtrl',
                    resolve: {
                        Movies: function($route, SerieFactory) {
                            return SerieFactory.getSeriesGenre($route.current.params.id);
                        },
                        ListGenreSeries: function(SerieFactory) {
                            return SerieFactory.getListGenreMovies();
                        }
                    }
                })
                 .when('/serie/:id', {
                    templateUrl: 'src/movies/views/serie.html',
                    controller: 'SerieCtrl',
                    resolve: {
                        Serie: function($route, SerieFactory) {
                            return SerieFactory.getSerie($route.current.params.id);
                        },
                        Similar: function($route, SerieFactory) {
                            return SerieFactory.getSerieSimilar($route.current.params.id);
                        },
                        Alternative_titles: function($route, SerieFactory) {
                            return SerieFactory.getSerieAlternative_titles($route.current.params.id);
                        },
                        Changes: function($route, SerieFactory) {
                            return SerieFactory.getSerieChanges($route.current.params.id);
                        },
                        Content_ratings: function($route, SerieFactory) {
                            return SerieFactory.getSerieContent_ratings($route.current.params.id);
                        },
                        Credits: function($route, SerieFactory) {
                            return SerieFactory.getSerieCredits($route.current.params.id);
                        },
                        External_ids: function($route, SerieFactory) {
                            return SerieFactory.getSerieExternal_ids($route.current.params.id);
                        },
                        Images: function($route, SerieFactory) {
                            return SerieFactory.getSerieImages($route.current.params.id);
                        },
                        Keywords: function($route, SerieFactory) {
                            return SerieFactory.getSerieKeywords($route.current.params.id);
                        },
                        Translations: function($route, SerieFactory) {
                            return SerieFactory.getSerieTranslations($route.current.params.id);
                        },
                        Videos: function($route, SerieFactory) {
                            return SerieFactory.getSerieVideos($route.current.params.id);
                        }
                }})
                .otherwise('/movies');
        });
}());
