angular.module('netMediaApp')
  .controller('loginCtrl', function($http, $scope, $auth, $window, $location) {

    $scope.master = {};

    $scope.signUp = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/signUp.php', data)
    };

    $scope.login = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/login.php', data).then(function(results) { 
        if (results.data.status == "success"){
         $location.path('/profil'); 
        }
        if (results.data.status == "error"){
        alert('Vos informations de connexions sont erronées !')  
        }
    })};

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
