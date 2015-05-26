(function() {
    'use strict';

    angular.module('netMediaApp').factory('MovieFactory', MovieFactory);

    function MovieFactory(urlConfig, $http, $q) {
        return {
            getMovies: _getMovies,
            getMovie: _getMovie
        };

        function _getMovies() {
            //if(localStorage.getItem('heroes') !== null) {
               // return JSON.parse(localStorage.getItem('heroes'));
            //}

            var defer = $q.defer();
            // $http.get(urlConfig.HEROES).then(function(heroes) {
                $http.get("http://api.themoviedb.org/3/movie/popular?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
                    //localStorage.setItem('heroes', JSON.stringify(heroes.data));
                    defer.resolve(response.data);
                    console.log(response.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }

        function _getMovie(id) {
            if(localStorage.getItem('movies') !== null) {
                var heroes = JSON.parse(localStorage.getItem('movies'));
                return _loopMovies(movies, id);
            }

            var defer = $q.defer();
            $http.get(urlConfig.MOVIES).then(function(movies) {
                localStorage.setItem('movies', JSON.stringify(movies.data));
                var movie = _loopMovies(movies.data, id);
                if(movie !== false) {
                    defer.resolve(movie);
                } else {
                    defer.reject('Expected Movie does not exists!');
                }
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }

        function _loopMovies(movies, id) {
            var result = false;

            movies.forEach(function(movie) {
                if(movie.id === parseInt(id)) {
                    result = movie;
                }
            });

            return result;
        }
    }
}());
