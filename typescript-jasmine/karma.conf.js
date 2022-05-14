// test/karma.conf.js
module.exports = config => {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    basePath: '.',
    files: [
      'src/*.ts',
      'tests/*.ts'
    ],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
      '**/*.tsx': 'karma-typescript'
    },
    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
      bundlerOptions: {
        // Because of the way Karma works, Jasmine's focus specs (fdescribe, fit)
        //   will only focus tests for their own file.
        // Use the "entrypoints" property to restrict the test files that are run.
        // entrypoints: /date\.spec\.ts$/
      },
      reports: {
        html: 'coverage',
        'text-summary': ''
      }
    },
    // Use the karma-spec-reporter for results, and include karma-typescript to see the coverage results.
    reporters: ['spec', 'karma-typescript'],
    // Enable the following line to debug Karma problems.
    // logLevel: config.LOG_DEBUG,
    // Create a custom Chrome launcher that removes the sandbox security (which is okay for testing).
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }
    // Enable the following section to hide console.log() output from the browser.
    /*
    browserConsoleLogOptions: {
      level: 'info',
      terminal: false
    }
    */
  })
}