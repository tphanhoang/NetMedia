(function() {  
    'use strict';
    angular.module('netMediaApp')
        .controller('SeriesCtrl', SeriesCtrl)
        .controller('SerieCtrl', SerieCtrl)
        .controller('SerieSeasonCtrl', SerieSeasonCtrl)
        .controller('SerieEpisodeCtrl', SerieEpisodeCtrl)
        .controller('SeriesSearchCtrl', SeriesSearchCtrl);


    function SerieCtrl($scope, $location, $routeParams, Serie, SerieSeason, SerieFactory, $localStorage) {

        $scope.serie = Serie;
        $scope.serie_id = $routeParams.id;
        $scope.serieSeason = SerieSeason;
        $scope.serieSeason.season_number = 1;
        $scope.serieEpisode = 't';


        $scope.user = ($localStorage.user==null)? '':{
            'name' : $localStorage.user[2],
            'id' : $localStorage.user[0],
            'email' : $localStorage.user[1],
            'birthday' : $localStorage.user[3],
            'gender' : $localStorage.user[4],
          };
        
        $scope.addFavoris = function(id){
            $localStorage.favorisserie = ($localStorage.favorisserie == null)? [] : $localStorage.favorisserie;
            $localStorage.favorisserie.push(id);
        } ;
        
        $scope.back = function() {
            $location.path('/series');
        };
        $scope.showSeason = function(season_id){
            SerieFactory.getSerieSeason($routeParams.id, season_id).then(function(result){
                $scope.serieSeason = result;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });


            // $location.path('/serie/'+id+'/'+season_id);
        };
        $scope.showEpisode = function(season_id, episode_id){
            SerieFactory.getSerieEpisode($routeParams.id, season_id, episode_id).then(function(result){
                $scope.serieEpisode = result;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
        }
    }

    function SerieSeasonCtrl($scope, $location, $routeParams, SerieSeason) {

        $scope.serieSeason = SerieSeason;
        $scope.serie_id = $routeParams.id;
        $scope.season_id = $routeParams.season_id;

        $scope.showEpisode = function(id, season_id, episode_id){
            $location.path('/serie/'+id+'/'+season_id+'/'+episode_id);
        }
        $scope.back = function() {
            $location.path('/serie/'+$routeParams.id);
        }
    }

    function SerieEpisodeCtrl($scope, $location, $routeParams, SerieEpisode) {

        $scope.serieEpisode = SerieEpisode;
        $scope.serie_id = $routeParams.id;
        $scope.season_id = $routeParams.season_id;

        $scope.back = function() {
            $location.path('/serie/'+$routeParams.id+'/'+$routeParams.season_id);
        };
        $scope.backSerie = function() {
            $location.path('/serie/'+$routeParams.id);
        };
    }
    
    function SeriesCtrl($scope, $location, Series, SerieFactory, $localStorage) {

        $scope.series = Series;
        $scope.seriesDefault = Series;
        $scope.query = {};
        $scope.series.more=[];
        $scope.page = 2;
        $scope.categories = {
            'on_the_air':"En ce moment",
            'airing_today':"Diffusé aujourd'hui",
            'top_rated':"Les mieux notés",
            'popular':"Les plus populaires"
            };

        
        $scope.addFavoris = function(id){
            $localStorage.favorisserie = ($localStorage.favorisserie == null)? [] : $localStorage.favorisserie;
            $localStorage.favorisserie.push(id);
        } ;


        $scope.user = ($localStorage.user==null)? '':{
            'name' : $localStorage.user[2],
            'id' : $localStorage.user[0],
            'email' : $localStorage.user[1],
            'birthday' : $localStorage.user[3],
            'gender' : $localStorage.user[4],
          };

        $scope.changeOrder = function($scope,filter) {
            $scope.query.order = filter;
        }
    	$scope.showSerie = function(id) {
            $location.path('/serie/' + id);
        }
        $scope.search = function(value,page){
            if(value!='' ){
                SerieFactory.getSeriesSearch(value,page).then(function(result){ 
                    $scope.page = 2;
                    $scope.series = result;
                    $scope.series.more=[];                                       
                    $scope.searchTest = true;                    
                    $scope.SearchTestValue = value;
                }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })
            }
            else{            
                $scope.series = $scope.seriesDefault;
                $scope.searchTest = false;
                $scope.page = 2;
                $scope.series.more=[];      
            }  
        }
        $scope.category = function(category, page){
            if(category!=null){
                SerieFactory.getSeries(category,page).then(function(result){
                    $scope.categoryValue = category;
                    $scope.page = 2;
                    $scope.series = result;
                    $categoryTest = true;
                    
                    $scope.series.more=[];   
                }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })}
            else{
                $scope.series = $scope.seriesDefault;
            }                
        }        
        $scope.showMoreSeries = function(page){
            if($scope.searchTest || $scope.categoryTest){
                
            SerieFactory.getSeriesSearch($scope.SearchTestValue, page).then(function(result){
                $scope.series.more[page-1] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });

            Series.page  = page<Series.total_pages? $scope.page ++ : $scope.page;
            }
            else{

                if($scope.categoryValue!=null){
            SerieFactory.getSeries($scope.categoryValue, page).then(function(result){
                $scope.series.more[page-1] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });

                }
                else{
            SerieFactory.getSeries('popular', page).then(function(result){
                $scope.series.more[page-1] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
            }
            Series.page  = page<Series.total_pages? $scope.page ++ : $scope.page;
            }
        }


    }

    function SeriesSearchCtrl($scope, $location, $routeParams, SeriesSearch){
        $scope.series = SeriesSearch;
    }


}());
