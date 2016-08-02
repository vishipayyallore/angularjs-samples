
(function () {

    "use strict";

    angular.module("phoneList")
        .controller('PhoneListController', ["$scope", "$http", PhoneListController]);

    function PhoneListController($scope, $http) {
        var vm = this;
        var phonesUrl = 'data/phones.json';
        
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