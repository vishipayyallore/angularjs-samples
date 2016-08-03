
(function () {
    "use strict";

    angular.module("phonecatApp")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initRouter]);

    function initRouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        alert('Home');
        
        $stateProvider
            .state(
                "home", {
                    url: "/",
                    templateUrl: "app/home/home.index.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                }
            )
            .state(
                "phones", {
                    url: "/phones",
                    templateUrl: "app/PhoneList/phone-index.html",
                    controller: "PhoneListController",
                    controllerAs: "vm"
                }
            );
	}

})();
