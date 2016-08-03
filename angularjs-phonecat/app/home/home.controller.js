(function() {
    "use strict";
    
    angular
        .module("phonecatApp.home")
        .controller("HomeController", HomeController);

    function HomeController() {
        var vm = this;
        alert('Home Controller'); 

        activate();

        function activate() {
            alert('Hi Man!');
        }
    }

})();