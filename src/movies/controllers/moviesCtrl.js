(function() {  
    'use strict';
    angular.module('netMediaApp')
    .controller('MovieCtrl', MovieCtrl)
    .controller('MoviesCtrl', MoviesCtrl)
    .controller('MoviesGenreCtrl', MoviesGenreCtrl)
    .controller('MoviesSearchCtrl', MoviesSearchCtrl)
    .controller('LoginCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

  });
    

    function MovieCtrl($scope, $location, $routeParams, Movie) {
        
        $scope.movie = Movie;
        $scope.movie.id = $routeParams;
        
        $scope.back = function() {
            $location.path('/movies');
        }
    }

    function MoviesCtrl($scope, $location, Movies, ListGenreMovies, MovieFactory) {
        $scope.listGenre = ListGenreMovies;
        
        $scope.genreList = {};

        $scope.categories = {
            'upcoming':"À venir",
            'now_playing':"En ce moment",
            'top_rated':"Les mieux notés",
            'popular':"Le plus populaire"
            };
        $scope.movies = Movies;
        $scope.moviesDefault = Movies;    
        $scope.query = {};
        $scope.page = 2;
        $scope.movies.more=[];

        $scope.showMoreMovies = function(page){
            // MovieFactory.getMovies($scope.categoryValue,page).then(function(result){
            //     $scope.movies.more[page-2] = result.results;
            // }, function (result){
            //     alert("Erreur : ça a planté ! pas de bras | pas data");
            // });
            // $scope.page ++;
            if($scope.searchTest){
            MovieFactory.getMoviesSearch($scope.SearchTestValue, page).then(function(result){
                $scope.movies.more[page-2] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });

            Movies.page  = page<Movies.total_pages? $scope.page ++ : $scope.page;
            }
            else{

                if($scope.categoryValue!=null){
            MovieFactory.getMovies($scope.categoryValue, page).then(function(result){
                $scope.movies.more[page-2] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });

                }
                else{
            MovieFactory.getMovies('popular', page).then(function(result){
                $scope.movies.more[page-2] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
            }
            Movies.page  = page<Movies.total_pages? $scope.page ++ : $scope.page;
            }
        }
        $scope.search = function(value){
            if(value!='' ){
                MovieFactory.getMoviesSearch(value, page).then(function(result){  
                    $scope.page = 2;                  
                    $scope.movies = result;  
                             
                    $scope.searchTest = true;                    
                    $scope.SearchTestValue = value;                  
                }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })
            }
            else{
                $scope.movies = $scope.moviesDefault;
                $scope.searchTest = false;
                $scope.page = 2;
                $scope.series.more=[];      
            }  
        }
        $scope.genre = function(value){
            if(value!=null){
                MovieFactory.getMoviesGenre(value).then(function(result){
                    $scope.page = 2;
                    $scope.movies = result;
                    $scope.movies.more=[];                                       
                    $scope.searchTest = true;                    
                    $scope.SearchTestValue = value;
                }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })}
            else{
                $scope.movies = $scope.moviesDefault;
                $scope.searchTest = false;
                $scope.page = 2;
                $scope.series.more=[];     
            }                
        }        
        $scope.category = function(category, page){
            if(category!=null){
                MovieFactory.getMovies(category,page).then(function(result){
                    $scope.categoryValue = category;
                    $scope.page = 2;
                    $scope.movies = result;
                    
                    $scope.movies.more=[];   
                }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })}
            else{
                $scope.movies = $scope.moviesDefault;
            }                
        }        

        $scope.changeOrder = function(filter){
            $scope.query.order = filter;
        }
        $scope.showMovie = function(id){
            $location.path('/movie/' + id);
        }

        ListGenreMovies.genres.forEach(function(y){
            $scope.genreList[y.id]=y.name
        });
    }   
   
   function MoviesGenreCtrl($scope, $location, $routeParams, ListGenreMovies, Movies) {
        $scope.movies = Movies;
        $scope.listGenre = ListGenreMovies;
        $scope.id = $routeParams;
    }

   function MoviesSearchCtrl($scope, $location, $routeParams, MoviesSearch){
        $scope.movies = MoviesSearch;
    }


}());
