(function() {
    'use strict';
    angular.module('netMediaApp',['ngRoute','ngStorage']).config(function ($routeProvider) {
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
                .when('/login', {
                    templateUrl: 'src/movies/views/login.html',
                    controller: 'LoginCtrl'

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
                .when('/profil', {
                    templateUrl: 'src/movies/views/profil.html',
                    controller:'ProfilCtrl'
                })
                .when('/player', {
                    templateUrl: 'src/movies/views/player.html',
                    controller:'PlayerCtrl'
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
                .when('/serie/:id', {
                    templateUrl: 'src/movies/views/serie.html',
                    controller: 'SerieCtrl',
                    resolve: {
                        Serie: function($route, SerieFactory) {
                            return SerieFactory.getSerie($route.current.params.id);
                        },
                        SerieSeason : function($route, SerieFactory){
                            return SerieFactory.getSerieSeason($route.current.params.id,1);
                        }
                    }
                })
                .otherwise('/movies');
        });
}());
