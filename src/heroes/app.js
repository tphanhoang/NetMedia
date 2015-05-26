/**
 * Created by Pebie on 28/04/15.
 */
(function() {
    'use strict';
    angular.module('netMediaApp', ['ngRoute']).config(function ($routeProvider) {

            $routeProvider
                .when('/heroes', {
                    templateUrl: 'src/heroes/views/heroes.html',
                    controller: 'HeroesCtrl',
                    resolve: {
                        Heroes: function(HeroFactory) {
                            return HeroFactory.getHeroes();
                        }
                    }
                })
                .when('/hero/:id', {
                    templateUrl: 'src/heroes/views/hero.html',
                    controller: 'HeroCtrl',
                    resolve: {
                        Hero: function($route, HeroFactory) {
                            return HeroFactory.getHero($route.current.params.id);
                        }
                    }
                })
                .otherwise('/heroes');
        });
}());
