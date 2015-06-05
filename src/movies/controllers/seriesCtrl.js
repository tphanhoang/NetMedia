(function() {  
    'use strict';
    angular.module('netMediaApp')
        .controller('SeriesCtrl', SeriesCtrl)
        .controller('SerieCtrl', SeriesCtrl)
        .controller('SeriesSearchCtrl', SeriesSearchCtrl);






    function SerieCtrl($scope, $location, $routeParams, Serie, Similar, Alternative_titles, Changes, Content_ratings, Credits, External_ids, Images, Keywords, Translations, Videos) {

        $scope.serie = Serie;
        $scope.serie.id = $routeParams;
        $scope.similar = Similar;
        $scope.alternative_titles = Alternative_titles;
        $scope.changes = Changes;
        $scope.content_ratings = Content_ratings;
        $scope.credits = Credits;
        $scope.external_ids = External_ids;
        $scope.images = Images;
        $scope.keywords = Keywords;
        $scope.translations = Translations;
        $scope.videos = Videos;
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
S
   function SeriesGenreCtrl($scope, $location, $routeParams, ListGenreSeries, Series) {
        $scope.listGenre = ListGenreSeries;
        $scope.series = Series;
        $scope.id = $routeParams;
   }

   function SeriesSearchCtrl($scope, $location, $routeParams, SeriesSearch){
        $scope.series = SeriesSearch;
    }


}());
