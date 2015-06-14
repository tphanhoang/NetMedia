angular.module('netMediaApp')
 .controller('LoginCtrl', function($scope, $auth) {

   $scope.authenticate = function(provider) {
     $auth.authenticate(provider);
   };

 })
 .controller('profilCtrl', function($scope, $http) {
 //           $http.get('/src/movies/controllers/test.json').then(function(data){
  //     console.log(data)
  //     });
 // $http.get('/src/movies/controllers/test.json').then(function(data) {
 //   $scope.languages = data;
 //   console.log($scope.languages)
 // });
 //inputting json directly for this example
 $scope.languages = [
   {name:"1"},
   {name:"2"},
   {name:"3"},
   {name:"4"},
   {name:"5"},
 ];
 $scope.save = function() {
   var data = angular.toJson($scope.languages);

   $http.post('/src/movies/controllers/test.json', data).then(function(data) {
       $scope.msg = 'Data saved';
    });
   $scope.msg = 'Data sent: '+ angular.toJson($scope.languages);
 //  console.log(data)
 };

});
