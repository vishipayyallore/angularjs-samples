"use strict";

describe("phoneList", function () {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module("phoneList"));

  // Test the controller
  describe("PhoneListController", function () {

    var _controller;

    beforeEach(inject(function ($componentController) {
      _controller = $componentController("phoneList");
    }));

    it("should create a `phones` model with 4 phones", function(){
      expect(_controller.phones.length).toBe(4);
    });

    it("should set a default value for the `orderBy` model", function(){
      expect(_controller.orderBy).toBe('name');
    });

  });

});

