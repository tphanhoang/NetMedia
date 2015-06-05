(function() {
    'use strict';

    angular.module('netMediaApp').factory('MovieFactory', MovieFactory);

    function MovieFactory(urlConfig, $http, $q) {
        return {
            getMovies: _getMovies,
            getMovie: _getMovie,
            getMovieCredits : _getMovieCredits,
            getMovieAccount_states : _getMovieAccount_states,
            getMovieAlternative_titles : _getMovieAlternative_titles,
            getMovieImages : _getMovieImages,
            getMovieKeywords : _getMovieKeywords,
            getMovieReleases : _getMovieReleases,
            getMovieVideos : _getMovieVideos,
            getMovieTranslations : _getMovieTranslations,
            getMovieSimilar : _getMovieSimilar,
            getMovieReviews : _getMovieReviews,
            getMovieLists : _getMovieLists,
            getMovieChanges : _getMovieChanges,
            getMovieRating : _getMovieRating,
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


        function _getMovies(page) {
            
            var defer = $q.defer();
           
                $http.get("http://api.themoviedb.org/3/movie/popular?api_key=cc9227d0368f24d2cbcd299743b4075c&page="+page).then(function(response) {
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
        
            $http.get("http://api.themoviedb.org/3/movie/"+id+"?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {

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


        function _getMovieCredits(id) {


            var defer = $q.defer();
 $http.get("http://api.themoviedb.org/3/movie/"+id+"/credits?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {

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

        function _getMovieAccount_states(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/account_states?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieAlternative_titles(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/alternative_titles?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieImages(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/images?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieKeywords(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/keywords?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieReleases(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/releases?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieVideos(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/videos?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieTranslations(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/translations?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieSimilar(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/similar?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieReviews(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/reviews?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieLists(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/lists?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieChanges(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/changes?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        function _getMovieRating(id) {


            var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/movie/"+id+"/rating?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
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

        
 function _getMoviesSearch(search){
    var defer = $q.defer();
            $http.get("http://api.themoviedb.org/3/search/movie?api_key=cc9227d0368f24d2cbcd299743b4075c&query="+search).then(function(response) {
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
