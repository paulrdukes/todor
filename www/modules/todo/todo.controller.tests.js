'use strict';

describe('ToDoController', function() {
	var scope,	
		ToDosFactory,
		items = [],
		newToDo = 'item1',
		expect = chai.expect;
		
	//load the controller's module
	beforeEach(module('myApp'));
	
	beforeEach(module(function($provide){
		ToDosFactory = {
			get: function() {
				return items
			},
			put: function(item) {
				items.push(item);
			}
		};
		$provide.value('ToDosFactory', ToDosFactory);
	}));
	
	beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('ToDoController', {
			$scope: scope,
			ToDosFactory: ToDosFactory
		});
    }));
	
	it('adds item to the items array', function() {
		scope.addItem();
		items.should.have.length(1);
	});

	it('sets items in items array to complete', function() {
		var item = items[0];	
		scope.completeItem(item);
		expect(items[0].complete).to.equal(true);
	});
	
	
	
	it('removes items from items array', function() {						
		scope.removeItem();
		items.should.have.length(0);
	});
	
});