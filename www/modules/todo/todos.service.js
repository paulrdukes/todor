(function(module) {
  'use strict';
  
  function ToDosFactory() {
      
    return {
       get: function(){
         return items;
       },
       
       put: function(item){
         items.push(item);
       }
    }
  }
  module.factory('toDos', ToDosFactory);
})(angular.module('myApp'));