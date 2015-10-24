'use strict';

describe('toDos', function(){
		
	var toDos,
			factoryGet,
			factoryPut;

	beforeEach(function() {
		module('myApp');	
	});
	
	beforeEach(inject(function(_toDos_) {
		toDos = _toDos_;
	}));
});
