
describe("phoneList", function() {

    "use strict";

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module("phoneList"));

  // Test the controller
  describe("PhoneListController", function() {

    it("should create a `phones` model with 4 phones", inject(function($componentController) {
      var ctrl = $componentController("phoneList");

      expect(ctrl.phones.length).toBe(4);
    }));

  });

});

