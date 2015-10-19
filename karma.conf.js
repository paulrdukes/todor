'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/modules/app.js',  
      'www/modules/todo/*.js',
      // factory test is broken 'www/modules/*tests.js',
      'www/modules/todo/**/*tests.js'
    ],

    reporters: ['mocha'],
    
    mochaReporter: {
      output: 'full'
    },

    port: 9876,
    
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS']
  })
}
