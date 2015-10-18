(function(module) {
  'use strict';
  
  function ToDosFactory() {
    var items = [];
      
    return {
       get: function(){
         return items;
       },
       
       put: function(item){
         items.push(item);
       }
    }
  }
  module.factory('ToDosFactory', ToDosFactory);
})(angular.module('myApp'));