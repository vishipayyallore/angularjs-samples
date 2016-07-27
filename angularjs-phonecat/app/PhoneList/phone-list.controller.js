
(function () {

    "use strict";

    angular.module("phoneList")
        .controller('PhoneListController', ["$scope", PhoneListController]);

    function PhoneListController($scope) {
        var vm = this;

        vm.queryOn = '';
        vm.orderBy = 'age';
        vm.orderByOptions = [
            { id: "name", desc: "Name" },
            { id: "age", desc: "Age" }
        ];

        vm.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.',
                age: 1
            }, {
                name: 'Nexus S2 with Wi-Fi',
                snippet: 'Fast and faster with Nexus S2.',
                age: 2
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.',
                age: 3

            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.',
                age: 4
            }
        ];
    }

})();