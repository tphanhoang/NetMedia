angular.module('netMediaApp')
  .controller('loginCtrl', function($http, $scope, $auth, $window, $location, $localStorage) {

    $scope.master = {};

    $scope.signUp = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/signUp.php', data).then(function(results) { 
        

        alert('Vous pouvez dés à présent vous connecter');




    })
      
    };

    $scope.login = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/login.php', data).then(function(results) { 
        if (results.data.status == "success"){
        // $localStorage.user = user;
        $localStorage.user = results.data.user;
         $location.path('/profil'); 
        }
        if (results.data.status == "error"){
        alert('Vos informations de connexions sont erronées !')  
        }
    })
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
      // $scope.msg = 'Data sent: '+ angular.toJson($scope.languages);

    };

  })




  .controller('ProfilCtrl', function($scope, $http, $localStorage) {
         $scope.user = {
            'name' : $localStorage.user[2],
            'id' : $localStorage.user[0],
            'email' : $localStorage.user[1],
            'birthday' : $localStorage.user[3],
            'gender' : $localStorage.user[4],
          };


});
