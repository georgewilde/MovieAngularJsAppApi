angular.module("moviesApp").controller('MovieListController', [
    "$scope", "Movie", function ($scope, Movie) {
        $scope.movies = Movie.query();
    }
]);