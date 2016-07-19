
(function(){

    "use strict";

    angular.module("phonecatApp")
        .controller('PhoneListController', ["$scope", PhoneListController]);

        function PhoneListController($scope){
            var vm = this;

            $scope.phones = [
                {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
                }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
                }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }

})();