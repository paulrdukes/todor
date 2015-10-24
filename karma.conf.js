'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/modules/**/*.module.js',
      'www/modules/**/!(*.tests).js',
      'www/modules/**/*.tests.js'
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
