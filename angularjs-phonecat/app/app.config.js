
(function () {
    
    "use strict";

    angular.module("phonecatApp")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initRouter]);


    function initRouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state( "home", {
                url: "/",
                templateUrl: "app/home/index.html",
                controller: "HomeController",
                controllerAs: "vm"
            });
	}

})();
