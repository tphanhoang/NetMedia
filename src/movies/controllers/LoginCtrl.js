angular.module('netMediaApp')
  .controller('loginCtrl', function($http, $scope, $auth) {

    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

    $scope.languages =
    [
     {name:"1"},
     {name:"2"},
     {name:"3"},
     {name:"4"},
     {name:"5"},
    ];
    $scope.save = function() {

      $http.post('/netmedia/src/movies/controllers/test.php', $scope.languages).then(function(data) {
          $scope.msg = 'Data saved';
        });
      $scope.msg = 'Data sent: '+ angular.toJson($scope.languages);

    };

  })




  .controller('ProfilCtrl', function($scope, $http) {
            $http.get('/netmedia/src/movies/controllers/test.json').then(function(data){
       console.log(data)
        });


});
