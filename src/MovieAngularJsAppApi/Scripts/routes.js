angular.module("moviesApp").config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/Views/list.html",
                controller: "MovieListController"
            })
            .when("/movie/add", {
                templateUrl: "/Views/add.html",
                controller: "MovieAddController"
            })
            .when("/movie/edit/:id", {
                templateUrl: "/Views/edit.html",
                controller: "MovieEditController"
            })
            .when("/movie/delete/:id", {
                templateUrl: "/Views/delete.html",
                controller: "MovieDeleteController"
            });

        $locationProvider.html5Mode(true);
    }
])