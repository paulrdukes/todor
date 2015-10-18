'use strict';

describe('ToDosFactory', function(){
		
	var expect = chai.expect,
		ToDosFactory;

	beforeEach(angular.mock.module('myApp'));
	
	beforeEach(inject(function(_ToDosFactory_) {
		ToDosFactory = _ToDosFactory_;
	}));
	
	if('should have get function') {
		expect(angular.isFunction(ToDosFactory.get)).to.be(true);
	}
});
