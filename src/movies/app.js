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
                            return MovieFactory.getMovies('popular',1);
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
                            return SerieFactory.getSeries('popular',1);
                        }
                    }
                })

                .when('/movie/:id', {
                    templateUrl: 'src/movies/views/movie.html',
                    controller: 'MovieCtrl',
                    resolve: {
                        Movie: function($route, MovieFactory) {
                            return MovieFactory.getMovie($route.current.params.id);
                        },
                        ListGenreMovies: function(MovieFactory) {
                            return MovieFactory.getListGenreMovies();
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
                        }
                    }
                })
                .when('/serie/:id/:season_id', {
                    templateUrl: 'src/movies/views/season.html',
                    controller: 'SerieSeasonCtrl',
                    resolve: {
                        SerieSeason: function($route, SerieFactory) {
                            return SerieFactory.getSerieSeason($route.current.params.id, $route.current.params.season_id);
                        }
                    }
                })
                .when('/serie/:id/:season_id/:episode_id', {
                    templateUrl: 'src/movies/views/episode.html',
                    controller: 'SerieEpisodeCtrl',
                    resolve: {
                        SerieEpisode: function($route, SerieFactory) {
                            return SerieFactory.getSerieEpisode($route.current.params.id, $route.current.params.season_id,$route.current.params.episode_id);
                        }
                    }
                })
                .otherwise('/movies');
        });
}());
