(function(){
    "use strict";

    angular.module("phonecatApp")
        .component("phoneList", {
            templateUrl: 'PhoneList/phone-list.template.html',
            controller: 'PhoneListController',
            controllerAs: 'vm'
        });
})();