(function () {
    "use strict";

    angular
        .module("phoneCatApp")
        .controller("ClientController", ["$http", ClientController]); 


    function ClientController($http) {
        var vm = this;
        //Variables.
        vm.isBusy = true;
        vm.errorMessage = "";
        vm.newClient = {};
        vm.clients = [{
            id: 1,
            name: "Shiva Sai",
            activeSince: "01-Jun-2013",
            clientType: "Company",
            currentStatus: "Pending Fees"
        }, {
            id: 2,
            name: "Azim",
            activeSince: "01-Jun-2013",
            clientType: "Partner Ship",
            currentStatus: "Pending"
        }, {
            id: 3,
            name: "Mathew",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending"
        }, {
            id: 4,
            name: "Ajay",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Visit"
        }, {
            id: 5,
            name: "Farzeen",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Submission"
        }, {
            id: 6,
            name: "Hafeez",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Submission"
        }, {
            id: 7,
            name: "Manish",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Submission"
        }];
        var url = "/api/clients";

        vm.addNewClient = function () {
            //alert(vm.newClient.fileNumber);
            $http.post(url, vm.newClient)
                .then(function(response) {
                    // success
                    vm.newClient = {};
                }, function(err) {
                    // failure
                    vm.errorMessage = "Failed to add new Client";
                    alert(vm.errorMessage + ' : ' + err.message);
                })
                .finally(function() {
                    vm.isBusy = false;
                });
        }

        activate();

        function activate() { }

        
    }

})();