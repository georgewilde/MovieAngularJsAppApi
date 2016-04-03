angular.module("moviesApp").controller("MovieAddController", [
    "$scope", "$location", "Movie", function($scope, $location, Movie) {
        $scope.movie = new Movie();

        /**
         * Add a movie.
         * 
         * @returns void
         */
        $scope.add = function() {
            $scope.movie.$save(function() {
                $location.path("/");
            });
        };
    }
]);