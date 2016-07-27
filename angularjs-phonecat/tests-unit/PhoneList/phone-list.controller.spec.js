"use strict";

describe("phoneListModule", function () {

  beforeEach(module("phonecatApp"));

  describe('PhoneListController', function () {
    var _controller;
    var scope = {};

    beforeEach(inject(function ($controller) {
      _controller = $controller("PhoneListController", { $scope: scope });
    }));

    it("should create a `phones` model with 4 phones", inject(function ($controller) {
      expect(_controller.phones.length).toBe(4);
    }));

    it("should set a default value for the `queryOn` model", function () {
      expect(_controller.queryOn).toBe('');
    });

    it("should create a `orderByOptions` model with 2 Items", inject(function ($controller) {
      expect(_controller.orderByOptions.length).toBe(2);
    }));

  });

});

