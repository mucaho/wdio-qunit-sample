exports.config = {
    framework: 'qunit',
    //baseUrl: './',

    capabilities: [{
        browserName: 'phantomjs'
    }],
    updateJob: false,
    waitforTimeout: 1000,

    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'screenshots/',

    // =====
    // Hooks
    // =====

    //
    // Gets executed once before all workers get launched.
    onPrepare: function (config, capabilities) {
        //console.log('onPrepare', ...arguments);
    },
    //
    // Gets executed just before initialising the webdriver session and test framework. It allows you
    // to manipulate configurations depending on the capability or spec.
    beforeSession: function (config, capabilities, specs) {
        //console.log('beforeSession', ...arguments);
    },
    //
    // Gets executed before test execution begins. At this point you can access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function (capabilities, specs) {
        //console.log('before', ...arguments);
    },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    beforeHook: function () {
        //console.log('beforeHook', ...arguments);
    },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    afterHook: function () {
        //console.log('afterHook', ...arguments);
    },
    //
    // Hook that gets executed before the suite starts
    beforeSuite: function (suite) {
        //console.log('beforeSuite', suite);
    },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    beforeTest: function (test) {
        //console.log('beforeTest', test);
    },
    //
    // Runs before a WebdriverIO command gets executed.
    beforeCommand: function (commandName, args) {
        //console.log('beforeCommand', ...arguments);
    },
    //
    // Runs after a WebdriverIO command gets executed
    afterCommand: function (commandName, args, result, error) {
        //console.log('afterCommand', ...arguments);
    },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    afterTest: function (test) {
        //console.log('afterTest', test);
    },
    //
    // Hook that gets executed after the suite has ended
    afterSuite: function (suite) {
        //console.log('afterSuite', suite);
    },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    after: function (result, capabilities, specs) {
        //console.log('after', ...arguments);
    },
    //
    // Gets executed right after terminating the webdriver session.
    afterSession: function (config, capabilities, specs) {
        //console.log('afterSession', ...arguments);
    },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete: function (exitCode) {
        //console.log('onComplete', ...arguments);
    }
};
