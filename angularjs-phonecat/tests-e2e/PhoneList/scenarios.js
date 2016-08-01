
"use strict";
// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe("Phone Catalog Application", function () {

    describe("phoneList", function () {

        beforeEach(function () {
            browser.get("index.html");
        });

        it("Should filter the phone list as a user types into the search box", function(){
            var phoneList = element.all(by.repeater("phone in vm.phones"));
            var queryOn = element(by.model("vm.queryOn"));

            expect(phoneList.count()).toBe(8);

            queryOn.sendKeys('nexus');
            expect(phoneList.count()).toBe(6);
            
            queryOn.sendKeys('moto');
            expect(phoneList.count()).toBe(4);
        });

        it("should be possible to control phone order via the drop-down menu", function(){
            var queryOn = element(by.model("vm.queryOn"));
            var orderBy = element(by.model("vm.orderBy"));
            var nameOption = orderBy.element(by.css('option[value="name"]'));
            var phoneNameColumn = element.all(by.repeater('phone in vm.phones')).column('phone.name');

            function getNames(){
                return phoneNameColumn.map(function(elem){
                    return elem.getText();
                });
            }    

            queryOn.sendKeys('tablet');

            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'MOTOROLA XOOM\u2122'
            ]);


        });

    });

});