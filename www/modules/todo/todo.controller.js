(function(module){
  'use strict';
  
  function ToDoController($scope, ToDosFactory) {
    
    $scope.toDosFactory = ToDosFactory;
    $scope.items = $scope.toDosFactory.get();
      
    $scope.addItem = function(newToDo){
        $scope.toDosFactory.put({
          content: newToDo,
          complete: false
        });
      }
    
     $scope.completeItem = function($index) {       
       $index.complete = true;
     }
    
     $scope.removeItem = function($index) {
       $scope.items.splice($index, 1);
     }
  }
  
  module.controller('ToDoController', ToDoController);  
})(angular.module('myApp'));
