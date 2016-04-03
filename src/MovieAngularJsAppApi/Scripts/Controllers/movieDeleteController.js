angular.module("moviesApp").controller("MovieDeleteController", [
    "$scope", "$routeParams", "$location", "Movie", function($scope, $routeParams, $location, Movie) {
        $scope.movie = Movie.get({ id: $routeParams.id });

        $scope.remove = function() {
            $scope.movie.$remove({ id: $scope.movie.Id }, function() {
                $location.path("/");
            });
        };
    }
]);