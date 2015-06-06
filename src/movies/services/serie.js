(function() {
    'use strict';

    angular.module('netMediaApp').factory('SerieFactory', SerieFactory);

	function SerieFactory(urlConfig, $http, $q) {
        return {
            getSeries: _getSeries,
            getSerie: _getSerie,
            getSerieSimilar : _getSerieSimilar,
            getSerieAlternative_titles : _getSerieAlternative_titles,
            getSerieChanges : _getSerieChanges,
            getSerieContent_ratings : _getSerieContent_ratings,
            getSerieCredits : _getSerieCredits,
            getSerieExternal_ids : _getSerieExternal_ids,
            getSerieImages : _getSerieImages,
            getSerieKeywords : _getSerieKeywords,
            getSerieTranslations : _getSerieTranslations,
            getSerieVideos : _getSerieVideos,
            getSeriesSearch : _getSeriesSearch,
            getSeriesGenre : _getSeriesGenre,
            getListGenreSeries : _getListGenreSeries
        };
 
    function _getSeriesGenre(id){

            var defer = $q.defer();
        
            $http.get("http://api.themoviedb.org/3/genre/"+id+"/tv?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {

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

    function _getSerie(id){
            // if(localStorage.getItem('movies') !== null) {
            //     var heroes = JSON.parse(localStorage.getItem('movies'));
            //     return _loopMovies(movies, id);
            // }

            var defer = $q.defer();
        
            $http.get("http://api.themoviedb.org/3/tv/"+id+"?api_key=cc9227d0368f24d2cbcd299743b4075c&append_to_response=account_states,alternative_titles,changes,content_ratings,credits,external_ids,images,keywords,rating,similar,translations,videos").then(function(response) {

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

       
        function _getListGenreSeries(){

            var defer = $q.defer();
                $http.get("http://api.themoviedb.org/3/genre/tv/list?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
                    defer.resolve(response.data);
                    console.log(response.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }



     function _getSerieSimilar(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/similar?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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



        

 function _getSerieAlternative_titles(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/alternative_titles?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieChanges(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/changes?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieContent_ratings(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/content_ratings?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieCredits(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/credits?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieExternal_ids(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/external_ids?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieImages(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/images?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieKeywords(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/keywords?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieRating(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/rating?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        



 function _getSerieTranslations(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/translations?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        

 function _getSerieVideos(id){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/tv/"+id+"/videos?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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


 function _getSeriesSearch(search){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/search/tv?api_key=cc9227d0368f24d2cbcd299743b4075c&query="+search).then(function(response) {
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