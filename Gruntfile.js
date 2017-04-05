module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        webdriver: {
            options: {
            },
            sync: {
                configFile: 'wdio.conf.sync.js'
            },
            async: {
                configFile: 'wdio.conf.async.js'
            }
        },
        run: {
            phantomjs: {
                cmd: require('phantomjs-prebuilt').path,
                args: [ '--webdriver=4444' ],
                options: {
                    quiet: true,
                    wait: false,
                    ready: /.*GhostDriver.*running.*/i
                }
            }
        }
    });

    // Load grunt tasks
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-webdriver');

    // Run local tests
    grunt.registerTask('test-local-webdriver', ['run:phantomjs', 'webdriver']);
    grunt.registerTask('test', ['test-local-webdriver']);
};
