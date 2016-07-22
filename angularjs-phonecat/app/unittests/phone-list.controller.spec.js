

describe('PhoneListController', function() {
  
  'use strict';

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});
    
    expect(ctrl.phones.length).toBe(4);
  }));

});
