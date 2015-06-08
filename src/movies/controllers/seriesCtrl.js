(function() {  
    'use strict';
    angular.module('netMediaApp')
        .controller('SeriesCtrl', SeriesCtrl)
        .controller('SerieCtrl', SerieCtrl)
        .controller('SerieSeasonCtrl', SerieSeasonCtrl)
        .controller('SerieEpisodeCtrl', SerieEpisodeCtrl)
        .controller('SeriesSearchCtrl', SeriesSearchCtrl);


    function SerieCtrl($scope, $location, $routeParams, Serie) {

        $scope.serie = Serie;
        $scope.serie_id = $routeParams.id;

        $scope.back = function() {
            $location.path('/series');
        }
        $scope.showSeason = function(id, season_id){
            $location.path('/serie/'+id+'/'+season_id);
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
    
    function SeriesCtrl($scope, $location, Series, SerieFactory) {

        $scope.series = Series;
        $scope.seriesDefault = Series;
        $scope.query = {};
        $scope.series.more=[];
        $scope.page = 2;

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
        $scope.showMoreSeries = function(page){
            if($scope.searchTest){

                SerieFactory.getSeriesSearch($scope.SearchTestValue, page).then(function(result){
                    $scope.series.more[page-1] = result.results;
                }, function (result){
                    alert("Erreur : ça a planté ! pas de bras | pas data");
                });

                Series.page  = page<Series.total_pages? $scope.page ++ : $scope.page;
            }
            else{
            SerieFactory.getSeries(page).then(function(result){
                $scope.series.more[page-1] = result.results;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });

            Series.page  = page<Series.total_pages? $scope.page ++ : $scope.page;
            }
        }


    }

    function SeriesSearchCtrl($scope, $location, $routeParams, SeriesSearch){
        $scope.series = SeriesSearch;
    }


}());
