(function() {
    'use strict';

    angular.module('netMediaApp').factory('SerieFactory', SerieFactory);

	function SerieFactory(urlConfig, $http, $q) {
        return {
            getSeries: _getSeries,
            getSerie: _getSerie,
            getSerieSeason: _getSerieSeason,
            getSerieEpisode: _getSerieEpisode,
            getSeriesSearch : _getSeriesSearch
        };
 
    function _getSeries() {
        var defer = $q.defer();
        $http.get("http://api.themoviedb.org/3/tv/popular?api_key=cc9227d0368f24d2cbcd299743b4075c").then(function(response) {
            defer.resolve(response.data);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    }

    function _getSerie(id){
        var defer = $q.defer();
        $http.get("http://api.themoviedb.org/3/tv/"+id+"?api_key=cc9227d0368f24d2cbcd299743b4075c&append_to_response=account_states,alternative_titles,changes,content_ratings,credits,external_ids,images,keywords,rating,similar,translations,videos").then(function(response) {
            defer.resolve(response.data);
        }, function(err) {
            defer.reject(err);
        });            
        return defer.promise;
    } 

    function _getSerieSeason(id, season_id){
        var defer = $q.defer();
        $http.get("http://api.themoviedb.org/3/tv/"+id+"/season/"+season_id+"?api_key=cc9227d0368f24d2cbcd299743b4075c&append_to_response=account_states,changes,credits,external_ids,images,videos").then(function(response) {
            defer.resolve(response.data);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    } 

    function _getSerieEpisode(id, season_id, episode_id){
        var defer = $q.defer();
        $http.get("http://api.themoviedb.org/3/tv/"+id+"/season/"+season_id+"/episode/"+episode_id+"?api_key=cc9227d0368f24d2cbcd299743b4075c&append_to_response=account_states,changes,credits,external_ids,images,rating,videos").then(function(response) {
                defer.resolve(response.data);
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