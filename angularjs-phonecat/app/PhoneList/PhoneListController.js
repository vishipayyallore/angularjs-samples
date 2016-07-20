
(function(){

    "use strict";

    angular.module("phonecatApp")
        .controller('PhoneListController', ["$scope", PhoneListController]);

        function PhoneListController($scope){
            var vm = this;

            vm.phones = [
                {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
                }, {
                name: 'Nexus S2',
                snippet: 'Fast just got faster with Nexus S2.'
                },{
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
                }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }

})();