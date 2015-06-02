 angular.module('netMediaApp', [])
    .controller('SizeLimit', ['$scope', function($scope) {
      $scope.letterLimit = 3;
    }]);