(function() {
    'use strict';

    angular.module('netMediaApp').factory('MovieFactory', MovieFactory);

    function MovieFactory(urlConfig, $http, $q) {
        return {
            getMovies: _getMovies,
            getMovie: _getMovie,
            getMoviesSearch : _getMoviesSearch,
            getListGenreMovies : _getListGenreMovies,
            getMoviesGenre : _getMoviesGenre
        };


        
        function _getMoviesGenre(id){

            var defer = $q.defer();
        
            $http.get("http://api.themoviedb.org/3/genre/"+id+"/movies?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {

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

        function _getListGenreMovies() {

            var defer = $q.defer();
                $http.get("http://api.themoviedb.org/3/genre/movie/list?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
                    defer.resolve(response.data);
                    console.log(response.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }


        function _getMovies(category, page) {
            
            var defer = $q.defer();
           
                $http.get("http://api.themoviedb.org/3/movie/"+category+"?api_key=cc9227d0368f24d2cbcd299743b4075c&page="+page).then(function(response) {
                    //localStorage.setItem('heroes', JSON.stringify(heroes.data));
                    defer.resolve(response.data);
                    console.log(response.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }

        function _getMovie(id) {
            // if(localStorage.getItem('movies') !== null) {
            //     var heroes = JSON.parse(localStorage.getItem('movies'));
            //     return _loopMovies(movies, id);
            // }

            var defer = $q.defer();
        
            $http.get("http://api.themoviedb.org/3/movie/"+id+"?api_key=cc9227d0368f24d2cbcd299743b4075c&append_to_response=credits,account_states,alternative_titles,images,keywords,releases,videos,translations,similar,reviews,lists,changes,rating").then(function(response) {

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

     

        
 function _getMoviesSearch(search,page){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/search/movie?api_key=cc9227d0368f24d2cbcd299743b4075c&query="+search+"&page="+page).then(function(response) {
                var movie =  defer.resolve(response.data);
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
