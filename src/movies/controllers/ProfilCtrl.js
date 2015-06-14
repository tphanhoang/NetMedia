angular.module('netMediaApp')
  .controller('ProfilCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

  });
