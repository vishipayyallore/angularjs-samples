
(function () {

    "use strict";

    angular.module("phonecatApp.phoneList")
        .controller('PhoneListController', ["$scope", "$http", PhoneListController]);

    function PhoneListController($scope, $http) {
        var vm = this;
        var phonesUrl = 'datastore/phones.json';
        
        vm.queryOn = '';
        vm.orderByOptions = [ { id: "name", desc: "Name" }, { id: "age", desc: "Age" } ];
        vm.orderBy = vm.orderByOptions[0].id;
        vm.phones = [];

        $http.get(phonesUrl)
            .then(function(response){
                vm.phones = response.data;
            });
    }

})();