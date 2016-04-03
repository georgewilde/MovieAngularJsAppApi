angular.module("moviesApp").controller("MovieEditController", [
    "$scope", "$routeParams", "$location", "Movie", function($scope, $routeParams, $location, Movie) {
        $scope.movie = Movie.get({ id: $routeParams.id });
        $scope.edit = function() {
            $scope.movie.$save(function() {
                $location.path("/");
            });
        };
    }
]);