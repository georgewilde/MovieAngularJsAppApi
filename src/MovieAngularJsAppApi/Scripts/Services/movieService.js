angular.module("moviesApp").factory("Movie", [
    "$resource", function($resource) {
        return $resource("/api/movie/:id");
    }
]);