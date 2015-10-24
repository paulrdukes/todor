(function(module){
 
  function ToDoController($scope, toDos) {
    this.toDos = toDos;
  }

  module.controller('ToDoController', ToDoController);  
})(angular.module('myApp'));
