(function(){
    "use strict";

    angular.module("phoneList")
        .component("phoneList", {
            templateUrl: 'PhoneList/phone-list.template.html',
            controller: 'PhoneListController',
            controllerAs: 'vm'
        });
})();