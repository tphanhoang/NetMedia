angular.module("avengersApp").filter("capitalize", function () {
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
});;angular.module("netMediaApp").controller("HeaderCtrl", function ($scope, $filter, $routeParams) {

    $scope.currentDate = new Date().getTime();

    $scope.model = {
        title: "Mon application avengers !"
    };

    $scope.getTitle = function () {
        return $filter('capitalize')("Date");
    };

    $scope.$on('$routeChangeSuccess', function () {
        if ($routeParams.id) {
            $scope.model.title = "Vous êtes sur la page du film n° " + $routeParams.id;
        } else {
            $scope.model.title = "NetMedia !";
        }
    });
});