(function () {
    "use strict";

    angular.module("phonecatApp")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initRouter]);

    function initRouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        
        $stateProvider
            .state(
                "home", {
                    url: "/",
                    templateUrl: "home/home.index.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                }
            )
            .state(
                "phones", {
                    url: "/phones",
                    templateUrl: "PhoneList/phone-index.html",
                    controller: "PhoneListController",
                    controllerAs: "vm"
                }
            )
            .state(
                "phones1", {
                    url: "/phones1",
                    templateUrl: "PhoneList/phone-index1.html",
                    controller: "PhoneListController",
                    controllerAs: "vm"
                }
            );
	}

})();
