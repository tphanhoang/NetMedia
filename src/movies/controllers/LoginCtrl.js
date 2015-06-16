angular.module('netMediaApp')
  .controller('LoginCtrl', function($http, $scope, $window, $location, $localStorage) {

    $scope.signUp = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/signUp.php', data).then(  function(results) {       
        alert('Vous pouvez dés à présent vous connecter');
        })      

    };

    $scope.login = function(user) {
      data =JSON.stringify(user);
      $http.post('/netmedia/scripts/login.php', data).then(function(results) { 
          if (results.data.status == "success"){        
            $localStorage.user = results.data.user;
            $location.path('/profil'); 
          }
          if (results.data.status == "error"){
            alert('Vos informations de connexions sont erronées !')  
          }
      })
    };
    })
  .controller('ProfilCtrl', function($scope, $http, $localStorage, MovieFactory, SerieFactory) {
         $scope.user = ($scope.user == null)? '' :{
            'name' : $localStorage.user[2],
            'id' : $localStorage.user[0],
            'email' : $localStorage.user[1],
            'birthday' : $localStorage.user[3],
            'gender' : $localStorage.user[4],
          };

          $scope.favorisserie = $localStorage.favorisserie;
          $scope.favorismovie = $localStorage.favorismovie;

          $scope.movies = [];
          $scope.series = [];

          $scope.favorismovie.forEach(function(y){
              MovieFactory.getMovie(y).then(function(result){
                $scope.movies[y] = result ;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
          });


          if($scope.favorisserie != null){
          $scope.favorisserie.forEach(function(y){
              SerieFactory.getSerie(y).then(function(result){
                $scope.series[y] = result ;
            }, function (result){
                alert("Erreur : ça a planté ! pas de bras | pas data");
            });
          })}



});
