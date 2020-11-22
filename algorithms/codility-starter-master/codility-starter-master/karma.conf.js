// Karma configuration
// Generated on Mon Apr 01 2019 18:30:30 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify', 'source-map-support'],

    client: {
      jasmine: {
        random: false
      }
    },

    // list of files / patterns to load in the browser
    files: [{ pattern: '**/*.test.*' }],

    // list of files / patterns to exclude
    exclude: ['node_modules/**/*.test.*'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.test.*': ['browserify']
    },

    browserify: {
      debug: true // include inline source maps
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    reporters: ['spec'],
    specReporter: {
      // maxLogLines: 10,             // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: true, // print the time elapsed for each spec
      failFast: false // test would finish with error when a first fail occurs.
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-browserify',
      'karma-spec-reporter',
      'karma-source-map-support'
    ]
  });
};
