(function(module){
  'use strict';
  
  function ToDoController($scope, toDos) {
    this.toDos = toDos;
  }
  
  module.controller('ToDoController', ToDoController);  
})(angular.module('myApp'));
