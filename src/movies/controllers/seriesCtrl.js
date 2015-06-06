(function() {  
    'use strict';
    angular.module('netMediaApp')
        .controller('SeriesCtrl', SeriesCtrl)
        .controller('SerieCtrl', SerieCtrl)
        .controller('SeriesSearchCtrl', SeriesSearchCtrl);






    function SerieCtrl($scope, $location, $routeParams, Serie) {

        $scope.serie = Serie;
        $scope.serie.id = $routeParams;
        $scope.back = function() {
            $location.path('/series');
        };

        $scope.embed = "<iframe width='560' height='315' src='http//www.youtube.com/watch?v={{result.key}}'' frameborder='0' allowfullscreen></iframe></li>";
    }
    
    function SeriesCtrl($scope, $location, Series, ListGenreSeries, SerieFactory) {
        $scope.series = Series;
        $scope.listGenre = ListGenreSeries;
        $scope.query = {};
        $scope.changeOrder = function($scope,filter) {
            $scope.query.order = filter;
        }

        $scope.genre = function(value){
            
            if(value!=null){
            SerieFactory.getSeriesGenre(value).then(function(result){
                $scope.series = result;                
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            })}
            else{
                $scope.series = $scope.seriesList;
            }                
        }
        
    	$scope.showSerie = function(id) {
        $location.path('/serie/' + id);
      }

   }

   function SeriesGenreCtrl($scope, $location, $routeParams, ListGenreSeries, Series) {
        $scope.listGenre = ListGenreSeries;
        $scope.series = Series;
        $scope.id = $routeParams;
   }

   function SeriesSearchCtrl($scope, $location, $routeParams, SeriesSearch){
        $scope.series = SeriesSearch;
    }


}());
