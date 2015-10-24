(function(module) {
  'use strict';
  
  module.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
  
    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'ToDoController as toDosCtrl'
    })
  
    // Each tab has its own nav history stack:
  
    .state('tab.toDo', {
      url: '/to-do',
      views: {
        'tab-to-do': {
          templateUrl: 'modules/todo/todo.html'
        }
      }
    })
  
    .state('tab.done', {
        url: '/done',
        views: {
          'tab-done': {
            templateUrl: 'modules/todo/done.html'
          }
        }
      })
  
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          // controller: 'AccountController as ctrl'
        }
      }
    });
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/to-do');
    
  });
})(angular.module('myApp'));