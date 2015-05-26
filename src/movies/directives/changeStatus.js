(function() {
    'use strict';

    angular.module('netMediaApp').directive('changeStatus', function($timeout) {
        function link(scope, element, attrs) {
            scope.updateStatus = function(i) {
                if(angular.element(element.children()[i]).hasClass('disabled')) {
                    return;
                }
                scope.movie.status = parseInt(i);
                var local = JSON.parse(localStorage.getItem('movies'));
                local.forEach(function(el, i) {
                    if(el.id === scope.movie.id) {
                        el.status = scope.movie.status;
                    }
                });
                localStorage.setItem('movies', JSON.stringify(local));
                scope.alert = 'success';
                $timeout(function () {
                    scope.alert = '';
                }, 1500);
            };
        }
        return {
            link: link
        };
    });
}());
