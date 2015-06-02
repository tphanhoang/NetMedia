(function() {
    'use strict';

    angular.module('netMediaApp').factory('SerieFactory', SerieFactory);

	function SerieFactory(urlConfig, $http, $q) {
        return {
            getSeries: _getSeries,
            getSerie: _getSerie
        };

    function _getSeries() {
            //if(localStorage.getItem('heroes') !== null) {
               // return JSON.parse(localStorage.getItem('heroes'));
            //}

            var defer = $q.defer();
            // $http.get(urlConfig.HEROES).then(function(heroes) {
                $http.get("http://api.themoviedb.org/3/tv/popular?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
                    //localStorage.setItem('heroes', JSON.stringify(heroes.data));
                    defer.resolve(response.data);
                    console.log(response.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }

    function _getSerie(id) {
            // if(localStorage.getItem('movies') !== null) {
            //     var heroes = JSON.parse(localStorage.getItem('movies'));
            //     return _loopMovies(movies, id);
            // }

            var defer = $q.defer();
        
            $http.get("http://api.themoviedb.org/3/tv/"+id+"?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {

                var movie = defer.resolve(response.data);
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
    }
}());